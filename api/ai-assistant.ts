import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt, context, locale } = req.body || {};

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(200).json({
        reply: "Raqamli Ustoz: Hozirda AI xizmati avtonom metodik rejimda ishlamoqda. Savolingiz bo‘yicha tavsiyamiz: qadamlarni tartib bilan tahlil qiling va darslikdagi namunaviy misolga qarang."
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `Sen "Raqamli Ustoz"san — O‘zbekiston maktablarining 1–11-sinf o‘quvchilari uchun mo‘ljallangan RAQAMLI OLAM platformasining xushmuomala, bilimdon va sabr-toqatli ta’limiy yordamchisisan.
Sening asosiy vazifang:
1. O‘quvchiga hech qachon tayyor javobni birdaniga aytib bermaslik!
2. Yo‘naltiruvchi savollar va tushunarli misollar orqali o‘quvchini mustaqil fikrlashga undash.
3. Koddagi xatoni to‘g‘ridan-to‘g‘ri tuzatib bermasdan, qaysi qatorda nima uchun xato kelib chiqqanini tushuntirish.
4. Javoblaringni o‘quvchining so‘ragan tilida (${locale || 'uz-Latn'}) ixcham, samimiy va o‘quvchi yoshiga mos sodda tilda yoz.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            { text: `Kontekst: ${context || 'Umumiy informatika darsi'}\n\nO‘quvchining savoli: ${prompt}` }
          ]
        }
      ],
      config: {
        systemInstruction
      }
    });

    const reply = response.text || "Savolingizni tushundim. Keling, ushbu mavzuni qadamma-qadam tahlil qilamiz.";
    return res.status(200).json({ reply });
  } catch (error: any) {
    console.error("AI Assistant error on Vercel:", error);
    return res.status(200).json({
      reply: "Raqamli Ustoz: Savolingiz bo‘yicha tavsiyamiz: dasturlash va algoritmlarda har bir qadamni tekshiring. Muammoni qismlarga ajrating va qadamma-qadam yechishga harakat qiling!"
    });
  }
}
