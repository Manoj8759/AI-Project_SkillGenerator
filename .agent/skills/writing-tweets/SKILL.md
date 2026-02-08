---
name: writing-tweets
description: Researches niche topics and crafts high-engagement, viral-style tweets for x.com. Performs deep analysis to find hooks, surprising facts, and clickbaity angles while ensuring a strong call-to-action (CTA).
---

# Writing Tweets

This skill transforms complex or simple topics into viral-ready content for X (formerly Twitter) using deep research and psychological triggers.

## When to use this skill
- When the user says "Help me write a tweet about [Topic]"
- When the user needs to turn a long article or idea into a punchy, clickbaity post.
- When the user wants to research a trending topic and post a "hot take" or "value bomb."

## Workflow
1. [ ] **Prompt for Topic**: If the topic isn't clear, ask the user: "What's the core focus of the tweet, and what's your goal (Engagement, Clicks, or Follows)?"
2. [ ] **Deep Research**: 
    - Use `search_web` to find the 3 most non-obvious facts or surprising statistics about the topic.
    - Identify current trends or popular "counter-intuitive" opinions in the niche.
3. [ ] **The "Clickbait" Hook Strategy**: Select a psychological trigger (Fear of Missing Out, Curiosity Gap, or the "Why You're Wrong" angle).
4. [ ] **Drafting**: Create 3 distinct options under 280 characters:
    - **Option A: The Curiosity Gap** (Forces the click/read).
    - **Option B: The Value Bomb** (Quick, punchy educational list).
    - **Option C: The Contrarian** (A polarizing take to spark replies).
5. [ ] **Call to Action (CTA)**: Attach a relevant CTA based on the user's goal.
6. [ ] **Character Check**: Ensure it fits the X character limit (280) and uses optimal line spacing.

## Instructions

### 1. Researching the "Edge"
- Don't settle for surface-level info. If researching "AI Agents," find a specific, recent benchmark or a new, obscure tool that makes the post look like it's from an insider.
- Use `read_url_content` to find specific developer quotes or repo stars if the topic is technical.

### 2. Drafting Rules
- **Line 1 (The Hook)**: Must be a pattern interrupt. Use bold statements.
- **Visuals**: Suggest where an image or a graph would help.
- **Ghost-writing**: Match the tone to a professional yet "edgy" X creator.

### 3. CTA Engineering
- **Engagement**: "I'm curious: [Question]? Let me know 👇"
- **Newsletter/Links**: "I deep dive into this every week here: [Link]"
- **Follow**: "If you want to stay ahead of [Topic], follow me for daily insights."

## Resources
- [Tweet Templates & Hook Library](resources/templates.md)
