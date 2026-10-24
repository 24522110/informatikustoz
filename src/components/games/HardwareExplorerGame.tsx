import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, XCircle, RotateCcw, Award, Sparkles } from 'lucide-react';

interface HardwareItem {
  id: string;
  name: Record<'uz-Latn' | 'uz-Cyrl' | 'ru' | 'en', string>;
  category: 'input' | 'output' | 'system' | 'storage';
  role: Record<'uz-Latn' | 'uz-Cyrl' | 'ru' | 'en', string>;
  icon: string;
}

const hardwareItems: HardwareItem[] = [
  {
    id: 'monitor',
    name: {
      'uz-Latn': "Monitor",
      'uz-Cyrl': "Монитор",
      'ru': "Монитор",
      'en': "Monitor"
    },
    category: 'output',
    role: {
      'uz-Latn': "Tasvirlar, matnlar va videolarni ekranda aks ettiruvchi asosiy chiqarish qurilmasi.",
      'uz-Cyrl': "Тасвирлар, матнлар ва видеоларни экранда акс эттирувчи асосий чиқариш қурилмаси.",
      'ru': "Основное устройство вывода информации на экран.",
      'en': "Primary visual output display device."
    },
    icon: "🖥"
  },
  {
    id: 'cpu',
    name: {
      'uz-Latn': "Protsessor (CPU)",
      'uz-Cyrl': "Процессор (CPU)",
      'ru': "Процессор (ЦП)",
      'en': "Processor (CPU)"
    },
    category: 'system',
    role: {
      'uz-Latn': "Kompyuterning miyasi: barcha mantiqiy va arifmetik amallarni bajaradi.",
      'uz-Cyrl': "Компьютернинг мияси: барча мантиқий ва арифметик амалларни бажаради.",
      'ru': "'Мозг' компьютера, производящий все вычисления и обработку инструкций.",
      'en': "The primary computational unit executing code instructions."
    },
    icon: "⚡"
  },
  {
    id: 'keyboard',
    name: {
      'uz-Latn': "Klaviatura",
      'uz-Cyrl': "Клавиатура",
      'ru': "Клавиатура",
      'en': "Keyboard"
    },
    category: 'input',
    role: {
      'uz-Latn': "Harflar, raqamlar va buyruqlarni kompyuterga kiritish vositasi.",
      'uz-Cyrl': "Ҳарфлар, рақамлар ва буйруқларни компьютерга киритиш воситаси.",
      'ru': "Устройство ввода текста, символов и управляющих команд.",
      'en': "Text and character input device with alphanumeric keys."
    },
    icon: "⌨"
  },
  {
    id: 'mouse',
    name: {
      'uz-Latn': "Sichqoncha",
      'uz-Cyrl': "Сичқонча",
      'ru': "Мышь",
      'en': "Mouse"
    },
    category: 'input',
    role: {
      'uz-Latn': "Ekrandagi ko‘rsatgichni (kursorni) boshqarish va tugmalarni bosish qurilmasi.",
      'uz-Cyrl': "Экрандаги кўрсатгични (курсорни) бошқариш ва тугмаларни босиш қурилмаси.",
      'ru': "Указательное устройство для навигации по графическому интерфейсу.",
      'en': "Pointing device used to manipulate graphical screen cursors."
    },
    icon: "🖱"
  },
  {
    id: 'ram',
    name: {
      'uz-Latn': "Operativ xotira (RAM)",
      'uz-Cyrl': "Оператив хотира (RAM)",
      'ru': "Оперативная память (ОЗУ)",
      'en': "RAM Memory"
    },
    category: 'system',
    role: {
      'uz-Latn': "Hozir ishlayotgan dasturlar va ma’lumotlarni vaqtincha saqlovchi tezkor xotira.",
      'uz-Cyrl': "Ҳозир ишлаётган дастурлар ва маълумотларни вақтинча сақловчи тезкор хотира.",
      'ru': "Быстрая энергозависимая память для запущенных программ.",
      'en': "High-speed volatile memory caching currently active runtime processes."
    },
    icon: "💾"
  },
  {
    id: 'ssd',
    name: {
      'uz-Latn': "Qattiq disk (SSD/HDD)",
      'uz-Cyrl': "Қаттиқ диск (SSD/HDD)",
      'ru': "Накопитель (SSD/HDD)",
      'en': "Storage Drive (SSD)"
    },
    category: 'storage',
    role: {
      'uz-Latn': "Fayllar, rasmlar va dasturlarni kompyuter o‘chirilganda ham doimiy saqlovchi ombor.",
      'uz-Cyrl': "Файллар, расмлар ва дастурларни компьютер ўчирилганда ҳам доимий сақловчи омбор.",
      'ru': "Постоянное долговременное хранилище для операционной системы и файлов.",
      'en': "Non-volatile storage persistent across system power cycles."
    },
    icon: "💽"
  }
];

