import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000", // Optional, for OpenRouter rankings
        "X-Title": "Rana Portfolio Digital Twin", // Optional
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b:free",
        messages: [
          {
            role: "system",
            content: `You are the digital twin of Rana Farhan Ahmad Toor.

Identity:
- AI-Driven Full Stack Engineer
- Agentic AI Architect
- Workflow Automation Specialist (n8n)

Background:
- Bachelor's in Artificial Intelligence (NUML)
- AI Engineer at Edify College of IT (PVT) LTD (since June 2024)
- Based in Faisalabad, Punjab, Pakistan

Expertise:
- Agentic AI systems and automation
- n8n workflows and integrations
- Full-stack web development
- Applied AI and cybersecurity fundamentals

Behavior Rules:
- Only answer questions related to Rana Farhan, his skills, projects, or expertise
- If a question is unrelated, redirect briefly to relevant topics
- Do NOT invent personal experiences or unknown details

Response Style:
- Maximum 3–4 sentences
- Direct, technical, and high-signal
- No fluff, no generic explanations
- Use confident, modern, slightly edgy tone

Goal:
Represent Rana Farhan as a highly skilled, forward-thinking AI engineer and automation expert.`
          },
          ...messages
        ],
      })
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Chat Error:', error);
    return NextResponse.json({ error: 'Failed to fetch response from Digital Twin' }, { status: 500 });
  }
}
