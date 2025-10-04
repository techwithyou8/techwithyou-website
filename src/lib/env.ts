/**
 * Environment variable validation and type-safe access
 * Add new environment variables here with validation
 */

interface EnvironmentVariables {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_SITE_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  // Email service configuration
  EMAIL_SERVICE_API_KEY?: string;
  EMAIL_FROM?: string;
  EMAIL_TO?: string;
  // Database configuration (if needed)
  DATABASE_URL?: string;
}

class Environment {
  private env: EnvironmentVariables;

  constructor() {
    this.env = {
      NODE_ENV: (process.env.NODE_ENV || 'development') as EnvironmentVariables['NODE_ENV'],
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
      NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
      EMAIL_SERVICE_API_KEY: process.env.EMAIL_SERVICE_API_KEY,
      EMAIL_FROM: process.env.EMAIL_FROM,
      EMAIL_TO: process.env.EMAIL_TO,
      DATABASE_URL: process.env.DATABASE_URL,
    };

    this.validate();
  }

  private validate() {
    // Required variables in production
    if (this.env.NODE_ENV === 'production') {
      const requiredInProduction: (keyof EnvironmentVariables)[] = [
        'NEXT_PUBLIC_SITE_URL',
      ];

      for (const key of requiredInProduction) {
        if (!this.env[key]) {
          console.warn(`Warning: ${key} is not set in production environment`);
        }
      }
    }
  }

  get nodeEnv() {
    return this.env.NODE_ENV;
  }

  get isProduction() {
    return this.env.NODE_ENV === 'production';
  }

  get isDevelopment() {
    return this.env.NODE_ENV === 'development';
  }

  get siteUrl() {
    return this.env.NEXT_PUBLIC_SITE_URL || 'https://techwithyou.com';
  }

  get googleAnalyticsId() {
    return this.env.NEXT_PUBLIC_GA_ID;
  }

  get emailConfig() {
    return {
      apiKey: this.env.EMAIL_SERVICE_API_KEY,
      from: this.env.EMAIL_FROM || 'info@techwithyou.com',
      to: this.env.EMAIL_TO || 'info@techwithyou.com',
    };
  }

  get databaseUrl() {
    return this.env.DATABASE_URL;
  }
}

export const env = new Environment();
