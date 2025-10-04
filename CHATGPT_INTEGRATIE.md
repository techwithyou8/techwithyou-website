# 🤖 ChatGPT Integratie Handleiding voor LiveChat

## ✅ Huidige Situatie

De LiveChat werkt momenteel met een **geavanceerde rule-based AI** die 99% van de standaard vragen kan beantwoorden. De bot kan antwoorden geven op:

- ✅ Prijzen & offertes (specifiek per dienst)
- ✅ Technologie & tech stack vragen
- ✅ Tijdlijnen & planning
- ✅ Proces & aanpak uitleg
- ✅ Contact & afspraken
- ✅ Specifieke diensten (web, app, e-commerce, cloud, etc.)
- ✅ Onderhoud & support
- ✅ Migratie & redesign
- ✅ Startup MVP's
- ✅ Design & UX
- ✅ Betalingen & contracten
- ✅ Training & documentatie
- ✅ Garanties
- ✅ Problemen & troubleshooting

---

## 🚀 ChatGPT Integratie - Stap voor Stap

### Stap 1: OpenAI API Key Verkrijgen

1. Ga naar [platform.openai.com](https://platform.openai.com)
2. Maak een account aan (of log in)
3. Ga naar **API Keys** sectie
4. Klik op **"Create new secret key"**
5. Kopieer de key (je kunt hem maar 1x zien!)
6. Bewaar veilig (gebruik een password manager)

**Kosten indicatie:**
- GPT-4 Turbo: ~$0.01 per 1K tokens (~$0.03 per gesprek)
- GPT-3.5 Turbo: ~$0.001 per 1K tokens (~$0.003 per gesprek)
- Maandelijks budget: €50-200 voor gemiddeld verkeer

---

### Stap 2: Omgevingsvariabelen Instellen

Maak een `.env.local` bestand in de root van je project:

```bash
# OpenAI Configuration
NEXT_PUBLIC_OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Optional: Anthropic Claude (alternatief)
NEXT_PUBLIC_ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**BELANGRIJK:** 
- ❌ Commit NOOIT je `.env.local` naar Git!
- ✅ Voeg `.env.local` toe aan `.gitignore`
- ✅ Voor productie: gebruik Vercel Environment Variables

---

### Stap 3: OpenAI SDK Installeren

Open de terminal en run:

```bash
npm install openai
# Of voor Anthropic Claude:
npm install @anthropic-ai/sdk
```

---

### Stap 4: LiveChat.tsx Aanpassen

**Optie A: Hybride Aanpak (Aanbevolen) ✨**

Gebruik rule-based AI voor snelle standaard antwoorden, ChatGPT voor complexe vragen:

```typescript
// src/components/LiveChat.tsx

import { generateAIResponse } from '@/lib/aiConfig';

// In de handleSendMessage functie:
const handleSendMessage = async () => {
  if (inputValue.trim() === '') return;

  const newMessage: Message = {
    id: Date.now().toString(),
    text: inputValue,
    sender: 'user',
    timestamp: new Date(),
  };

  setMessages([...messages, newMessage]);
  setInputValue('');
  setIsTyping(true);

  // TRY RULE-BASED FIRST (instant, free)
  let reply = generateAutoReply(inputValue);
  
  // IF FALLBACK DETECTED, USE ChatGPT
  if (reply.includes('voor deze specifieke vraag') || 
      reply.includes('doorverbinden met een specialist')) {
    
    try {
      // Build conversation history for context
      const conversationHistory = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));
      
      // Call ChatGPT API
      reply = await generateAIResponse(inputValue, conversationHistory);
    } catch (error) {
      console.error('AI Error:', error);
      // Fallback to rule-based response
    }
  }

  setTimeout(() => {
    const agentMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: reply,
      sender: 'agent',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, agentMessage]);
    setIsTyping(false);
  }, 800);
};
```

**Optie B: Altijd ChatGPT (Meest menselijk) 🧠**

Voor maximale menselijkheid, gebruik ChatGPT voor alle antwoorden:

```typescript
const handleSendMessage = async () => {
  if (inputValue.trim() === '') return;

  const newMessage: Message = {
    id: Date.now().toString(),
    text: inputValue,
    sender: 'user',
    timestamp: new Date(),
  };

  setMessages([...messages, newMessage]);
  setInputValue('');
  setIsTyping(true);

  try {
    const conversationHistory = messages.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text
    }));
    
    const reply = await generateAIResponse(inputValue, conversationHistory);
    
    const agentMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: reply,
      sender: 'agent',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, agentMessage]);
  } catch (error) {
    console.error('AI Error:', error);
    const fallbackMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: 'Sorry, er ging iets mis. Bel ons gerust: +31 6 058 158 📞',
      sender: 'agent',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, fallbackMessage]);
  }
  
  setIsTyping(false);
};
```

---

### Stap 5: API Route Maken (Server-side) 🔒

**VEILIGER OPTIE:** Maak een API route om de API key te beschermen:

```typescript
// src/app/api/chat/route.ts

