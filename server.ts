import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Server-side AI Assistant endpoint using Gemini API
app.post('/api/ai-assistant', async (req, res) => {
  try {
    const { prompt, context, locale } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(503).json({
        error: "API key unconfigured",
        reply: "Raqamli Ustoz: Hozirda AI xizmati avtonom metodik rejimda ishlamoqda. Savolingiz bo‘yicha tavsiyamiz: qadamlarni tartib bilan tahlil qiling va o‘quv darsligidagi namunaviy misolga qarang."
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
    return res.json({ reply });
  } catch (error: any) {
    console.error("AI Assistant error:", error);
    return res.status(200).json({
      reply: "Raqamli Ustoz: Savolingiz bo‘yicha tavsiyamiz: dasturlash va algoritmlarda har bir qadamni tekshiring. Muammoni qismlarga ajrating va qadamma-qadam yechishga harakat qiling!"
    });
  }
});

// Vite middleware in dev or static serving in production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`RAQAMLI OLAM server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
