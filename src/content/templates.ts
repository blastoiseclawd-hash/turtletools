export interface Template {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  price: number; // 0 = free
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tools: string[];
  nodes: number;
  tags: string[];
  featured: boolean;
}

export const templates: Template[] = [
  // FREE TEMPLATES (lead magnets)
  {
    id: 'ai-content-repurposer',
    title: 'AI Content Repurposer',
    description: 'Turn one blog post into tweets, LinkedIn posts, and email newsletters automatically.',
    longDescription: `Feed in a blog post URL and this workflow automatically generates platform-optimized content for X/Twitter (thread + single tweet), LinkedIn (professional angle), and an email newsletter draft. Uses Claude for writing with platform-specific prompting.`,
    category: 'Content',
    price: 0,
    difficulty: 'beginner',
    tools: ['n8n', 'Claude', 'OpenRouter'],
    nodes: 12,
    tags: ['content', 'social media', 'repurposing'],
    featured: true,
  },
  {
    id: 'rss-to-social',
    title: 'RSS to Social Auto-Poster',
    description: 'Monitor any RSS feed and auto-post summaries to your social accounts with AI commentary.',
    longDescription: `Set up RSS monitoring for any blog, news site, or competitor. When new content appears, Claude generates a unique take/commentary and posts it to your configured social accounts. Includes duplicate detection and scheduling.`,
    category: 'Content',
    price: 0,
    difficulty: 'beginner',
    tools: ['n8n', 'Claude', 'RSS'],
    nodes: 8,
    tags: ['content', 'rss', 'automation'],
    featured: false,
  },
  {
    id: 'webhook-to-notion',
    title: 'Universal Webhook to Notion',
    description: 'Capture any webhook data and organize it in Notion databases automatically.',
    longDescription: `A flexible webhook receiver that parses incoming data, uses AI to categorize and summarize it, then stores it in your Notion database with proper properties. Works with Stripe, GitHub, Typeform, and any service that sends webhooks.`,
    category: 'Productivity',
    price: 0,
    difficulty: 'beginner',
    tools: ['n8n', 'Notion', 'Webhooks'],
    nodes: 6,
    tags: ['productivity', 'notion', 'webhooks'],
    featured: false,
  },
  {
    id: 'x-reply-guy-comprehensive',
    title: 'X Reply Guy — 3-Tier Quality Filter',
    description: 'Intelligent X/Twitter reply bot with profile scoring, tweet quality detection, and contextual AI responses.',
    longDescription: `Professional reply bot that finds valuable conversations on X and adds genuine value. Three-tier quality filtering ensures you only engage with established creators on high-quality content. Profile scoring (follower ratio, engagement, authority), tweet scoring (velocity, substance, relevance), and reply quality gate (substance, authenticity, voice). Includes retry loop for consistent quality. Perfect for building audience and demonstrating expertise.`,
    category: 'Marketing',
    price: 0,
    difficulty: 'intermediate',
    tools: ['n8n', 'OpenRouter', 'X API'],
    nodes: 20,
    tags: ['social media', 'engagement', 'ai replies', 'twitter', 'x'],
    featured: true,
  },

  // PAID TEMPLATES
  {
    id: 'mcp-agent-toolkit',
    title: 'MCP Agent Toolkit',
    description: 'Connect Claude to your n8n workflows via MCP. Trigger any workflow from natural language.',
    longDescription: `The complete setup for connecting AI agents to your n8n instance via Model Context Protocol. Includes MCP server configuration, tool definitions for 10+ common n8n operations, error handling, and a demo agent that can trigger workflows, read results, and chain operations. This is the bridge between conversational AI and workflow automation.`,
    category: 'MCP',
    price: 29,
    difficulty: 'advanced',
    tools: ['n8n', 'Claude', 'MCP', 'OpenRouter'],
    nodes: 24,
    tags: ['mcp', 'agents', 'ai', 'advanced'],
    featured: true,
  },
  {
    id: 'lead-enrichment-pipeline',
    title: 'Lead Enrichment Pipeline',
    description: 'Scrape, enrich, and score leads automatically. Feeds directly into your CRM.',
    longDescription: `End-to-end lead processing: capture leads from forms/webhooks, enrich with company data (domain, size, industry, tech stack), score based on your ICP, and push qualified leads to your CRM with a summary. Includes Apollo.io and Clearbit integration patterns.`,
    category: 'Sales',
    price: 19,
    difficulty: 'intermediate',
    tools: ['n8n', 'Claude', 'Apollo.io', 'Webhooks'],
    nodes: 18,
    tags: ['sales', 'leads', 'crm', 'enrichment'],
    featured: true,
  },
  {
    id: 'competitor-monitor',
    title: 'Competitor Intelligence Monitor',
    description: 'Track competitor websites, social posts, and pricing changes. Get daily AI-summarized briefs.',
    longDescription: `Automated competitive intelligence: monitors competitor websites for changes, tracks their social media activity, detects pricing/feature updates, and delivers a daily AI-summarized brief to Slack or email. Uses change detection + Claude analysis.`,
    category: 'Research',
    price: 24,
    difficulty: 'intermediate',
    tools: ['n8n', 'Claude', 'Apify', 'Slack'],
    nodes: 20,
    tags: ['research', 'competitive', 'monitoring'],
    featured: false,
  },
  {
    id: 'vibe-marketing-suite',
    title: 'Vibe Marketing Suite',
    description: 'The complete vibe marketing stack: content research, creation, scheduling, and analytics in one workflow.',
    longDescription: `Everything a solo marketer needs: scrape trending content in your niche, generate content ideas with AI, create platform-specific posts, schedule across channels, and track performance. Goes beyond basic content automation by including audience analysis, A/B testing prompts, and engagement-based content optimization. Built for the "one-person marketing team" era.`,
    category: 'Marketing',
    price: 39,
    difficulty: 'advanced',
    tools: ['n8n', 'Claude', 'Apify', 'OpenRouter', 'Perplexity'],
    nodes: 32,
    tags: ['marketing', 'vibe-marketing', 'content', 'analytics'],
    featured: false,
  },
  {
    id: 'ai-email-sequences',
    title: 'AI Email Sequence Builder',
    description: 'Generate and send personalized email sequences based on user behavior triggers.',
    longDescription: `Behavioral email automation powered by AI. When users take specific actions (sign up, visit pricing, abandon cart), this workflow generates personalized email sequences using Claude, waits appropriate intervals, and sends via your email provider. Includes A/B subject line testing.`,
    category: 'Email',
    price: 19,
    difficulty: 'intermediate',
    tools: ['n8n', 'Claude', 'Resend', 'Webhooks'],
    nodes: 15,
    tags: ['email', 'sequences', 'personalization'],
    featured: false,
  },
  {
    id: 'ai-email-responder',
    title: 'AI Email Reply Agent',
    description: 'Automatically reply to emails with AI while maintaining conversation context and history.',
    longDescription: `Perfect for sales outreach, support, or any email workflow that needs intelligent, contextual replies. This workflow:
    
- Monitors Gmail for new emails
- Fetches conversation history from your database  
- Generates personalized AI replies using GPT-4o
- Sends replies in the same thread
- Saves conversation for future context

Works with Redis or easily swap to Supabase/Postgres. The conversation memory pattern is the key - it's what makes AI responses feel natural across multiple exchanges.`,
    category: 'Email',
    price: 0,
    difficulty: 'intermediate',
    tools: ['n8n', 'OpenAI', 'Gmail', 'Redis'],
    nodes: 5,
    tags: ['email', 'ai-agent', 'sales', 'automation', 'memory'],
    featured: true,
  },
];