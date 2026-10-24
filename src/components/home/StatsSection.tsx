import React from 'react';
import { useApp } from '../../context/AppContext';
import { School, Users, BookCheck, HelpCircle, Info } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const { t, setActivePage } = useApp();

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-2">
            <Info className="w-3.5 h-3.5 text-sky-600" />
            <span>Platforma modeli va rivojlanish rejasi (Namuna)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t.sections.statsTitle}
          </h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {t.sections.statsDesc}
          </p>
        </div>

        {/* 4 Stat Boxes with tabular numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-sky-600 mx-auto flex items-center justify-center mb-2">
              <School className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              10,130+
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Respublika maktablari
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5 font-medium">(O‘zbekiston jami maktablari)</div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 mx-auto flex items-center justify-center mb-2">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              6.5M+
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Maktab o‘quvchilari
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5 font-medium">(1–11-sinf auditoriyasi)</div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 mx-auto flex items-center justify-center mb-2">
              <BookCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              11
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Sinflar to‘liq qamrovi
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5 font-medium">(Boshlang‘ich, o‘rta, yuqori)</div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 mx-auto flex items-center justify-center mb-2">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Ochiq ta’lim
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5 font-medium">(Barcha darslar bepul)</div>
          </div>

        </div>

      </div>
    </section>
  );
};
