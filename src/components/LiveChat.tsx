'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hallo! 👋 Welkom bij TechWithYou. Hoe kunnen we je helpen?',
      sender: 'agent',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate agent typing
    setIsTyping(true);
    setTimeout(() => {
      const autoReply = generateAutoReply(inputValue);
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: autoReply,
        sender: 'agent',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAutoReply = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // PRIJZEN & OFFERTES
    if (
      lowerMessage.match(/\b(prijs|prijzen|kosten|tarief|tarief|budget|betaal|betalen|investering|kostenplaatje)\b/) ||
      lowerMessage.includes('hoeveel kost') ||
      lowerMessage.includes('wat kost')
    ) {
      if (lowerMessage.includes('website') || lowerMessage.includes('web')) {
        return 'Goede vraag! 💰 De prijs van een website hangt af van diverse factoren:\n\n• Eenvoudige website: vanaf €2.500\n• Zakelijke website met CMS: €4.500 - €8.000\n• Maatwerk web applicatie: vanaf €10.000\n• Enterprise oplossing: op maat\n\nWil je een exacte prijsopgave? Vertel me wat je nodig hebt, dan kan ik je een indicatie geven! 🎯';
      }
      if (lowerMessage.includes('app') || lowerMessage.includes('mobiel')) {
        return 'App development prijzen! 📱 Hier is een overzicht:\n\n• Simpele app (5-10 schermen): €8.000 - €15.000\n• Gemiddelde app (10-20 schermen): €15.000 - €30.000\n• Complexe app (20+ schermen, API\'s): €30.000 - €60.000+\n• Enterprise app: vanaf €60.000\n\nDit is voor beide iOS én Android. Native of cross-platform mogelijk. Wil je een offerte op maat? 💬';
      }
      if (lowerMessage.includes('onderhoud') || lowerMessage.includes('support')) {
        return 'Onze onderhoudspakketten! 🔧\n\n• Basic (8x5 support): €499/maand\n• Professional (24/7): €999/maand\n• Enterprise (dedicated): op maat\n\nInclusive: security updates, backups, monitoring, support. Welk pakket past bij jou? 🚀';
      }
      return 'Onze prijzen zijn afhankelijk van de scope en complexiteit van je project. 💰\n\nOm je een accurate prijsindicatie te geven, heb ik wat meer info nodig:\n\n• Wat voor project heb je in gedachten?\n• Welke functionaliteiten zijn belangrijk?\n• Heb je al een design?\n\nBel ons gerust voor een vrijblijvend gesprek: +31 6 058 158 📞';
    }

    // WEBSITES & WEB APPLICATIES
    if (
      lowerMessage.match(/\b(website|webshop|webapplicatie|web app|portal|platform|cms|wordpress)\b/) &&
      !lowerMessage.includes('prijs')
    ) {
      if (lowerMessage.includes('wordpress') || lowerMessage.includes('cms')) {
        return 'WordPress & CMS oplossingen! 📝\n\nWe werken met:\n• WordPress (+ custom themes/plugins)\n• Headless CMS (Strapi, Contentful)\n• Custom CMS oplossingen\n\nVoordelen:\n✓ Zelf content beheren\n✓ SEO-vriendelijk\n✓ Uitbreidbaar\n✓ Veilig & snel\n\nWelk type website heb je nodig? 🎨';
      }
      if (lowerMessage.includes('webshop') || lowerMessage.includes('webwinkel') || lowerMessage.includes('verkopen')) {
        return 'E-commerce oplossingen! 🛒\n\nWe bouwen webshops met:\n• Shopify (snel & makkelijk)\n• WooCommerce (WordPress)\n• Custom oplossingen (maatwerk)\n\nFuncties:\n✓ Betalingen (iDeal, PayPal, etc.)\n✓ Voorraad beheer\n✓ Verzendintegraties\n✓ Analytics\n\nHoeveel producten ga je verkopen? 📦';
      }
      if (lowerMessage.includes('seo') || lowerMessage.includes('google') || lowerMessage.includes('vindbaa')) {
        return 'SEO & Vindbaarheid! 🔍\n\nAlle websites die we bouwen zijn SEO-geoptimaliseerd:\n\n✓ Snelle laadtijden\n✓ Mobile-first\n✓ Gestructureerde data\n✓ Meta tags & sitemap\n✓ Google Analytics integratie\n\nWe zorgen dat je goed scoort in Google! Rankings verbeteren duurt 3-6 maanden. 📈';
      }
      return 'We bouwen professionele websites & web applicaties! 💻\n\nOnze specialiteiten:\n• Zakelijke websites met CMS\n• Webshops (Shopify/custom)\n• Web applicaties (SaaS, portals)\n• Progressive Web Apps (PWA)\n\nTechnologieën:\n• React & Next.js\n• TypeScript\n• Node.js backend\n• Cloud hosting\n\nWat voor website heb je in gedachten? Ik help je graag verder! 🚀';
    }

    // MOBIELE APPS
    if (
      lowerMessage.match(/\b(app|mobiel|mobiele app|ios|android|iphone|smartphone)\b/) &&
      !lowerMessage.includes('prijs')
    ) {
      if (lowerMessage.includes('ios') && lowerMessage.includes('android')) {
        return 'Apps voor iOS én Android! 📱\n\nWe hebben 2 opties:\n\n1️⃣ Cross-platform (React Native/Flutter)\n• 1 codebase voor beide platformen\n• Sneller & goedkoper\n• 90% native prestaties\n• Makkelijker onderhoud\n\n2️⃣ Native (Swift + Kotlin)\n• Beste prestaties\n• Alle platform features\n• Optimale UX\n\nVoor de meeste projecten adviseren we cross-platform. Wat heeft jouw voorkeur? 🤔';
      }
      if (lowerMessage.includes('react native') || lowerMessage.includes('flutter')) {
        return 'Cross-platform development! 💪\n\nWe werken met:\n• React Native (onze favoriet)\n• Flutter (snelle apps)\n\nVoordelen:\n✓ 70% sneller ontwikkelen\n✓ 1 team voor beide platformen\n✓ Makkelijker updates\n✓ Lagere kosten\n\nNadelen:\n✗ Iets minder performant dan native\n✗ Niet alle native features direct beschikbaar\n\nGeschikt voor 90% van alle apps! Wat ga je bouwen? 🎯';
      }
      if (lowerMessage.includes('game') || lowerMessage.includes('gaming')) {
        return 'Gaming apps! 🎮\n\nWe ontwikkelen casual games & gamification:\n• Unity/Unreal integratie\n• 2D/3D games\n• Multiplayer functionaliteit\n• In-app purchases\n• Leaderboards\n\nVoor complexe 3D games werken we samen met game studios. Wat voor game heb je in gedachten? 🕹️';
      }
      return 'Mobiele app development! 📱\n\nWe maken apps voor:\n• iOS (iPhone/iPad)\n• Android (smartphones/tablets)\n• Cross-platform (beide tegelijk)\n\nType apps:\n• Business apps (CRM, sales tools)\n• Consumer apps (social, lifestyle)\n• E-commerce apps\n• Booking/reserveringssystemen\n\nGemiddelde ontwikkeltijd: 8-16 weken\nBudget: vanaf €8.000\n\nVertel eens, wat voor app wil je maken? 🚀';
    }

    // E-COMMERCE & WEBSHOPS
    if (
      lowerMessage.match(/\b(webshop|webwinkel|e-commerce|ecommerce|shopify|verkopen|producten|betaling|betalen)\b/)
    ) {
      if (lowerMessage.includes('shopify')) {
        return 'Shopify webshops! 🛍️\n\nShopify is perfect voor:\n✓ Snel online starten\n✓ Schaalbaar (0-1000+ producten)\n✓ Betrouwbare hosting\n✓ Veel apps & integraties\n✓ Veilige betalingen\n\nWij verzorgen:\n• Custom design & development\n• Shopify Plus voor enterprise\n• Custom functionaliteit\n• Migratie vanaf andere platforms\n\nMaandkosten: vanaf €29 + 2% transactiekosten\nSetup kosten: €2.500 - €10.000\n\nHoeveel producten ga je verkopen? 📦';
      }
      if (lowerMessage.includes('betaling') || lowerMessage.includes('ideal') || lowerMessage.includes('paypal')) {
        return 'Betaalmethoden & integraties! 💳\n\nWe integreren alle populaire betaalmethoden:\n\n🇳🇱 Nederland:\n• iDeal\n• PayPal\n• Creditcards\n• Klarna (achteraf betalen)\n• Apple Pay / Google Pay\n\n🌍 Internationaal:\n• Stripe\n• Mollie\n• Adyen\n\nVeilig, PCI-compliant en gebruiksvriendelijk! Welke methoden heb je nodig? 🔒';
      }
      if (lowerMessage.includes('voorraad') || lowerMessage.includes('inventory') || lowerMessage.includes('stock')) {
        return 'Voorraadbeheer systemen! 📊\n\nWe integreren:\n• Real-time voorraadtracking\n• Automatische low-stock alerts\n• Multi-locatie voorraad\n• Barcode scanning\n• Koppeling met ERP systemen\n\nPopulaire koppelingen:\n• Exact Online\n• AFAS\n• Custom systemen via API\n\nHeb je al een voorraadsysteem? 📦';
      }
      return 'E-commerce oplossingen op maat! 🛒\n\nWe bouwen webshops met:\n• Shopify (vanaf €2.500)\n• WooCommerce (vanaf €3.500)\n• Custom oplossingen (vanaf €10.000)\n\nStandaard functies:\n✓ Producten beheer\n✓ Betalingen (iDeal, PayPal, etc.)\n✓ Verzending\n✓ Analytics\n✓ Marketing tools\n\nAdvanced opties:\n✓ B2B functionaliteit\n✓ Multi-language\n✓ ERP integraties\n\nWat is jouw situatie? Ik help je graag verder! 🎯';
    }

    // MAATWERK SOFTWARE & SaaS
    if (
      lowerMessage.match(/\b(maatwerk|saas|crm|erp|dashboard|portal|software|systeem|automatisering|automation)\b/)
    ) {
      if (lowerMessage.includes('crm')) {
        return 'CRM systemen & integraties! 👥\n\nWe bouwen custom CRM oplossingen of integreren bestaande systemen:\n\n📊 Custom CRM:\n• Klantbeheer\n• Sales pipeline\n• Email integratie\n• Rapportages\n• Mobile app\n\n🔗 Integraties:\n• HubSpot\n• Salesforce\n• Pipedrive\n• Microsoft Dynamics\n\nBudget: vanaf €15.000\nDuur: 8-12 weken\n\nHeb je al een CRM of wil je iets nieuws? 💼';
      }
      if (lowerMessage.includes('saas')) {
        return 'SaaS platform ontwikkeling! ☁️\n\nWe bouwen complete SaaS oplossingen:\n\n✓ Multi-tenant architectuur\n✓ Subscription management (Stripe)\n✓ User management & teams\n✓ API voor integraties\n✓ Analytics & dashboards\n✓ White-label mogelijk\n\nTech stack:\n• Next.js frontend\n• Node.js backend\n• PostgreSQL database\n• AWS/Azure hosting\n\nGemiddeld budget: €30.000 - €100.000+\nDuur: 12-24 weken\n\nWat voor SaaS wil je bouwen? 🚀';
      }
      if (lowerMessage.includes('api') || lowerMessage.includes('integratie') || lowerMessage.includes('koppeling')) {
        return 'API ontwikkeling & integraties! 🔌\n\nWe bouwen en koppelen APIs:\n\n🛠️ Custom API development:\n• REST APIs\n• GraphQL\n• Webhooks\n• Real-time (WebSockets)\n\n🔗 Koppelingen met:\n• Accounting (Exact, AFAS, Twinfield)\n• CRM (Salesforce, HubSpot)\n• Email (SendGrid, Mailchimp)\n• Payment (Stripe, Mollie)\n• Verzending (PostNL, DHL)\n\nWelke systemen wil je koppelen? 📡';
      }
      return 'Maatwerk software oplossingen! 💼\n\nWe ontwikkelen custom systemen voor:\n• Bedrijfsprocessen automatiseren\n• Workflow management\n• Data verwerking\n• Rapportage tools\n• Interne portals\n\nVoorbeelden:\n📊 Dashboards & BI tools\n🔄 ERP/CRM systemen\n📝 Document management\n🤖 Automatiseringen\n\nBudget: vanaf €10.000\nDuur: 6-16 weken\n\nWat wil je automatiseren? Ik denk graag met je mee! 🚀';
    }

    // CLOUD & HOSTING
    if (
      lowerMessage.match(/\b(cloud|hosting|server|aws|azure|deployment|devops|infrastructure)\b/)
    ) {
      if (lowerMessage.includes('aws') || lowerMessage.includes('amazon')) {
        return 'AWS Cloud oplossingen! ☁️\n\nWe zijn AWS experts en helpen met:\n\n⚙️ Services:\n• EC2, Lambda (serverless)\n• RDS, DynamoDB (databases)\n• S3 (storage)\n• CloudFront (CDN)\n• Cognito (authentication)\n\n🚀 Voordelen:\n✓ Schaalbaar (auto-scaling)\n✓ Pay-per-use pricing\n✓ 99.99% uptime\n✓ Global infrastructure\n\nWe verzorgen de complete setup + monitoring! Wat ga je hosten? 🌐';
      }
      if (lowerMessage.includes('azure') || lowerMessage.includes('microsoft')) {
        return 'Microsoft Azure cloud! ☁️\n\nPerfect voor bedrijven met Microsoft stack:\n\n⚙️ Services:\n• App Service (web hosting)\n• SQL Database\n• Azure Functions (serverless)\n• Blob Storage\n• Active Directory integratie\n\n✓ Naadloze Office 365 integratie\n✓ Hybride cloud mogelijk\n✓ Compliance & security\n\nBruiken jullie al Microsoft producten? 💼';
      }
      return 'Cloud hosting & infrastructuur! ☁️\n\nWe werken met:\n• AWS (Amazon)\n• Microsoft Azure\n• Google Cloud Platform\n• DigitalOcean\n• Vercel (Next.js)\n\nWe verzorgen:\n✓ Cloud migratie\n✓ DevOps & CI/CD pipelines\n✓ Auto-scaling setup\n✓ Security & monitoring\n✓ Cost optimization\n\nMaandelijkse kosten: vanaf €50\nSetup: €2.500 - €10.000\n\nWat voor applicatie ga je hosten? 🚀';
    }

    // ONDERHOUD & SUPPORT
    if (
      lowerMessage.match(/\b(onderhoud|maintenance|support|update|updates|security|beveiliging|backup)\b/)
    ) {
      if (lowerMessage.includes('backup')) {
        return 'Backup & disaster recovery! 💾\n\nOnze backup service:\n\n📅 Frequentie:\n• Dagelijks automatisch\n• Real-time voor kritieke data\n• Wekelijkse off-site backup\n\n🔄 Recovery:\n• Point-in-time restore\n• 1-4 uur recovery time\n• Quarterly restore tests\n\n💰 Kosten:\n• Basic: inbegrepen in hosting\n• Premium: +€149/maand\n• Enterprise: custom\n\nZit dit in je huidige hosting? 🔒';
      }
      if (lowerMessage.includes('hack') || lowerMessage.includes('beveilig') || lowerMessage.includes('security')) {
        return 'Security & beveiliging! 🔐\n\nWe nemen security serieus:\n\n✓ SSL certificaten (gratis)\n✓ Firewall & DDoS protectie\n✓ Regular security audits\n✓ Dependency updates\n✓ Penetration testing\n✓ 2FA authentication\n✓ Backup & disaster recovery\n\n🛡️ Compliance:\n• AVG/GDPR compliant\n• ISO 27001 procedures\n• PCI-DSS voor webshops\n\nBezorgd over een specifiek security aspect? 🔒';
      }
      return 'Onderhoud & support pakketten! 🔧\n\n📦 Basic (€499/mnd):\n• 8x5 support\n• Security updates\n• Monthly backups\n• Basic monitoring\n\n📦 Professional (€999/mnd) - POPULAIRST:\n• 24/7 support\n• Daily backups\n• Advanced monitoring\n• Performance optimization\n• Phone support\n\n📦 Enterprise (custom):\n• Dedicated support engineer\n• Custom SLA\n• On-site support mogelijk\n\nAlle pakketten:\n✓ Updates binnen 24u\n✓ Security patches direct\n✓ Maandelijkse rapportage\n\nWelk pakket past bij jou? 🎯';
    }

    // TECHNOLOGIE & DEVELOPMENT
    if (
      lowerMessage.match(/\b(react|next\.?js|typescript|node|python|tech stack|technologie|framework)\b/)
    ) {
      return 'Onze tech stack & expertise! 💻\n\n🎨 Frontend:\n• React & Next.js ⭐ (onze favoriet)\n• TypeScript\n• Tailwind CSS\n• React Native (mobile)\n\n⚙️ Backend:\n• Node.js & Express\n• Python (FastAPI, Django)\n• PostgreSQL, MongoDB\n• REST & GraphQL APIs\n\n☁️ Infrastructure:\n• AWS & Azure\n• Docker & Kubernetes\n• CI/CD pipelines\n• Vercel hosting\n\n📊 Tools:\n• Git & GitHub\n• Figma (design)\n• Jest (testing)\n• Sentry (error tracking)\n\nWe kiezen altijd de beste tech voor jouw project! 🚀';
    }

    // PROJECTEN & PORTFOLIO
    if (
      lowerMessage.match(/\b(portfolio|projecten|werk|referenties|voorbeelden|ervaring|cases)\b/)
    ) {
      return 'Onze portfolio & ervaring! 🎨\n\nWe hebben 50+ succesvolle projecten afgerond:\n\n🏢 Branches:\n• E-commerce & retail\n• Healthcare & zorg\n• Fintech & banking\n• Real estate\n• Education\n• SaaS startups\n\n💼 Voorbeelden:\n• Enterprise CRM systeem (€80k)\n• E-commerce platform (1M+ orders/jaar)\n• Healthcare portal (50k gebruikers)\n• Booking platform voor vakanties\n\nBekijk onze portfolio pagina voor screenshots en case studies! Welke branche is relevant voor jou? 🎯';
    }

    // TIJDLIJNEN & PROCES
    if (
      lowerMessage.match(/\b(tijdsduur|tijdlijn|hoe lang|duur|wanneer|planning|proces|aanpak)\b/)
    ) {
      if (lowerMessage.includes('proces') || lowerMessage.includes('aanpak')) {
        return 'Ons ontwikkelproces! 📋\n\n1️⃣ Discovery (1 week)\n• Kennismaking\n• Requirements verzamelen\n• Offerte & planning\n\n2️⃣ Design (2-3 weken)\n• UX/UI design in Figma\n• Feedback rondes\n• Final approval\n\n3️⃣ Development (4-12 weken)\n• Sprint-based development\n• Wekelijkse updates\n• Testing & QA\n\n4️⃣ Launch (1 week)\n• Deployment\n• Training\n• Go-live!\n\n5️⃣ Support (doorlopend)\n• Bug fixes\n• Updates\n• Onderhoud\n\nTransparant, voorspelbaar, en altijd in contact! 🚀';
      }
      return 'Ontwikkeltijd per projecttype! ⏱️\n\n🌐 Websites:\n• Simpele website: 2-4 weken\n• Zakelijke website: 4-8 weken\n• Complex platform: 8-16 weken\n\n📱 Apps:\n• MVP: 6-10 weken\n• Volledige app: 12-20 weken\n• Enterprise app: 20-30 weken\n\n🛒 E-commerce:\n• Shopify setup: 3-6 weken\n• Custom webshop: 8-12 weken\n\n💼 Maatwerk:\n• Klein systeem: 4-8 weken\n• Gemiddeld: 10-16 weken\n• Groot project: 16-30 weken\n\nWe werken in 2-week sprints met regelmatige demos. Wat voor project heb je? 📅';
    }

    // CONTACT & AFSPRAKEN
    if (
      lowerMessage.match(/\b(contact|bellen|afspraak|gesprek|meeting|demo|telefonisch|mail|email)\b/)
    ) {
      if (lowerMessage.includes('afspraak') || lowerMessage.includes('meeting') || lowerMessage.includes('demo')) {
        return 'Een afspraak inplannen! 📅\n\nGraag! We kunnen:\n\n☎️ Telefonisch gesprek (15-30 min)\n• Kennismaking\n• Je project bespreken\n• Quick scan mogelijkheden\n\n💻 Videocall + demo (45-60 min)\n• Scherm delen\n• Voorbeelden laten zien\n• Technical deep-dive\n\n🤝 Op locatie (na intake)\n• Bij jou op kantoor\n• Of bij ons in Amsterdam\n\nBel direct: +31 6 058 158\nOf mail: info@techwithyou.nl\n\nWanneer komt het jou uit? 🗓️';
      }
      return 'Contact opnemen! 📞\n\nJe kunt ons op meerdere manieren bereiken:\n\n☎️ Telefoon: +31 6 058 158\n• Ma-vr 9:00 - 18:00\n• Meestal binnen 1 minuut opgenomen\n\n📧 Email: info@techwithyou.nl\n• Response binnen 4 uur (werkdagen)\n\n💬 WhatsApp: +31 6 058 158\n• Klik op de WhatsApp knop op onze contactpagina\n\n📍 Kantoor: Amsterdam\n• Op afspraak\n\nWat is jouw voorkeur? Ik kan ook een specialist voor je laten terugbellen! 📲';
    }

    // TEAM & BEDRIJF
    if (
      lowerMessage.match(/\b(team|developers|wie|over jullie|bedrijf|ervaring|mensen|personen)\b/)
    ) {
      return 'Over TechWithYou! 👥\n\n🚀 Wij zijn een development team gespecialiseerd in:\n• Web applicaties (React/Next.js)\n• Mobiele apps (iOS/Android)\n• Cloud infrastructure (AWS/Azure)\n\n👨‍💻 Ons team:\n• 8 developers (full-stack, frontend, backend)\n• 2 designers (UX/UI)\n• 1 project manager\n• 1 DevOps engineer\n\n📍 Locatie: Amsterdam\n⏰ Sinds: 2019\n✅ Projecten: 50+ succesvol afgerond\n⭐ Rating: 4.9/5 (gemiddeld)\n\n💡 Onze aanpak:\n• Transparante communicatie\n• Agile/Scrum werkwijze\n• Fixed price of time & materials\n• Wekelijkse updates\n\nVragen over het team? 🎯';
    }

    // VEELVOORKOMENDE PROBLEMEN
    if (
      lowerMessage.match(/\b(probleem|issue|bug|fout|werkt niet|error|kapot|crashed|storing)\b/)
    ) {
      return 'Een probleem met je applicatie? 🔧\n\nIk help je graag!\n\n1️⃣ Zijn jullie klant?\n• Ja → Bel ons direct: +31 6 058 158 (prioriteit!)\n• Nee → Beschrijf het probleem, misschien kunnen we quick win advies geven\n\n2️⃣ Type problemen we vaak oplossen:\n• Performance issues (trage app/website)\n• Security problemen\n• Bugs na updates\n• Integraties die niet werken\n• Hosting/server issues\n• Mobile app crashes\n\n3️⃣ Emergency?\n• 24/7 hotline voor Professional+ klanten\n• Response time: <30 minuten\n\nWat voor probleem heb je precies? 🚨';
    }

    // MIGRATIE & REDESIGN
    if (
      lowerMessage.match(/\b(migratie|migreren|overstappen|verhuizen|redesign|vernieuwen|update|upgrade)\b/)
    ) {
      return 'Migratie & redesign services! 🔄\n\nWe helpen met:\n\n📦 Platform migratie:\n• Van WordPress naar headless CMS\n• Van oude webshop naar Shopify\n• Van monoliet naar microservices\n• Van on-premise naar cloud\n\n🎨 Redesign & modernisering:\n• Oude website opfrissen\n• Mobile-responsive maken\n• Performance verbeteren\n• Tech stack upgraden\n\n✅ Onze aanpak:\n• Geen downtime tijdens migratie\n• Data integriteit gegarandeerd\n• SEO rankings behouden\n• Testing & rollback plan\n\nBudget: €3.500 - €15.000\nDuur: 4-8 weken\n\nWat wil je migreren/vernieuwen? 🚀';
    }

    // STARTUPS & MVP
    if (
      lowerMessage.match(/\b(startup|mvp|minimum viable|begin|starten|idee|prototype)\b/)
    ) {
      return 'Startup & MVP development! 🚀\n\nPerfect voor startups die snel willen valideren!\n\n💡 MVP aanpak:\n• Focus op core features\n• 4-8 weken development\n• Budget: €8.000 - €20.000\n• Launch ready product\n\n✨ Wat we leveren:\n✓ Web/mobile app\n✓ User authentication\n✓ Database & API\n✓ Admin dashboard\n✓ Analytics integratie\n✓ Cloud hosting setup\n\n🎯 Daarna:\n• Itereren op basis van feedback\n• Schalen bij groei\n• Extra features toevoegen\n\n💰 Startup-vriendelijk:\n• Flexibele betalingen\n• Equity partnerships mogelijk\n• Advies over funding\n\nVertel eens over je idee! 💪';
    }

    // DESIGN & UX
    if (
      lowerMessage.match(/\b(design|ux|ui|figma|logo|huisstijl|branding|look and feel)\b/)
    ) {
      if (lowerMessage.includes('logo') || lowerMessage.includes('branding') || lowerMessage.includes('huisstijl')) {
        return 'Branding & huisstijl! 🎨\n\nWe verzorgen complete branding:\n\n🎨 Wat we maken:\n• Logo design\n• Kleurenpalet\n• Typography\n• Brand guidelines\n• Business cards\n• Social media templates\n\nBudget: €2.500 - €8.000\nDuur: 3-5 weken\n\nWe werken samen met gespecialiseerde design partners voor branding. Voor digital design (websites/apps) hebben we in-house designers! 💼';
      }
      return 'UX/UI Design services! 🎨\n\nProfessioneel design is cruciaal!\n\n🎯 Onze design aanpak:\n\n1️⃣ Research & strategie\n• User personas\n• Competitor analysis\n• User flows\n\n2️⃣ Wireframes\n• Low-fidelity prototypes\n• Information architecture\n• Quick iterations\n\n3️⃣ UI Design (Figma)\n• High-fidelity designs\n• Interactieve prototypes\n• Design system\n\n4️⃣ Developer handoff\n• Gedetailleerde specs\n• Assets export\n• Nauwkeurige implementatie\n\n✨ Ons design:\n✓ Modern & clean\n✓ Mobile-first\n✓ Accessible (WCAG)\n✓ On-brand\n\nBudget: €2.500 - €10.000\nDuur: 2-4 weken\n\nHeb je al een design of starten we vanaf nul? 🚀';
    }

    // BETALINGEN & CONTRACTEN
    if (
      lowerMessage.match(/\b(betaling|betalen|factuur|contract|voorwaarden|termijnen|aanbetaling)\b/)
    ) {
      return 'Betalingen & contracten! 💳\n\n💰 Betalingsvoorwaarden:\n\n📅 Standaard opzet:\n• 30% bij opdracht (aanbetaling)\n• 40% bij design approval\n• 30% bij oplevering\n\nOf:\n• 50% vooraf\n• 50% bij oplevering\n\n🤝 Contract:\n• Heldere project scope\n• Fixed price of T&M\n• Duidelijke milestones\n• IP rechten overdracht\n• Support voorwaarden\n\n📄 Facturering:\n• 14 dagen betalingstermijn\n• BTW verlegd bij zakelijk (NL)\n• iDeal, bank transfer, creditcard\n\n⚠️ Change requests:\n• Kleine aanpassingen: gratis\n• Grotere wijzigingen: €85/uur\n• Altijd vooraf besproken\n\nVragen over de business kant? 💼';
    }

    // TRAINING & DOCUMENTATIE
    if (
      lowerMessage.match(/\b(training|documentatie|handleiding|instructie|leren|uitleg|workshop)\b/)
    ) {
      return 'Training & documentatie! 📚\n\nWe zorgen dat je team het systeem begrijpt!\n\n📖 Wat we leveren:\n\n✓ Gebruikers documentatie\n• Stap-voor-stap handleidingen\n• Video tutorials\n• FAQ sectie\n• Admin handleiding\n\n✓ Technische documentatie\n• API documentatie\n• Code comments\n• Architecture diagrams\n• Deployment guides\n\n👨‍🏫 Training sessies:\n• 2-4 uur hands-on training\n• Op locatie of online\n• Opgenomen voor later\n• Q&A sessie\n\n🔄 Terugkomdag:\n• 2 weken na launch\n• Extra vragen beantwoorden\n• Fine-tuning\n\nTraining is standaard included! 🎓';
    }

    // GARANTIE & WARRANTY
    if (
      lowerMessage.match(/\b(garantie|warranty|bug fix|bugfix|nabije|nazorg|gratis)\b/)
    ) {
      return 'Garantie & nazorg! ✅\n\n🛡️ Onze garantie:\n\n📅 30 dagen gratis support\n• Bug fixes\n• Kleine aanpassingen\n• Technische vragen\n• Geen extra kosten\n\n📅 90 dagen bug garantie\n• Alle bugs worden gratis opgelost\n• Mits geen externe factoren\n• Response binnen 48u\n\n🔧 Daarna:\n• Bug fixes: €85/uur\n• Of maintenance pakket\n• Support tickets\n\n💼 Onderhoudspakketten:\n• Vanaf €499/maand\n• Inclusief updates & support\n• Peace of mind\n\n✨ We staan achter ons werk!\n• 50+ tevreden klanten\n• 4.9/5 rating\n• Referenties beschikbaar\n\nVragen over garanties? 🎯';
    }

    // ALGEMENE BEGROETING
    if (
      lowerMessage.match(/\b(hoi|hallo|hey|hi|goedemorgen|goedemiddag|goedenavond)\b/)
    ) {
      const hour = new Date().getHours();
      let greeting = 'Hallo';
      if (hour < 12) greeting = 'Goedemorgen';
      else if (hour < 18) greeting = 'Goedemiddag';
      else greeting = 'Goedenavond';

      return `${greeting}! 👋 Leuk dat je contact opneemt met TechWithYou!\n\nIk ben je AI assistent en help je graag met:\n\n💻 Web development vragen\n📱 Mobiele app ontwikkeling\n🛒 E-commerce oplossingen\n☁️ Cloud & hosting\n🔧 Onderhoud & support\n💰 Prijzen & offertes\n\nWaar kan ik je mee helpen? Of wil je liever direct met een specialist spreken? 📞`;
    }

    // AFSCHEID
    if (
      lowerMessage.match(/\b(bedankt|thanks|dankje|dank je|dank|top|perfect|doei|dag|bye)\b/)
    ) {
      return 'Graag gedaan! 😊\n\nFijn dat ik kon helpen. Nog vragen? Stel ze gerust!\n\nOf neem direct contact op:\n📞 +31 6 058 158\n📧 info@techwithyou.nl\n\nSucces met je project! 🚀\n\nTot snel! 👋';
    }

    // JA/NEE ANTWOORDEN
    if (lowerMessage.match(/^(ja|yes|nee|no|ok|oke|oké)$/)) {
      return 'Ik begrijp het! 👍\n\nKun je me wat meer vertellen? Dan kan ik je beter helpen.\n\nOf wil je liever direct iemand spreken?\n📞 Bel ons: +31 6 058 158 (meestal binnen 1 minuut opgenomen!)\n\nWaar kan ik je mee helpen? 😊';
    }

    // FALLBACK - Intelligente suggesties
    return `Bedankt voor je bericht! 💬\n\nIk ben een AI assistent, maar voor deze specifieke vraag wil ik je graag doorverbinden met een specialist.\n\n📞 Bel direct: +31 6 058 158\n📧 Email: info@techwithyou.nl\n💬 WhatsApp: Via contactpagina\n\nOf stel me een andere vraag over:\n• Prijzen & offertes 💰\n• Website/app development 💻\n• Onderhoud & support 🔧\n• Project tijdlijnen ⏱️\n• Technologie & aanpak 🚀\n\nWat wil je weten? 🤔`;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full shadow-2xl hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300 group"
        aria-label="Open live chat"
      >
        <MessageCircle className="text-white" size={28} />
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
          1
        </span>
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl transition-all duration-300 ${
        isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
      } flex flex-col`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <MessageCircle className="text-white" size={20} />
          </div>
          <div>
            <h3 className="text-white font-semibold">TechWithYou Support</h3>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-xs">Online</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}
          >
            {isMinimized ? (
              <Maximize2 className="text-white" size={18} />
            ) : (
              <Minimize2 className="text-white" size={18} />
            )}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <X className="text-white" size={20} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-950">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <span
                    className={`text-xs mt-1 block ${
                      message.sender === 'user' ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 border border-gray-200 dark:border-gray-700">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce-delay-1" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce-delay-2" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce-delay-3" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 rounded-b-2xl">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Typ je bericht..."
                className="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === ''}
                className="px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              We reageren meestal binnen enkele minuten
            </p>
          </div>
        </>
      )}
    </div>
  );
}
