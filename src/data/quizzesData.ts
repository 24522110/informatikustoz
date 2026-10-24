import { QuizQuestion } from '../types';

export const initialQuizzesData: QuizQuestion[] = [
  {
    id: "q-1",
    gradeId: 1,
    topic: "hardware",
    difficulty: "easy",
    questionText: {
      'uz-Latn': "Kompyuter ekranida ma’lumotlarni, rasmlarni va multfilmlarni qaysi qurilma ko‘rsatadi?",
      'uz-Cyrl': "Компьютер экранида маълумотларни, расмларни ва мультфильмларни қайси қурилма кўрсатади?",
      'ru': "Какое устройство отображает информацию, изображения и видео на экране?",
      'en': "Which hardware device visually displays text, images, and videos?"
    },
    options: {
      'uz-Latn': ["Monitor", "Klaviatura", "Sichqoncha", "Printer"],
      'uz-Cyrl': ["Монитор", "Клавиатура", "Сичқонча", "Принтер"],
      'ru': ["Монитор", "Клавиатура", "Мышь", "Принтер"],
      'en': ["Monitor", "Keyboard", "Mouse", "Printer"]
    },
    correctOptionIndex: 0,
    explanation: {
      'uz-Latn': "Monitor — bu kompyuterning vizual chiqarish qurilmasi bo‘lib, barcha matn va tasvirlarni ekranda ko‘rsatib beradi.",
      'uz-Cyrl': "Монитор — бу компьютернинг визуал чиқариш қурилмаси бўлиб, барча матн ва тасвирларни экранда кўрсатиб беради.",
      'ru': "Монитор — это устройство вывода визуальной информации на экран.",
      'en': "A monitor is an output device designed to display graphical interface and text."
    }
  },
  {
    id: "q-2",
    gradeId: 3,
    topic: "algorithms",
    difficulty: "easy",
    questionText: {
      'uz-Latn': "'Algoritm' atamasi qaysi buyuk allomaning nomi bilan bog‘liq?",
      'uz-Cyrl': "'Алгоритм' атамаси қайси буюк алломанинг номи билан боғлиқ?",
      'ru': "С именем какого великого учёного связан термин 'алгоритм'?",
      'en': "Which historical polymath gave their name to the word 'algorithm'?"
    },
    options: {
      'uz-Latn': ["Muhammad al-Xorazmiy", "Abu Rayhon Beruniy", "Ibn Sino", "Mirzo Ulug‘bek"],
      'uz-Cyrl': ["Муҳаммад ал-Хоразмий", "Абу Райҳон Беруний", "Ибн Сино", "Мирзо Улуғбек"],
      'ru': ["Мухаммад аль-Хорезми", "Абу Райхан Беруни", "Ибн Сина", "Мирзо Улугбек"],
      'en': ["Muhammad al-Khwarizmi", "Abu Rayhan al-Biruni", "Ibn Sina (Avicenna)", "Mirzo Ulugh Beg"]
    },
    correctOptionIndex: 0,
    explanation: {
      'uz-Latn': "'Algoritm' so‘zi IX asrda yashagan buyuk matematik Muhammad ibn Muso al-Xorazmiy nomining lotincha talaffuzidan kelib chiqqan.",
      'uz-Cyrl': "'Алгоритм' сўзи IX асрда яшаган буюк математик Муҳаммад ибн Мусо ал-Хоразмий номининг лотинча талаффузидан келиб чиққан.",
      'ru': "Слово 'алгоритм' происходит от латинизированной формы имени Мухаммада ибн Мусы аль-Хорезми.",
      'en': "The word 'algorithm' stems from the Latin translation of Muhammad ibn Musa al-Khwarizmi's name."
    }
  },
  {
    id: "q-3",
    gradeId: 5,
    topic: "software",
    difficulty: "medium",
    questionText: {
      'uz-Latn': "Matn muharririda yozilgan so‘zni nusxalash (Copy) uchun klaviaturadagi qaysi tugmalar birikmasi bosiladi?",
      'uz-Cyrl': "Матн муҳарририда ёзилган сўзни нусхалаш (Copy) учун клавиатурадаги қайси тугмалар бирикмаси босилади?",
      'ru': "Какая комбинация клавиш используется для копирования выделенного текста?",
      'en': "Which keyboard shortcut copies selected text to the clipboard?"
    },
    options: {
      'uz-Latn': ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + P"],
      'uz-Cyrl': ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + P"],
      'ru': ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + P"],
      'en': ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + P"]
    },
    correctOptionIndex: 0,
    explanation: {
      'uz-Latn': "Ctrl + C nusxa oladi (Copy), Ctrl + V esa olingan nusxani joylashtiradi (Paste).",
      'uz-Cyrl': "Ctrl + C нусха олади (Copy), Ctrl + V эса олинган нусхани жойлаштиради (Paste).",
      'ru': "Ctrl + C выполняет копирование в буфер обмена, а Ctrl + V — вставку.",
      'en': "Ctrl + C copies data to clipboard, while Ctrl + V pastes it."
    }
  },
  {
    id: "q-4",
    gradeId: 7,
    topic: "python",
    difficulty: "medium",
    questionText: {
      'uz-Latn': "Python tilida ekranga 'Informatika' so‘zini chiqarish uchun qaysi kod to‘g‘ri yozilgan?",
      'uz-Cyrl': "Python тилида экранга 'Информатика' сўзини чиқариш учун қайси код тўғри ёзилган?",
      'ru': "Какой вариант кода на Python корректно выводит слово 'Информатика'?",
      'en': "Which Python statement correctly outputs the word 'Informatika'?"
    },
    options: {
      'uz-Latn': [
        "print(\"Informatika\")",
        "echo(\"Informatika\")",
        "output \"Informatika\"",
        "Print(Informatika)"
      ],
      'uz-Cyrl': [
        "print(\"Информатика\")",
        "echo(\"Информатика\")",
        "output \"Информатика\"",
        "Print(Информатика)"
      ],
      'ru': [
        "print(\"Информатика\")",
        "echo(\"Информатика\")",
        "output \"Информатика\"",
        "Print(Информатика)"
      ],
      'en': [
        "print(\"Informatika\")",
        "echo(\"Informatika\")",
        "output \"Informatika\"",
        "Print(Informatika)"
      ]
    },
    correctOptionIndex: 0,
    explanation: {
      'uz-Latn': "Python tilida ekranga ma’lumot chiqarish print() kichik harflar bilan va matn qo‘shtirnoq ichida yozilishi shart.",
      'uz-Cyrl': "Python тилида экранга маълумот чиқариш print() кичик ҳарфлар билан ва матн қўштирноқ ичида ёзилиши шарт.",
      'ru': "Функция print() пишется строчными буквами, а текстовый литерал обязательно обрамляется кавычками.",
      'en': "The print() function is lowercase and string arguments must be enclosed in quotation marks."
    }
  },
  {
    id: "q-5",
    gradeId: 9,
    topic: "cybersecurity",
    difficulty: "hard",
    questionText: {
      'uz-Latn': "Quyidagilardan qaysi biri eng ishonchli va kuchli parol hisoblanadi?",
      'uz-Cyrl': "Қуйидагилардан қайси бири энг ишончли ва кучли парол ҳисобланади?",
      'ru': "Какой из следующих паролей является наиболее надёжным и стойким к подбору?",
      'en': "Which of the following is considered the strongest and most resilient password?"
    },
    options: {
      'uz-Latn': [
        "K!tab2026#Toshkent",
        "12345678",
        "azizbek2010",
        "password123"
      ],
      'uz-Cyrl': [
        "K!tab2026#Toshkent",
        "12345678",
        "azizbek2010",
        "password123"
      ],
      'ru': [
        "K!tab2026#Toshkent",
        "12345678",
        "azizbek2010",
        "password123"
      ],
      'en': [
        "K!tab2026#Toshkent",
        "12345678",
        "azizbek2010",
        "password123"
      ]
    },
    correctOptionIndex: 0,
    explanation: {
      'uz-Latn': "Kuchli parol kamida 12 ta belgidan iborat bo‘lishi, katta va kichik harflar, sonlar hamda maxsus belgilarni (!, #, $, @) o‘z ichiga olishi kerak.",
      'uz-Cyrl': "Кучли парол камида 12 та белгидан иборат бўлиши, катта ва кичик ҳарфлар, сонлар ҳамда махсус белгиларни (!, #, $, @) ўз ичига олиши керак.",
      'ru': "Стойкий пароль содержит от 12 символов, сочетая заглавные и строчные буквы, цифры и спецсимволы.",
      'en': "A resilient password exceeds 12 characters and mixes lowercase, uppercase, numbers, and special symbols."
    }
  },
  {
    id: "q-6",
    gradeId: 11,
    topic: "ai",
    difficulty: "hard",
    questionText: {
      'uz-Latn': "Mashinali o‘rganishda to‘g‘ri javoblari (label) bilan belgilangan ma’lumotlar asosida modelni o‘qitish nima deb ataladi?",
      'uz-Cyrl': "Машинали ўрганишда тўғри жавоблари (label) билан белгиланган маълумотлар асосида моделни ўқитиш нима деб аталади?",
      'ru': "Как называется обучение модели машинного обучения на заранее размеченных данных с известными ответами?",
      'en': "What is machine learning with pre-labeled ground truth datasets called?"
    },
    options: {
      'uz-Latn': [
        "Nazorat ostida o‘rganish (Supervised Learning)",
        "Nazoratsiz o‘rganish (Unsupervised Learning)",
        "Mustahkamlovchi o‘rganish (Reinforcement Learning)",
        "Tasodifiy o‘rganish (Random Walk)"
      ],
      'uz-Cyrl': [
        "Назорат остида ўрганиш (Supervised Learning)",
        "Назоратсиз ўрганиш (Unsupervised Learning)",
        "Мустаҳкамловчи ўрганиш (Reinforcement Learning)",
        "Тасодифий ўрганиш (Random Walk)"
      ],
      'ru': [
        "Обучение с учителем (Supervised Learning)",
        "Обучение без учителя (Unsupervised Learning)",
        "Обучение с подкреплением (Reinforcement Learning)",
        "Случайное блуждание (Random Walk)"
      ],
      'en': [
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Random Walk"
      ]
    },
    correctOptionIndex: 0,
    explanation: {
      'uz-Latn': "Nazorat ostida o‘rganish (Supervised Learning) — har bir kirish qiymatiga mos to‘g‘ri javob (masalan: rasm va undagi meva nomi) oldindan ma’lum bo‘lgan usuldir.",
      'uz-Cyrl': "Назорат остида ўрганиш (Supervised Learning) — ҳар бир кириш қийматига мос тўғри жавоб (масалан: расм ва ундаги мева номи) олдиндан маълум бўлган усулдир.",
      'ru': "В обучении с учителем (Supervised Learning) каждому образцу входных данных заранее сопоставлен целевой класс (метка).",
      'en': "Supervised learning maps inputs to verified output targets (labels) provided during training."
    }
  }
];
