import React from 'react';
import { useApp } from '../../context/AppContext';
import { gradesData } from '../../data/gradesData';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';

export const GradeSelector: React.FC = () => {
  const { locale, t, setSelectedGradeId, setActivePage } = useApp();

  const handleSelectGrade = (id: number) => {
    setSelectedGradeId(id);
    setActivePage('curriculum');
  };

  return (
    <section className="py-12 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t.sections.selectGrade}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {t.sections.selectGradeDesc}
          </p>
        </div>

        {/* 1–11 Grade Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {gradesData.map((grade) => {
            const isElementary = grade.stage === 'elementary';
            const isMiddle = grade.stage === 'middle';
            
            return (
              <div
                key={grade.id}
                className="group relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 p-5 hover:border-sky-400 dark:hover:border-sky-600 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Clean metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                    <span className="font-semibold text-slate-900 dark:text-white text-base">
                      {grade.title[locale]}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {grade.ageRange}
                    </span>
                  </div>

                  {/* Stage indicator unboxed text */}
                  <div className="text-xs font-medium mb-2 text-sky-600 dark:text-sky-400">
                    {isElementary ? "Boshlang‘ich ta’lim" : isMiddle ? "O‘rta ta’lim" : "Yuqori sinf ta’limi"}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {grade.description[locale]}
                  </p>
                </div>

                {/* Footer of Card */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                    <span>{grade.topicsCount} mavzu</span>
                    <span>·</span>
                    <span>{grade.totalLessons} dars</span>
                  </div>

                  <button
                    onClick={() => handleSelectGrade(grade.id)}
                    className="inline-flex items-center gap-1 font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Darslar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
