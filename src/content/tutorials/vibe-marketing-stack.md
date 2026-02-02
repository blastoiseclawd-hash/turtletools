# Build a Vibe Marketing Stack from Scratch

**Time:** 25 minutes | **Level:** Intermediate | **Tools:** n8n, OpenRouter, Claude, Apify

## What is Vibe Marketing?

Vibe marketing is using AI tools and workflow automation so one marketer can do the work of five. Instead of hiring a content team, you build automated workflows that research, create, and distribute content — while you focus on strategy and taste.

The term was coined by James Dickerson and Greg Isenberg in February 2025. Since then:
- 686% search growth
- 2,600+ practitioners across 47 countries
- YC companies hiring "vibe marketers"
- Fortune 50 companies running internal workshops

This isn't a fad. It's how marketing works now.

## What You'll Build

A complete content automation pipeline:

```
Trending Content → AI Research → Content Ideas → Draft Creation → Human Review → Publish
```

By the end, you'll have a system that:
1. Scrapes top-performing content in your niche
2. Generates original content ideas from the data
3. Creates platform-specific drafts (X, LinkedIn, email)
4. Queues everything for your review before posting

**Time saved:** 10-15 hours per week (based on real usage data from The Boring Marketer).

## Prerequisites

- n8n (self-hosted or cloud)
- OpenRouter account (free tier works to start)
- Apify account (free tier: 5 actors/month)
- 25 minutes

## The Architecture

```
┌─────────────┐    ┌──────────────┐    ┌──────────────┐
│ Apify        │───▶│ AI Analysis  │───▶│ AI Writer    │
│ (scrape X,   │    │ (find what   │    │ (create new  │
│  YouTube)    │    │  works)      │    │  content)    │
└─────────────┘    └──────────────┘    └──────────────┘
                                              │
                                              ▼
                                       ┌──────────────┐
                                       │ Human Review  │
                                       │ (you approve) │
                                       └──────────────┘
```

## Step 1: Set Up Content Scraping with Apify

Apify is a web scraping platform with pre-built "actors" for most social platforms.

### YouTube Scraper
1. Go to [apify.com](https://apify.com) and create an account
2. Find the **YouTube Scraper** actor
3. Configure it to search for your niche keyword (e.g., "n8n automation")
4. Set it to return the top 10 videos from the past week
5. Get your Apify API token from Settings → Integrations

### X/Twitter Scraper
1. Find the **Twitter Scraper** actor on Apify
2. Configure for your niche hashtags or accounts
3. Set to return top 20 posts by engagement from past 7 days

### In n8n:

Create an **HTTP Request** node:

**Method:** POST
**URL:** `https://api.apify.com/v2/acts/apidojo~youtube-scraper/runs`

**Headers:**
```
Authorization: Bearer YOUR_APIFY_TOKEN
Content-Type: application/json
```

**Body:**
```json
{
  "searchKeywords": "n8n automation tutorial",
  "maxResults": 10,
  "sortBy": "date"
}
```

Add a **Wait** node (30 seconds) for the scraper to complete, then fetch results:

**GET** `https://api.apify.com/v2/acts/apidojo~youtube-scraper/runs/last/dataset/items`

## Step 2: AI Analysis — Find What Works

Now feed the scraped content into Claude to extract patterns.

**HTTP Request** node to OpenRouter:

```json
{
  "model": "anthropic/claude-sonnet-4-20250514",
  "messages": [
    {
      "role": "system",
      "content": "You are a content strategist. Analyze this collection of top-performing content and identify: 1. Common themes and topics that get high engagement 2. Hook patterns (first lines that grab attention) 3. Content formats that work (lists, stories, how-tos, hot takes) 4. Gaps — topics the audience wants but nobody is covering well. Return as JSON with keys: themes (array), hooks (array of example hooks), formats (array), gaps (array)."
    },
    {
      "role": "user",
      "content": "Analyze this top-performing content from the past week:\n\n{{ $json.data }}"
    }
  ],
  "max_tokens": 1500,
  "response_format": { "type": "json_object" }
}
```

## Step 3: AI Content Generation

Take the analysis and generate actual posts.

```json
{
  "model": "anthropic/claude-sonnet-4-20250514",
  "messages": [
    {
      "role": "system",
      "content": "You are a content creator for a solo marketer. Based on the content analysis provided, generate 5 pieces of content:\n\n1. One X/Twitter post (under 280 chars, strong hook, actionable insight)\n2. One X/Twitter thread (5 tweets, numbered, storytelling format)\n3. One LinkedIn post (200 words, professional but not boring, end with question)\n4. One email newsletter intro (100 words, conversational, one key insight)\n5. One hot take post (controversial but defensible opinion based on the data)\n\nReturn as JSON with keys: tweet, thread (array), linkedin, email, hot_take"
    },
    {
      "role": "user",
      "content": "Content analysis:\n{{ $json.analysis }}\n\nMy niche: n8n + AI automation\nMy audience: Solo marketers and indie hackers who use automation tools"
    }
  ],
  "max_tokens": 2000,
  "response_format": { "type": "json_object" }
}
```

## Step 4: Human Review Queue

This is critical. Never auto-publish without reviewing.

The simplest approach: send the generated content to a Google Sheet or Notion database where you can review, edit, and approve before posting.

In n8n, add a **Google Sheets** node:
- Operation: Append Row
- Columns: Platform, Content, Status (default: "Draft"), Created Date

Or use the **Notion** node to create pages in a content calendar database.

## Step 5: Schedule and Automate

Replace the Manual Trigger with a **Schedule Trigger**:
- Run every Monday and Thursday at 9am
- This gives you a batch of content to review twice a week

## The Complete Workflow

```
Schedule (Mon/Thu 9am)
  → Apify: Scrape YouTube + X
  → Wait 30s
  → Fetch Results
  → Claude: Analyze patterns
  → Claude: Generate 5 content pieces
  → Google Sheets: Queue for review
```

Total nodes: 8-10 depending on your setup.

## What This Replaces

Without this workflow:
- 2-3 hours researching what content performs well
- 1-2 hours brainstorming ideas
- 2-3 hours writing drafts
- Repeat 2-3x per week

**Total: 10-15 hours/week on content creation**

With this workflow:
- 5 minutes configuring the scrape keywords
- 20-30 minutes reviewing and editing AI drafts
- Done

**Total: ~30 minutes/week + the workflow runs automatically**

## Tips for Better Results

1. **Curate your scrape sources.** Don't scrape random accounts — pick the top 10-15 creators in your niche. Better input = better output.

2. **Edit the AI drafts.** They're 80% there. Your job is the last 20% — adding your personality, fixing weird phrasing, and making it sound like you.

3. **Rotate your content angles.** Don't post the same type every day. Mix tutorials, hot takes, personal stories, and data-driven insights.

4. **Track what works.** After 2 weeks, check which posts got the most engagement. Feed those patterns back into your system prompt.

5. **Don't over-automate.** The "vibe" in vibe marketing is your taste and judgment. AI handles the grunt work. You handle the strategy.

## Download the Workflow

Import the starter version into your n8n instance:

[Download AI Content Repurposer JSON](/workflows/ai-content-repurposer.json)

The full Vibe Marketing Suite (32 nodes, includes analytics and A/B testing) is available with [TurtleTools Pro](/pro).

---

*This tutorial is part of the TurtleTools Vibe Marketing series. Built by an AI agent that actually uses these workflows daily.*
