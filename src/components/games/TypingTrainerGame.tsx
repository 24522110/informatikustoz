import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { RotateCcw, Trophy, Zap, AlertCircle } from 'lucide-react';

const sampleTexts: Record<'uz-Latn' | 'uz-Cyrl' | 'ru' | 'en', string[]> = {
  'uz-Latn': [
    "Informatika — zamonaviy dunyoning eng muhim fanlaridan biridir.",
    "Kompyuter inson aql-idrokini quvvatlovchi eng kuchli raqamli vositadir.",
    "Muhammad al-Xorazmiy algoritm faniga asos solgan buyuk mutafakkirdir."
  ],
  'uz-Cyrl': [
    "Информатика — замонавий дунёнинг энг муҳим фанларидан биридир.",
    "Компьютер инсон ақл-идрокини қувватловчи энг кучли рақамли воситадир.",
    "Муҳаммад ал-Хоразмий алгоритм фанига асос солган буюк мутафаккирдир."
  ],
  'ru': [
    "Информатика открывает двери в мир цифровых технологий и возможностей.",
    "Компьютер помогает человеку быстро решать сложные математические задачи.",
    "Алгоритм — это точный пошаговый порядок действий для достижения цели."
  ],
  'en': [
    "Computer science empowers students to build creative software applications.",
    "Typing accurately and smoothly builds strong foundation for programmers.",
    "Algorithms help computers solve complex problems quickly and efficiently."
  ]
};

export const TypingTrainerGame: React.FC = () => {
  const { locale, t, incrementGameCount } = useApp();

  const [textIndex, setTextIndex] = useState(0);
  const targetText = sampleTexts[locale]?.[textIndex] || sampleTexts['uz-Latn'][0];

  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [mistakesCount, setMistakesCount] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  // Timer loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (startTime && !isFinished) {
      timer = setInterval(() => {
        setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [startTime, isFinished]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!startTime) {
      setStartTime(Date.now());
    }

    // Check mistake on current character
    const currentIndex = val.length - 1;
    if (currentIndex >= 0 && val[currentIndex] !== targetText[currentIndex]) {
      setMistakesCount(prev => prev + 1);
    }

    setUserInput(val);

    if (val === targetText) {
      setIsFinished(true);
      incrementGameCount('typing-trainer');
    }
  };

  const calculateWpm = () => {
    if (elapsedSeconds === 0) return 0;
    const wordsCount = targetText.split(' ').length;
    return Math.round((wordsCount / elapsedSeconds) * 60);
  };

  const calculateAccuracy = () => {
    const totalChars = targetText.length;
    if (totalChars === 0) return 100;
    const correctChars = Math.max(0, totalChars - mistakesCount);
    return Math.round((correctChars / totalChars) * 100);
  };

  const handleReset = () => {
    setUserInput('');
    setStartTime(null);
    setElapsedSeconds(0);
    setIsFinished(false);
    setMistakesCount(0);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleNextText = () => {
    setTextIndex(prev => (prev + 1) % sampleTexts[locale].length);
    handleReset();
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 max-w-2xl mx-auto shadow-sm">
      
      {/* Game Header */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Klaviatura tezligi (Typing Speed)
          </h3>
          <p className="text-xs text-slate-500">
            Matnni ko‘chirib yozing, tezlik va xatosizlikni sinang
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono tabular-nums">
          <div className="text-slate-600 dark:text-slate-300">
            WPM: <span className="text-sky-600 dark:text-sky-400 font-bold">{calculateWpm()}</span>
          </div>
          <div className="text-slate-600 dark:text-slate-300">
            Vaqt: <span className="font-bold">{elapsedSeconds}s</span>
          </div>
        </div>
      </div>

      {!isFinished ? (
        <div className="space-y-6">
          
          {/* Target Text Box with real-time character color-coding */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-mono text-sm leading-relaxed tracking-wide select-none">
            {targetText.split('').map((char, index) => {
              let charStyle = "text-slate-400 dark:text-slate-500";
              if (index < userInput.length) {
                if (userInput[index] === char) {
                  charStyle = "text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-100/40 dark:bg-emerald-950/40 rounded-sm";
                } else {
                  charStyle = "text-rose-600 dark:text-rose-400 font-bold bg-rose-100/50 dark:bg-rose-950/50 rounded-sm underline";
                }
              } else if (index === userInput.length) {
                charStyle = "text-slate-900 dark:text-white border-b-2 border-sky-500 font-bold animate-pulse";
              }

              return (
                <span key={index} className={charStyle}>
                  {char}
                </span>
              );
            })}
          </div>

          {/* Typing Input */}
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5">
              Matnni bu yerga tering (Boshlashingiz bilan vaqt sanaladi):
            </label>
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Matnni terishni boshlang..."
              autoFocus
              className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono text-sm focus:border-sky-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Xatolar soni: <strong className="text-rose-500">{mistakesCount}</strong></span>
            <button
              onClick={handleReset}
              className="text-slate-500 hover:text-slate-900 flex items-center gap-1 font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Qayta boshlash</span>
            </button>
          </div>

        </div>
      ) : (
        /* Finished State */
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-500 mx-auto flex items-center justify-center">
            <Trophy className="w-9 h-9" />
          </div>

          <h4 className="text-xl font-bold text-slate-900 dark:text-white">
            {t.games.congratulations}
          </h4>

          <p className="text-xs text-slate-600 dark:text-slate-400">
            Matn to‘liq terildi! Natijangiz:
          </p>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 max-w-sm mx-auto font-mono text-center">
            <div>
              <span className="text-[10px] text-slate-400 uppercase block">Tezlik</span>
              <span className="text-lg font-bold text-sky-600 dark:text-sky-400">{calculateWpm()} WPM</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase block">Aniqlik</span>
              <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{calculateAccuracy()}%</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase block">Vaqt</span>
              <span className="text-lg font-bold text-slate-700 dark:text-slate-200">{elapsedSeconds}s</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Yana urinib ko‘rish</span>
            </button>

            <button
              onClick={handleNextText}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors"
            >
              <span>Keyingi matn</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