export const HardwareExplorerGame: React.FC = () => {
  const { locale, t, incrementGameCount } = useApp();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameFinished, setGameFinished] = useState(false);

  const currentItem = hardwareItems[currentQuestionIndex];

  // Random 3 distractors + current target item
  const options = React.useMemo(() => {
    const others = hardwareItems.filter(item => item.id !== currentItem.id);
    const shuffledOthers = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
    return [...shuffledOthers, currentItem].sort(() => 0.5 - Math.random());
  }, [currentQuestionIndex]);

  const handleSelect = (id: string) => {
    if (selectedOption !== null) return; // Prevent double click
    setSelectedOption(id);
    if (id === currentItem.id) {
      setIsCorrect(true);
      setScore(prev => prev + 10);
    } else {
      setIsCorrect(false);
      setMistakes(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    if (currentQuestionIndex < hardwareItems.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameFinished(true);
      incrementGameCount('hardware-explorer');
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setMistakes(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setGameFinished(false);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 max-w-2xl mx-auto shadow-sm">
      
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Kompyuter qismlarini topish
          </h3>
          <p className="text-xs text-slate-500">
            Qurilmaning vazifasiga qarab to‘g‘ri nomini aniqlang
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono tabular-nums">
          <div className="text-slate-600 dark:text-slate-300">
            {t.games.score}: <span className="text-sky-600 dark:text-sky-400 font-bold">{score}</span>
          </div>
          <div className="text-slate-600 dark:text-slate-300">
            {t.games.level}: <span className="font-bold">{currentQuestionIndex + 1}/{hardwareItems.length}</span>
          </div>
        </div>
      </div>

      {!gameFinished ? (
        <div className="space-y-6">
          
          {/* Target description card */}
          <div className="p-6 rounded-xl bg-sky-50/60 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900/40 text-center space-y-3">
            <div className="text-4xl">{currentItem.icon}</div>
            <div className="text-xs uppercase tracking-wider font-semibold text-sky-600 dark:text-sky-400">
              Ushbu qurilma nima deb ataladi?
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              "{currentItem.role[locale]}"
            </p>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {options.map((item) => {
              let btnStyle = "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-sky-400 text-slate-800 dark:text-slate-200";
              
              if (selectedOption !== null) {
                if (item.id === currentItem.id) {
                  btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold";
                } else if (item.id === selectedOption) {
                  btnStyle = "border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 font-bold";
                } else {
                  btnStyle = "border-slate-200 dark:border-slate-800 opacity-50";
                }
              }

              return (
                <button
                  key={item.id}
                  disabled={selectedOption !== null}
                  onClick={() => handleSelect(item.id)}
                  className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all text-left flex items-center justify-between ${btnStyle}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name[locale]}</span>
                  </span>
                  {selectedOption !== null && item.id === currentItem.id && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                  {selectedOption !== null && item.id === selectedOption && item.id !== currentItem.id && (
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Result explanation & Next button */}
          {selectedOption !== null && (
            <div className="pt-2 flex items-center justify-between">
              <div className="text-xs">
                {isCorrect ? (
                  <span className="text-emerald-600 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Barakalla! To‘g‘ri javob (+10 ball)</span>
                  </span>
                ) : (
                  <span className="text-rose-600 font-bold flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" />
                    <span>Noto‘g‘ri. To‘g‘ri javob: {currentItem.name[locale]}</span>
                  </span>
                )}
              </div>

              <button
                onClick={handleNext}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-sky-600 hover:bg-slate-800 rounded-lg transition-colors"
              >
                {currentQuestionIndex < hardwareItems.length - 1 ? "Keyingisi" : "Yakunlash"}
              </button>
            </div>
          )}

        </div>
      ) : (
        /* Game Finished summary */
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-500 mx-auto flex items-center justify-center">
            <Award className="w-9 h-9" />
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white">
            {t.games.congratulations}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
            Siz kompyuterning barcha asosiy qurilmalarini muvaffaqiyatli o‘rganib chiqdingiz.
          </p>

          <div className="inline-flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 font-mono text-sm tabular-nums">
            <div>
              <span className="text-slate-400 text-xs block">To‘plangan ball:</span>
              <span className="text-sky-600 dark:text-sky-400 font-bold text-lg">{score} / {hardwareItems.length * 10}</span>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />
            <div>
              <span className="text-slate-400 text-xs block">Xatolar:</span>
              <span className="text-rose-500 font-bold text-lg">{mistakes}</span>
            </div>
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
