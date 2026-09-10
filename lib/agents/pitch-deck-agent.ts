import {Agent} from "@openai/agents";

import {PitchDeckSchema} from "@/lib/schemas/pitch-deck";
import { pitchDeckQualityGuardrail, validProjectIdeaGuardrail } from "./guardrails";

const PITCH_DECK_INSTRUCTIONS = `You write startup pitch decks for investors.

Given a project idea,create 6-7 slides in the order:
1. Title - catchy deck title + one-line tagline in content
2. Problem - The pin point your audience faces
3. Solution - How the product solves the problem
4. Market - Target customers and market oppotunity
5. Product - 3-4 key features as bullet points
6. Business Model - How the company makes money
7. The Ask - Funding amount or support needed(use a realistic placeholder)

Field rules:
- content: 2-4 bullet points as plain text,each starting with ". "
- imagePrompt: a short description for a professional slide illustration (no text in the image, clean and mordern)
- Keep language clear, confident and investors-friendly
- Do not use placeholder filler like "TBD" or "lorem ipsum"`;

export const pitchDeckAgent = new Agent({
    name:"Pitch Deck Generator",
    model:"gpt-4.1-mini",
    instructions:PITCH_DECK_INSTRUCTIONS,
    outputType:PitchDeckSchema as any,

    inputGuardrails:[validProjectIdeaGuardrail],
    outputGuardrails:[pitchDeckQualityGuardrail]
})
