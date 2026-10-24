import { GradeInfo } from '../types';

export const gradesData: GradeInfo[] = [
  {
    id: 1,
    title: {
      'uz-Latn': "1-sinf",
      'uz-Cyrl': "1-синф",
      'ru': "1 класс",
      'en': "Grade 1"
    },
    stage: 'elementary',
    ageRange: "6–7 yosh",
    color: "#0284c7", // Azure blue
    description: {
      'uz-Latn': "Kompyuter olamiga birinchi qadam: monitor, klaviatura, sichqoncha va xavfsiz foydalanish.",
      'uz-Cyrl': "Компьютер оламига биринчи қадам: монитор, клавиатура, сичқонча ва хавфсиз фойдаланиш.",
      'ru': "Первый шаг в мир компьютеров: знакомство с монитором, клавиатурой, мышью и правилами безопасности.",
      'en': "First steps into computing: monitor, keyboard, mouse, and basic ergonomics."
    },
    topicsCount: 4,
    totalLessons: 12
  },
  {
    id: 2,
    title: {
      'uz-Latn': "2-sinf",
      'uz-Cyrl': "2-синф",
      'ru': "2 класс",
      'en': "Grade 2"
    },
    stage: 'elementary',
    ageRange: "7–8 yosh",
    color: "#0ea5e9", // Sky
    description: {
      'uz-Latn': "Axborot tushunchasi, raqamli rasm chizish va klaviaturada harflarni terish mashqlari.",
      'uz-Cyrl': "Ахборот тушунчаси, рақамли расм чизиш ва клавиатурада ҳарфларни териш машқлари.",
      'ru': "Понятие информации, создание цифровых рисунков и базовые навыки набора текста.",
      'en': "Concept of information, basic digital graphics, and beginner typing habits."
    },
    topicsCount: 5,
    totalLessons: 14
  },
  {
    id: 3,
    title: {
      'uz-Latn': "3-sinf",
      'uz-Cyrl': "3-синф",
      'ru': "3 класс",
      'en': "Grade 3"
    },
    stage: 'elementary',
    ageRange: "8–9 yosh",
    color: "#059669", // Emerald
    description: {
      'uz-Latn': "Ketma-ketlik va sodda algoritmlar, robot qadamlari va Scratch vizual dasturlashga kirish.",
      'uz-Cyrl': "Кетма-кетлик ва содда алгоритмлар, робот қадамлари ва Scratch визуал дастурлашга кириш.",
      'ru': "Последовательности, основы алгоритмов и первые шаги в визуальной среде Scratch.",
      'en': "Sequencing, step-by-step logic, robot directions, and introductory visual blocks."
    },
    topicsCount: 5,
    totalLessons: 16
  },
  {
    id: 4,
    title: {
      'uz-Latn': "4-sinf",
      'uz-Cyrl': "4-синф",
      'ru': "4 класс",
      'en': "Grade 4"
    },
    stage: 'elementary',
    ageRange: "9–10 yosh",
    color: "#10b981", // Light emerald
    description: {
      'uz-Latn': "Fayllar va papkalar, internetda xavfsiz izlanish, kuchli parol va shaxsiy ma’lumotlarni asrash.",
      'uz-Cyrl': "Файллар ва папкалар, интернетда хавфсиз изланиш, кучли парол ва шахсий маълумотларни асраш.",
      'ru': "Файлы и папки, безопасный поиск в сети, надежные пароли и защита личных данных.",
      'en': "Files & folders, safe web searches, strong password foundations, and digital privacy."
    },
    topicsCount: 6,
    totalLessons: 18
  },
  {
    id: 5,
    title: {
      'uz-Latn': "5-sinf",
      'uz-Cyrl': "5-синф",
      'ru': "5 класс",
      'en': "Grade 5"
    },
    stage: 'middle',
    ageRange: "10–11 yosh",
    color: "#6366f1", // Indigo
    description: {
      'uz-Latn': "Operatsion tizim asoslari, matn muharrirlari (MS Word/Docs) va matnni formatlash san’ati.",
      'uz-Cyrl': "Операцион тизим асослари, матн муҳаррирлари (MS Word/Docs) ва матнни форматлаш санъати.",
      'ru': "Основы операционных систем, текстовые редакторы и правила структурирования документов.",
      'en': "Operating systems, text processors (Docs/Word), typography, and formatting rules."
    },
    topicsCount: 6,
    totalLessons: 20
  },
  {
    id: 6,
    title: {
      'uz-Latn': "6-sinf",
      'uz-Cyrl': "6-синф",
      'ru': "6 класс",
      'en': "Grade 6"
    },
    stage: 'middle',
    ageRange: "11–12 yosh",
    color: "#8b5cf6", // Purple
    description: {
      'uz-Latn': "Elektron jadvallar (Excel/Sheets), taqdimotlar tayyorlash va kibergigiyena qoidalari.",
      'uz-Cyrl': "Электрон жадваллар (Excel/Sheets), тақдимотлар тайёрлаш ва кибергигиена қоидалари.",
      'ru': "Электронные таблицы, создание мультимедийных презентаций и основы кибергигиены.",
      'en': "Spreadsheets (Excel/Sheets), slide decks, charts, and digital hygiene practices."
    },
    topicsCount: 6,
    totalLessons: 22
  },
  {
    id: 7,
    title: {
      'uz-Latn': "7-sinf",
      'uz-Cyrl': "7-синф",
      'ru': "7 класс",
      'en': "Grade 7"
    },
    stage: 'middle',
    ageRange: "12–13 yosh",
    color: "#ec4899", // Rose/Pink
    description: {
      'uz-Latn': "Axborotning ikkilik kodi (0 va 1), mantiqiy amallar, Python tilida birinchi dasturlar.",
      'uz-Cyrl': "Ахборотнинг иккилик коди (0 ва 1), мантиқий амаллар, Python тилида биринчи дастурлар.",
      'ru': "Двоичный код, логические операции и написание первых программ на языке Python.",
      'en': "Binary arithmetic, Boolean logic, variables, and writing first programs in Python."
    },
    topicsCount: 7,
    totalLessons: 24
  },
  {
    id: 8,
    title: {
      'uz-Latn': "8-sinf",
      'uz-Cyrl': "8-синф",
      'ru': "8 класс",
      'en': "Grade 8"
    },
    stage: 'middle',
    ageRange: "13–14 yosh",
    color: "#f59e0b", // Amber
    description: {
      'uz-Latn': "Python shartli operatorlari (if/else), takrorlanish (for/while) va HTML/CSS asoslari.",
      'uz-Cyrl': "Python шартли операторлари (if/else), такрорланиш (for/while) ва HTML/CSS асослари.",
      'ru': "Ветвления и циклы в Python, создание собственных веб-страниц с помощью HTML и CSS.",
      'en': "Control flow (if/else), loops, algorithm complexity, and HTML/CSS structure."
    },
    topicsCount: 7,
    totalLessons: 26
  },
  {
    id: 9,
    title: {
      'uz-Latn': "9-sinf",
      'uz-Cyrl': "9-синф",
      'ru': "9 класс",
      'en': "Grade 9"
    },
    stage: 'high',
    ageRange: "14–15 yosh",
    color: "#d97706", // Dark amber
    description: {
      'uz-Latn': "Python funksiyalari, massivlar (listlar), web dizayn va ma’lumotlar bazasiga kirish.",
      'uz-Cyrl': "Python функциялари, массивлар (листлар), web дизайн ва маълумотлар базасига кириш.",
      'ru': "Функции и структуры данных в Python, проектирование интерфейсов и основы баз данных.",
      'en': "Functions and data structures in Python, modern web styling, and intro to databases."
    },
    topicsCount: 8,
    totalLessons: 28
  },
  {
    id: 10,
    title: {
      'uz-Latn': "10-sinf",
      'uz-Cyrl': "10-синф",
      'ru': "10 класс",
      'en': "Grade 10"
    },
    stage: 'high',
    ageRange: "15–16 yosh",
    color: "#0d9488", // Teal
    description: {
      'uz-Latn': "Algoritmlar samaradorligi, JavaScript orqali interaktivlik, SQL so‘rovlari va kompyuter tarmoqlari.",
      'uz-Cyrl': "Алгоритмлар самарадорлиги, JavaScript орқали интерактивлик, SQL сўровлари ва компьютер тармоқлари.",
      'ru': "Эффективность алгоритмов, интерактивность с JavaScript, SQL-запросы и сетевые протоколы.",
      'en': "Algorithm efficiency (Big-O), interactive JavaScript, relational SQL, and network protocols."
    },
    topicsCount: 8,
    totalLessons: 30
  },
  {
    id: 11,
    title: {
      'uz-Latn': "11-sinf",
      'uz-Cyrl': "11-синф",
      'ru': "11 класс",
      'en': "Grade 11"
    },
    stage: 'high',
    ageRange: "16–17 yosh",
    color: "#1e293b", // Slate
    description: {
      'uz-Latn': "Sun’iy intellekt va mashinali o‘rganish, Git & GitHub, amaliy yakuniy loyihalar va IT kasblari.",
      'uz-Cyrl': "Сунъий интеллект ва машинали ўрганиш, Git & GitHub, амалий якуний лойиҳалар ва IT касблари.",
      'ru': "Искусственный интеллект и машинное обучение, Git & GitHub, выпускные проекты и IT-карьера.",
      'en': "AI/ML fundamentals, version control with Git & GitHub, capstone projects, and tech careers."
    },
    topicsCount: 8,
    totalLessons: 32
  }
];
