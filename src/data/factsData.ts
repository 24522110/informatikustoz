import { FactItem } from '../types';

export const initialFactsData: FactItem[] = [
  {
    id: "f-1",
    title: {
      'uz-Latn': "Al-Xorazmiy va zamonaviy algoritm",
      'uz-Cyrl': "Ал-Хоразмий ва замонавий алгоритм",
      'ru': "Аль-Хорезми и современный алгоритм",
      'en': "Al-Khwarizmi & the Modern Algorithm"
    },
    factText: {
      'uz-Latn': "Bugungi barcha kompyuter dasturlari va sun’iy intellektning poydevori bo‘lgan 'Algoritm' so‘zi IX asrda yashab ijod etgan o‘zbek allomasi Muhammad ibn Muso al-Xorazmiy nomi bilan atalgan.",
      'uz-Cyrl': "Бугунги барча компьютер дастурлари ва сунъий интеллектнинг пойдевори бўлган 'Алгоритм' сўзи IX асрда яшаб ижод этган ўзбек алломаси Муҳаммад ибн Мусо ал-Хоразмий номи билан аталган.",
      'ru': "Фундаментальный термин 'алгоритм', лежащий в основе всех программ и ИИ, увековечил имя великого среднеазиатского учёного Мухаммада аль-Хорезми.",
      'en': "The foundational term 'algorithm', governing modern software and AI models, directly commemorates 9th-century polymath Muhammad ibn Musa al-Khwarizmi."
    },
    source: "O‘zbekiston Fanlar akademiyasi, Tarix instituti",
    category: "history",
    verifiedDate: "2026-10-01"
  },
  {
    id: "f-2",
    title: {
      'uz-Latn': "Dunyoning birinchi dasturchisi",
      'uz-Cyrl': "Дунёнинг биринчи дастурчиси",
      'ru': "Первый в мире программист",
      'en': "The World's First Programmer"
    },
    factText: {
      'uz-Latn': "Tarixdagi ilk dasturchi ayol kishi bo‘lgan — Ada Lavleys (Ada Lovelace). U 1843-yilda Charlz Bebbijning mexanik hisoblash mashinasi uchun birinchi dastur algoritmini yozgan.",
      'uz-Cyrl': "Тарихдаги илк дастурчи аёл киши бўлган — Ада Лавлейс (Ada Lovelace). У 1843 йилда Чарльз Бэббижнинг механик ҳисоблаш машинаси учун биринчи дастур алгоритмини ёзган.",
      'ru': "Первым программистом в истории была женщина — Ада Лавлейс, написавшая алгоритм для механической аналитической машины в 1843 году.",
      'en': "Ada Lovelace is recognized as the world's first computer programmer, having authored an analytical engine algorithm in 1843."
    },
    source: "Britannica Encyclopedia, Computing History",
    category: "history",
    verifiedDate: "2026-10-01"
  },
  {
    id: "f-3",
    title: {
      'uz-Latn': "O‘zbekistonda IT Park va raqamli iqtisodiyot",
      'uz-Cyrl': "Ўзбекистонда IT Park ва рақамли иқтисодиёт",
      'ru': "IT Park и цифровая экономика в Узбекистане",
      'en': "IT Park & Digital Economy in Uzbekistan"
    },
    factText: {
      'uz-Latn': "O‘zbekistonda IT xizmatlari eksporti so‘nggi yillarda yuzlab million dollardan oshdi, IT Park rezidentlari soni esa 2000 dan ziyod kompaniyaga yetdi.",
      'uz-Cyrl': "Ўзбекистонда IT хизматлари экспорти сўнгги йилларда юзлаб миллион доллардан ошди, IT Park резидентлари сони эса 2000 дан зиёд компанияга етди.",
      'ru': "Экспорт IT-услуг из Узбекистана превысил сотни миллионов долларов, а число резидентов IT Park превышает две тысячи компаний.",
      'en': "IT services exports from Uzbekistan exceed hundreds of millions of dollars annually, with over 2,000 technology resident companies at IT Park."
    },
    source: "O‘zbekiston Respublikasi Raqamli texnologiyalar vazirligi",
    category: "local",
    verifiedDate: "2026-10-15"
  }
];
