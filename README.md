# Rana Farhan Ahmad Toor - AI Portfolio

This is a premium, AI-driven portfolio website for Rana Farhan Ahmad Toor, featuring a Digital Twin AI assistant.

## Features
- **AI Digital Twin**: Interactive chat powered by OpenRouter.
- **Career Evolution**: Chronological timeline of professional growth.
- **Certifications**: Interactive gallery with lightbox viewing.
- **Future Visions**: Showcase of ongoing and upcoming AI projects.
- **Premium Design**: Modern, responsive UI with glassmorphism and animations.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS Modules
- **AI Integration**: OpenRouter API (GPT models)

## Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Environment Setup
Create a `.env` file in the `portfolio` directory and add your OpenRouter API key:
```env
OPENROUTER_API_KEY=your_key_here
```
Refer to `.env.example` for the required keys.

### 3. Install dependencies
```bash
npm install
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the result.

## Deploy on Vercel
Connect your GitHub repository to Vercel and ensure you add the `OPENROUTER_API_KEY` to the Environment Variables section in the Vercel project settings.
