import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Bug, CheckCircle2, XCircle, RotateCcw, Award, Code2 } from 'lucide-react';

interface BugPuzzle {
  id: number;
  language: string;
  codeSnippet: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

const BUG_PUZZLES: BugPuzzle[] = [
  {
    id: 1,
    language: "Python",
    codeSnippet: `print("Salom, Dunyo!)`,
    question: "Ushbu kodda qanday sintaksis xatolik (SyntaxError) mavjud?",
    options: [
      "Qo‘shtirnoq oxirida yopilmagan",
      "print so‘zi noto‘g‘ri yozilgan",
      "Qavs ochilmagan",
      "Matn ichida vergul bo‘lishi mumkin emas"
    ],
    correctOptionIndex: 0,
    explanation: "Matn satrlarida ochilgan qo‘shtirnoq albatta yopilishi shart: print(\"Salom, Dunyo!\")"
  },
  {
    id: 2,
    language: "Python",
    codeSnippet: `yosh = 14\nif yosh >= 10\n    print("Maktab o‘quvchisi")`,
    question: "if shart operatoridagi xatoni toping:",
    options: [
      "if shartidan so‘ng ikki nuqta (:) qo‘yilishi shart",
      "yosh o‘zgaruvchisiga son berish mumkin emas",
      ">= belgisi xato",
      "print funksiyasida xato bor"
    ],
    correctOptionIndex: 0,
    explanation: "Python tilida shartli operatorlar va sikllardan keyin ikki nuqta (:) qo‘yiladi."
  },
  {
    id: 3,
    language: "Python",
    codeSnippet: `a = 15\nb = 25\nPrint(a + b)`,
    question: "Ushbu kod ishga tushganda nega NameError beradi?",
    options: [
      "Python katta-kichik harflarni farqlaydi, print() kichik harflar bilan yozilishi shart",
      "Ikkita sonni qo‘shib bo‘lmaydi",
      "a va b o‘zgaruvchilariga qiymat berilmagan",
      "Natija ekranga chiqmaydi"
    ],
    correctOptionIndex: 0,
    explanation: "Python case-sensitive til hisoblanadi. Print() bilan print() mutlaqo boshqa nomlardir."
  }
];

export const BugHunterGame: React.FC = () => {
  const { t, incrementGameCount } = useApp();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const currentPuzzle = BUG_PUZZLES[currentIdx];

  const handleSelect = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    if (idx === currentPuzzle.correctOptionIndex) {
      setScore(prev => prev + 25);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    if (currentIdx < BUG_PUZZLES.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setIsFinished(true);
      incrementGameCount('bug-hunter');
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setScore(0);
    setSelectedOption(null);
    setIsFinished(false);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 max-w-2xl mx-auto shadow-sm space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Bug className="w-5 h-5 text-rose-500" />
            <span>Xatoni top (Bug Hunter)</span>
          </h3>
          <p className="text-xs text-slate-500">
            Dasturiy koddagi sintaktik va mantiqiy xatoni aniqlang
          </p>
        </div>

        <div className="text-xs font-mono tabular-nums text-slate-600 dark:text-slate-300">
          Ball: <strong className="text-sky-600 font-bold">{score}</strong> | Savol: <strong className="font-bold">{currentIdx + 1}/{BUG_PUZZLES.length}</strong>
        </div>
      </div>

      {!isFinished ? (
        <div className="space-y-6">
          
          {/* Code preview card */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-200 space-y-1">
            <div className="text-[10px] text-slate-500 pb-1 border-b border-slate-800 flex justify-between">
              <span>{currentPuzzle.language} kodi</span>
              <span className="text-rose-400">Xatolik mavjud!</span>
            </div>
            <pre className="py-2 text-amber-300 leading-relaxed overflow-x-auto">
              {currentPuzzle.codeSnippet}
            </pre>
          </div>

          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            {currentPuzzle.question}
          </h4>

          {/* Options */}
          <div className="space-y-2.5">
            {currentPuzzle.options.map((opt, idx) => {
              let btnStyle = "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-sky-400";
              if (selectedOption !== null) {
                if (idx === currentPuzzle.correctOptionIndex) {
                  btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold";
                } else if (idx === selectedOption) {
                  btnStyle = "border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300";
                } else {
                  btnStyle = "opacity-40 border-slate-200";
                }
              }

              return (
                <button
                  key={idx}
                  disabled={selectedOption !== null}
                  onClick={() => handleSelect(idx)}
                  className={`w-full p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all text-left flex items-center justify-between ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {selectedOption !== null && idx === currentPuzzle.correctOptionIndex && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                  {selectedOption !== null && idx === selectedOption && idx !== currentPuzzle.correctOptionIndex && (
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {selectedOption !== null && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900/40 text-xs text-sky-900 dark:text-sky-300">
                💡 <strong>Tushuntirish:</strong> {currentPuzzle.explanation}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors shadow-sm"
                >
                  {currentIdx < BUG_PUZZLES.length - 1 ? "Keyingi xatolik" : "Natijani ko‘rish"}
                </button>
              </div>
            </div>
          )}

        </div>
      ) : (
        /* Finished State */
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-500 mx-auto flex items-center justify-center">
            <Award className="w-9 h-9" />
          </div>

          <h4 className="text-xl font-bold text-slate-900 dark:text-white">
            Xatolar sinovi yakunlandi!
          </h4>

          <p className="text-xs text-slate-500">
            Siz dasturlashdagi asosiy sintaksis xatoliklarini to‘g‘ri aniqladingiz.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 font-mono text-sm inline-block">
            To‘plangan ball: <strong className="text-sky-600">{score}</strong> / 75
          </div>

          <div className="pt-2">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Qayta topshirish</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