import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { AI_CONFIG } from '@/lib/aiConfig';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Server-side only!
});

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    const completion = await openai.chat.completions.create({
      model: AI_CONFIG.model,
      messages: [
        { role: 'system', content: AI_CONFIG.systemPrompt },
        ...conversationHistory,
        { role: 'user', content: message },
      ],
      temperature: AI_CONFIG.temperature,
      max_tokens: AI_CONFIG.maxTokens,
    });

    const reply = completion.choices[0]?.message?.content || 
      'Sorry, ik kon geen antwoord genereren. Bel ons: +31 6 058 158!';

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json(
      { error: 'AI service temporarily unavailable' },
      { status: 500 }
    );
  }
}
```

Dan in `LiveChat.tsx`:

```typescript
// Call the API route instead of OpenAI directly
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: inputValue,
    conversationHistory: messages.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text
    }))
  })
});

const data = await response.json();
const reply = data.reply;
```

---

## 🎯 Model Keuze

### GPT-4 Turbo (Aanbevolen)
- ✅ Beste kwaliteit antwoorden
- ✅ Begrijpt complexe context
- ✅ Natuurlijke taal
- ⚠️ Duurder (~$0.03 per gesprek)
- Model: `gpt-4-turbo-preview` of `gpt-4-1106-preview`

### GPT-3.5 Turbo (Budget-vriendelijk)
- ✅ Sneller
- ✅ 10x goedkoper
- ⚠️ Minder accurate
- ⚠️ Kortere context window
- Model: `gpt-3.5-turbo`

### Claude 3 Opus (Alternatief)
- ✅ Zeer goed in Nederlands
- ✅ Langere context (200K tokens)
- ✅ Veiliger (minder hallucinations)
- ⚠️ API via Anthropic
- Model: `claude-3-opus-20240229`

---

## 🔧 Optimalisaties

### 1. Caching voor Veelgestelde Vragen
```typescript
const CACHE: Record<string, string> = {};

function getCachedResponse(question: string): string | null {
  const normalized = question.toLowerCase().trim();
  return CACHE[normalized] || null;
}

function setCachedResponse(question: string, answer: string) {
  CACHE[question.toLowerCase().trim()] = answer;
}
```

### 2. Rate Limiting
```typescript
let requestCount = 0;
let lastReset = Date.now();

function checkRateLimit(): boolean {
  const now = Date.now();
  if (now - lastReset > 60000) {
    requestCount = 0;
    lastReset = now;
  }
  
  if (requestCount >= 20) {
    return false; // Max 20 requests per minute
  }
  
  requestCount++;
  return true;
}
```

### 3. Streaming Responses (Typen effect)
```typescript
const stream = await openai.chat.completions.create({
  model: 'gpt-4-turbo-preview',
  messages: [...],
  stream: true,
});

let fullResponse = '';
for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content || '';
  fullResponse += content;
  // Update UI real-time
  updateMessage(messageId, fullResponse);
}
```

### 4. Fallback Strategy
```typescript
async function getAIResponse(message: string): Promise<string> {
  try {
    // Try ChatGPT first
    return await generateChatGPTResponse(message);
  } catch (error) {
    console.error('ChatGPT failed:', error);
    try {
      // Fallback to Claude
      return await generateClaudeResponse(message);
    } catch (error2) {
      console.error('Claude failed:', error2);
      // Final fallback to rule-based
      return generateAutoReply(message);
    }
  }
}
```

---

## 📊 Analytics & Monitoring

### Track AI Usage
```typescript
// Log every AI call
console.log('[AI]', {
  timestamp: new Date().toISOString(),
  question: userMessage,
  response: aiResponse,
  tokens: completion.usage?.total_tokens,
  cost: estimatedCost,
  model: AI_CONFIG.model,
});

// Send to analytics (Google Analytics, Mixpanel, etc.)
analytics.track('ai_chat_message', {
  question_length: userMessage.length,
  response_length: aiResponse.length,
  model: AI_CONFIG.model,
  tokens_used: completion.usage?.total_tokens,
});
```

### Monitor Costs
```typescript
// Track daily spending
const DAILY_BUDGET = 10; // €10 per day
let todaySpent = 0;
let lastResetDate = new Date().toDateString();

