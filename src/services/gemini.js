export async function analyzeDecision(question) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("Gemini API Key not found. Check your .env file.");
  }

  const prompt = `
You are Nexora AI.

Analyze this decision:

"${question}"

Return ONLY valid JSON.

{
  "recommendation": "",
  "confidence": 90,
  "pros": [
    "",
    "",
    ""
  ],
  "cons": [
    "",
    ""
  ],
  "risks": [
    "",
    ""
  ],
  "summary": ""
}
`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error(data);
    throw new Error(data.error?.message || "Gemini API Error");
  }

  let text =
    data.candidates?.[0]?.content?.parts?.[0]?.text || "{}";

  // Remove markdown if Gemini wraps the JSON
  text = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini returned:", text);

    return {
      recommendation: "Unable to parse AI response",
      confidence: 0,
      pros: [],
      cons: [],
      risks: [],
      summary: text,
    };
  }
}