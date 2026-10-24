import { LessonContent } from '../types';

export const initialLessonsData: LessonContent[] = [
  // Grade 1
  {
    id: "g1-l1",
    gradeId: 1,
    subjectCategory: "hardware",
    title: {
      'uz-Latn': "Kompyuter nima va uning asosiy qismlari",
      'uz-Cyrl': "Компьютер нима ва унинг асосий қисмлари",
      'ru': "Что такое компьютер и его основные части",
      'en': "What is a Computer and its Main Parts"
    },
    objectives: {
      'uz-Latn': [
        "Kompyuter nima uchun kerakligini bilib olish",
        "Monitor, tizim bloki, klaviatura va sichqonchani farqlash",
        "Kompyuter xonasida xavfsizlik qoidalariga rioya qilish"
      ],
      'uz-Cyrl': [
        "Компьютер нима учун кераклигини билиб олиш",
        "Монитор, тизим блоки, клавиатура ва сичқончани фарқлаш",
        "Компьютер хонасида хавфсизлик қоидаларига риоя қилиш"
      ],
      'ru': [
        "Понять назначение компьютера в повседневной жизни",
        "Научиться различать монитор, системный блок, клавиатуру и мышь",
        "Соблюдать правила безопасного поведения в компьютерном классе"
      ],
      'en': [
        "Understand what a computer is used for",
        "Identify the monitor, system unit, keyboard, and mouse",
        "Learn basic classroom safety and ergonomics"
      ]
    },
    prerequisites: {
      'uz-Latn': "Hech qanday boshlang‘ich bilim talab etilmaydi.",
      'uz-Cyrl': "Ҳеч қандай бошланғич билим талаб этилмайди.",
      'ru': "Предварительные знания не требуются.",
      'en': "No prior experience required."
    },
    durationMinutes: 30,
    difficulty: "easy",
    lectureText: {
      'uz-Latn': "Kompyuter — bu insonning eng yaqin raqamli yordamchisi. U bizga kitob o‘qish, rasm chizish, qiziqarli o‘yinlar o‘ynash va hisob-kitob qilishda yordam beradi.\n\nKompyuter to‘rtta asosiy qismdan iborat:\n1. **Monitor** — bu kompyuterning ko‘zi va yuzi. U hamma natijalarni ekranda ko‘rsatadi.\n2. **Tizim bloki** — kompyuterning yuragi va 'miyasi'. Hamma hisob-kitoblar uning ichida bajariladi.\n3. **Klaviatura** — harflar va sonlarni kiritish vositasi.\n4. **Sichqoncha** — ekrandagi ko‘rsatgichni boshqarish uchun qulay qurilma.",
      'uz-Cyrl': "Компьютер — бу инсоннинг энг яқин рақамли ёрдамчиси. У бизга китоб ўқиш, расм чизиш, қизиқарли ўйинлар ўйнаш ва ҳисоб-китоб қилишда ёрдам беради.\n\nКомпьютер тўртта асосий қисмдан иборат:\n1. **Монитор** — бу компьютернинг кўзи ва юзи. У ҳамма натижаларни экранда кўрсатади.\n2. **Тизим блоки** — компьютернинг юраги ва 'мияси'. Ҳамма ҳисоб-китоблар унинг ичида бажарилади.\n3. **Клавиатура** — ҳарфлар ва сонларни киритиш воситаси.\n4. **Сичқонча** — экрандаги кўрсатгични бошқариш учун қулай қурилма.",
      'ru': "Компьютер — это наш надежный электронный помощник. Он помогает учиться, рисовать, слушать музыку и вычислять.\n\nОн состоит из 4 главных частей:\n1. **Монитор** — показывает картинки, текст и видео.\n2. **Системный блок** — 'мозг' компьютера, где хранятся и обрабатываются программы.\n3. **Клавиатура** — инструмент для ввода букв и цифр.\n4. **Мышь** — позволяет указывать на предметы на экране.",
      'en': "A computer is an electronic helper that assists us in studying, drawing, writing, and calculations.\n\nMain parts:\n1. **Monitor** — displays graphics, text, and videos.\n2. **System Unit** — the 'brain' that processes all instructions.\n3. **Keyboard** — used to type letters and numbers.\n4. **Mouse** — guides the pointer across the screen."
    },
    realLifeExample: {
      'uz-Latn': "Kompyuterni inson tanasi bilan solishtirish mumkin: Monitor — bu yuz va ko‘zlar, tizim bloki — bu fikrlovchi miya, sichqoncha va klaviatura esa buyruq beruvchi qo‘llarimizga o‘xshaydi.",
      'uz-Cyrl': "Компьютерни инсон танаси билан солиштириш мумкин: Монитор — бу юз ва кўзлар, тизим блоки — бу фикрловчи мия, сичқонча ва клавиатура эса буйруқ берувчи қўлларимизга ўхшайди.",
      'ru': "Компьютер похож на человека: системный блок — это думающий мозг, монитор — лицо и глаза, а клавиатура и мышь — руки, которые выполняют команды.",
      'en': "Think of a computer like a person: the system unit is the brain, the monitor is the face/eyes, and the keyboard and mouse are the hands taking action."
    },
    stepByStepGuide: {
      'uz-Latn': [
        "1. Kresloga to‘g‘ri o‘tiring, ko‘zingiz va monitor orasida kamida 50 sm masofa bo‘lsin.",
        "2. Tizim blokidagi katta doira shaklidagi quvvat (Power) tugmasini bosing.",
        "3. Monitor ekranida chiroq yonishini va ish stoli paydo bo‘lishini kuting.",
        "4. Sichqonchani qo‘lingizga olib, ekranda kursor qanday harakatlanishini kuzating."
      ],
      'uz-Cyrl': [
        "1. Креслога тўғри ўтиринг, кўзингиз ва монитор орасида камида 50 см масофа бўлсин.",
        "2. Тизим блокидаги катта доира шаклидаги қувват (Power) тугмасини босинг.",
        "3. Монитор экранида чироқ ёнишини ва иш столи пайдо бўлишини кутинг.",
        "4. Сичқончани қўлингизга олиб, экранда курсор қандай ҳаракатланишини кузатинг."
      ],
      'ru': [
        "1. Сядьте ровно, расстояние между глазами и монитором должно быть не менее 50 см.",
        "2. Нажмите кнопку включения (Power) на системном блоке.",
        "3. Дождитесь появления рабочего стола на мониторе.",
        "4. Возьмите мышку и подвигайте её, наблюдая за стрелкой курсора."
      ],
      'en': [
        "1. Sit upright, maintaining at least 50 cm distance from the screen.",
        "2. Press the circular Power button on the system unit.",
        "3. Wait for the operating system desktop to appear on the monitor.",
        "4. Hold the mouse gently and practice moving the cursor across the screen."
      ]
    },
    commonMistakes: {
      'uz-Latn': [
        "Kompyuter ekraniga juda yaqin o‘tirish (ko‘z toliqishiga olib keladi)",
        "Kompyuter xonasiga suyuqlik yoki oziq-ovqat olib kirish",
        "Elektr simlariga va rozetkalarga tegish"
      ],
      'uz-Cyrl': [
        "Компьютер экранига жуда яқин ўтириш (кўз толиқишига олиб келади)",
        "Компьютер хонасига суюқлик ёки озиқ-овқат олиб кириш",
        "Электр симларига ва розеткаларга тегиш"
      ],
      'ru': [
        "Сидеть слишком близко к экрану (устают глаза)",
        "Приносить напитки и еду к компьютеру",
        "Трогать провода и разъёмы питания"
      ],
      'en': [
        "Sitting too close to the monitor (causes eye strain)",
        "Bringing liquids or snacks to the computer desk",
        "Touching power cables and sockets"
      ]
    },
    homework: {
      'uz-Latn': "Daftaringizga monitor va sichqonchaning rasmini chizing hamda ularning nomlarini yozing.",
      'uz-Cyrl': "Дафтарингизга монитор ва сичқончанинг расмини чизинг ҳамда уларнинг номларини ёзинг.",
      'ru': "Нарисуйте в тетради монитор и мышь, подпишите их названия.",
      'en': "Draw a monitor and a computer mouse in your notebook and label their names."
    },
    status: "published",
    updatedAt: "2026-10-20",
    sources: [
      "Informatika va axborot texnologiyalari: 1-sinf metodik qo‘llanmasi, Toshkent, 2024",
      "Umumiy o‘rta ta’lim davlat ta’lim standarti, 2023"
    ]
  },

  // Grade 2
  {
    id: "g2-l1",
    gradeId: 2,
    subjectCategory: "fundamentals",
    title: {
      'uz-Latn': "Axborot nima va uning turlari (Matn, Rasm, Tovush)",
      'uz-Cyrl': "Ахборот нима ва унинг турлари (Матн, Расм, Товуш)",
      'ru': "Что такое информация и её виды (Текст, Изображение, Звук)",
      'en': "What is Information and its Types (Text, Image, Sound)"
    },
    objectives: {
      'uz-Latn': [
        "Axborot tushunchasini va uning kundalik hayotdagi ahamiyatini bilish",
        "Axborotning ko‘rinishlarini (matn, grafika, ovoz, video) ajrata olish",
        "Inson sezgi a’zolari orqali axborotni qabul qilish usullarini o‘rganish"
      ],
      'uz-Cyrl': [
        "Ахборот тушунчасини ва унинг кундалик ҳаётдаги аҳамиятини билиш",
        "Ахборотнинг кўринишларини (матн, графика, овоз, видео) ажрата олиш",
        "Инсон сезги аъзолари орқали ахборотни қабул қилиш усулларини ўрганиш"
      ],
      'ru': [
        "Понять понятие информации и ее значение для человека",
        "Научиться различать текстовую, графическую, звуковую и видеоинформацию",
        "Узнать, какими органами чувств человек воспринимает информацию"
      ],
      'en': [
        "Understand what information is and how it influences daily life",
        "Distinguish between text, graphics, audio, and video formats",
        "Learn how human senses receive diverse sensory inputs"
      ]
    },
    prerequisites: {
      'uz-Latn': "1-sinf: kompyuterning asosiy qismlari haqidagi tushunchalar.",
      'uz-Cyrl': "1-синф: компьютернинг асосий қисмлари ҳақидаги тушунчалар.",
      'ru': "Знание основных устройств компьютера за 1 класс.",
      'en': "Familiarity with computer components from Grade 1."
    },
    durationMinutes: 35,
    difficulty: "easy",
    lectureText: {
      'uz-Latn': "Axborot — bu bizni o‘rab turgan olam haqidagi barcha xabarlar, ma’lumotlar va bilimlardir.\n\nAxborot quyidagi ko‘rinishlarda bo‘ladi:\n1. **Matnli axborot**: Kitobdagi harflar, so‘zlar va jumlalar.\n2. **Grafik (tasviriy) axborot**: Rasmlar, chizmalar, xaritalar va fotosuratlar.\n3. **Tovushli axborot**: Qo‘shiqlar, darsdagi ustozning ovozi, qushlarning sayrashi.\n4. **Video axborot**: Harakatlanuvchi tasvir va ovozning birgalikdagi uyg‘unligi.",
      'uz-Cyrl': "Ахборот — бу бизни ўраб турган олам ҳақидаги барча хабарлар, маълумотлар ва билимлардир.\n\nАхборот қуйидаги кўринишларда бўлади:\n1. **Матнли ахборот**: Китобдаги ҳарфлар, сўзлар ва жумлалар.\n2. **График (тасвирий) ахборот**: Расмлар, чизмалар, хариталар ва фотосуратлар.\n3. **Товушли ахборот**: Қўшиқлар, дарсдаги устознинг овози, қушларнинг сайраши.\n4. **Видео ахборот**: Ҳаракатланувчи тасвир ва овознинг биргаликдаги уйғунлиги.",
      'ru': "Информация — это сведения об окружающем мире, которые мы получаем через зрение, слух и другие чувства.\n\nВиды информации:\n1. **Текстовая**: слова в учебнике, записки, буквы.\n2. **Графическая**: рисунки, фотографии, схемы.\n3. **Звуковая**: речь, музыка, шум дождя.\n4. **Видео**: движущиеся кадры со звуком.",
      'en': "Information comprises knowledge and signals we perceive from the world.\n\nPrimary forms:\n1. **Textual**: letters, numbers, printed words.\n2. **Graphical**: paintings, diagrams, digital photos.\n3. **Audio**: music, vocal speech, acoustic signals.\n4. **Video**: animated sequences synchronized with audio."
    },
    realLifeExample: {
      'uz-Latn': "Svetoforning qizil chirog‘i — bu haydovchiga 'To‘xta!' degan grafik axborot beradi. Sirena ovozi esa tez yordam mashinasi kelayotgani haqida tovushli axborotdir.",
      'uz-Cyrl': "Светофорнинг қизил чироғи — бу ҳайдовчига 'Тўхта!' деган график ахборот беради. Сирена овози эса тез ёрдам машинаси келаётгани ҳақида товушли ахборотдир.",
      'ru': "Красный сигнал светофора — это зрительная информация 'Стой!'. А звук сирены скорой помощи — звуковая информация.",
      'en': "A red traffic light provides visual information: 'Stop!'. An ambulance siren gives auditory information to yield."
    },
    stepByStepGuide: {
      'uz-Latn': [
        "1. Atrofingizga qarang va 3 ta har xil axborot manbasini toping.",
        "2. Kitobingizni oching — undagi matn va rasmlarni solishtiring.",
        "3. Musiqani eshitib, quloq orqali qanday axborot kelayotganini tahlil qiling.",
        "4. Ushbu turlarni daftaringizdagi jadvalga yozing."
      ],
      'uz-Cyrl': [
        "1. Атрофингизга қаранг ва 3 та ҳар хил ахборот манбасини топинг.",
        "2. Китобингизни очинг — ундаги матн ва расмларни солиштиринг.",
        "3. Мусиқани эшитиб, қулоқ орқали қандай ахборот келаётганини таҳлил қилинг.",
        "4. Ушбу турларни дафтарингиздаги жадвалга ёзинг."
      ],
      'ru': [
        "1. Оглянитесь и найдите 3 источника информации вокруг себя.",
        "2. Сравните текст и рисунки на странице учебника.",
        "3. Определите тип информации при звучании школьного звонка.",
        "4. Запишите примеры в тетрадь."
      ],
      'en': [
        "1. Observe your classroom and spot 3 distinct information sources.",
        "2. Contrast text and graphical elements in your book.",
        "3. Recognize audio cues like the school bell.",
        "4. Organize these forms into a notebook table."
      ]
    },
    commonMistakes: {
      'uz-Latn': [
        "Faqat kompyuterda bor narsanigina axborot deb o‘ylash (kitoblar va tovushlar ham axborotdir)",
        "Rasm va matnni bir-biriga chalkashtirish"
      ],
      'uz-Cyrl': [
        "Фақат компьютерда бор нарсанигина ахборот деб ўйлаш (китоблар ва товушлар ҳам ахборотдир)",
        "Расм ва матнни бир-бирига чалкаштириш"
      ],
      'ru': [
        "Считать информацией только то, что находится в компьютере",
        "Путать текстовый и графический форматы"
      ],
      'en': [
        "Assuming information only exists in electronic devices",
        "Confusing text labels with pure imagery"
      ]
    },
    homework: {
      'uz-Latn': "Uyga borib, televizordan olingan 2 ta matnli va 2 ta grafik axborotga misol yozing.",
      'uz-Cyrl': "Уйга бориб, телевизордан олинган 2 та матнли ва 2 та график ахборотга мисол ёзинг.",
      'ru': "Запишите по 2 примера текстовой и графической информации из телепередач.",
      'en': "Record 2 examples of textual and 2 of visual information from a television broadcast."
    },
    status: "published",
    updatedAt: "2026-10-21",
    sources: ["Informatika: 2-sinf darsligi, Respublika ta’lim markazi, 2024"]
  },

  // Grade 3
  {
    id: "g3-l2",
    gradeId: 3,
    subjectCategory: "algorithms",
    title: {
      'uz-Latn': "Algoritm nima? Ketma-ketlik va qoidalar",
      'uz-Cyrl': "Алгоритм нима? Кетма-кетлик ва қоидалар",
      'ru': "Что такое алгоритм? Последовательность и правила",
      'en': "What is an Algorithm? Sequences & Rules"
    },
    objectives: {
      'uz-Latn': [
        "Algoritm so‘zi buyuk alloma Al-Xorazmiy nomidan kelib chiqqanini bilish",
        "Kundalik hayotdagi oddiy harakatlar zanjirini tuzish",
        "Algoritmda qadamlar ketma-ketligi buzilsa nima bo‘lishini tushunish"
      ],
      'uz-Cyrl': [
        "Алгоритм сўзи буюк аллома Ал-Хоразмий номидан келиб чиққанини билиш",
        "Кундалик ҳаётдаги оддий ҳаракатлар занжирини тузиш",
        "Алгоритмда қадамлар кетма-кетлиги бузилса нима бўлишини тушуниш"
      ],
      'ru': [
        "Узнать, что термин 'алгоритм' произошел от имени великого ученого Аль-Хорезми",
        "Научиться составлять четкую последовательность действий",
        "Понимать, почему порядок шагов имеет решающее значение"
      ],
      'en': [
        "Discover that the word 'algorithm' stems from Muhammad al-Khwarizmi",
        "Construct step-by-step action plans for daily tasks",
        "Understand why step order is crucial for correct outcomes"
      ]
    },
    prerequisites: {
      'uz-Latn': "1- va 2-sinf kompyuter savodxonligi asoslari.",
      'uz-Cyrl': "1- ва 2-синф компьютер саводхонлиги асослари.",
      'ru': "Базовые навыки 1 и 2 классов.",
      'en': "Basic elementary computer literacy."
    },
    durationMinutes: 35,
    difficulty: "easy",
    lectureText: {
      'uz-Latn': "Algoritm — bu qo‘yilgan maqsadga erishish uchun bajarilishi kerak bo‘lgan aniq va tartibli ko‘rsatmalar ketma-ketligi.\n\nBu tushuncha vatandoshimiz, IX asrda yashab ijod etgan buyuk matematik **Muhammad ibn Muso al-Xorazmiy** nomi bilan atalgan.\n\nHar bir algoritmda:\n- **Boshlanish** bo‘ladi;\n- Aniq **qadamlar** bo‘ladi;\n- Kutilgan **natija** bo‘ladi.",
      'uz-Cyrl': "Алгоритм — бу қўйилган мақсадга эришиш учун бажарилиши керак бўлган аниқ ва тартибли кўрсатмалар кетма-кетлиги.\n\nБу тушунча ватандошимиз, IX асрда яшаб ижод этган буюк математик **Муҳаммад ибн Мусо ал-Хоразмий** номи билан аталган.\n\nҲар бир алгоритмда:\n- **Бошланиш** бўлади;\n- Аниқ **қадамлар** бўлади;\n- Кутилган **натижа** бўлади.",
      'ru': "Алгоритм — это точная и понятная последовательность действий, приводящая к нужному результату.\n\nСлово происходит от имени великого мыслителя из Хорезма — **Мухаммада аль-Хорезми**.\n\nУ любого алгоритма есть начало, понятные однозначные команды и завершение с результатом.",
      'en': "An algorithm is a precise, ordered sequence of instructions directed toward reaching a specific goal.\n\nThe term honors the great 9th-century polymath **Muhammad ibn Musa al-Khwarizmi**.\n\nEvery algorithm has a definite start, clear steps, and a conclusive finish."
    },
    realLifeExample: {
      'uz-Latn': "Choy damlash algoritmi: 1. Choynakka qaynoq suv quyish. 2. Quruq choy solish. 3. Qopqog‘ini yopish. 4. 5 daqiqa tindirish. Agar qadamlar o‘rni almashsa, yaxshi choy damlab bo‘lmaydi!",
      'uz-Cyrl': "Чой дамлаш алгоритми: 1. Чойнакка қайноқ сув қуйиш. 2. Қуруқ чой солиш. 3. Қопқоғини ёпиш. 4. 5 дақиқа тиндириш. Агар қадамлар ўрни алмашса, яхши чой дамлаб бўлмайди!",
      'ru': "Алгоритм заваривания чая: 1. Ополоснуть чайник кипятком. 2. Засыпать чайные листья. 3. Залить горячей водой. 4. Подождать 5 минут. Перепутав шаги, вкусный чай не приготовишь!",
      'en': "Brewing tea: 1. Rinse kettle with boiling water. 2. Add tea leaves. 3. Pour hot water. 4. Wait 5 minutes. Swapping steps breaks the process!"
    },
    codeSnippet: {
      language: "scratch",
      code: "QACHONKI [Yashil bayroqcha] BOSILGANDA:\n  OLDINGA [10] QADAM YUR\n  BURILISH [90] DARAJA O'NGGA\n  \"Salom, men robotman!\" DEB AYT",
      explanation: {
        'uz-Latn': "Scratch muhitida qahramon robot bayroqcha bosilgach navbat bilan oldinga yuradi, buriladi va gapiradi.",
        'uz-Cyrl': "Scratch муҳитида қаҳрамон робот байроқча босилгач навбат билан олдинга юради, бурилади ва гапиради.",
        'ru': "В среде Scratch спрайт по зеленому флажку последовательно шагает, поворачивается и здоровается.",
        'en': "In Scratch visual blocks, the sprite moves forward, turns right, and says hello in sequence."
      }
    },
    stepByStepGuide: {
      'uz-Latn': [
        "1. Qilmoqchi bo‘lgan ishingizning yakuniy maqsadini belgilang.",
        "2. Bu ishni bir nechta eng kichik qadamlarga ajrating.",
        "3. Har bir qadamni mantiqiy tartibda qog‘ozga yozing.",
        "4. Birovga o‘qitib, tushunarli ekanligini sinab ko‘ring."
      ],
      'uz-Cyrl': [
        "1. Қилмоқчи бўлган ишингизнинг якуний мақсадини белгиланг.",
        "2. Бу ишни бир нечта энг кичик қадамларга ажратинг.",
        "3. Ҳар бир қадамни мантиқий тартибда қоғозга ёзинг.",
        "4. Бировга ўқитиб, тушунарли эканлигини синаб кўринг."
      ],
      'ru': [
        "1. Определите конечную цель задачи.",
        "2. Разбейте путь к цели на элементарные шаги.",
        "3. Запишите шаги по порядку.",
        "4. Проверьте правильность последовательности с одноклассником."
      ],
      'en': [
        "1. Define the end goal of your task.",
        "2. Break it into granular atomic steps.",
        "3. Number and order each step logically.",
        "4. Walk through each step to test for omissions."
      ]
    },
    commonMistakes: {
      'uz-Latn': [
        "Qadamlarni tushirib qoldirish (masalan, eshikni ochmasdan xonaga kirishga urinish)",
        "Tushunarsiz, noaniq ko‘rsatmalar berish"
      ],
      'uz-Cyrl': [
        "Қадамларни тушириб қолдириш (масалан, эшикни очмасдан хонага киришга уриниш)",
        "Тушунарсиз, ноаниқ кўрсатмалар бериш"
      ],
      'ru': [
        "Пропуск обязательных шагов (попытка войти в комнату, не открыв дверь)",
        "Неоднозначные и размытые указания"
      ],
      'en': [
        "Skipping essential steps (e.g. attempting to walk into a room without opening the door)",
        "Writing ambiguous, unclear instructions"
      ]
    },
    homework: {
      'uz-Latn': "'Ertalab maktabga tayyorlanish' algoritmini 5 ta qadamda yozib keling.",
      'uz-Cyrl': "'Эрталаб мактабга тайёрланиш' алгоритмини 5 та қадамда ёзиб келинг.",
      'ru': "Составьте алгоритм 'Сборы в школу утром' из 5 последовательных шагов.",
      'en': "Write a 5-step algorithm describing your morning school preparation routine."
    },
    status: "published",
    updatedAt: "2026-10-21",
    sources: [
      "Informatika: 3-sinf darsligi, Respublika ta’lim markazi, 2024",
      "Al-Xorazmiy merosi va zamonaviy informatika metodikasi"
    ]
  },

  // Grade 4
  {
    id: "g4-l1",
    gradeId: 4,
    subjectCategory: "file-management",
    title: {
      'uz-Latn': "Fayllar va papkalar. Raqamli tartibga solish",
      'uz-Cyrl': "Файллар ва папкалар. Рақамли тартибга солиш",
      'ru': "Файлы и папки. Организация цифрового пространства",
      'en': "Files & Folders: Organizing Digital Workspaces"
    },
    objectives: {
      'uz-Latn': [
        "Fayl va papka tushunchalarining farqini anglash",
        "Fayl turlari (matn, rasm, video) va kengaytmalarini bilish",
        "Yangi papka ochish, nomlash va fayllarni tartibga solish"
      ],
      'uz-Cyrl': [
        "Файл ва папка тушунчаларининг фарқини англаш",
        "Файл турлари (матн, расм, видео) ва кенгайтмаларини билиш",
        "Янги папка очиш, номлаш ва файлларни тартибга солиш"
      ],
      'ru': [
        "Понять различия между файлом и папкой",
        "Узнать основные форматы и расширения файлов (.txt, .jpg, .mp3)",
        "Научиться создавать, переименовывать папки и структурировать информацию"
      ],
      'en': [
        "Distinguish between files and folder directories",
        "Recognize standard extensions (.docx, .png, .mp3)",
        "Create, rename, and logically structure directory trees"
      ]
    },
    prerequisites: {
      'uz-Latn': "Sichqonchaning o‘ng va chap tugmalaridan foydalanish ko‘nikmasi.",
      'uz-Cyrl': "Сичқончанинг ўнг ва чап тугмаларидан фойдаланиш кўникмаси.",
      'ru': "Умение пользоваться правой и левой кнопками мыши.",
      'en': "Proficiency with mouse buttons and context menus."
    },
    durationMinutes: 40,
    difficulty: "easy",
    lectureText: {
      'uz-Latn': "Kompyuter xotirasidagi har qanday ma’lumot (rasm, musiqa, matn) **Fayl** ko‘rinishida saqlanadi.\n\nFayl nomining oxirida nuqtadan keyin uning **kengaytmasi** (format) yoziladi:\n- `.docx` yoki `.txt` — matnli fayl\n- `.png` yoki `.jpg` — rasm fayli\n- `.mp3` — musiqa yoki ovoz fayli\n- `.mp4` — video fayl\n\nFayllar chalkashib ketmasligi uchun ularni **Papkalar** (Folders) ichiga joylashtiramiz. Papka — bu kitob javonidagi g‘aladonlarga o‘xshaydi.",
      'uz-Cyrl': "Компьютер хотирасидаги ҳар қандай маълумот (расм, мусиқа, матн) **Файл** кўринишида сақланади.\n\nФайл номининг охирида нуқтадан кейин унинг **кенгайтмаси** (формат) ёзилади:\n- `.docx` ёки `.txt` — матнли файл\n- `.png` ёки `.jpg` — расм файли\n- `.mp3` — мусиқа ёки овоз файли\n- `.mp4` — видео файл\n\nФайллар чалкашиб кетмаслиги учун уларни **Папкалар** (Folders) ичига жойлаштирамиз.",
      'ru': "Любая информация на компьютере хранится в виде **файлов**.\nУ каждого файла есть имя и расширение после точки:\n- `.txt`, `.docx` — текстовые документы\n- `.jpg`, `.png` — фотографии и рисунки\n- `.mp3` — аудиозаписи\n\nДля удобного хранения файлы раскладывают по **папкам**.",
      'en': "All persistent data on a computer is stored within **files**.\nA file possesses a filename and a period-separated extension:\n- `.docx` / `.txt` — documents\n- `.png` / `.jpg` — graphic images\n- `.mp3` — audio tracks\n\nFiles are cataloged inside hierarchical **folders**."
    },
    realLifeExample: {
      'uz-Latn': "Fayl — bu siz chizgan bitta rasm qog‘ozi. Papka esa barcha rasmlaringizni toza saqlash uchun mo‘ljallangan jild (albom).",
      'uz-Cyrl': "Файл — бу сиз чизган битта расм қоғози. Папка эса барча расмларингизни тоза сақлаш учун мўлжалланган жилд (альбом).",
      'ru': "Файл — это отдельный лист с рисунком. А папка — пластиковый скоросшиватель или альбом, где хранятся эти листы.",
      'en': "A file is a single drawn sheet of paper; a folder is the physical binder or portfolio holding those sheets."
    },
    stepByStepGuide: {
      'uz-Latn': [
        "1. Ish stolining bo‘sh joyida sichqonchaning o‘ng tugmasini bosing.",
        "2. Chiqqan menyudan 'Создать' -> 'Папку' (Yangi papka) buyrug‘ini tanlang.",
        "3. Papkaga 'Informatika 4-sinf' deb nom bering va Enter tugmasini bosing.",
        "4. O‘z rasmlaringizni ushbu papka ichiga sichqoncha bilan sudrab joylashtiring."
      ],
      'uz-Cyrl': [
        "1. Иш столининг бўш жойида сичқончанинг ўнг тугмасини босинг.",
        "2. Чиққан менюдан 'Создать' -> 'Папку' (Янги папка) буйруғини танланг.",
        "3. Папкага 'Информатика 4-синф' деб ном беринг ва Enter тугмасини босинг.",
        "4. Ўз расмларингизни ушбу папка ичига сичқонча билан судраб жойлаштиринг."
      ],
      'ru': [
        "1. Нажмите правой кнопкой мыши на свободном месте Рабочего стола.",
        "2. В контекстном меню выберите 'Создать' -> 'Папку'.",
        "3. Введите имя 'Информатика 4 класс' и нажмите клавишу Enter.",
        "4. Перетащите нужные файлы в созданную папку."
      ],
      'en': [
        "1. Right-click on an empty spot on the desktop.",
        "2. Select 'New' -> 'Folder' from the contextual menu.",
        "3. Type 'Computer Science Grade 4' and strike Enter.",
        "4. Drag relevant files into this newly formed directory."
      ]
    },
    commonMistakes: {
      'uz-Latn': [
        "Fayl kengaytmasini (masalan: .docx) o‘chirib tashlash (fayl ochilmay qolishi mumkin)",
        "Barcha fayllarni faqat ish stoliga betartib to‘kib tashlash"
      ],
      'uz-Cyrl': [
        "Файл кенгайтмасини (масалан: .docx) ўчириб ташлаш (файл очилмай қолиши мумкин)",
        "Барча файлларни фақат иш столига бетартиб тўкиб ташлаш"
      ],
      'ru': [
        "Случайное удаление расширения файла при переименовании",
        "Загромождение Рабочего стола сотнями несортированных файлов"
      ],
      'en': [
        "Deleting the file extension during renaming (may corrupt association)",
        "Cluttering the desktop with hundreds of unsorted loose files"
      ]
    },
    homework: {
      'uz-Latn': "Kompyuteringizda 'Mening Loyihalarim' nomli papka oching va ichiga 'Hujjatlar' hamda 'Rasmlar' papkalarini yarating.",
      'uz-Cyrl': "Компьютерингизда 'Менинг Лойиҳаларим' номли папка очинг ва ичига 'Ҳужжатлар' ҳамда 'Расмлар' папкаларини яратинг.",
      'ru': "Создайте на компьютере папку 'Мои проекты', а внутри нее две подпапки: 'Документы' и 'Рисунки'.",
      'en': "Create a folder named 'My Projects' with two internal subfolders: 'Documents' and 'Drawings'."
    },
    status: "published",
    updatedAt: "2026-10-21",
    sources: ["Informatika: 4-sinf darsligi, Toshkent, 2024"]
  },

  // Grade 5
  {
    id: "g5-l1",
    gradeId: 5,
    subjectCategory: "office",
    title: {
      'uz-Latn': "Matn muharrirlari va hujjat tayyorlash madaniyati",
      'uz-Cyrl': "Матн муҳаррирлари ва ҳужжат тайёрлаш маданияти",
      'ru': "Текстовые редакторы и культура оформления документов",
      'en': "Word Processors & Document Formatting Standards"
    },
    objectives: {
      'uz-Latn': [
        "Matn protsessorlari (MS Word, Google Docs) vazifalarini o‘rganish",
        "Shrift o‘lchami, qalinlik (Bold), qiyalik (Italic) va tekislashni qo‘llash",
        "Imlo xatolarini tekshirish va hujjatni saqlash"
      ],
      'uz-Cyrl': [
        "Матн процессорлари (MS Word, Google Docs) вазифаларини ўрганиш",
        "Шрифт ўлчами, қалинлик (Bold), қиялик (Italic) ва текислашни қўллаш",
        "Имло хатоларини текшириш ва ҳужжатни сақлаш"
      ],
      'ru': [
        "Освоить текстовые редакторы (MS Word, Google Docs)",
        "Научиться настраивать размер шрифта, начертание (жирный, курсив) и выравнивание",
        "Проверять правописание и корректно сохранять документы"
      ],
      'en': [
        "Master word processors (Word, Docs) interfaces",
        "Configure font scales, weights (bold, italic), and margins",
        "Apply spellcheck and save documents in standardized formats"
      ]
    },
    prerequisites: {
      'uz-Latn': "Klaviaturada tez va to‘g‘ri yozish ko‘nikmalari.",
      'uz-Cyrl': "Клавиатурада тез ва тўғри ёзиш кўникмалари.",
      'ru': "Базовые навыки набора текста на клавиатуре.",
      'en': "Elementary typing and keyboarding fluency."
    },
    durationMinutes: 45,
    difficulty: "medium",
    lectureText: {
      'uz-Latn': "Matn muharriri — bu kompyuterda matn yozish, tahrirlash va chiroyli bezash uchun mo‘ljallangan amaliy dasturdir.\n\nAsosiy qoidalar:\n1. Tinish belgilaridan keyin har doim bitta **bo‘sh joy (probel)** qo‘yiladi.\n2. Yangi xatboshi boshlash uchun **Enter** tugmasi bir marta bosiladi.\n3. Matnni tekislash turlari: chap tomonga, o‘rtaga (sarlavhalar uchun), o‘ng tomonga yoki ikkala chet bo‘yicha tekis (Justify).",
      'uz-Cyrl': "Матн муҳаррири — бу компьютерда матн ёзиш, таҳрирлаш ва чиройли безаш учун мўлжалланган амалий дастурдир.\n\nАсосий қоидалар:\n1. Тиниш белгиларидан кейин ҳар доим битта **бўш жой (пробел)** қўйилади.\n2. Янги хатбоши бошлаш учун **Enter** тугмаси бир марта босилади.\n3. Матнни текислаш турлари: чап томонга, ўртага (сарлавҳалар учун), ўнг томонга ёки иккала чет бўйича текис (Justify).",
      'ru': "Текстовый процессор предназначен для набора, форматирования и печати текстов.\n\nПравила гигиены текста:\n1. После любого знака препинания ставится ровно один пробел.\n2. Клавиша Enter нажимается только в конце абзаца.\n3. Заголовки выравниваются по центру, основной текст — по ширине.",
      'en': "A word processor facilitates writing, styling, and printing text documents.\n\nTypographic hygiene:\n1. Always insert exactly one space following punctuation marks.\n2. Press Enter strictly at the termination of a paragraph.\n3. Align headlines to center and paragraph body to justify or left."
    },
    realLifeExample: {
      'uz-Latn': "Xuddi maktab insho daftaringizdagi xatboshi va qizil chiziq qoidalariga o‘xshaydi. Kompyuterda ham tartibli yozilgan hujjatni o‘qish oson va yoqimli bo‘ladi.",
      'uz-Cyrl': "Худди мактаб иншо дафтарингиздаги хатбоши ва қизил чизиқ қоидаларига ўхшайди. Компьютерда ҳам тартибли ёзилган ҳужжатни ўқиш осон ва ёқимли бўлади.",
      'ru': "Это похоже на аккуратную тетрадь отличника: когда соблюдены отступы и абзацы, текст легко и приятно читать учителю.",
      'en': "Like a neatly organized notebook margin: disciplined formatting makes academic prose legible and professional."
    },
    stepByStepGuide: {
      'uz-Latn': [
        "1. Dasturni oching va 'Vatanim — O‘zbekiston' deb sarlavha yozing.",
        "2. Sarlavhani sichqoncha bilan belgilab, o‘lchamini 16 pt qiling va o‘rtaga tekislang.",
        "3. Yangi qatorga tushib, 3 ta gapdan iborat qisqa matn yozing.",
        "4. Matn ichidagi muhim so‘zni qalin (Bold, Ctrl+B) qilib belgilang."
      ],
      'uz-Cyrl': [
        "1. Дастурни очинг ва 'Ватаним — Ўзбекистон' деб сарлавҳа ёзинг.",
        "2. Сарлавҳани сичқонча билан белгилаб, ўлчамини 16 pt қилинг ва ўртага текисланг.",
        "3. Янги қаторга тушиб, 3 та гапдан иборат қисқа матн ёзинг.",
        "4. Матн ичидаги муҳим сўзни қалин (Bold, Ctrl+B) қилиб белгиланг."
      ],
      'ru': [
        "1. Откройте редактор и наберите заголовок 'Моя Родина — Узбекистан'.",
        "2. Выделите заголовок, установите размер 16 pt и выравнивание по центру.",
        "3. Нажмите Enter и напишите 3 предложения о родном крае.",
        "4. Выделите ключевое слово жирным начертанием (Ctrl+B)."
      ],
      'en': [
        "1. Open the editor and type the heading 'My Homeland Uzbekistan'.",
        "2. Select heading, set scale to 16 pt, and center-align it.",
        "3. Press Enter and author a 3-sentence descriptive paragraph.",
        "4. Bold key terms using Ctrl+B."
      ]
    },
    commonMistakes: {
      'uz-Latn': [
        "Xatboshi (abzas) qilish uchun ko‘p marta probel bosish (Tab tugmasidan foydalanish kerak)",
        "Qator oxiriga yetganda qo‘lda Enter bosish (matn o‘zi avtomatik keyingi qatorga o‘tadi)"
      ],
      'uz-Cyrl': [
        "Хатбоши (абзац) қилиш учун кўп марта пробел босиш (Tab тугмасидан фойдаланиш керак)",
        "Қатор охирига етганда қўлда Enter босиш (матн ўзи автоматик кейинги қаторга ўтади)"
      ],
      'ru': [
        "Создание красной строки серией пробелов вместо клавиши Tab",
        "Ручной перенос строки клавишей Enter в середине предложения"
      ],
      'en': [
        "Hammering spacebar for indentation instead of Tab key",
        "Manually striking Enter before sentence overflow"
      ]
    },
    homework: {
      'uz-Latn': "O‘zingiz yoqtirgan sevimli mashg‘ulotingiz (hobbi) haqida 5 qatorli chiroyli formatlangan matn tayyorlang.",
      'uz-Cyrl': "Ўзингиз ёқтирган севимли машғулотингиз (хобби) ҳақида 5 қаторли чиройли форматланган матн тайёрланг.",
      'ru': "Оформите короткий рассказ о своем хобби (5-6 строк) с соблюдением правил форматирования.",
      'en': "Produce a 5-sentence formatted document about your favorite hobby."
    },
    status: "published",
    updatedAt: "2026-10-22",
    sources: ["Informatika va axborot texnologiyalari: 5-sinf darsligi, Toshkent, 2024"]
  },

  // Grade 6
  {
    id: "g6-l1",
    gradeId: 6,
    subjectCategory: "spreadsheets",
    title: {
      'uz-Latn': "Elektron jadvallar (Excel/Sheets) va formulalar",
      'uz-Cyrl': "Электрон жадваллар (Excel/Sheets) ва формулалар",
      'ru': "Электронные таблицы (Excel/Sheets) и формулы",
      'en': "Spreadsheets (Excel/Sheets) & Calculation Formulas"
    },
    objectives: {
      'uz-Latn': [
        "Katakcha (katak, cell) manzili tushunchasini (masalan: A1, B3) tushunish",
        "Formulalar har doim tenglik '=' belgisi bilan boshlanishini bilish",
        "SUM (yig‘indi), AVERAGE (o‘rtacha) funksiyalaridan foydalanish"
      ],
      'uz-Cyrl': [
        "Катакча (cell) манзили тушунчасини (масалан: A1, B3) тушуниш",
        "Формулалар ҳар доим тенглик '=' белгиси билан бошланишини билиш",
        "SUM (йиғинди), AVERAGE (ўртача) функцияларидан фойдаланиш"
      ],
      'ru': [
        "Понять адресацию ячеек таблицы (A1, B5 и т.д.)",
        "Усвоить, что любая формула всегда начинается со знака '='",
        "Использовать базовые функции СУММ и СРЗНАЧ"
      ],
      'en': [
        "Master grid cell referencing (A1, B3, C10)",
        "Enforce rule that every formula begins with an '=' sign",
        "Apply SUM and AVERAGE aggregation functions"
      ]
    },
    prerequisites: {
      'uz-Latn': "Boshlang‘ich matematika va arifmetik amallar.",
      'uz-Cyrl': "Бошланғич математика ва арифметик амаллар.",
      'ru': "Базовые арифметические операции.",
      'en': "Elementary arithmetic operations."
    },
    durationMinutes: 45,
    difficulty: "medium",
    lectureText: {
      'uz-Latn': "Elektron jadval — bu sonli ma’lumotlarni qator va ustunlar kesishmasida tartibga soluvchi va avtomatik hisob-kitob qiluvchi qudratli vositadir.\n\nUstunlar lotin harflari (A, B, C...) bilan, qatorlar esa sonlar (1, 2, 3...) bilan belgilanadi.\n\nEng muhim qoida: Jadvalda formulalar har doim **=** belgisi bilan boshlanadi!\nMasalan: `=A1+B1` yoki `=SUM(A1:A5)`.",
      'uz-Cyrl': "Электрон жадвал — бу сонли маълумотларни қатор ва устунлар кесишмасида тартибга солувчи ва автоматик ҳисоб-китоб қилувчи қудратли воситадир.\n\nУстунлар лотин ҳарфлари (A, B, C...) билан, қаторлар эса сонлар (1, 2, 3...) билан белгиланади.\n\nЭнг муҳим қоида: Жадвалда формулалар ҳар доим **=** белгиси билан бошланади!\nМасалан: `=A1+B1` ёки `=SUM(A1:A5)`.",
      'ru': "Электронная таблица представляет собой матрицу строк и столбцов.\nСтолбцы обозначаются латинскими буквами (A, B, C), а строки — числами (1, 2, 3).\n\nЗолотое правило: любая формула вычисления всегда начинается со знака равенства `=`. Например: `=A1+B1` или `=СУММ(A1:A10)`.",
      'en': "Spreadsheets represent 2D matrices composed of rows and columns.\nColumns are keyed by letters (A, B, C), rows by numbers (1, 2, 3).\n\nCardinal rule: every computational formula begins with `=`. E.g.: `=A1+B1` or `=SUM(A1:A10)`."
    },
    realLifeExample: {
      'uz-Latn': "Maktab kundaligi yoki do‘kondagi xaridlarning umumiy summasini hisoblash kassa jadvali.",
      'uz-Cyrl': "Мактаб кундалиги ёки дўкондаги харидларнинг умумий суммасини ҳисоблаш касса жадвали.",
      'ru': "Табель успеваемости или кассовый чек супермаркета с автоматическим подсчетом общей суммы.",
      'en': "A gradebook roster or grocery store tally automatically computing the total cost of items."
    },
    codeSnippet: {
      language: "pseudocode",
      code: "# Excel formulasi namunasi\n=SUM(B2:B10)     # B2 dan B10 gacha kataklar yig'indisi\n=AVERAGE(C2:C10) # O'rtacha arifmetik qiymat",
      explanation: {
        'uz-Latn': "Kataklar oralig‘i (diapazon) ikki nuqta ':' belgisi orqali yoziladi.",
        'uz-Cyrl': "Катаклар оралиғи (диапазон) икки нуқта ':' белгиси орқали ёзилади.",
        'ru': "Диапазон смежных ячеек записывается через двоеточие.",
        'en': "Cell ranges are denoted by a colon delimiter."
      }
    },
    stepByStepGuide: {
      'uz-Latn': [
        "1. A1 katakchaga 'Daftar', B1 ga uning narxi '3000' deb yozing.",
        "2. A2 katakchaga 'Ruchka', B2 ga narxi '2000' deb yozing.",
        "3. B3 katakka kiring va '=B1+B2' deb yozib Enter tugmasini bosing.",
        "4. Natija 5000 chiqqanini va narx o‘zgarganda jami summa avtomatik yangilanishini kuzating."
      ],
      'uz-Cyrl': [
        "1. A1 катакчага 'Дафтар', B1 га унинг нархи '3000' деб ёзинг.",
        "2. A2 катакчага 'Ручка', B2 га нархи '2000' деб ёзинг.",
        "3. B3 катакка киринг ва '=B1+B2' деб ёзиб Enter тугмасини босинг.",
        "4. Натижа 5000 чиққанини ва нарх ўзгарганда жами сумма автоматик янгиланишини кузатинг."
      ],
      'ru': [
        "1. В ячейку A1 введите 'Тетрадь', в B1 — число 3000.",
        "2. В ячейку A2 введите 'Ручка', в B2 — число 2000.",
        "3. В ячейке B3 введите формулу `=B1+B2` и нажмите Enter.",
        "4. Убедитесь, что сумма 5000 пересчитывается автоматически при изменении цен."
      ],
      'en': [
        "1. In A1 enter 'Notebook', in B1 enter 3000.",
        "2. In A2 enter 'Pen', in B2 enter 2000.",
        "3. In B3 input `=B1+B2` and hit Enter.",
        "4. Verify that 5000 updates dynamically if values change."
      ]
    },
    commonMistakes: {
      'uz-Latn': [
        "Formulaning boshiga '=' belgisini qo‘ymaslik (katakcha buni oddiy matn deb qabul qiladi)",
        "Sonlar o‘rniga harflarni qo‘shishga urinish (#VALUE! xatosi)"
      ],
      'uz-Cyrl': [
        "Формуланинг бошига '=' белгисини қўймаслик (катакча буни оддий матн деб қабул қилади)",
        "Сонлар ўрнига ҳарфларни қўшишга уриниш (#VALUE! хатоси)"
      ],
      'ru': [
        "Забытый знак '=' в начале формулы",
        "Попытка сложения текстовых ячеек (ошибка #ЗНАЧ!)"
      ],
      'en': [
        "Omitting the leading '=' symbol",
        "Attempting arithmetic operations over alphanumeric strings (#VALUE!)"
      ]
    },
    homework: {
      'uz-Latn': "Oilaviy oylik xarajatlar ro‘yxati (5 ta mahsulot) va umumiy summani hisoblovchi jadval tuzing.",
      'uz-Cyrl': "Оилавий ойлик харажатлар рўйхати (5 та маҳсулот) ва умумий суммани ҳисобловчи жадвал тузинг.",
      'ru': "Составьте таблицу из 5 покупок с автоматическим подсчетом общей стоимости.",
      'en': "Build a 5-item family expense spreadsheet calculating the total expenditure."
    },
    status: "published",
    updatedAt: "2026-10-22",
    sources: ["Informatika: 6-sinf darsligi, Toshkent, 2024"]
  },

  // Grade 7
  {
    id: "g7-l1",
    gradeId: 7,
    subjectCategory: "programming",
    title: {
      'uz-Latn': "Python dasturlash tiliga kirish va print() funksiyasi",
      'uz-Cyrl': "Python дастурлаш тилига кириш ва print() функцияси",
      'ru': "Введение в Python и функция print()",
      'en': "Introduction to Python & the print() Function"
    },
    objectives: {
      'uz-Latn': [
        "Python dasturlash tili nima uchun dunyoda mashhur ekanligini bilish",
        "print() buyrug‘i yordamida ekranga matn va sonlarni chiqarish",
        "Sintaksis xatolarini (SyntaxError) aniqlash va tuzatish"
      ],
      'uz-Cyrl': [
        "Python дастурлаш тили нима учун дунёда машҳур эканлигини билиш",
        "print() буйруғи ёрдамида экранга матн ва сонларни чиқариш",
        "Синтаксис хатоларини (SyntaxError) аниқлаш ва тузатиш"
      ],
      'ru': [
        "Понять преимущества языка Python и сферы его применения",
        "Использовать функцию print() для вывода текста и чисел",
        "Распознавать и исправлять базовые синтаксические ошибки (SyntaxError)"
      ],
      'en': [
        "Understand Python's popularity and versatility in software engineering",
        "Use print() to display strings and numerical values on the console",
        "Diagnose and correct common beginner syntax errors"
      ]
    },
    prerequisites: {
      'uz-Latn': "Klaviaturadan inglizcha belgilarni terish ko‘nikmasi.",
      'uz-Cyrl': "Клавиатурадан инглизча белгиларни териш кўникмаси.",
      'ru': "Навыки набора латинских символов и знаков препинания.",
      'en': "Familiarity with English keyboard characters."
    },
    durationMinutes: 45,
    difficulty: "medium",
    lectureText: {
      'uz-Latn': "Python — bu o‘qilishi ingliz tilidagi oddiy gaplarga juda yaqin bo‘lgan, zamonaviy va kuchli dasturlash tili. Uni Gvido van Rossum 1991-yilda yaratgan.\n\nEkranga biror ma’lumotni chiqarish uchun `print()` buyrug‘idan foydalanamiz.\n\nAgar matn chiqarmoqchi bo‘lsak, uni qo‘shtirnoq ichiga olamiz:\n`print(\"Salom, O‘zbekiston!\")`\n\nAgar sonli hisob-kitob bo‘lsa, qo‘shtirnoqsiz yozamiz:\n`print(15 + 25)` -> Ekranda 40 chiqadi.",
      'uz-Cyrl': "Python — бу ўқилиши инглиз тилидаги оддий гапларга жуда яқин бўлган, замонавий ва кучли дастурлаш тили. Уни Гвидо ван Россум 1991 йилда яратган.\n\nЭкранга бирор маълумотни чиқариш учун `print()` буйруғидан фойдаланамиз.\n\nАгар матн чиқармоқчи бўлсак, уни қўштирноқ ичига оламиз:\n`print(\"Салом, Ўзбекистон!\")`\n\nАгар сонли ҳисоб-китоб бўлса, қўштирноқсиз ёзамиз:\n`print(15 + 25)` -> Экранда 40 чиқади.",
      'ru': "Python — это современный, элегантный язык программирования, созданный Гвидо ван Россумом в 1991 году. Он легок в чтении и популярен в веб-разработке и науке о данных.\n\nДля вывода данных в консоль используется функция `print()`.\nСтроки берутся в кавычки:\n`print(\"Привет, мир!\")`\nЧисловые выражения пишутся без кавычек:\n`print(15 + 25)` выведет `40`.",
      'en': "Python is a versatile, beginner-friendly language designed by Guido van Rossum in 1991. It reads almost like plain English.\n\nWe output data using `print()`.\nText strings require quotes:\n`print(\"Hello, World!\")`\nArithmetic requires no quotes:\n`print(15 + 25)` outputs `40`."
    },
    realLifeExample: {
      'uz-Latn': "print() buyrug‘ini xuddi do‘konda kassa chekini chop etuvchi printer kabi tasavvur qiling: siz unga nima bersangiz, u shuni qog‘ozga (ekranga) chiqarib beradi.",
      'uz-Cyrl': "print() буйруғини худди дўконда касса чекини чоп этувчи принтер каби тасаввур қилинг: сиз унга нима берсангиз, у шуни қоғозга (экранга) чиқариб беради.",
      'ru': "Команда print() работает как принтер на кассе магазина: печатает на экране ровно то, что вы передали ей в скобках.",
      'en': "Think of print() like a receipt printer at a market register: whatever data you pass inside its parentheses gets printed to the terminal screen."
    },
    codeSnippet: {
      language: "python",
      code: "# 1-dasturimiz\nism = \"Azizbek\"\nyosh = 13\nprint(\"Salom, mening ismim\", ism)\nprint(\"Kelasi yili men\", yosh + 1, \"yoshda bo'laman.\")",
      explanation: {
        'uz-Latn': "Dasturda 'ism' va 'yosh' o‘zgaruvchilari yaratildi va print() orqali birlashtirib ekranga chiqarildi.",
        'uz-Cyrl': "Дастурда 'ism' ва 'yosh' ўзгарувчилари яратилди ва print() орқали бирлаштириб экранга чиқарилди.",
        'ru': "Мы объявили две переменные и вывели форматированный текст в консоль.",
        'en': "Variables 'ism' and 'yosh' are assigned and printed cohesively."
      }
    },
    stepByStepGuide: {
      'uz-Latn': [
        "1. Kod laboratoriyasini oching.",
        "2. print(\"O‘z ismingiz\") deb yozing.",
        "3. Har doim qavs va qo‘shtirnoqlar yopilganini tekshiring.",
        "4. 'Ishga tushirish' (Run) tugmasini bosing va konsoldagi natijani ko‘ring."
      ],
      'uz-Cyrl': [
        "1. Код лабораториясини очинг.",
        "2. print(\"Ўз исмингиз\") деб ёзинг.",
        "3. Ҳар доим қавс ва қўштирноқлар ёпилганини текширинг.",
        "4. 'Ишга тушириш' (Run) тугмасини босинг ва консолдаги натижани кўринг."
      ],
      'ru': [
        "1. Откройте вкладку 'Лаборатория кода'.",
        "2. Наберите print(\"Ваше имя\").",
        "3. Убедитесь, что закрыли обе скобки и обе кавычки.",
        "4. Нажмите 'Запустить' и проверьте результат."
      ],
      'en': [
        "1. Open the interactive Code Lab.",
        "2. Type print(\"Your Name\").",
        "3. Confirm that matching quotes and parentheses are closed.",
        "4. Click Run to view the output."
      ]
    },
    commonMistakes: {
      'uz-Latn': [
        "Qo‘shtirnoqni yopishni unutish: print(\"Salom) -> SyntaxError: unterminated string",
        "Katta harf bilan yozish: Print() yoki PRINT() -> Python katta-kichik harflarni farqlaydi (NameError)"
      ],
      'uz-Cyrl': [
        "Қўштирноқни ёпишни унутиш: print(\"Салом) -> SyntaxError: unterminated string",
        "Катта ҳарф билан ёзиш: Print() ёки PRINT() -> Python катта-кичик ҳарфларни фарқлайди (NameError)"
      ],
      'ru': [
        "Незакрытая кавычка: print(\"Привет) вызывает SyntaxError",
        "Написание с заглавной буквы: Print() вызовет NameError (Python чувствителен к регистру)"
      ],
      'en': [
        "Missing closing quote: print(\"Hello) produces SyntaxError",
        "Capitalizing Print(): Python is case-sensitive, so Print() causes NameError"
      ]
    },
    homework: {
      'uz-Latn': "O‘zingiz yoqtirgan 3 ta kitob nomini har birini alohida qatorda ekranga chiqaruvchi Python kodini yozing.",
      'uz-Cyrl': "Ўзингиз ёқтирган 3 та китоб номини ҳар бирини алоҳида қаторда экранга чиқарувчи Python кодини ёзинг.",
      'ru': "Напишите программу на Python, выводящую названия трех ваших любимых книг на отдельных строках.",
      'en': "Write a Python script that prints the titles of your three favorite books, each on a separate line."
    },
    status: "published",
    updatedAt: "2026-10-22",
    sources: [
      "Informatika va axborot texnologiyalari: 7-sinf darsligi, Toshkent, 2024",
      "Python Software Foundation rasmiy hujjatlari (python.org)"
    ]
  },

  // Grade 8
  {
    id: "g8-l1",
    gradeId: 8,
    subjectCategory: "programming",
    title: {
      'uz-Latn': "Shartli operatorlar (if/else) va mantiqiy amallar",
      'uz-Cyrl': "Шартли операторлар (if/else) ва мантиқий амаллар",
      'ru': "Условные операторы (if/else) и логические выражения",
      'en': "Conditional Statements (if/else) & Boolean Logic"
    },
    objectives: {
      'uz-Latn': [
        "Tarmoqlanuvchi algoritmlar va Python'da if/else tuzilishini o‘rganish",
        "Taqqoslash amallari (>, <, ==, !=) va mantiqiy bog‘lovchilar (and, or, not)",
        "Shartga qarab har xil natija chiqaruvchi dastur yoza olish"
      ],
      'uz-Cyrl': [
        "Тармоқланувчи алгоритмлар ва Python'да if/else тузилишини ўрганиш",
        "Таққослаш амаллари (>, <, ==, !=) ва мантиқий боғловчилар (and, or, not)",
        "Шартга қараб ҳар хил натижа чиқарувчи дастур ёза олиш"
      ],
      'ru': [
        "Изучить разветвляющиеся алгоритмы и синтаксис if/elif/else",
        "Освоить операторы сравнения (>, <, ==, !=) и логику and/or",
        "Написать программу, принимающую решения на основе условий"
      ],
      'en': [
        "Learn branching algorithms and if/elif/else syntax",
        "Apply comparison operators (>, <, ==, !=) and boolean connectors (and, or)",
        "Write decision-making logic evaluating variable state"
      ]
    },
    prerequisites: {
      'uz-Latn': "7-sinf: o‘zgaruvchilar va print() funksiyasi.",
      'uz-Cyrl': "7-синф: ўзгарувчилар ва print() функцияси.",
      'ru': "Основы переменных и функций ввода-вывода 7 класса.",
      'en': "Variables and print statements from Grade 7."
    },
    durationMinutes: 45,
    difficulty: "medium",
    lectureText: {
      'uz-Latn': "Kundalik hayotimizda har doim shartlar asosida qaror qabul qilamiz: 'Agar yomg‘ir yog‘sa, soyabon olaman, aks holda ololmayman'.\n\nPython tilida bu **if** (agar) va **else** (aks holda) so‘zlari bilan yoziladi.\n\nSintaksis:\n```python\nagar shart:\n    bajariladigan_amal\naks_holda:\n    boshqa_amal\n```\n\nDiqqat qiling: Python'da shartdan keyin ikki nuqta `:` qo‘yiladi va keyingi qator 4 ta probel (yoki Tab) bilan o‘ngga suriladi (Indentation)!",
      'uz-Cyrl': "Кундалик ҳаётимизда ҳар доим шартлар асосида қарор қабул қиламиз: 'Агар ёмғир ёғса, соябон оламан, акс ҳолда олмайман'.\n\nPython тилида бу **if** (агар) ва **else** (акс ҳолда) сўзлари билан ёзилади.\n\nСинтаксис:\n```python\nif shart:\n    amal1\nelse:\n    amal2\n```",
      'ru': "В реальной жизни мы постоянно действуем по условиям. В Python для ветвлений используется конструкция if/else.\n\nПосле условия обязательно ставится двоеточие `:`, а тело блока выделяется отступом в 4 пробела.",
      'en': "Branching code mirrors human decision-making.\nIn Python, conditions use `if` and `else` blocks.\nColon `:` follows condition, and nested bodies require 4-space indentation."
    },
    realLifeExample: {
      'uz-Latn': "Kinoteatrga kirish: Agar o‘quvchining yoshi 16 dan katta bo‘lsa, kechki seansga kiritiladi, aks holda kattalar hamrohligida kelishi so‘raladi.",
      'uz-Cyrl': "Кинотеатрга кириш: Агар ўқувчининг ёши 16 дан катта бўлса, кечки сеансга киритилади, акс ҳолда катталар ҳамроҳлигида келиши сўралади.",
      'ru': "Турникет метро: если на транспортной карте достаточно средств, створки открываются, иначе загорается красный индикатор.",
      'en': "Metro turnstile: if card balance is sufficient, the gate opens; otherwise, warning illuminates."
    },
    codeSnippet: {
      language: "python",
      code: "harorat = 28\n\nif harorat > 25:\n    print(\"Bugun havo issiq, salqin kiyining!\")\nelse:\n    print(\"Bugun havo salqin, issiqroq kiyining!\")",
      explanation: {
        'uz-Latn': "harorat o‘zgaruvchisi 25 dan katta bo‘lgani uchun birinchi shart bajariladi.",
        'uz-Cyrl': "harorat ўзгарувчиси 25 дан катта бўлгани учун биринчи шарт бажарилади.",
        'ru': "Так как 28 > 25, выполнится первый блок кода.",
        'en': "Since temperature 28 > 25, branch 1 executes."
      }
    },
    stepByStepGuide: {
      'uz-Latn': [
        "1. Kod laboratoriyasini oching.",
        "2. Sonli o‘zgaruvchi e’lon qiling: ball = 80.",
        "3. if ball >= 70: deb yozib ikki nuqta qo‘ying va Enter bosing.",
        "4. print(\"Siz imtihondan o‘tdingiz!\") deb yozib natijani sinab ko‘ring."
      ],
      'uz-Cyrl': [
        "1. Код лабораториясини очинг.",
        "2. Сонли ўзгарувчи эълон қилинг: ball = 80.",
        "3. if ball >= 70: деб ёзиб икки нуқта қўйинг ва Enter босинг.",
        "4. print(\"Сиз имтиҳондан ўтдингиз!\") деб ёзиб натижани синаб кўринг."
      ],
      'ru': [
        "1. Откройте лабораторию кода.",
        "2. Задайте переменную ball = 80.",
        "3. Наберите if ball >= 70: и нажмите Enter.",
        "4. Внутри блока наберите print(\"Экзамен сдан!\")."
      ],
      'en': [
        "1. Open the Code Lab.",
        "2. Define score variable ball = 80.",
        "3. Type if ball >= 70: followed by colon.",
        "4. Print passing announcement."
      ]
    },
    commonMistakes: {
      'uz-Latn': [
        "Ikki nuqta `:` qo‘yishni unutish (SyntaxError: expected ':')",
        "Tenglikni tekshirishda bitta `=` yozish (shartda har doim ikkita `==` yoziladi)"
      ],
      'uz-Cyrl': [
        "Икки нуқта `:` қўйишни унутиш (SyntaxError: expected ':')",
        "Тенгликни текширишда битта `=` ёзиш (шартда ҳар доим иккита `==` ёзилади)"
      ],
      'ru': [
        "Пропуск двоеточия после условия",
        "Использование знака присваивания `=` вместо проверки равенства `==`"
      ],
      'en': [
        "Forgetting trailing colon `:`",
        "Using single `=` assignment instead of `==` equality comparator"
      ]
    },
    homework: {
      'uz-Latn': "Foydalanuvchi yoshiga qarab maktab o‘quvchisi yoki talaba ekanligini aniqlovchi dastur tuzing.",
      'uz-Cyrl': "Фойдаланувчи ёшига қараб мактаб ўқувчиси ёки талаба эканлигини аниқловчи дастур тузинг.",
      'ru': "Напишите программу, проверяющую возраст и определяющую школьник это или студент.",
      'en': "Write a script verifying age brackets for student classifications."
    },
    status: "published",
    updatedAt: "2026-10-22",
    sources: ["Informatika: 8-sinf darsligi, Toshkent, 2024"]
  },

  // Grade 9
  {
    id: "g9-l3",
    gradeId: 9,
    subjectCategory: "cybersecurity",
    title: {
      'uz-Latn': "Kiberxavfsizlik: Fishing va ijtimoiy muhandislikdan himoyalanish",
      'uz-Cyrl': "Киберхавфсизлик: Фишинг ва ижтимоий муҳандисликдан ҳимояланиш",
      'ru': "Кибербезопасность: Защита от фишинга и социальной инженерии",
      'en': "Cybersecurity: Defense Against Phishing & Social Engineering"
    },
    objectives: {
      'uz-Latn': [
        "Fishing (phishing) hujumlari qanday ishlashini bilish",
        "Soxta veb-sayt manzillari (URL) va xabarlarni aniqlash",
        "Shaxsiy ma’lumotlar va parollarni hech qachon begonalarga bermaslik odatini shakllantirish"
      ],
      'uz-Cyrl': [
        "Фишинг (phishing) ҳужумлари қандай ишлашини билиш",
        "Сохта веб-сайт манзиллари (URL) ва хабарларни аниқлаш",
        "Шахсий маълумотлар ва паролларни ҳеч қачон бегоналарга бермаслик одатини шакллантириш"
      ],
      'ru': [
        "Понять механизмы атак методами социальной инженерии и фишинга",
        "Научиться распознавать поддельные доменные имена (URL) и письма",
        "Сформировать устойчивую привычку не разглашать конфиденциальные данные"
      ],
      'en': [
        "Understand deceptive mechanisms behind phishing campaigns",
        "Detect lookalike domain URLs and fraudulent urgency emails",
        "Enforce zero-trust hygiene regarding credentials and private personal data"
      ]
    },
    prerequisites: {
      'uz-Latn': "Brauzer va internetdan foydalanish asoslari.",
      'uz-Cyrl': "Браузер ва интернетдан фойдаланиш асослари.",
      'ru': "Базовые навыки работы с браузером и электронной почтой.",
      'en': "Familiarity with web browsers and URLs."
    },
    durationMinutes: 45,
    difficulty: "medium",
    lectureText: {
      'uz-Latn': "Fishing (inglizcha 'fishing' — qarmoq tashlash so‘zidan) — bu firibgarlarning soxta xabarlar va veb-saytlar orqali foydalanuvchilarning parollari, karta raqamlari yoki shaxsiy hisoblarini o‘g‘irlashga qaratilgan kiberhujum turi.\n\nFiribgarlar odatda:\n1. 'Siz yutib oldingiz! Tezda bosing!' kabi soxta shoshilinch xabarlar yuborishadi.\n2. Haqiqiy saytlarga o‘xshash soxta havolalar yasashadi (masalan, `maktab.uz` o‘rniga `maktab-uz-bonus.xyz`).\n3. Parolingizni yoki SMS orqali kelgan tasdiqlash kodini kiritishni so‘rashadi.\n\nEsda tuting: hech qanday bank yoki rasmiy tashkilot sizdan SMS-kod yoki parolingizni so‘ramaydi!",
      'uz-Cyrl': "Фишинг (инглизча 'fishing' — қармоқ ташлаш сўзидан) — бу фирибгарларнинг сохта хабарлар ва веб-сайтлар орқали фойдаланувчиларнинг пароллари, карта рақамлари ёки шахсий ҳисобларини ўғирлашга қаратилган киберҳужум тури.\n\nФирибгарлар одатда:\n1. 'Сиз ютиб олдингиз! Тезроқ босинг!' каби сохта шошилинч хабарлар юборишади.\n2. Ҳақиқий сайтларга ўхшаш сохта ҳаволалар ясашади (масалан, `maktab.uz` ўрнига `maktab-uz-bonus.xyz`).\n3. Паролингизни ёки SMS орқали келган тасдиқлаш кодини киритишни сўрашади.\n\nЭсда тутинг: ҳеч қандай банк ёки расмий ташкилот сиздан SMS-код ёки паролингизни сўрамайди!",
      'ru': "Фишинг (от англ. fishing — 'рыбная ловля') — это вид интернет-мошенничества, цель которого — выманить логины, пароли и номера банковских карт с помощью поддельных сайтов и писем.\n\nПризнаки фишинга:\n1. Искусственная спешка: 'Срочно подтвердите пароль, иначе аккаунт удалят!'.\n2. Подозрительные адреса: опечатки в домене (например, `payme-uz.tk` вместо официального сайта).\n3. Запрос разового кода из СМС.\n\nЗапомните: ни одна настоящая служба поддержки никогда не просит назвать секретный СМС-код!",
      'en': "Phishing is a cyber attack technique where attackers pose as legitimate organizations to lure victims into divulging sensitive data like credentials, OTP codes, or card details.\n\nRed flags of phishing:\n1. Artificial urgency: 'Your account will be suspended within 10 minutes!'\n2. Spoofed URLs: deceptive domain names with hyphens or unusual TLDs.\n3. Demands for 2FA or SMS verification codes.\n\nRemember: legitimate institutions never ask for your passwords or temporary OTP SMS codes."
    },
    realLifeExample: {
      'uz-Latn': "Bu xuddi ko‘chada notanish odam kelib: 'Menga uyingizning kalitini bering, men uyingiz chiroyli ekanligini tekshirib beraman' deganga o‘xshaydi. Albatta, siz begonalarga kalit bermaysiz. Internetdagi parollar ham uyingizning kalitidir!",
      'uz-Cyrl': "Бу худди кўчада нотаниш одам келиб: 'Менга уйингизнинг калитини беринг, мен уйингиз чиройли эканлигини текшириб бераман' деганга ўхшайди. Албатта, сиз бегоналарга калит бермайсиз. Интернетдаги пароллар ҳам уйингизнинг калитидир!",
      'ru': "Это похоже на незнакомца на улице, который просит ключи от вашей квартиры якобы для проверки чистоты. Вы никогда не отдадите ключи незнакомцу — точно так же нельзя отдавать пароли в интернете.",
      'en': "It's like a stranger on the street asking for your home keys to inspect your room. You would never hand them over. Your digital credentials are keys to your digital identity."
    },
    stepByStepGuide: {
      'uz-Latn': [
        "1. Xabardagi jo‘natuvchining elektron manzilini har doim sinchkovlik bilan o‘qing.",
        "2. Havolani bosishdan oldin sichqoncha kursorini ustiga olib boring va pastda ko‘ringan haqiqiy manzilni tekshiring.",
        "3. Sayt manzilida 'https://' borligiga va domen to‘g‘ri yozilganiga ishonch hosil qiling.",
        "4. Shubhali xabarlarni ochmasdan o‘chirib tashlang yoki kattalarga xabar bering."
      ],
      'uz-Cyrl': [
        "1. Хабардаги жўнатувчининг электрон манзилини ҳар доим синчковлик билан ўқинг.",
        "2. Ҳаволани босишдан олдин сичқонча курсорини устига олиб боринг ва пастда кўринган ҳақиқий манзилни текширинг.",
        "3. Сайт манзилида 'https://' борлигига ва домен тўғри ёзилганига ишонч ҳосил қилинг.",
        "4. Шубҳали хабарларни очмасдан ўчириб ташланг ёки катталарга хабар беринг."
      ],
      'ru': [
        "1. Внимательно проверяйте адрес отправителя письма.",
        "2. Наведите курсор на ссылку без клика и посмотрите на реальный URL в строке состояния.",
        "3. Проверяйте наличие защищенного соединения HTTPS и правильность букв в домене.",
        "4. Удаляйте подозрительные сообщения и сообщайте учителям или родителям."
      ],
      'en': [
        "1. Carefully inspect the sender's full email address.",
        "2. Hover over links without clicking to preview the destination URL.",
        "3. Verify HTTPS and examine the domain spelling.",
        "4. Delete suspicious messages and alert teachers or guardians."
      ]
    },
    commonMistakes: {
      'uz-Latn': [
        "Telegram guruhlardagi 'Bonus tarqatilmoqda' degan havolalarga ishonish",
        "Barcha saytlarda bitta bir xil paroldan foydalanish",
        "SMS orqali kelgan xavfsizlik kodini boshqalarga aytish"
      ],
      'uz-Cyrl': [
        "Telegram гуруҳлардаги 'Бонус тарқатилмоқда' деган ҳаволаларга ишониш",
        "Барча сайтларда битта бир хил паролдан фойдаланиш",
        "SMS орқали келган хавфсизлик кодини бошқаларга айтиш"
      ],
      'ru': [
        "Переход по ссылкам с обещанием бесплатных призов и бонусов в мессенджерах",
        "Использование одного простого пароля на всех сервисах",
        "Передача одноразовых СМС-кодов третьим лицам"
      ],
      'en': [
        "Believing 'Free Giveaway' or gift links in messaging apps",
        "Reusing the same simple password across all platforms",
        "Sharing SMS two-factor verification codes with anyone"
      ]
    },
    homework: {
      'uz-Latn': "Kiberxavfsizlik markazimizdagi 'Kiberxavfsizlik detektivi' o‘yinini to‘liq o‘ynab, 100 ball to‘plang.",
      'uz-Cyrl': "Киберхавфсизлик марказимиздаги 'Киберхавфсизлик детективи' ўйинини тўлиқ ўйнаб, 100 балл тўпланг.",
      'ru': "Пройдите интерактивный тренажер 'Детектив кибербезопасности' и наберите 100 баллов.",
      'en': "Complete the 'Cybersecurity Detective' interactive game in our security center and score 100 points."
    },
    status: "published",
    updatedAt: "2026-10-23",
    sources: [
      "O‘zbekiston Respublikasining 'Kiberxavfsizlik to‘g‘risida'gi Qonuni, 2022",
      "Kiberxavfsizlik markazi (cybersec.uz) metodik qo‘llanmasi"
    ]
  },

  // Grade 10
  {
    id: "g10-l1",
    gradeId: 10,
    subjectCategory: "web",
    title: {
      'uz-Latn': "Veb dasturlash: HTML teglari va CSS bilan dizayn",
      'uz-Cyrl': "Веб дастурлаш: HTML теглари ва CSS билан дизайн",
      'ru': "Веб-разработка: HTML-теги и стилизация через CSS",
      'en': "Web Development: HTML Elements & CSS Styling"
    },
    objectives: {
      'uz-Latn': [
        "Internet va veb-sahifalarning tuzilishini (HTML arxitekturasi) tushunish",
        "Asosiy semantik teglardan (h1-h6, p, a, img, button) foydalanish",
        "CSS qoidalari (color, background, font-size, border-radius) orqali bezash"
      ],
      'uz-Cyrl': [
        "Интернет ва веб-саҳифаларнинг тузилишини (HTML архитектураси) тушуниш",
        "Асосий семантик теглардан (h1-h6, p, a, img, button) фойдаланиш",
        "CSS қоидалари (color, background, font-size, border-radius) орқали безаш"
      ],
      'ru': [
        "Понять устройство веб-страниц и структуру HTML-документа",
        "Научиться применять базовые теги (h1-h6, p, a, img, div)",
        "Освоить базовый CSS для стилизации цвета, фона и отступов"
      ],
      'en': [
        "Understand DOM tree architecture of web documents",
        "Construct valid semantic HTML elements",
        "Apply CSS declarations for color, typography, and box model"
      ]
    },
    prerequisites: {
      'uz-Latn': "Kompyuterda matn muharrirlari va brauzer bilan ishlash tajribasi.",
      'uz-Cyrl': "Компьютерда матн муҳаррирлари ва браузер билан ишлаш тажрибаси.",
      'ru': "Опыт работы с браузером и текстовыми редакторами.",
      'en': "Basic browser and file management experience."
    },
    durationMinutes: 50,
    difficulty: "medium",
    lectureText: {
      'uz-Latn': "Har qanday veb-sayt (Google, Wikipedia, Kundalik) ikkita asosiy texnologiya yordamida yaratiladi:\n1. **HTML (HyperText Markup Language)** — bu saytning skeleti va suyaklari (matnlar, rasmlar, tugmalar).\n2. **CSS (Cascading Style Sheets)** — bu saytning kiyimi va bezagi (ranglar, shriftlar, fon va soyalar).\n\nHTML teglari burchakli qavslar `<teg>` bilan boshlanadi va yopiluvchi `</teg>` bilan yakunlanadi.",
      'uz-Cyrl': "Ҳар қандай веб-сайт (Google, Wikipedia, Kundalik) иккита асосий технология ёрдамида яратилади:\n1. **HTML** — бу сайтнинг скелети (матнлар, расмлар, тугмалар).\n2. **CSS** — бу сайтнинг кийими ва дизайни (ранглар, шрифтлар, фон ва соялар).\n\nHTML теглари бурчакли қавслар `<teg>` билан ёзилади.",
      'ru': "Каждый веб-сайт строится на HTML и CSS:\n1. **HTML** — каркас страницы (заголовки, абзацы, кнопки).\n2. **CSS** — стиль оформления (цвета, шрифты, отступы).",
      'en': "Web development relies on HTML for semantic structure and CSS for visual presentation rules."
    },
    realLifeExample: {
      'uz-Latn': "Uy qurishni tasavvur qiling: G‘isht va beton devorlar — bu HTML. Devorlarga bo‘yoq surtish, chiroqlar o‘rnatish va pardalar osish — bu CSS!",
      'uz-Cyrl': "Уй қуришни тасаввур қилинг: Ғишт ва бетон деворлар — бу HTML. Деворларга бўёқ суртиш, чироқлар ўрнатиш ва пардалар осиш — бу CSS!",
      'ru': "Аналогия со строительством дома: кирпичные стены и перекрытия — это HTML, а штукатурка, краска и декор — это CSS.",
      'en': "Think of building a house: the foundation, bricks, and drywall are HTML; paint, lighting, and curtains are CSS."
    },
    codeSnippet: {
      language: "html",
      code: "<div style=\"background: #0284c7; color: white; padding: 20px; border-radius: 12px;\">\n  <h1>Salom, Maktab!</h1>\n  <p>Bu mening birinchi HTML kartam.</p>\n  <button>Batafsil</button>\n</div>",
      explanation: {
        'uz-Latn': "Ko‘k fonli, oq yozuvli va burchaklari yumaloqlangan zamonaviy veb-karta kodi.",
        'uz-Cyrl': "Кўк фонли, оқ ёзувли ва бурчаклари думалоқланган замонавий веб-карта коди.",
        'ru': "Пример создания стильной карточки с синим фоном и скругленными углами.",
        'en': "Clean card component styled with inline CSS declarations."
      }
    },
    stepByStepGuide: {
      'uz-Latn': [
        "1. Kod laboratoriyasidagi 'HTML/CSS Sandbox' bo‘limini oching.",
        "2. <h1>Mening ismim</h1> tegi ichiga o‘z ismingizni yozing.",
        "3. <style> ichida h1 { color: blue; } deb rangini o‘zgartiring.",
        "4. Jonli natijani o‘ng tarafdagi brauzer oynasida ko‘ring."
      ],
      'uz-Cyrl': [
        "1. Код лабораториясидаги 'HTML/CSS Sandbox' бўлимини очинг.",
        "2. <h1>Менинг исмим</h1> теги ичига ўз исмингизни ёзинг.",
        "3. <style> ичида h1 { color: blue; } деб рангини ўзгартиринг.",
        "4. Жонли натижани ўнг тарафдаги браузер ойнасида кўринг."
      ],
      'ru': [
        "1. Откройте вкладку 'HTML/CSS Sandbox' в лаборатории кода.",
        "2. Напишите заголовок <h1>Ваше имя</h1>.",
        "3. В блоке <style> задайте цвет: h1 { color: #0284c7; }.",
        "4. Оцените результат в окне предпросмотра."
      ],
      'en': [
        "1. Open the HTML/CSS Sandbox in Code Lab.",
        "2. Insert <h1>Your Name</h1> tag.",
        "3. Define a CSS rule h1 { color: #0284c7; }.",
        "4. View the live preview instantly in the sandbox."
      ]
    },
    commonMistakes: {
      'uz-Latn': [
        "Tegni ochib, yopuvchi </teg> belgisini unutish",
        "CSS qoidalarida jingalak qavslar {} va nuqta-vergul ; ni tushirib qoldirish"
      ],
      'uz-Cyrl': [
        "Тегни очиб, ёпувчи </teg> белгисини унутиш",
        "CSS қоидаларида жингалак қавслар {} ва нуқта-вергул ; ни тушириб қолдириш"
      ],
      'ru': [
        "Забытый закрывающий тег </p>",
        "Пропуск точки с запятой в конце CSS-свойств"
      ],
      'en': [
        "Missing closing tags </tag>",
        "Omitting semicolons in CSS property lists"
      ]
    },
    homework: {
      'uz-Latn': "HTML Sandbox'da maktabingiz haqidagi kichik e’lon sahifasini yasang.",
      'uz-Cyrl': "HTML Sandbox'да мактабингиз ҳақидаги кичик эълон саҳифасини ясанг.",
      'ru': "Создайте в Sandbox страницу-визитку о своей школе.",
      'en': "Design a school showcase announcement page in the Sandbox."
    },
    status: "published",
    updatedAt: "2026-10-23",
    sources: ["Informatika: 10-sinf darsligi, Toshkent, 2024", "W3C Web Standards"]
  },

  // Grade 11
  {
    id: "g11-l1",
    gradeId: 11,
    subjectCategory: "ai",
    title: {
      'uz-Latn': "Sun’iy intellekt va mashinali o‘rganish asoslari",
      'uz-Cyrl': "Сунъий интеллект ва машинали ўрганиш асослари",
      'ru': "Основы искусственного интеллекта и машинного обучения",
      'en': "Foundations of Artificial Intelligence & Machine Learning"
    },
    objectives: {
      'uz-Latn': [
        "Sun’iy intellekt (AI) va an’anaviy dasturlash o‘rtasidagi farqni tushunish",
        "Mashinali o‘rganish (Machine Learning) qanday ma’lumotlar asosida o‘qitilishini bilish",
        "Sun’iy intellekt etikasi va mas’uliyatli foydalanish madaniyatiga ega bo‘lish"
      ],
      'uz-Cyrl': [
        "Сунъий интеллект (AI) ва анъанавий дастурлаш ўртасидаги фарқни тушуниш",
        "Машинали ўрганиш (Machine Learning) қандай маълумотлар асосида ўқитилишини билиш",
        "Сунъий интеллект этикаси ва масъулиятли фойдаланиш маданиятига эга бўлиш"
      ],
      'ru': [
        "Понять разницу между классическим алгоритмическим кодом и моделями машинного обучения",
        "Разобрать процесс обучения моделей на размеченных данных",
        "Освоить этические принципы и ответственность при работе с ИИ"
      ],
      'en': [
        "Distinguish between rule-based programming and machine learning paradigms",
        "Understand data training, feature weights, and validation datasets",
        "Learn responsible, ethical guidelines for building and using AI tools"
      ]
    },
    prerequisites: {
      'uz-Latn': "Python dasturlash asoslari va ehtimollar nazariyasi tushunchasi.",
      'uz-Cyrl': "Python дастурлаш асослари ва эҳтимоллар назарияси тушунчаси.",
      'ru': "Основы Python и базовые представления о теории вероятностей.",
      'en': "Python basics and elementary probability concepts."
    },
    durationMinutes: 50,
    difficulty: "hard",
    lectureText: {
      'uz-Latn': "An’anaviy dasturlashda inson kompyuterga aniq qoidalar va formulalarni yozib beradi. Masalan: `agar olma qizil va yumaloq bo‘lsa -> olma`.\n\nAmmo Sun’iy Intellektda biz qoidalarni qo‘lda yozmaymiz, balki minglab misollar (ma’lumotlar) beramiz va kompyuter o‘zi qonuniyatlarni o‘rganadi (Machine Learning).\n\nMashinali o‘rganishning uch asosiy turi mavjud:\n1. **Nazorat ostida o‘rganish (Supervised Learning)** — to‘g‘ri javoblari belgilangan namunalar orqali o‘qitish.\n2. **Nazoratsiz o‘rganish (Unsupervised Learning)** — ma’lumotlar ichidagi yashirin guruhlarni (klasterlarni) topish.\n3. **Mustahkamlovchi o‘rganish (Reinforcement Learning)** — mukofot va jazo asosida eng to‘g‘ri harakatlarni tanlash (xuddi shaxmat o‘ynash kabi).",
      'uz-Cyrl': "Анъанавий дастурлашда инсон компьютерга аниқ қоидалар ва формулаларни ёзиб беради. Масалан: `агар олма қизил ва юмалоқ бўлса -> олма`.\n\nАммо Сунъий Интеллектда биз қоидаларни қўлда ёзмаймиз, балки минглаб мисоллар (маълумотлар) берамиз ва компьютер ўзи қонуниятларни ўрганади (Machine Learning).\n\nМашинали ўрганишнинг уч асосий тури мавжуд:\n1. **Назорат остида ўрганиш (Supervised Learning)** — тўғри жавоблари белгиланган намуналар орқали ўқитиш.\n2. **Назоратсиз ўрганиш (Unsupervised Learning)** — маълумотлар ичидаги яширин гуруҳларни (кластерларни) топиш.\n3. **Мустаҳкамловчи ўрганиш (Reinforcement Learning)** — мукофот ва жазо асосида энг тўғри ҳаракатларни танлаш (худди шахмат ўйнаш каби).",
      'ru': "В классическом программировании мы жестко кодируем правила. В машинном обучении мы 'скармливаем' модели миллионы примеров данных, и алгоритм сам находит математические закономерности.\n\nТри парадигмы ML:\n1. **Обучение с учителем (Supervised)**: на размеченных данных (например, фото кошек и собак с подписями).\n2. **Обучение без учителя (Unsupervised)**: кластеризация и поиск скрытых паттернов.\n3. **Обучение с подкреплением (Reinforcement)**: обучение на основе наград и штрафов (робототехника, игры).",
      'en': "In classical programming, humans explicitly write logic rules. In Machine Learning, we provide extensive training data, and the model infers patterns autonomously.\n\nCore ML Paradigms:\n1. **Supervised Learning**: Training with labeled examples (features + ground truth).\n2. **Unsupervised Learning**: Uncovering hidden clusters and dimensional structures.\n3. **Reinforcement Learning**: Optimizing policies via rewards and penalties in simulated environments."
    },
    realLifeExample: {
      'uz-Latn': "Avtomobilning avtopiloti: u ko‘chada harakatlanayotganda oldidagi belgilar va piyodalarni oldindan ko‘rgan millionlab video lavhalar orqali tanib oladi va xavfsiz to‘xtashga qaror qiladi.",
      'uz-Cyrl': "Автомобилнинг автопилоти: у кўчада ҳаракатланаётганда олдидаги белгилар ва пиёдаларни олдиндан кўрган миллионлаб видео лавҳалар орқали таниб олади ва хавфсиз тўхташга қарор қилади.",
      'ru': "Автопилот в автомобиле: он ежесекундно анализирует видеопоток с камер, сопоставляя его с миллионами изученных дорожных ситуаций для безопасного маневра.",
      'en': "Autonomous driving vehicles: neural networks continuously parse camera sensor streams against trained weights to detect pedestrians and execute braking."
    },
    codeSnippet: {
      language: "python",
      code: "# Sodda evristik siniflashtiruvchi namunasi\ndef olma_yoki_apelsin(ogirlik, sirti):\n    # ogirlik grammda, sirti: 1-silliq (olma), 2-g'adir-budur (apelsin)\n    if sirti == 2 and ogirlik > 140:\n        return \"Apelsin\"\n    else:\n        return \"Olma\"\n\nprint(\"Natija:\", olma_yoki_apelsin(160, 2))",
      explanation: {
        'uz-Latn': "Ma’lumotlar asosida qaror qabul qiluvchi oddiy qarorlar daraxti (decision tree) mantig‘i.",
        'uz-Cyrl': "Маълумотлар асосида қарор қабул қилувчи оддий қарорлар дарахти (decision tree) мантиғи.",
        'ru': "Упрощенная иллюстрация логики дерева решений (Decision Tree).",
        'en': "Simplified demonstration of decision boundary classification logic."
      }
    },
    stepByStepGuide: {
      'uz-Latn': [
        "1. Masalani aniqlang (masalan: spam xabarlarni filtrlash).",
        "2. Ma’lumotlar to‘plamini (dataset) yig‘ing va tozalang.",
        "3. Modelni o‘qitish va tekshirish (train & test) qismlariga ajrating.",
        "4. Modelning aniqligini (accuracy) baholang."
      ],
      'uz-Cyrl': [
        "1. Масалани аниқланг (масалан: спам хабарларни фильтрлаш).",
        "2. Маълумотлар тўпламини (dataset) йиғинг ва тозаланг.",
        "3. Моделни ўқитиш ва текшириш (train & test) қисмларига ажратинг.",
        "4. Моделнинг аниқлигини (accuracy) баҳоланг."
      ],
      'ru': [
        "1. Сформулируйте задачу классификации или регрессии.",
        "2. Соберите и предобработайте датасет.",
        "3. Разделите данные на обучающую и тестовую выборки.",
        "4. Обучите модель и измерьте метрики точности."
      ],
      'en': [
        "1. Formulate problem domain (classification vs regression).",
        "2. Prepare and sanitize training dataset.",
        "3. Split into training and validation sets.",
        "4. Train model and evaluate performance metrics."
      ]
    },
    commonMistakes: {
      'uz-Latn': [
        "Sun’iy intellekt har doim 100% to‘g‘ri javob beradi deb ishonish (gallyutsinatsiyalar bo‘lishi mumkin)",
        "Yetarlicha sifatli ma’lumotlarsiz model o‘qitishga urinish (Garbage In, Garbage Out)"
      ],
      'uz-Cyrl': [
        "Сунъий интеллект ҳар доим 100% тўғри жавоб беради деб ишониш (галлюцинациялар бўлиши мумкин)",
        "Етарлича сифатли маълумотларсиз модел ўқитишга уриниш (Garbage In, Garbage Out)"
      ],
      'ru': [
        "Считать, что ИИ никогда не ошибается (галлюцинации моделей)",
        "Обучение на некачественных или искаженных данных (принцип GIGO)"
      ],
      'en': [
        "Blindly trusting AI outputs without verification (models hallucinate)",
        "Training models on biased or dirty data (Garbage In, Garbage Out)"
      ]
    },
    homework: {
      'uz-Latn': "Kundalik hayotingizda sun’iy intellekt qayerlarda (tarjima, qidiruv, tavsiyalar) ishlatilayotgani haqida qisqa tahlil yozing.",
      'uz-Cyrl': "Кундалик ҳаётингизда сунъий интеллект қаерларда (таржима, қидирув, тавсиялар) ишлатилаётгани ҳақида қисқа таҳлил ёзинг.",
      'ru': "Напишите короткое эссе о 3 примерах работы ИИ в вашем смартфоне.",
      'en': "Write a concise summary of 3 distinct instances of AI deployed in smartphone applications."
    },
    status: "published",
    updatedAt: "2026-10-23",
    sources: [
      "Informatika: 11-sinf darsligi, Toshkent, 2024",
      "O‘zbekiston Respublikasining 'Sun’iy intellekt texnologiyalarini rivojlantirish strategiyasi'"
    ]
  }
];
