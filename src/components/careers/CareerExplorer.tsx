import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { initialCareersData } from '../../data/careersData';
import { 
  Briefcase, 
  Compass, 
  CheckCircle2, 
  Code, 
  ShieldCheck, 
  Bot, 
  Sparkles, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';

const quizQuestions = [
  {
    question: "Sizga ko‘proq qaysi mashg‘ulot yoqadi?",
    options: [
      { text: "Chiroyli rasm chizish, dizayn qilish va veb-sayt sahifalarini bezash", career: "frontend-dev" },
      { text: "Murakkab masalalarni yechish, mantiq va formulalar bilan ishlash", career: "backend-dev" },
      { text: "Kiberxavflarni izlash, xakerlardan himoyalanish va parollarni tekshirish", career: "cyber-specialist" },
      { text: "Katta ma’lumotlarni tahlil qilish va sun’iy intellekt modellarini o‘qitish", career: "ai-engineer" }
    ]
  },
  {
    question: "Kelajakda qanday loyihada ishlashni xohlardingiz?",
    options: [
      { text: "Odamlar har kuni foydalanadigan qulay mobil ilova yoki veb-sayt", career: "frontend-dev" },
      { text: "Banklar va to‘lov tizimlarining xavfsiz server bazalari", career: "backend-dev" },
      { text: "Davlat va kompaniya tizimlarini kiberhujumlardan asrovchi mudofaa tizimi", career: "cyber-specialist" },
      { text: "Ovozni va tasvirni taniy oladigan aqlli avtopilot yoki robot", career: "ai-engineer" }
    ]
  }
];

export const CareerExplorer: React.FC = () => {
  const { locale, t } = useApp();

  const [testMode, setTestMode] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [matchedCareerId, setMatchedCareerId] = useState<string | null>(null);

  const handleAnswer = (careerId: string) => {
    const updated = [...answers, careerId];
    setAnswers(updated);

    if (currentQIndex < quizQuestions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    } else {
      // Find mode of careerId
      const counts: Record<string, number> = {};
      updated.forEach(c => { counts[c] = (counts[c] || 0) + 1; });
      let bestCareer = updated[0];
      let maxCount = 0;
      Object.keys(counts).forEach(c => {
        if (counts[c] > maxCount) {
          maxCount = counts[c];
          bestCareer = c;
        }
      });
      setMatchedCareerId(bestCareer);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQIndex(0);
    setAnswers([]);
    setMatchedCareerId(null);
  };

  const matchedCareer = initialCareersData.find(c => c.id === matchedCareerId);

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Kasbga Yo‘naltirish</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {t.careers.title}
          </h1>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            {t.careers.subtitle}
          </p>

          <div className="mt-4">
            <button
              onClick={() => {
                setTestMode(!testMode);
                handleRestartQuiz();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors shadow-sm"
            >
              <Compass className="w-4 h-4" />
              <span>{testMode ? "Barcha kasblarni ko‘rish" : t.careers.testButton}</span>
            </button>
          </div>
        </div>

        {/* Career Quiz Modal/Card if Test Mode */}
        {testMode && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 max-w-xl mx-auto shadow-md">
            {!matchedCareerId ? (
              <div className="space-y-5">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span>Kasbiy moslik testi</span>
                  <span>Savol {currentQIndex + 1} / {quizQuestions.length}</span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {quizQuestions[currentQIndex].question}
                </h3>

                <div className="space-y-2.5">
                  {quizQuestions[currentQIndex].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt.career)}
                      className="w-full text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium transition-all"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Quiz Result */
              <div className="text-center space-y-4 py-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 mx-auto flex items-center justify-center">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Sizga mos IT yo‘nalishi: {matchedCareer?.title[locale]}!
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
                  {matchedCareer?.shortDescription[locale]}
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleRestartQuiz}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Qayta topshirish</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* All Career Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initialCareersData.map((career) => (
            <div
              key={career.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4 hover:border-indigo-400 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {career.title[locale]}
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 font-semibold">
                    {career.averageSalaryUz}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {career.shortDescription[locale]}
                </p>

                {/* What they do */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Asosiy vazifalari:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    {career.responsibilities[locale].map((r, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-indigo-500 font-bold">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* School subjects to focus on */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 text-xs space-y-1">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {t.careers.schoolFocus}
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {career.schoolSubjects[locale].map((subj, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 text-[11px]">
                        {subj}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Starter project */}
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  <strong className="text-slate-900 dark:text-white block mb-0.5">
                    {t.careers.starterProject}
                  </strong>
                  <span>{career.starterProject[locale]}</span>
                </div>
              </div>

              {/* Required Skills tags */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                {career.requiredSkills.map((sk, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-[10px] font-mono">
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
