import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowUp, ArrowDown, CheckCircle2, RotateCcw, Award, Sparkles, ListOrdered } from 'lucide-react';

interface Step {
  id: string;
  text: string;
}

const PUZZLES = [
  {
    title: "Choy damlash algoritmi",
    correctOrder: [
      "Choynakni qaynoq suv bilan chayqab tashlash",
      "Quruq qora yoki ko‘k choy solish",
      "Ustidan qaynoq suv quyish",
      "Choynak qopqog‘ini yopish",
      "5 daqiqa tindirib qo‘yish"
    ]
  },
  {
    title: "Python dasturini yaratish va ishga tushirish",
    correctOrder: [
      "Masalaning qo‘yilishini o‘rganish va rejalashtirish",
      "Matn yoki kod muharririni ochish",
      "Dastur kodini yozish (masalan: print, o‘zgaruvchilar)",
      "Faylni .py kengaytmasi bilan saqlash",
      "Dasturni Run tugmasi bilan ishga tushirish va natijani ko‘rish"
    ]
  }
];

export const AlgorithmFlowGame: React.FC = () => {
  const { t, incrementGameCount } = useApp();

  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const currentPuzzle = PUZZLES[puzzleIndex];

  // Shuffled steps initial state
  const [items, setItems] = useState<Step[]>(() => {
    return [...currentPuzzle.correctOrder]
      .map((text, idx) => ({ id: `s-${idx}`, text }))
      .sort(() => 0.5 - Math.random());
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[index - 1];
    newItems[index - 1] = temp;
    setItems(newItems);
    setIsSubmitted(false);
  };

  const moveDown = (index: number) => {
    if (index === items.length - 1) return;
    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[index + 1];
    newItems[index + 1] = temp;
    setItems(newItems);
    setIsSubmitted(false);
  };

  const handleCheck = () => {
    setIsSubmitted(true);
    const userOrder = items.map(i => i.text);
    const correct = userOrder.every((text, i) => text === currentPuzzle.correctOrder[i]);
    setIsCorrect(correct);
    if (correct) {
      incrementGameCount('algorithm-flow');
    }
  };

  const handleNextPuzzle = () => {
    const nextIdx = (puzzleIndex + 1) % PUZZLES.length;
    setPuzzleIndex(nextIdx);
    setItems(
      [...PUZZLES[nextIdx].correctOrder]
        .map((text, idx) => ({ id: `s-${idx}`, text }))
        .sort(() => 0.5 - Math.random())
    );
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 max-w-2xl mx-auto shadow-sm space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ListOrdered className="w-5 h-5 text-indigo-600" />
            <span>Algoritmni yig‘ (Flow Builder)</span>
          </h3>
          <p className="text-xs text-slate-500">
            Qadamlarni mantiqiy ketma-ketlikda tepaga va pastga siljitib to‘g‘ri joylashtiring
          </p>
        </div>
        <span className="text-xs font-mono text-slate-400">
          Mavzu {puzzleIndex + 1} / {PUZZLES.length}
        </span>
      </div>

      <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 text-xs font-semibold text-indigo-900 dark:text-indigo-300">
        Vazifa: "{currentPuzzle.title}" qadamlarini tartiblang
      </div>

      {/* Draggable/Movable Items Stack */}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-between gap-3 text-xs text-slate-800 dark:text-slate-200 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold flex items-center justify-center text-xs shrink-0 font-mono">
                {index + 1}
              </span>
              <span className="font-medium">{item.text}</span>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                disabled={index === 0}
                onClick={() => moveUp(index)}
                className="p-1.5 rounded bg-white dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:opacity-30"
                title="Tepaga siljitish"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
              <button
                disabled={index === items.length - 1}
                onClick={() => moveDown(index)}
                className="p-1.5 rounded bg-white dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:opacity-30"
                title="Pastga siljitish"
              >
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Validation Result */}
      {isSubmitted && (
        <div className={`p-4 rounded-xl text-xs border font-medium ${
          isCorrect 
            ? 'bg-emerald-50 text-emerald-900 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200' 
            : 'bg-rose-50 text-rose-900 border-rose-200 dark:bg-rose-950/40 dark:text-rose-200'
        }`}>
          {isCorrect ? (
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Ajoyib! Algoritm ketma-ketligi 100% to‘g‘ri yig‘ildi (+20 XP)!</span>
            </div>
          ) : (
            <div>Qadamlar ketma-ketligida xatolik bor. Qaytadan diqqat bilan o‘ylab siljiting!</div>
          )}
        </div>
      )}

      {/* Buttons */}
      <div className="pt-2 flex items-center justify-between">
        <button
          onClick={handleCheck}
          className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-sm transition-colors"
        >
          Tekshirish
        </button>

        {isCorrect && (
          <button
            onClick={handleNextPuzzle}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-sm transition-colors"
          >
            Keyingi algoritm
          </button>
        )}
      </div>

    </div>
  );
};
