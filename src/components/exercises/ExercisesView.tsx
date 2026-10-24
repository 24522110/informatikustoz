import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DifficultyLevel } from '../../types';
import { CheckCircle2, XCircle, RotateCcw, Award, Code, Sparkles, Filter } from 'lucide-react';

interface Exercise {
  id: string;
  gradeId: number;
  difficulty: DifficultyLevel;
  type: 'true_false' | 'fill_blank' | 'predict_output';
  prompt: string;
  codeSnippet?: string;
  options?: string[];
  correctAnswer: string;
  hint: string;
  explanation: string;
}

const EXERCISES: Exercise[] = [
  {
    id: "ex-1",
    gradeId: 1,
    difficulty: "easy",
    type: "true_false",
    prompt: "Kompyuterning monitori ma’lumotlarni faqat ovozli eshitish uchun ishlatiladi.",
    options: ["To‘g‘ri", "Noto‘g‘ri"],
    correctAnswer: "Noto‘g‘ri",
    hint: "Monitor ko‘z bilan ko‘rish uchun xizmat qiladi, ovoz uchun kolonka yoki naushnik kerak.",
    explanation: "Monitor tasvir va matnlarni ko‘rsatuvchi vizual qurilmadir."
  },
  {
    id: "ex-2",
    gradeId: 4,
    difficulty: "easy",
    type: "fill_blank",
    prompt: "Suratlar va fotosuratlar odatda qaysi kengaytma bilan saqlanadi?",
    options: [".png va .jpg", ".docx va .pdf", ".mp3 va .wav", ".exe va .bat"],
    correctAnswer: ".png va .jpg",
    hint: "Rasm formatlarini eslang.",
    explanation: ".png va .jpg fayl kengaytmalari grafik tasvirlar uchun ishlatiladi."
  },
  {
    id: "ex-3",
    gradeId: 7,
    difficulty: "medium",
    type: "predict_output",
    prompt: "Quyidagi Python kodi bajarilgach ekranda nima chiqadi?",
    codeSnippet: `a = 10\nb = 5\nprint(a * b + 2)`,
    options: ["52", "70", "50", "17"],
    correctAnswer: "52",
    hint: "Ko‘paytirish amali qo‘shishdan oldin bajariladi: 10 * 5 = 50, so‘ng 50 + 2.",
    explanation: "Arifmetik amallar tartibiga ko‘ra: 10 * 5 = 50, 50 + 2 = 52."
  },
  {
    id: "ex-4",
    gradeId: 8,
    difficulty: "medium",
    type: "predict_output",
    prompt: "Ushbu shartli operator qaysi so‘zni ekranga chiqaradi?",
    codeSnippet: `x = 15\nif x % 2 == 0:\n    print("Juft")\nelse:\n    print("Toq")`,
    options: ["Toq", "Juft", "Xatolik", "Hech narsa"],
    correctAnswer: "Toq",
    hint: "% amali qoldiqni hisoblaydi: 15 ni 2 ga bo‘lganda qoldiq 1 bo‘ladi.",
    explanation: "15 toq son, shuning uchun else tarmog‘i 'Toq' yozuvini chiqaradi."
  }
];

export const ExercisesView: React.FC = () => {
  const { t, incrementGameCount, openAiModal } = useApp();

  const [gradeFilter, setGradeFilter] = useState<number | 'all'>('all');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});

  const filtered = EXERCISES.filter(ex => gradeFilter === 'all' || ex.gradeId === gradeFilter);

  const handlePick = (exId: string, answer: string) => {
    setSelectedAnswers(prev => ({ ...prev, [exId]: answer }));
    setShowResults(prev => ({ ...prev, [exId]: true }));
    const ex = EXERCISES.find(e => e.id === exId);
    if (ex && answer === ex.correctAnswer) {
      incrementGameCount('exercise');
    }
  };

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Amaliy Mashqlar Laboratoriyasi
            </h1>
            <p className="mt-1 text-xs text-slate-500">
              Nazariy bilimlarni interaktiv topshiriqlar bilan mustahkamlang
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-semibold">Sinf:</span>
            <select
              value={gradeFilter}
              onChange={(e) => setGradeFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <option value="all">Barcha sinflar</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(g => (
                <option key={g} value={g}>{g}-sinf</option>
              ))}
            </select>
          </div>
        </div>

        {/* Exercises List */}
        <div className="space-y-4">
          {filtered.map((ex, idx) => {
            const userPick = selectedAnswers[ex.id];
            const isRevealed = showResults[ex.id];
            const isCorrect = userPick === ex.correctAnswer;

            return (
              <div
                key={ex.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono font-bold text-sky-600">
                    Mashq №{idx + 1} ({ex.gradeId}-sinf)
                  </span>
                  <span className="capitalize px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold">
                    {ex.difficulty}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {ex.prompt}
                </h3>

                {ex.codeSnippet && (
                  <div className="p-3.5 rounded-xl bg-slate-900 text-amber-300 font-mono text-xs overflow-x-auto">
                    <pre>{ex.codeSnippet}</pre>
                  </div>
                )}

                {/* Options */}
                {ex.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ex.options.map((opt, oIdx) => {
                      let btnStyle = "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-sky-400";
                      if (isRevealed) {
                        if (opt === ex.correctAnswer) {
                          btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold";
                        } else if (opt === userPick) {
                          btnStyle = "border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300";
                        } else {
                          btnStyle = "opacity-40 border-slate-200";
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={isRevealed}
                          onClick={() => handlePick(ex.id, opt)}
                          className={`p-3 rounded-xl border text-xs font-semibold transition-all text-left flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {isRevealed && opt === ex.correctAnswer && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                          {isRevealed && opt === userPick && opt !== ex.correctAnswer && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Feedback */}
                {isRevealed && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <div className={`p-3 rounded-lg text-xs ${
                      isCorrect 
                        ? 'bg-emerald-50 text-emerald-900 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300' 
                        : 'bg-rose-50 text-rose-900 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-200'
                    }`}>
                      <div className="font-bold mb-0.5">
                        {isCorrect ? "To‘g‘ri javob! (+15 XP)" : "Xato javob."}
                      </div>
                      <p>{ex.explanation}</p>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">💡 Maslahat: {ex.hint}</span>
                      <button
                        onClick={() => openAiModal(`Mashq: ${ex.prompt}. Tushuntirib bering.`)}
                        className="text-sky-600 hover:underline flex items-center gap-1 font-semibold"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>AI Ustozdan so‘rash</span>
                      </button>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
