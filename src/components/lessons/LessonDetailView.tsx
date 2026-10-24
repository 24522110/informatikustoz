import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { initialLessonsData } from '../../data/lessonsData';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  BookOpen, 
  Lightbulb, 
  ListOrdered, 
  AlertTriangle, 
  FileText, 
  Share2, 
  ShieldCheck, 
  Terminal,
  ArrowRight,
  Maximize2
} from 'lucide-react';

export const LessonDetailView: React.FC = () => {
  const { 
    locale, 
    t, 
    selectedLessonId, 
    setSelectedLessonId, 
    lessons, 
    setActivePage, 
    markLessonComplete, 
    userProgress, 
    openAiModal 
  } = useApp();

  const lesson = lessons.find(l => l.id === selectedLessonId) || lessons[0] || initialLessonsData[0];
  const isCompleted = userProgress.completedLessons.includes(lesson.id);

  // Self-check interactive quiz state inside lesson
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    if (lesson.codeSnippet?.code) {
      navigator.clipboard.writeText(lesson.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleComplete = () => {
    markLessonComplete(lesson.id);
  };

  // Find next lesson
  const currentIndex = lessons.findIndex(l => l.id === lesson.id);
  const nextLesson = currentIndex >= 0 && currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Action Bar */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            onClick={() => setActivePage('curriculum')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t.lesson.backToCurriculum}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => openAiModal(`Mavzu: ${lesson.title[locale]}. Tushunmagan joyim bor.`)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 rounded-lg hover:bg-sky-100 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>{t.lesson.askAi}</span>
            </button>

            <button
              onClick={handleComplete}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors shadow-sm ${
                isCompleted 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-slate-900 dark:bg-sky-600 text-white hover:bg-slate-800'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isCompleted ? t.lesson.completedDone : t.lesson.completedBtn}</span>
            </button>
          </div>
        </div>

        {/* 1. Dars Sarlavhasi & 2. Sinf va fan bo'limi */}
        <article className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-8">
          
          <header className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
              <span className="text-sky-600 dark:text-sky-400 font-semibold">{lesson.gradeId}-sinf</span>
              <span>·</span>
              <span className="capitalize">{lesson.subjectCategory}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{lesson.durationMinutes} {t.lesson.duration}</span>
              </span>
              <span>·</span>
              <span className="capitalize">{lesson.difficulty}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {lesson.title[locale]}
            </h1>
          </header>

          {/* 3. Dars maqsadi & 4. Kutilayotgan natijalar */}
          <section className="bg-sky-50/60 dark:bg-sky-950/30 rounded-xl p-5 border border-sky-100 dark:border-sky-900/40">
            <h2 className="text-sm font-bold text-sky-900 dark:text-sky-300 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-600" />
              <span>{t.lesson.objectives}</span>
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {lesson.objectives[locale].map((obj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-sky-600 font-bold">✓</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-sky-200/40 dark:border-sky-900/50 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">{t.lesson.prerequisites}:</span> {lesson.prerequisites[locale]}
            </div>
          </section>

          {/* 7. Qisqa va tushunarli ma'ruza */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {t.lesson.lecture}
            </h2>
            <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-3 whitespace-pre-line font-normal">
              {lesson.lectureText[locale]}
            </div>
          </section>

          {/* 8. Real hayotdan misol */}
          <section className="bg-amber-50/60 dark:bg-amber-950/20 rounded-xl p-5 border border-amber-200/50 dark:border-amber-900/40">
            <h3 className="text-sm font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>{t.lesson.realWorld}</span>
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {lesson.realLifeExample[locale]}
            </p>
          </section>

          {/* 9. Kod yoki blokli algoritm namunasi */}
          {lesson.codeSnippet && (
            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-slate-600" />
                  <span>{t.lesson.codeExample} ({lesson.codeSnippet.language})</span>
                </h3>
                <button
                  onClick={handleCopyCode}
                  className="text-xs font-mono text-sky-600 hover:underline"
                >
                  {copiedCode ? "Nusxa olindi!" : "Kodni nusxalash"}
                </button>
              </div>

              <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto shadow-inner">
                <pre>{lesson.codeSnippet.code}</pre>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lesson.codeSnippet.explanation[locale]}
              </p>
            </section>
          )}

          {/* 10. Bosqichma-bosqich amaliy ko'rsatma */}
          <section className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ListOrdered className="w-4 h-4 text-indigo-600" />
              <span>{t.lesson.stepGuide}</span>
            </h3>
            <div className="space-y-2">
              {lesson.stepByStepGuide[locale].map((step, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 13. O'zini tekshirish savollari (Interactive Self-check) */}
          <section className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t.lesson.selfCheck}</span>
            </h3>
            
            <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
              Ushbu mavzu bo‘yicha o‘rganilgan qoidani tasdiqlang:
            </p>

            <div className="space-y-2">
              <button
                onClick={() => {
                  setSelectedAnswer(1);
                  setShowExplanation(true);
                }}
                className={`w-full text-left p-3 rounded-lg text-xs font-medium border transition-colors ${
                  selectedAnswer === 1
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200'
                    : 'border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                A) Algoritm aniq va to‘g‘ri ketma-ketlikda tuzilishi shart (To‘g‘ri fikr)
              </button>

              <button
                onClick={() => {
                  setSelectedAnswer(2);
                  setShowExplanation(true);
                }}
                className={`w-full text-left p-3 rounded-lg text-xs font-medium border transition-colors ${
                  selectedAnswer === 2
                    ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200'
                    : 'border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                B) Qadamlar tartibini ixtiyoriy aralashtirsa ham natija o‘zgarmaydi (Noto‘g‘ri)
              </button>
            </div>

            {showExplanation && (
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-xs text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                {selectedAnswer === 1 
                  ? "To‘g‘ri! Har qanday algoritmda qadamlar tartibi natijaga bevosita ta’sir qiladi." 
                  : "Diqqat: agar qadamlar tartibi aralashsa, algoritm kutilgan natijani bermaydi!"}
              </div>
            )}
          </section>

          {/* 15. Keng tarqalgan xatolar */}
          <section className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>{t.lesson.commonMistakes}</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              {lesson.commonMistakes[locale].map((err, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-500">⚠</span>
                  <span>{err}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 16. Uyga vazifa / Ijodiy loyiha */}
          <section className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/40">
            <h3 className="text-sm font-bold text-purple-900 dark:text-purple-300 mb-1 flex items-center gap-2">
              <FileText className="w-4 h-4 text-purple-600" />
              <span>{t.lesson.homework}</span>
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {lesson.homework[locale]}
            </p>
          </section>

          {/* 19. Foydalanilgan manbalar */}
          <footer className="pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-1">
            <div className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.lesson.verifiedSource}</span>
            </div>
            {lesson.sources.map((src, i) => (
              <div key={i} className="text-[11px] text-slate-400">
                • {src}
              </div>
            ))}
          </footer>

        </article>

        {/* Bottom Pagination / Next Lesson */}
        {nextLesson && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => {
                setSelectedLessonId(nextLesson.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors shadow-sm"
            >
              <span>{t.lesson.nextLesson}: {nextLesson.title[locale]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
