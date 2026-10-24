import { CareerItem } from '../types';

export const initialCareersData: CareerItem[] = [
  {
    id: "frontend-dev",
    title: {
      'uz-Latn': "Frontend Dasturchi",
      'uz-Cyrl': "Frontend Дастурчи",
      'ru': "Frontend-разработчик",
      'en': "Frontend Developer"
    },
    shortDescription: {
      'uz-Latn': "Veb-saytlar va ilovalarning foydalanuvchi ko‘radigan, tugmalari bosiladigan interfeysini yaratadi.",
      'uz-Cyrl': "Веб-сайтлар ва иловаларнинг фойдаланувчи кўрадиган, тугмалари босиладиган интерфейсини яратади.",
      'ru': "Создает визуальную и интерактивную часть сайтов, с которой взаимодействует пользователь.",
      'en': "Engineers the user-facing visual and interactive interfaces of web applications."
    },
    responsibilities: {
      'uz-Latn': [
        "Chiroyli va qulay veb-sahifalar kodini yozish",
        "Sayt telefon, planshet va kompyuterda birdek yaxshi ko‘rinishini ta’minlash",
        "Foydalanuvchi qulayligini (UX) oshirish"
      ],
      'uz-Cyrl': [
        "Чиройли ва қулай веб-саҳифалар кодини ёзиш",
        "Сайт телефон, планшет ва компьютерда бирдек яхши кўринишини таъминлаш",
        "Фойдаланувчи қулайлигини (UX) ошириш"
      ],
      'ru': [
        "Разработка удобных и адаптивных веб-интерфейсов",
        "Обеспечение кросс-браузерной совместимости и скорости загрузки",
        "Взаимодействие с дизайнерами и бэкенд-разработчиками"
      ],
      'en': [
        "Constructing responsive, high-performance web pages",
        "Ensuring seamless experiences across mobile, tablet, and desktop",
        "Translating UI design systems into functional frontend code"
      ]
    },
    requiredSkills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
    schoolSubjects: {
      'uz-Latn': ["Informatika", "Geometriya va Tasviriy san’at", "Ingliz tili"],
      'uz-Cyrl': ["Информатика", "Геометрия ва Тасвирий санъат", "Инглиз тили"],
      'ru': ["Информатика", "Геометрия и Рисование", "Английский язык"],
      'en': ["Computer Science", "Geometry & Design", "English"]
    },
    starterProject: {
      'uz-Latn': "HTML va CSS yordamida o‘zingizning birinchi shaxsiy rezyume veb-sahifangizni yaratish.",
      'uz-Cyrl': "HTML ва CSS ёрдамида ўзингизнинг биринчи шахсий резюме веб-саҳифангизни яратиш.",
      'ru': "Создание персональной веб-страницы портфолио с помощью HTML и CSS.",
      'en': "Building your first single-page portfolio resume using HTML and CSS."
    },
    averageSalaryUz: "6 000 000 – 25 000 000 UZS",
    iconName: "layout"
  },
  {
    id: "backend-dev",
    title: {
      'uz-Latn': "Backend Dasturchi",
      'uz-Cyrl': "Backend Дастурчи",
      'ru': "Backend-разработчик",
      'en': "Backend Developer"
    },
    shortDescription: {
      'uz-Latn': "Ilovaning server tomoni, ma’lumotlar bazasi va biznes mantiqini dasturlaydi.",
      'uz-Cyrl': "Илованинг сервер томони, маълумотлар базаси ва бизнес мантиқини дастурлайди.",
      'ru': "Отвечает за серверную логику, безопасность и базы данных веб-приложений.",
      'en': "Architects server-side logic, database structures, and secure API gateways."
    },
    responsibilities: {
      'uz-Latn': [
        "Ma’lumotlar bazasini xavfsiz va tezkor loyihalash",
        "Foydalanuvchi ma’lumotlarini himoya qilish",
        "Frontend bilan aloqa qiluvchi API yaratish"
      ],
      'uz-Cyrl': [
        "Маълумотлар базасини хавфсиз ва тезкор лойиҳалаш",
        "Фойдаланувчи маълумотларини ҳимоя қилиш",
        "Frontend билан алоқа қилувчи API яратиш"
      ],
      'ru': [
        "Проектирование баз данных и оптимизация запросов",
        "Защита конфиденциальных данных и авторизация",
        "Создание API для интеграции с клиентскими приложениями"
      ],
      'en': [
        "Architecting robust database schemas and queries",
        "Safeguarding confidential user credentials and data",
        "Building RESTful and GraphQL APIs for client apps"
      ]
    },
    requiredSkills: ["Python", "Node.js", "PostgreSQL", "REST API", "Docker"],
    schoolSubjects: {
      'uz-Latn': ["Informatika", "Algebra va Matematika", "Mantiq"],
      'uz-Cyrl': ["Информатика", "Алгебра ва Математика", "Мантиқ"],
      'ru': ["Информатика", "Алгебра и Высшая математика", "Логика"],
      'en': ["Computer Science", "Algebra & Mathematics", "Formal Logic"]
    },
    starterProject: {
      'uz-Latn': "Python va SQLite yordamida maktab kutubxonasi kitoblarini hisobga oluvchi dastur tuzish.",
      'uz-Cyrl': "Python ва SQLite ёрдамида мактаб кутубхонаси китобларини ҳисобга олувчи дастур тузиш.",
      'ru': "Разработка системы учета школьной библиотеки на Python и SQLite.",
      'en': "Developing a school library catalog book manager using Python and SQLite."
    },
    averageSalaryUz: "8 000 000 – 30 000 000 UZS",
    iconName: "server"
  },
  {
    id: "cyber-specialist",
    title: {
      'uz-Latn': "Kiberxavfsizlik Mutaxassisi",
      'uz-Cyrl': "Киберхавфсизлик Мутахассиси",
      'ru': "Специалист по кибербезопасности",
      'en': "Cybersecurity Specialist"
    },
    shortDescription: {
      'uz-Latn': "Tizimlarni xakerlar, viruslar va kiberhujumlardan himoya qiluvchi raqamli posbon.",
      'uz-Cyrl': "Тизимларни хакерлар, вируслар ва киберҳужумлардан ҳимоя қилувчи рақамли посбон.",
      'ru': "Обеспечивает цифровую защиту систем, предотвращая утечки данных и кибератаки.",
      'en': "Defends digital infrastructure against unauthorized intrusions, malware, and exploits."
    },
    responsibilities: {
      'uz-Latn': [
        "Zaifliklarni aniqlash va bartaraf etish",
        "Xavfsizlik protokollarini o‘rnatish",
        "Xodimlarga kibergigiyena qoidalarini o‘rgatish"
      ],
      'uz-Cyrl': [
        "Заифликларни аниқлаш ва бартараф этиш",
        "Хавфсизлик протоколларини ўрнатиш",
        "Ходимларга кибергигиена қоидаларини ўргатиш"
      ],
      'ru': [
        "Аудит защищенности и выявление уязвимостей",
        "Настройка межсетевых экранов и систем шифрования",
        "Расследование инцидентов информационной безопасности"
      ],
      'en': [
        "Conducting vulnerability audits and penetration tests",
        "Implementing encrypted transport and intrusion detection",
        "Investigating security anomalies and defending networks"
      ]
    },
    requiredSkills: ["Linux", "Tarmoq protokollari (TCP/IP)", "Kriptografiya", "Python"],
    schoolSubjects: {
      'uz-Latn': ["Informatika", "Fizika", "Chet tili"],
      'uz-Cyrl': ["Информатика", "Физика", "Чет тили"],
      'ru': ["Информатика", "Физика", "Иностранные языки"],
      'en': ["Computer Science", "Physics", "Foreign Languages"]
    },
    starterProject: {
      'uz-Latn': "Kuchsiz parollarni aniqlovchi va xavfsiz parollar generatori dasturini yaratish.",
      'uz-Cyrl': "Кучсиз паролларни аниқловчи ва хавфсиз пароллар генератори дастурини яратиш.",
      'ru': "Создание безопасного генератора и анализатора надежности паролей.",
      'en': "Creating a secure entropy-based password generator and strength evaluator."
    },
    averageSalaryUz: "10 000 000 – 35 000 000 UZS",
    iconName: "shield"
  },
  {
    id: "ai-engineer",
    title: {
      'uz-Latn': "AI va Data Science Muhandisi",
      'uz-Cyrl': "AI ва Data Science Муҳандиси",
      'ru': "Инженер по ИИ и науке о данных",
      'en': "AI & Data Science Engineer"
    },
    shortDescription: {
      'uz-Latn': "Katta hajmdagi ma’lumotlarni tahlil qiladi va aqlli neyron tarmoqlarini yaratadi.",
      'uz-Cyrl': "Катта ҳажмдаги маълумотларни таҳлил қилади ва ақлли нейрон тармоқларини яратади.",
      'ru': "Разрабатывает нейросети, алгоритмы компьютерного зрения и прогнозные модели.",
      'en': "Analyzes big data and trains deep learning models for classification, forecasting, and NLP."
    },
    responsibilities: {
      'uz-Latn': [
        "Ma’lumotlar to‘plamini (dataset) tayyorlash",
        "Mashinali o‘rganish modellarini o‘qitish va optimallashtirish",
        "Sun’iy intellekt xulosalarini hayotga tatbiq etish"
      ],
      'uz-Cyrl': [
        "Маълумотлар тўпламини (dataset) тайёрлаш",
        "Машинали ўрганиш моделларини ўқитиш ва оптималлаштириш",
        "Сунъий интеллект хулосаларини ҳаётга татбиқ этиш"
      ],
      'ru': [
        "Сбор, очистка и разметка больших наборов данных",
        "Обучение и валидация архитектур глубокого обучения",
        "Внедрение алгоритмов машинного зрения и обработки языка"
      ],
      'en': [
        "Curating, cleaning, and labeling dataset pipelines",
        "Training and fine-tuning neural network models",
        "Deploying predictive inference services to production"
      ]
    },
    requiredSkills: ["Python", "TensorFlow / PyTorch", "Ehtimollar nazariyasi", "Pandas", "Matematik statistika"],
    schoolSubjects: {
      'uz-Latn': ["Matematika va Algebra", "Informatika", "Ingliz tili"],
      'uz-Cyrl': ["Математика ва Алгебра", "Информатика", "Инглиз тили"],
      'ru': ["Математика и Математический анализ", "Информатика", "Английский"],
      'en': ["Advanced Mathematics", "Computer Science", "English"]
    },
    starterProject: {
      'uz-Latn': "Qo‘lda yozilgan raqamlarni (0–9) taniydigan birinchi sodda modelni o‘qitish.",
      'uz-Cyrl': "Қўлда ёзилган рақамларни (0–9) танийдиган биринчи содда моделни ўқитиш.",
      'ru': "Обучение классификатора рукописных цифр на датасете MNIST.",
      'en': "Training a basic handwritten digit recognition model on the MNIST dataset."
    },
    averageSalaryUz: "12 000 000 – 40 000 000 UZS",
    iconName: "cpu"
  }
];
