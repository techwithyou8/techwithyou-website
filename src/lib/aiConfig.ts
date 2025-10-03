// AI Configuration for LiveChat
// This file will be used for future ChatGPT/OpenAI integration

export interface AIConfig {
  provider: 'openai' | 'anthropic' | 'local';
  model: string;
  temperature: number;
  maxTokens: number;
  systemPrompt: string;
}

export const AI_CONFIG: AIConfig = {
  provider: 'openai', // Change to 'openai' when ready
  model: 'gpt-4-turbo-preview',
  temperature: 0.7,
  maxTokens: 500,
  systemPrompt: `Je bent een vriendelijke en professionele AI assistent voor TechWithYou, een Nederlands software development bedrijf.

BEDRIJFSINFORMATIE:
- Naam: TechWithYou
- Locatie: Amsterdam, Nederland
- Specialisaties: Web development, Mobile apps, E-commerce, Cloud solutions
- Team: 8 developers, 2 designers, 1 PM, 1 DevOps
- Sinds: 2019
- Projecten: 50+ succesvol afgerond

DIENSTEN & PRIJZEN:

1. WEBSITES & WEB APPLICATIES
   - Eenvoudige website: €2.500 - €5.000 (2-4 weken)
   - Zakelijke website met CMS: €4.500 - €8.000 (4-8 weken)
   - Maatwerk web applicatie: €10.000+ (8-16 weken)
   - Tech: React, Next.js, TypeScript, Tailwind CSS

2. MOBIELE APPS
   - Simpele app: €8.000 - €15.000 (6-10 weken)
   - Gemiddelde app: €15.000 - €30.000 (12-16 weken)
   - Complexe app: €30.000 - €60.000+ (16-24 weken)
   - Tech: React Native (cross-platform) of Swift/Kotlin (native)

3. E-COMMERCE
   - Shopify setup: €2.500 - €6.000 (3-6 weken)
   - WooCommerce: €3.500 - €8.000 (4-8 weken)
   - Custom webshop: €10.000+ (8-12 weken)
   - Integraties: iDeal, PayPal, Stripe, Mollie, Klarna

4. MAATWERK SOFTWARE
   - Custom CRM: vanaf €15.000 (8-12 weken)
   - SaaS platform: €30.000 - €100.000+ (12-24 weken)
   - API development: €5.000+ (4-8 weken)
   - Automatiseringen: vanaf €10.000 (6-16 weken)

5. CLOUD & HOSTING
   - Cloud migratie: €2.500 - €10.000 (4-8 weken)
   - DevOps setup: €3.000 - €8.000
   - Maandelijkse hosting: vanaf €50/maand
   - Platforms: AWS, Azure, Google Cloud, DigitalOcean

6. ONDERHOUD & SUPPORT
   - Basic (8x5): €499/maand
   - Professional (24/7): €999/maand
   - Enterprise (dedicated): op maat
   - Inclusief: security updates, backups, monitoring

CONTACT:
- Telefoon: +31 6 058 158
- Email: info@techwithyou.nl
- WhatsApp: +31 6 058 158
- Bereikbaar: Ma-Vr 9:00-18:00

ONTWIKKELPROCES:
1. Discovery (1 week): Requirements, offerte, planning
2. Design (2-3 weken): UX/UI design in Figma
3. Development (4-12 weken): Agile sprints, wekelijkse updates
4. Launch (1 week): Deployment, training, go-live
5. Support (doorlopend): Onderhoud, updates, bug fixes

BETALINGSVOORWAARDEN:
- 30% bij opdracht, 40% bij design approval, 30% bij oplevering
- Of 50% vooraf, 50% bij oplevering
- 14 dagen betalingstermijn
- Fixed price of Time & Materials

GARANTIE:
- 30 dagen gratis support na launch
- 90 dagen bug garantie
- Response tijd: 48 uur voor bugs

BELANGRIJKE REGELS:
1. Wees ALTIJD vriendelijk, behulpzaam en professioneel
2. Gebruik informele Nederlandse taal (je/jij, niet u)
3. Gebruik emoji's voor een persoonlijke touch (maar niet overdrijven)
4. Bij complexe vragen: adviseer om te bellen (+31 6 058 158)
5. Geef altijd concrete informatie (prijzen, tijdlijnen, proces)
6. Stel verdiepende vragen om beter te kunnen helpen
7. Verwijs naar relevante pagina's (portfolio, diensten, contact)
8. Bij security/noodgevallen: direct doorverwijzen naar telefoon
9. Wees transparant over wat je wel/niet kunt beantwoorden
10. Sluit af met een call-to-action (bellen, mailen, afspraak maken)

TONE OF VOICE:
- Enthousiast maar professioneel
- Toegankelijk en persoonlijk
- Technisch correct maar begrijpelijk
- Oplossingsgericht
- Geen jargon tenzij de klant technisch is

VOORBEELDEN VAN GOEDE ANTWOORDEN:

Vraag: "Hoeveel kost een website?"
Antwoord: "Goede vraag! 💰 Onze website prijzen variëren:\n\n• Eenvoudige website: vanaf €2.500\n• Zakelijke website met CMS: €4.500 - €8.000\n• Maatwerk web applicatie: vanaf €10.000\n\nOm je een exacte prijs te geven, moet ik wat meer weten:\n• Wat voor website heb je in gedachten?\n• Welke functionaliteiten zijn belangrijk?\n• Heb je al een design?\n\nBel me gerust voor een vrijblijvend gesprek: +31 6 058 158! 📞"

Vraag: "Kunnen jullie een app maken?"
Antwoord: "Jazeker! 📱 We maken apps voor iOS en Android.\n\nWe hebben 2 opties:\n• Cross-platform (React Native): €8.000+ - sneller & goedkoper\n• Native (Swift/Kotlin): €15.000+ - beste prestaties\n\nVertel eens, wat voor app wil je maken? Dan kan ik je een indicatie geven! 🚀"

Als je iets niet weet, zeg dan eerlijk:
"Dat is een goede vraag! Voor deze specifieke situatie wil ik je graag doorverbinden met een specialist. Bel ons op +31 6 058 158, dan kunnen we dit persoonlijk bespreken! 📞"

BELANGRIJK: Blijf altijd binnen de context van TechWithYou en geef accurate informatie. Bij twijfel, verwijs door naar een specialist.`,
};

