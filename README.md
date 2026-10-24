# RAQAMLI OLAM — O‘zbekiston maktablari uchun zamonaviy informatika ta’lim platformasi

> “Bilimdan — raqamli kelajak sari!”

RAQAMLI OLAM — O‘zbekiston Respublikasi umumiy o‘rta ta’lim maktablarining 1–11-sinf o‘quvchilari, o‘qituvchilari va metodistlari uchun mo‘ljallangan professional, interaktiv ta’lim web-platformasi.

---

## 📌 Asosiy Imkoniyatlar

- **1–11-sinflar to‘liq o‘quv dasturi**: Amaldagi davlat ta’lim standarti asosida tizimlashtirilgan.
- **Har bir darsda 19 ta standart qism**: Maqsadlar, ma’ruza, hayotiy misol, amaliy ko‘rsatma, kod namunasi, o‘zini tekshirish savollari, keng tarqalgan xatolar, uyga vazifa va manbalar.
- **4 ta to‘liq til / yozuv qo‘llab-quvvatlovi**:
  1. `uz-Latn` — O‘zbekcha (Lotin)
  2. `uz-Cyrl` — Ўзбекча (Кирилл)
  3. `ru` — Русский
  4. `en` — English
- **Haqiqiy ta’limiy interaktiv o‘yinlar**:
  - *Kompyuter qismlarini topish* (Hardware explorer)
  - *Klaviatura tezligi* (Typing trainer - WPM va aniqlik)
  - *Robotni manzilga olib bor* (Grid algoritm simulyatori)
  - *Kiberxavfsizlik detektivi* (Fishing va soxta havolalarni tahlil qilish)
- **Kod Laboratoriyasi**:
  - Xavfsiz Python mini-laboratoriyasi (kod yozish va konsolda natijani ko‘rish)
  - HTML & CSS jonli veb-muharriri
- **Test va Imtihon tizimi**:
  - Sinf va qiyinlik bo‘yicha filtrlar, savollar tahlili, to‘g‘ri javob izohlari, chop etish (print) va CSV formatida yuklab olish.
- **Raqamli Xavfsizlik Markazi**:
  - Real vaqtda parol mustahkamligini baholovchi sinov muhiti, O‘zbekiston qonunchiligiga ko‘ra qat’iyan taqiqlangan harakatlar va kibergigiyena qoidalari.
- **IT Kasblari katalogi**:
  - 12+ zamonaviy IT yo‘nalishlari, maktabda qaysi fanlarga e’tibor berish kerakligi, o‘rtacha maoshlar va "Qaysi IT kasbi menga mos?" testi.
- **Atamalar Lug‘ati va Qiziqarli Faktlar**:
  - 4 tilda qidiruv, Al-Xorazmiy merosi va O‘zbekiston raqamli iqtisodiyoti faktlari.
- **Foydalanuvchi Kabinetlari**:
  - *O‘quvchi profili*: XP ballar, kunlik streak, yutuq nishonlari (Badges).
  - *O‘qituvchi xonasi*: Guruhlar/sinflar, proyektor (to‘liq ekran) rejimi, baholar jurnali eksporti.
  - *Admin paneli*: Darslar ustida to‘liq CRUD (qo‘shish, tahrirlash, o‘chirish, draft/published holati), ma’lumotlarni zaxiralash va tiklash.
- **Raqamli Ustoz (AI)**:
  - Pedagogik tamoyillar asosida yo‘naltiruvchi savollar va tushuntirishlar beruvchi yordamchi (Gemini API server integratsiyasi bilan).

---

## 🚀 Texnologik Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS, Lucide React, Motion.
- **Backend**: Node.js, Express, tsx.
- **AI Integratsiyasi**: Google Gemini API (`@google/genai`).
- **Deploy**: GitHub Repository & Vercel / Cloud Run.

---

## 🛠 O‘rnatish va Lokal Ishga Tushirish

### 1. Loyihani klonlash
```bash
git clone https://github.com/your-username/raqamli-olam.git
cd raqamli-olam
```

### 2. Node.js versiyasi
Node.js `v18.0.0` yoki undan yuqori versiyasi tavsiya etiladi.

### 3. Bog‘liqliklarni o‘rnatish
```bash
npm install
```

### 4. Muhit o‘zgaruvchilarini sozlash
Loyiha ildizida `.env` faylini yarating (`.env.example` namunasida):
```env
GEMINI_API_KEY="SIZNING_GEMINI_API_KALITINGIZ"
PORT=3000
```

### 5. Dasturni ishga tushirish
```bash
npm run dev
```
Brauzerda `http://localhost:3000` manzilini oching.

### 6. Production Build
```bash
npm run build
npm start
```

---

## 🌐 Vercel va GitHub orqali Deploy qilish

1. Loyihani GitHub’ga push qiling:
   ```bash
   git add .
   git commit -m "feat: complete Raqamli Olam educational platform"
   git branch -M main
   git remote add origin https://github.com/your-username/raqamli-olam.git
   git push -u origin main
   ```
2. [Vercel](https://vercel.com) boshqaruv paneliga kiring.
3. "Add New Project" tugmasini bosing va GitHub repository-ni tanlang.
4. "Environment Variables" bo‘limida `GEMINI_API_KEY` kalitini kiriting.
5. "Deploy" tugmasini bosing.

---

## 📜 Litsenziya

Apache-2.0. O‘zbekiston maktab ta’limi rivoji yo‘lida foydalanish uchun ochiq.
