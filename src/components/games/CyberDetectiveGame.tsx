import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, ShieldAlert, CheckCircle2, XCircle, RotateCcw, Award, AlertTriangle } from 'lucide-react';

interface Scenario {
  id: number;
  type: 'sms' | 'email' | 'telegram' | 'web';
  sender: string;
  content: string;
  urlPreview?: string;
  isThreat: boolean;
  explanation: Record<'uz-Latn' | 'uz-Cyrl' | 'ru' | 'en', string>;
  threatReason?: string;
}

const scenarios: Scenario[] = [
  {
    id: 1,
    type: 'sms',
    sender: "+998 90 *** 12 34",
    content: "Tabriklaymiz! Sizning nomingizga 1 500 000 so‘m yutuq chiqdi! Pulni kartangizga qabul qilish uchun quyidagi manzilga o‘ting va kartangiz raqami hamda kodini kiriting.",
    urlPreview: "http://yutuq-pul-olish.xyz/bonus",
    isThreat: true,
    explanation: {
      'uz-Latn': "Bu aniq fishing! Shubhali domen (.xyz), rasmiy bo‘lmagan telefon raqami va karta kodini talab qilish — firibgarlikning yaqqol belgilari.",
      'uz-Cyrl': "Бу аниқ фишинг! Шубҳали домен (.xyz), расмий бўлмаган телефон рақами ва карта кодини талаб қилиш — фирибгарликнинг яққол белгилари.",
      'ru': "Это явный фишинг! Подозрительный домен .xyz, неизвестный номер и запрос данных карты — признаки мошенников.",
      'en': "Classic phishing: suspicious domain extension (.xyz), unsolicited financial giveaway, and request for card credentials."
    }
  },
  {
    id: 2,
    type: 'telegram',
    sender: "Sinfdoshingiz (Akkaunti buzilgan)",
    content: "Salom! Iltimos, shoshilinch yordaming kerak. Hozir senga SMS orqali 6 xonali tasdiqlash kodi boradi, shuni menga yuborib yubor, juda muhim!",
    isThreat: true,
    explanation: {
      'uz-Latn': "Hech qachon SMS tasdiqlash kodini hech kimga bermang! Do‘stingizning akkaunti xakerlar tomonidan buzilgan bo‘lishi mumkin.",
      'uz-Cyrl': "Ҳеч қачон SMS тасдиқлаш кодини ҳеч кимга берманг! Дўстингизнинг аккаунти хакерлар томонидан бузилган бўлиши мумкин.",
      'ru': "Никогда не передавайте СМС-коды! Аккаунт друга, скорее всего, взломан злоумышленниками.",
      'en': "Never share SMS verification OTP codes. The friend's account is likely hijacked by attackers."
    }
  },
  {
    id: 3,
    type: 'web',
    sender: "Elektron kundalik tizimi",
    content: "Kundalik.com tizimiga xush kelibsiz. Tizimga kirish uchun login va parolingizni kiriting.",
    urlPreview: "https://kundalik.com/login",
    isThreat: false,
    explanation: {
      'uz-Latn': "Xavfsiz! Rasmiy domen manzili (kundalik.com) va xavfsiz HTTPS shifrlangan ulanish tasdiqlangan.",
      'uz-Cyrl': "Хавфсиз! Расмий домен манзили (kundalik.com) ва хавфсиз HTTPS шифрланган уланиш тасдиқланган.",
      'ru': "Безопасно! Официальное доменное имя сервиса и защищенный протокол HTTPS.",
      'en': "Safe! Official domain address and valid HTTPS encrypted connection."
    }
  },
  {
    id: 4,
    type: 'web',
    sender: "O‘yin saytidagi qalqib chiquvchi oyna",
    content: "DIQQAT! Sizning qurilmangizga 13 ta xavfli virus tushdi! Batareyangiz zararlanishi mumkin. Tozalash uchun darhol 'Yuklab olish' tugmasini bosing!",
    urlPreview: "http://super-cleaner-antivirus.site/download",
    isThreat: true,
    explanation: {
      'uz-Latn': "Bu soxta ogohlantirish (Scareware). Veb-sahifalar telefoningiz ichida virus bor-yo‘qligini bila olmaydi. Tugmani bossangiz, virus o‘rnatib olasiz!",
      'uz-Cyrl': "Бу сохта огоҳлантириш (Scareware). Веб-саҳифалар телефонингиз ичида вирус бор-йўқлигини била олмайди. Тугмани боссангиз, вирус ўрнатиб оласиз!",
      'ru': "Это запугивание (Scareware). Браузерная страница не может просканировать диск. Клик приведет к заражению вирусом.",
      'en': "Scareware tactic. Websites cannot scan your local filesystem. Clicking would install actual malware."
    }
  }
];

