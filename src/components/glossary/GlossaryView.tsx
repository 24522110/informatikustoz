import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { initialGlossaryData } from '../../data/glossaryData';
import { BookA, Search, Filter, Volume2, Sparkles } from 'lucide-react';

export const GlossaryView: React.FC = () => {
  const { locale, t, searchQuery, setSearchQuery } = useApp();

  const [localSearch, setLocalSearch] = useState(searchQuery || '');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTerms = useMemo(() => {
    return initialGlossaryData.filter(term => {
      const q = localSearch.toLowerCase();
      const matchText = 
        term.term[locale].toLowerCase().includes(q) ||
        term.shortDefinition[locale].toLowerCase().includes(q) ||
        term.fullExplanation[locale].toLowerCase().includes(q);

      const matchCat = selectedCategory === 'all' || term.category === selectedCategory;
      return matchText && matchCat;
    });
  }, [locale, localSearch, selectedCategory]);

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 text-xs font-semibold mb-2">
            <BookA className="w-3.5 h-3.5" />
            <span>Ko‘p tilli axborot tezaurusi</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {t.nav.glossary}
          </h1>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            Informatika va zamonaviy texnologiyalarga oid atamalarning sodda ta’riflari va hayotiy misollari.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={localSearch}
              onChange={(e) => {
                setLocalSearch(e.target.value);
                setSearchQuery(e.target.value);
              }}
              placeholder="Atamani qidiring (masalan: Algoritm, Bit, Fishing, AI)..."
              className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
            {['all', 'algorithms', 'fundamentals', 'cybersecurity', 'ai'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white font-semibold shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {cat === 'all' ? "Barchasi" : cat === 'algorithms' ? "Algoritmlar" : cat === 'cybersecurity' ? "Xavfsizlik" : cat === 'ai' ? "AI" : "Asoslar"}
              </button>
            ))}
          </div>
        </div>

        {/* Glossary Terms Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTerms.length === 0 ? (
            <div className="md:col-span-2 text-center py-12 text-slate-400 text-sm">
              Hech qanday atama topilmadi. Boshqa so‘z bilan qidirib ko‘ring.
            </div>
          ) : (
            filteredTerms.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm space-y-3 hover:border-sky-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.term[locale]}
                  </h3>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300">
                    {item.gradeLevel}-sinfdan boshlab
                  </span>
                </div>

                <p className="text-xs text-sky-800 dark:text-sky-300 font-medium leading-relaxed bg-sky-50/50 dark:bg-sky-950/30 p-2.5 rounded-lg border border-sky-100 dark:border-sky-900/40">
                  {item.shortDefinition[locale]}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.fullExplanation[locale]}
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">💡 Hayotiy misol: </span>
                  <span>{item.realLifeExample[locale]}</span>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
