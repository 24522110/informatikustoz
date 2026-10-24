export interface SafetyRule {
  id: string;
  category: 'forbidden' | 'best_practice' | 'hygiene';
  title: Record<'uz-Latn' | 'uz-Cyrl' | 'ru' | 'en', string>;
  explanation: Record<'uz-Latn' | 'uz-Cyrl' | 'ru' | 'en', string>;
  legalNotice?: Record<'uz-Latn' | 'uz-Cyrl' | 'ru' | 'en', string>;
}

export const cybersecurityRules: SafetyRule[] = [
  {
    id: "sec-1",
    category: "forbidden",
    title: {
      'uz-Latn': "Birovning hisobiga (akkountiga) ruxsatsiz kirish",
      'uz-Cyrl': "Бировнинг ҳисобига (аккоунтига) рухсатсиз кириш",
      'ru': "Несанкционированный доступ к чужим аккаунтам",
      'en': "Unauthorized access to others' accounts"
    },
    explanation: {
      'uz-Latn': "Boshqalarning telefonini yashirincha tekshirish, parollarini bilib olib akkauntiga kirish qat’iyan man etiladi.",
      'uz-Cyrl': "Бошқаларнинг телефонини яширинча текшириш, паролларини билиб олиб аккаунтига кириш қатъиян ман этилади.",
      'ru': "Подглядывание чужих паролей и вход в аккаунты одноклассников строго запрещены.",
      'en': "Accessing peers' accounts or snooping on passwords without permission is strictly unethical and prohibited."
    },
    legalNotice: {
      'uz-Latn': "O‘zR Jinoyat Kodeksi 278-moddasi: Axborot tizimiga noqonuniy kirish jinoiy javobgarlikka sabab bo‘ladi.",
      'uz-Cyrl': "ЎзР Жиноят Кодекси 278-моддаси: Ахборот тизимига ноқонуний кириш жиноий жавобгарликка сабаб бўлади.",
      'ru': "Статья 278 УК РУз: Несанкционированный доступ к компьютерной информации влечет уголовную ответственность.",
      'en': "Criminal Code of Uzbekistan, Art. 278: Illegal access to computer systems carries legal liability."
    }
  },
  {
    id: "sec-2",
    category: "forbidden",
    title: {
      'uz-Latn': "Zararli dasturlar (viruslar) yaratish va tarqatish",
      'uz-Cyrl': "Зарарли дастурлар (вируслар) яратиш ва тарқатиш",
      'ru': "Создание и распространение вредоносных программ",
      'en': "Creating or disseminating malware and trojans"
    },
    explanation: {
      'uz-Latn': "Maktab kompyuterlariga yoki do‘stlaringizga tizimni buzuvchi fayllarni yuklash yoki jo‘natish taqiqlanadi.",
      'uz-Cyrl': "Мактаб компьютерларига ёки дўстларингизга тизимни бузувчи файлларни юклаш ёки жўнатиш тақиқланади.",
      'ru': "Запрещено загружать и передавать файлы, нарушающие работу школьных компьютеров или телефонов.",
      'en': "Uploading or sending files designed to crash, lock, or corrupt computer systems is prohibited."
    },
    legalNotice: {
      'uz-Latn': "O‘zR Jinoyat Kodeksi 278-6-moddasi: Zararli kompyuter dasturlarini yaratish va tarqatish taqiqlangan.",
      'uz-Cyrl': "ЎзР Жиноят Кодекси 278-6-моддаси: Зарарли компьютер дастурларини яратиш ва тарқатиш тақиқланган.",
      'ru': "Статья 278-6 УК РУз: Создание, использование и распространение вредоносных программ строго наказуемо.",
      'en': "Article 278-6: Creation and distribution of malicious computer software is unlawful."
    }
  },
  {
    id: "sec-3",
    category: "best_practice",
    title: {
      'uz-Latn': "Kuchli va takrorlanmas parol yaratish",
      'uz-Cyrl': "Кучли ва такрорланмас парол яратиш",
      'ru': "Создание надежного уникального пароля",
      'en': "Creating strong, unique passwords"
    },
    explanation: {
      'uz-Latn': "Tug‘ilgan yil, ism yoki 123456 kabi oson parollar ishlatmang. Kamida 12 ta harf, son va belgilardan iborat bo‘lsin.",
      'uz-Cyrl': "Туғилган йил, исм ёки 123456 каби осон пароллар ишлатманг. Камида 12 та ҳарф, сон ва белгилардан иборат бўлсин.",
      'ru': "Избегайте простых дат рождения и простых комбинаций. Используйте пароли длиной от 12 символов.",
      'en': "Never rely on birth years or basic sequences. Use 12+ characters mixing letters, numerals, and symbols."
    }
  },
  {
    id: "sec-4",
    category: "hygiene",
    title: {
      'uz-Latn': "Raqamli salomatlik: Ekran vaqti gigiyenasi",
      'uz-Cyrl': "Рақамли саломатлик: Экран вақти гигиенаси",
      'ru': "Цифровая гигиена: контроль экранного времени",
      'en': "Digital wellbeing: Screen time balance"
    },
    explanation: {
      'uz-Latn': "Har 30 daqiqa kompyuterda ishlagandan so‘ng 5 daqiqa ko‘z mashqlarini bajaring va uzoqqa qarang.",
      'uz-Cyrl': "Ҳар 30 дақиқа компьютерда ишлагандан сўнг 5 дақиқа кўз машқларини бажаринг ва узоққа қаранг.",
      'ru': "Каждые 30 минут работы за экраном делайте 5-минутную гимнастику для глаз и разминку.",
      'en': "After every 30 minutes of screen exposure, perform 5 minutes of distance eye relaxation."
    }
  }
];
