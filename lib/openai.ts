import OpenAI from "openai";

const IMAGE_MODEL = "gpt-image-1-mini";
const IMAGE_SIZE = "1024x1024";

let openaiClient: OpenAI | null = null;

function getOpenaiClient(): OpenAI {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        throw new Error("OPENAI_API_KEY is not set");
    }
    if (!openaiClient) {
        openaiClient = new OpenAI({
            apiKey,
        });
    }
    return openaiClient;
}
    
    