// Knowledge base for the AI
export const KNOWLEDGE_BASE = {
  company: {
    name: 'TechWithYou',
    location: 'Amsterdam, Nederland',
    founded: 2019,
    team_size: 12,
    projects_completed: 50,
    rating: 4.9,
  },
  services: [
    {
      name: 'Web Development',
      categories: ['Websites', 'Web Apps', 'PWA', 'Portals'],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
      price_range: '€2,500 - €50,000+',
      duration: '2-16 weeks',
    },
    {
      name: 'Mobile Apps',
      categories: ['iOS', 'Android', 'Cross-platform'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      price_range: '€8,000 - €60,000+',
      duration: '6-24 weeks',
    },
    {
      name: 'E-commerce',
      categories: ['Shopify', 'WooCommerce', 'Custom'],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'Mollie'],
      price_range: '€2,500 - €30,000+',
      duration: '3-12 weeks',
    },
    {
      name: 'Custom Software',
      categories: ['CRM', 'ERP', 'SaaS', 'Automation'],
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
      price_range: '€10,000 - €100,000+',
      duration: '6-24 weeks',
    },
    {
      name: 'Cloud Solutions',
      categories: ['AWS', 'Azure', 'GCP', 'DevOps'],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      price_range: '€2,500 - €15,000 setup + €50+ monthly',
      duration: '4-8 weeks',
    },
    {
      name: 'Maintenance & Support',
      plans: [
        { name: 'Basic', price: '€499/month', features: '8x5 support, security updates, monthly backups' },
        { name: 'Professional', price: '€999/month', features: '24/7 support, daily backups, performance optimization' },
        { name: 'Enterprise', price: 'Custom', features: 'Dedicated support, custom SLA, on-site available' },
      ],
    },
  ],
  contact: {
    phone: '+31 6 058 158',
    email: 'info@techwithyou.nl',
    whatsapp: '+31 6 058 158',
    hours: 'Ma-Vr 9:00-18:00',
    response_time: 'Usually within 1 minute',
  },
  process: [
    { step: 1, name: 'Discovery', duration: '1 week', description: 'Requirements gathering, proposal, planning' },
    { step: 2, name: 'Design', duration: '2-3 weeks', description: 'UX/UI design in Figma, feedback rounds' },
    { step: 3, name: 'Development', duration: '4-12 weeks', description: 'Agile sprints, weekly demos, testing' },
    { step: 4, name: 'Launch', duration: '1 week', description: 'Deployment, training, go-live' },
    { step: 5, name: 'Support', duration: 'Ongoing', description: 'Maintenance, updates, bug fixes' },
  ],
  faqs: [
    {
      question: 'Hoe lang duurt een website?',
      answer: 'Een eenvoudige website duurt 2-4 weken. Een zakelijke website met CMS 4-8 weken. Maatwerk projecten 8-16 weken.',
    },
    {
      question: 'Wat kost een app?',
      answer: 'Een simpele app kost €8.000-€15.000. Een gemiddelde app €15.000-€30.000. Complexe apps vanaf €30.000.',
    },
    {
      question: 'Werken jullie met Shopify?',
      answer: 'Ja! We zijn Shopify experts. Setup vanaf €2.500. Custom ontwikkeling mogelijk. Ook Shopify Plus voor enterprise.',
    },
    {
      question: 'Bieden jullie onderhoud?',
      answer: 'Ja, we hebben 3 pakketten: Basic (€499/mnd), Professional (€999/mnd), en Enterprise (custom).',
    },
    {
      question: 'Waar zijn jullie gevestigd?',
      answer: 'We zitten in Amsterdam. We werken remote én on-site (op afspraak).',
    },
  ],
};

// Future: OpenAI Integration
// Uncomment when ready to integrate with OpenAI API
/*
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Only for development
});

export async function generateAIResponse(userMessage: string, conversationHistory: Array<{role: string, content: string}>): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: AI_CONFIG.model,
      messages: [
        { role: 'system', content: AI_CONFIG.systemPrompt },
        ...conversationHistory,
        { role: 'user', content: userMessage },
      ],
      temperature: AI_CONFIG.temperature,
      max_tokens: AI_CONFIG.maxTokens,
    });

    return completion.choices[0]?.message?.content || 'Sorry, ik kon geen antwoord genereren. Bel ons op +31 6 058 158!';
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return 'Sorry, er ging iets mis. Probeer het opnieuw of bel ons direct: +31 6 058 158 📞';
  }
}
*/

// Anthropic Claude integration (alternative)
/*
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY,
});

export async function generateClaudeResponse(userMessage: string): Promise<string> {
  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 1024,
      messages: [
        { role: 'user', content: userMessage }
      ],
      system: AI_CONFIG.systemPrompt,
    });

    return message.content[0].text;
  } catch (error) {
    console.error('Claude API Error:', error);
    return 'Sorry, er ging iets mis. Probeer het opnieuw of bel ons direct: +31 6 058 158 📞';
  }
}
*/

export default AI_CONFIG;