export const CyberDetectiveGame: React.FC = () => {
  const { locale, t, incrementGameCount } = useApp();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<boolean | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const scenario = scenarios[currentIndex];

  const handleDecision = (userClaimedThreat: boolean) => {
    if (selectedChoice !== null) return;
    setSelectedChoice(userClaimedThreat);

    if (userClaimedThreat === scenario.isThreat) {
      setScore(prev => prev + 25);
    }
  };

  const handleNext = () => {
    setSelectedChoice(null);
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
      incrementGameCount('cyber-detective');
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedChoice(null);
    setIsFinished(false);
  };

  const isUserCorrect = selectedChoice !== null && selectedChoice === scenario.isThreat;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 max-w-2xl mx-auto shadow-sm">
      
      {/* Game Header */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            <span>Kiberxavfsizlik Detektivi</span>
          </h3>
          <p className="text-xs text-slate-500">
            Haqiqiy xabarlar va fishing tuzoqlarini farqlang
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono tabular-nums">
          <div className="text-slate-600 dark:text-slate-300">
            Ball: <span className="text-sky-600 font-bold">{score} / 100</span>
          </div>
          <div className="text-slate-600 dark:text-slate-300">
            Vaziyat: <span className="font-bold">{currentIndex + 1}/{scenarios.length}</span>
          </div>
        </div>
      </div>

      {!isFinished ? (
        <div className="space-y-6">
          
          {/* Simulated Message Card */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-850 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                Jo‘natuvchi: {scenario.sender}
              </span>
              <span className="uppercase text-[10px] px-1.5 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 font-mono">
                {scenario.type}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-mono">
              "{scenario.content}"
            </p>

            {scenario.urlPreview && (
              <div className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-sky-600 dark:text-sky-400 break-all">
                Havola: {scenario.urlPreview}
              </div>
            )}
          </div>

          {/* Decision Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              disabled={selectedChoice !== null}
              onClick={() => handleDecision(false)}
              className={`p-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex flex-col items-center justify-center gap-2 ${
                selectedChoice !== null
                  ? !scenario.isThreat
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold'
                    : 'border-slate-200 opacity-40'
                  : 'border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:bg-emerald-50/50 text-slate-800 dark:text-slate-200'
              }`}
            >
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <span>Xavfsiz (Haqiqiy)</span>
            </button>

            <button
              disabled={selectedChoice !== null}
              onClick={() => handleDecision(true)}
              className={`p-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex flex-col items-center justify-center gap-2 ${
                selectedChoice !== null
                  ? scenario.isThreat
                    ? 'border-rose-500 bg-rose-50 text-rose-800 font-bold'
                    : 'border-slate-200 opacity-40'
                  : 'border-slate-200 dark:border-slate-700 hover:border-rose-500 hover:bg-rose-50/50 text-slate-800 dark:text-slate-200'
              }`}
            >
              <ShieldAlert className="w-6 h-6 text-rose-600" />
              <span>Xavfli (Fishing / Firibgarlik)</span>
            </button>
          </div>

          {/* Feedback Explanation Card */}
          {selectedChoice !== null && (
            <div className="space-y-4">
              <div className={`p-4 rounded-xl text-xs leading-relaxed border ${
                isUserCorrect 
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200' 
                  : 'bg-rose-50 text-rose-900 border-rose-200 dark:bg-rose-950/40 dark:text-rose-200'
              }`}>
                <div className="font-bold flex items-center gap-1.5 mb-1 text-sm">
                  {isUserCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-rose-600" />}
                  <span>{isUserCorrect ? "To‘g‘ri aniqladingiz! (+25 ball)" : "Xato xulosa."}</span>
                </div>
                <p>{scenario.explanation[locale]}</p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-sky-600 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {currentIndex < scenarios.length - 1 ? "Keyingi vaziyat" : "Natijani ko‘rish"}
                </button>
              </div>
            </div>
          )}

        </div>
      ) : (
        /* Game Over */
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-sky-950/50 text-sky-600 mx-auto flex items-center justify-center">
            <Award className="w-9 h-9" />
          </div>

          <h4 className="text-xl font-bold text-slate-900 dark:text-white">
            Detektivlik tekshiruvi yakunlandi!
          </h4>

          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
            Siz barcha xavfli fishing va soxta havolalarni tahlil qilib chiqdingiz.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 inline-block font-mono">
            <span className="text-xs text-slate-400 block mb-0.5">Umumiy ball:</span>
            <span className="text-2xl font-bold text-sky-600 dark:text-sky-400">{score} / 100</span>
          </div>

          <div className="pt-2">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.games.restart}</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
