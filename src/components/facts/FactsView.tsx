import React from 'react';
import { useApp } from '../../context/AppContext';
import { initialFactsData } from '../../data/factsData';
import { Lightbulb, Calendar, ShieldCheck, Sparkles } from 'lucide-react';

export const FactsView: React.FC = () => {
  const { locale, t } = useApp();

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-2">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Faktlar & Tarix</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {t.nav.facts}
          </h1>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            Kompyuter tarixi, buyuk allomalar merosi va O‘zbekiston IT yutuqlari bo‘yicha tekshirilgan ma’lumotlar.
          </p>
        </div>

        {/* Facts List */}
        <div className="space-y-4">
          {initialFactsData.map((fact) => (
            <div
              key={fact.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-3 hover:border-amber-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-amber-500">⚡</span>
                  <span>{fact.title[locale]}</span>
                </h3>
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{fact.verifiedDate}</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {fact.factText[locale]}
              </p>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Manba: {fact.source}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
