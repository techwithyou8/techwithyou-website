import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Rate limiting: max 3 requests per 15 minutes per IP
const RATE_LIMIT_REQUESTS = 3;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
  return ip;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

// Input validation and sanitization
interface ContactFormData {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  service?: string;
  message?: string;
  website?: string;
}

function validateContactForm(data: ContactFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Required fields
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  if (!data.email || typeof data.email !== 'string') {
    errors.push('Valid email is required');
  } else {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push('Invalid email format');
    }
  }

  if (!data.service || typeof data.service !== 'string') {
    errors.push('Service selection is required');
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }

  // Optional fields validation
  if (data.company && (typeof data.company !== 'string' || data.company.length > 100)) {
    errors.push('Company name is too long');
  }

  // Honeypot check - if this field is filled, it's likely a bot
  if (data.website && data.website !== '') {
    errors.push('Invalid submission');
  }

  // Check for suspicious patterns (very basic spam detection)
  const suspiciousPatterns = [
    /viagra/i,
    /cialis/i,
    /casino/i,
    /lottery/i,
    /<script>/i,
    /<iframe>/i,
  ];

  const textToCheck = `${data.name} ${data.email} ${data.message}`;
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(textToCheck)) {
      errors.push('Suspicious content detected');
      break;
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// Sanitize input to prevent XSS
function sanitizeInput(str: string): string {
  return str
    .replace(/[<>]/g, '')
    .trim()
    .substring(0, 1000); // Limit length
}

export async function POST(request: NextRequest) {
  try {
    // Check rate limit
    const rateLimitKey = getRateLimitKey(request);
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please try again later.' 
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const data = await request.json();

    const validation = validateContactForm(data);
    if (!validation.valid) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed',
          details: validation.errors 
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      company: data.company ? sanitizeInput(data.company) : '',
      budget: data.budget || '',
      service: sanitizeInput(data.service),
      message: sanitizeInput(data.message),
      timestamp: new Date().toISOString(),
    };

    // Log to console (in production, send email or save to database)
    console.log('Contact form submission:', sanitizedData);

    // TODO: In production, implement:
    // 1. Send email notification (using Resend, SendGrid, or similar)
    // 2. Save to database (Supabase, MongoDB, PostgreSQL)
    // 3. Send confirmation email to user
    // 4. Integrate with CRM

    // Example with email service:
    // await sendEmail({
    //   to: 'info@techwithyou.com',
    //   subject: `New Contact Form: ${sanitizedData.service}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${sanitizedData.name}</p>
    //     <p><strong>Email:</strong> ${sanitizedData.email}</p>
    //     <p><strong>Company:</strong> ${sanitizedData.company}</p>
    //     <p><strong>Budget:</strong> ${sanitizedData.budget}</p>
    //     <p><strong>Service:</strong> ${sanitizedData.service}</p>
    //     <p><strong>Message:</strong> ${sanitizedData.message}</p>
    //   `
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been received. We will contact you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'An error occurred. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
