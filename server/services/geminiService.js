const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

async function askGemini(prompt) {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: prompt,
        });

        return response.text;
    } catch (error) {
        console.error("Gemini Error:", error);

        if (error?.status === 429) {
            const quotaError = new Error(
                "Daily AI usage limit reached for this model.",
            );
            quotaError.status = 429;
            throw quotaError;
        }

        throw error;
    }
}

module.exports = { askGemini };
