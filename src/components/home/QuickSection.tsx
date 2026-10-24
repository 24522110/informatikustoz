import React from 'react';
import { useApp } from '../../context/AppContext';
import { initialFactsData } from '../../data/factsData';
import { 
  BookOpen, 
  Code, 
  HelpCircle, 
  Lightbulb, 
  Gamepad2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const QuickSection: React.FC = () => {
  const { locale, t, setActivePage, setSelectedLessonId, setActiveGameId } = useApp();
  const dailyFact = initialFactsData[0];

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-950/60 border-y border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {t.sections.quickLinks}
            </h2>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Informatika bo‘yicha bilimlarni har kuni yangilab borish uchun tavsiyalar
            </p>
          </div>
        </div>

        {/* 5 Quick Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* 1. Bugungi dars */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400 mb-2">
                <BookOpen className="w-4 h-4" />
                <span>{t.sections.todayLesson}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 mb-2">
                Python dasturlash tiliga kirish va print()
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                7-sinf o‘quvchilari uchun dasturiy kod yozishning ilk qoidalari.
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedLessonId("g7-l1");
                setActivePage('lesson-detail');
              }}
              className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 flex items-center justify-between"
            >
              <span>Boshlash</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 2. Kun mashqi */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                <Code className="w-4 h-4" />
                <span>{t.sections.todayExercise}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 mb-2">
                Sikl va hisoblash mashqi
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                Python laboratoriyasida 1 dan 10 gacha sonlar yig‘indisini topuvchi dastur.
              </p>
            </div>
            <button
              onClick={() => setActivePage('exercises')}
              className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center justify-between"
            >
              <span>Mashqni yechish</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3. Kun testi */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400 mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>{t.sections.todayQuiz}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 mb-2">
                Kiberxavfsizlik testi
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                Parol mustahkamligi va fishing xatarlarini sinovdan o‘tkazing.
              </p>
            </div>
            <button
              onClick={() => setActivePage('quizzes')}
              className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 flex items-center justify-between"
            >
              <span>Testni yechish</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4. Kun fakti */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>{t.sections.todayFact}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 mb-2">
                {dailyFact.title[locale]}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3">
                {dailyFact.factText[locale]}
              </p>
            </div>
            <button
              onClick={() => setActivePage('facts')}
              className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 flex items-center justify-between"
            >
              <span>Barcha faktlar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 5. Kun o'yini */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400 mb-2">
                <Gamepad2 className="w-4 h-4" />
                <span>{t.sections.todayGame}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 mb-2">
                Robotni manzilga olib bor
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                To‘siqlarni chetlab o‘tib, algoritm buyruqlari bilan yulduzchani oling!
              </p>
            </div>
            <button
              onClick={() => {
                setActiveGameId('robot-grid');
                setActivePage('games');
              }}
              className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 flex items-center justify-between"
            >
              <span>O‘ynash</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
