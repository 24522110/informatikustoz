import { GlossaryTerm } from '../types';

export const initialGlossaryData: GlossaryTerm[] = [
  {
    id: "term-1",
    term: {
      'uz-Latn': "Algoritm",
      'uz-Cyrl': "Алгоритм",
      'ru': "Алгоритм",
      'en': "Algorithm"
    },
    shortDefinition: {
      'uz-Latn': "Qo‘yilgan maqsadga erishish uchun bajariladigan aniq ko‘rsatmalar ketma-ketligi.",
      'uz-Cyrl': "Қўйилган мақсадга эришиш учун бажариладиган аниқ кўрсатмалар кетма-кетлиги.",
      'ru': "Точная последовательность команд, приводящая к решению задачи.",
      'en': "A precise step-by-step sequence of instructions designed to solve a problem."
    },
    fullExplanation: {
      'uz-Latn': "Bu atama buyuk o‘zbek matematigi Muhammad al-Xorazmiy nomidan kelib chiqqan. Har qanday dastur kompyuter tushunadigan algoritm asosida ishlaydi.",
      'uz-Cyrl': "Бу атама буюк ўзбек математиги Муҳаммад ал-Хоразмий номидан келиб чиққан. Ҳар қандай дастур компьютер тушунадиган алгоритм асосида ишлайди.",
      'ru': "Термин происходит от имени математика Мухаммада аль-Хорезми. Любая компьютерная программа строится на алгоритмах.",
      'en': "Derived from polymath Muhammad al-Khwarizmi. Every software application executes programmatic algorithms."
    },
    realLifeExample: {
      'uz-Latn': "Osh pishirish retsepti yoki ertalabki kiyinish tartibi.",
      'uz-Cyrl': "Ош пишириш рецепти ёки эрталабки кийиниш тартиби.",
      'ru': "Кулинарный рецепт плова или утренний распорядок дня.",
      'en': "A cooking recipe for palov or a morning school checklist."
    },
    gradeLevel: 3,
    category: "algorithms"
  },
  {
    id: "term-2",
    term: {
      'uz-Latn': "Bit va Bayt",
      'uz-Cyrl': "Бит ва Байт",
      'ru': "Бит и Байт",
      'en': "Bit & Byte"
    },
    shortDefinition: {
      'uz-Latn': "Raqamli axborotning eng kichik o‘lchov birliklari.",
      'uz-Cyrl': "Рақамли ахборотнинг энг кичик ўлчов бирликлари.",
      'ru': "Базовые единицы измерения цифровой информации.",
      'en': "Fundamental units of digital data measurement."
    },
    fullExplanation: {
      'uz-Latn': "Bit (binary digit) — 0 yoki 1 qiymatini oladi. 8 ta bit birlashib 1 Baytni (Byte) hosil qiladi. 1 Bayt bitta harfni ifodalashga yetadi.",
      'uz-Cyrl': "Бит (binary digit) — 0 ёки 1 қийматини олади. 8 та бит бирлашиб 1 Байтни (Byte) ҳосил қилади. 1 Байт битта ҳарфни ифодалашга етади.",
      'ru': "Бит принимает значение 0 или 1. Восемь бит составляют один байт, в котором можно закодировать один символ.",
      'en': "A bit is a single binary 0 or 1. Eight bits form one Byte, sufficient to store a single ASCII character."
    },
    realLifeExample: {
      'uz-Latn': "Bitta 'A' harfi xotirada 1 bayt (8 ta nol va birlar) joy egallaydi.",
      'uz-Cyrl': "Битта 'A' ҳарфи хотирада 1 байт (8 та нол ва бирлар) жой эгаллайди.",
      'ru': "Один символ 'А' в кодировке занимает ровно 1 байт памяти.",
      'en': "The single letter 'A' occupies exactly 1 Byte in computer memory."
    },
    gradeLevel: 7,
    category: "fundamentals"
  },
  {
    id: "term-3",
    term: {
      'uz-Latn': "Fishing (Phishing)",
      'uz-Cyrl': "Фишинг (Phishing)",
      'ru': "Фишинг (Phishing)",
      'en': "Phishing"
    },
    shortDefinition: {
      'uz-Latn': "Soxta xabar va saytlar orqali parollarni aldov yo‘li bilan o‘g‘irlash.",
      'uz-Cyrl': "Сохта хабар ва сайтлар орқали паролларни алдов йўли билан ўғирлаш.",
      'ru': "Вид интернет-мошенничества с целью кражи учетных записей через поддельные страницы.",
      'en': "Cyber deception designed to trick users into revealing credentials on spoofed sites."
    },
    fullExplanation: {
      'uz-Latn': "Kiberjinoyatchilar haqiqiy saytga o‘xshash soxta sahifa yaratib, foydalanuvchiga 'Sovg‘a yutdingiz' deb havola jo‘natadi.",
      'uz-Cyrl': "Кибержиноятчилар ҳақиқий сайтга ўхшаш сохта саҳифа яратиб, фойдаланувчига 'Совға ютдингиз' деб ҳавола жўнатади.",
      'ru': "Злоумышленники создают сайты-клоны известных сервисов для перехвата логинов и паролей жертв.",
      'en': "Attackers replicate popular web portals to harvest submitted credentials and OTPs."
    },
    realLifeExample: {
      'uz-Latn': "Telegramda 'Sizga bepul bonus' deb kelgan shubhali havola.",
      'uz-Cyrl': "Telegramда 'Сизга бепул бонус' деб келган шубҳали ҳавола.",
      'ru': "Подозрительное сообщение в мессенджере о 'бесплатном подарке' с ссылкой.",
      'en': "A suspicious SMS offering cash prizes via an unverified domain."
    },
    gradeLevel: 8,
    category: "cybersecurity"
  },
  {
    id: "term-4",
    term: {
      'uz-Latn': "Sun’iy intellekt (AI)",
      'uz-Cyrl': "Сунъий интеллект (AI)",
      'ru': "Искусственный интеллект (ИИ)",
      'en': "Artificial Intelligence (AI)"
    },
    shortDefinition: {
      'uz-Latn': "Inson aqli talab qilinadigan vazifalarni bajara oladigan kompyuter tizimlari.",
      'uz-Cyrl': "Инсон ақли талаб қилинадиган вазифаларни бажара оладиган компьютер тизимлари.",
      'ru': "Способность компьютерных систем решать творческие и логические задачи человека.",
      'en': "Computational systems engineered to execute cognitive tasks associated with human intelligence."
    },
    fullExplanation: {
      'uz-Latn': "Matnni tarjima qilish, tasvirlarni tanish, tibbiyotda kasalliklarni aniqlash va avtomobilni haydovchisiz boshqarishda qo‘llaniladi.",
      'uz-Cyrl': "Матнни таржима қилиш, тасвирларни таниш, тиббиётда касалликларни аниқлаш ва автомобилни ҳайдовчисиз бошқаришда қўлланилади.",
      'ru': "Используется для распознавания речи, компьютерного зрения, медицинской диагностики и самоуправляемых машин.",
      'en': "Utilized in natural language translation, machine vision, medical diagnostic support, and autonomous vehicles."
    },
    realLifeExample: {
      'uz-Latn': "Rasmdagi mushuk yoki itni avtomatik ajratib beruvchi ilova.",
      'uz-Cyrl': "Расмдаги мушук ёки итни автоматик ажратиб берувчи илова.",
      'ru': "Приложение в телефоне, распознающее лица на фотографиях.",
      'en': "Smartphone camera apps that automatically recognize faces or translate road signs."
    },
    gradeLevel: 10,
    category: "ai"
  }
];
