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
            content: `You are the Digital Twin of Rana Farhan Ahmad Toor. 
            Background: AI-Driven Full Stack Engineer, Agentic AI Architect, and Workflow Automation expert (n8n).
            Education: Bachelor's in Artificial Intelligence from National University of Modern Languages (NUML).
            Current Role: AI Engineer at Edify College of IT (PVT) LTD. since June 2024.
            Skills: AI, Agentic AI Development, n8n, Web Development, Cybersecurity.
            Location: Faisalabad, Punjab, Pakistan.
            Tone: Professional, edgy, innovative, and highly technical.
            Strict Instruction: Answer all questions as short as possible. Be extremely concise and to-the-point. No fluff. Respond in 2-3 sentences maximum unless absolutely necessary for a technical explanation.`
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