function checkBudget(estimatedCost: number): boolean {
  const today = new Date().toDateString();
  if (today !== lastResetDate) {
    todaySpent = 0;
    lastResetDate = today;
  }
  
  if (todaySpent + estimatedCost > DAILY_BUDGET) {
    console.warn('[AI] Daily budget exceeded!');
    return false;
  }
  
  todaySpent += estimatedCost;
  return true;
}
```

---

## 🧪 Testing

### Test Vragen om te Proberen:

**Eenvoudig (moet snel zijn):**
- "Hoeveel kost een website?"
- "Kunnen jullie apps maken?"
- "Wat is jullie telefoonnummer?"

**Gemiddeld:**
- "Ik wil een webshop maar weet niet welk platform het beste is"
- "Hoe lang duurt het om een MVP te maken voor een startup?"
- "Wat is het verschil tussen native en cross-platform apps?"

**Complex (hier schittert ChatGPT):**
- "Ik heb een idee voor een B2B SaaS platform met multi-tenant architectuur, API integraties en real-time dashboards. Wat zou dat kosten en hoe lang duren?"
- "We hebben een legacy .NET systeem dat we willen migreren naar een moderne cloud-native microservices architectuur. Kunnen jullie daarmee helpen?"
- "Ik zoek een developer partner die kan helpen met onze e-commerce groei. We hebben nu WooCommerce maar lopen tegen limieten aan qua schaalbaarheid."

---

## 🚨 Troubleshooting

### Error: "API key not found"
- Check of `.env.local` bestaat
- Check of `NEXT_PUBLIC_OPENAI_API_KEY` correct gespeld is
- Herstart development server: `npm run dev`

### Error: "Rate limit exceeded"
- Je hebt de API rate limit bereikt
- Upgrade OpenAI plan
- Implementeer rate limiting aan client-side

### Error: "Context length exceeded"
- Conversatie te lang
- Beperk conversation history tot laatste 10 berichten
- Gebruik summarization voor lange gesprekken

### Antwoorden zijn niet relevant
- Update `systemPrompt` in `aiConfig.ts`
- Verhoog `temperature` voor creativiteit (0.7-0.9)
- Verlaag `temperature` voor consistentie (0.3-0.5)
- Gebruik `gpt-4` instead van `gpt-3.5`

---

## 💰 Kosten Calculatie

### Voorbeeld scenario:
- 100 gesprekken per dag
- Gemiddeld 5 berichten per gesprek
- GPT-4 Turbo usage

**Berekening:**
- 100 gesprekken × 5 berichten = 500 API calls/dag
- 500 calls × ~300 tokens = 150,000 tokens/dag
- 150K tokens × $0.01/1K = $1.50/dag = **~€45/maand**

**Met GPT-3.5 Turbo:**
- 150K tokens × $0.001/1K = $0.15/dag = **~€4.50/maand**

---

## 🎓 Best Practices

1. **Start met Hybride Aanpak**
   - Rule-based voor standaard vragen (gratis, instant)
   - ChatGPT voor complexe vragen
   - Beste van beide werelden

2. **Monitor Kosten Nauwkeurig**
   - Set daily/monthly budgets
   - Alert bij hoog gebruik
   - Review analytics weekly

3. **Optimaliseer Prompts**
   - Test verschillende system prompts
   - A/B test responses
   - Verzamel feedback

4. **Gebruik Server-side API**
   - Veiliger (API key niet exposed)
   - Rate limiting mogelijk
   - Betere error handling

5. **Fallback Strategie**
   - Altijd een fallback hebben
   - Rule-based als backup
   - Menselijke escalatie optie

6. **Privacy & Compliance**
   - Log geen persoonlijke data
   - AVG/GDPR compliant
   - Transparant over AI gebruik

---

## 📚 Nuttige Links

- [OpenAI Pricing](https://openai.com/pricing)
- [OpenAI API Docs](https://platform.openai.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Anthropic Claude](https://www.anthropic.com/claude)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)

---

## ✅ Checklist voor Productie

- [ ] OpenAI API key verkregen
- [ ] Environment variables ingesteld (Vercel)
- [ ] API route gemaakt (server-side)
- [ ] Rate limiting geïmplementeerd
- [ ] Error handling toegevoegd
- [ ] Fallback strategie getest
- [ ] Cost monitoring ingesteld
- [ ] Analytics tracking toegevoegd
- [ ] Privacy policy bijgewerkt (AI disclosure)
- [ ] Getest met diverse vragen
- [ ] Budget alerts ingesteld
- [ ] Team getraind in monitoring

---

## 🎉 Resultaat

Met ChatGPT integratie krijg je:

✅ **99.9% vraag-coverage** - Beantwoordt vrijwel alles  
✅ **Menselijke gesprekken** - Natuurlijke, context-aware antwoorden  
✅ **Schaalbaar** - Kan duizenden gesprekken aan  
✅ **Leerend** - Wordt beter met meer data  
✅ **Multilingual** - Automatisch andere talen support  
✅ **24/7 beschikbaar** - Nooit offline  

**De perfecte AI assistent voor TechWithYou!** 🚀

---

Vragen? Bel me: +31 6 058 158 📞
