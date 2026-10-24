import React from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, Gamepad2, Sparkles, BookOpen, ShieldCheck, Terminal, Cpu } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t, setActivePage, setSelectedGradeId } = useApp();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-white dark:from-slate-900/50 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800 transition-colors py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* National Curriculum Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 dark:text-sky-300">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  setSelectedGradeId(1);
                  setActivePage('grades');
                }}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-[0.99]"
              >
                <span>{t.hero.startLearning}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActivePage('games')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 rounded-xl transition-all"
              >
                <Gamepad2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>{t.hero.tryGames}</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>1–11-sinf to‘liq dasturi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-sky-600" />
                <span>Interaktiv kod muhiti</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Pedagogik 'Raqamli Ustoz'</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-fidelity educational visual artifact */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Graphic */}
              <div className="rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 p-6 shadow-xl space-y-4">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-slate-400 ml-2">raqamli_olam.py</span>
                  </div>
                  <span className="text-[11px] font-mono text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded">
                    Python 3.12
                  </span>
                </div>

                {/* Simulated Interactive Code Block */}
                <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 leading-relaxed shadow-inner">
                  <div className="text-slate-500"># O‘zbekiston maktablari uchun dastur</div>
                  <div><span className="text-pink-400">def</span> <span className="text-sky-300">kelajak_kasblari</span>(bilim):</div>
                  <div className="pl-4">imkoniyatlar = [<span className="text-amber-300">"AI"</span>, <span className="text-amber-300">"Dasturlash"</span>, <span className="text-amber-300">"Kiberxavfsizlik"</span>]</div>
                  <div className="pl-4"><span className="text-pink-400">return</span> f<span className="text-amber-300">"Muvaffaqiyat: &#123;bilim&#125; sari!"</span></div>
                  <div className="mt-2 text-slate-400">&gt;&gt;&gt; kelajak_kasblari("Informatika")</div>
                  <div className="text-emerald-400">&gt;&gt; 'Muvaffaqiyat: Informatika sari!'</div>
                </div>

                {/* Interactive Mini-Stage Preview */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <button
                    onClick={() => setActivePage('games')}
                    className="p-3 rounded-xl bg-sky-50 dark:bg-slate-700/50 hover:bg-sky-100 dark:hover:bg-slate-700 transition-colors text-left"
                  >
                    <Gamepad2 className="w-5 h-5 text-sky-600 dark:text-sky-400 mb-1" />
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">8 ta O‘yin</div>
                    <div className="text-[10px] text-slate-500">Amaliy mashqlar</div>
                  </button>

                  <button
                    onClick={() => setActivePage('quizzes')}
                    className="p-3 rounded-xl bg-emerald-50 dark:bg-slate-700/50 hover:bg-emerald-100 dark:hover:bg-slate-700 transition-colors text-left"
                  >
                    <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-1" />
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">Testlar</div>
                    <div className="text-[10px] text-slate-500">1–11-sinflar</div>
                  </button>

                  <button
                    onClick={() => setActivePage('security')}
                    className="p-3 rounded-xl bg-purple-50 dark:bg-slate-700/50 hover:bg-purple-100 dark:hover:bg-slate-700 transition-colors text-left"
                  >
                    <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400 mb-1" />
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">Xavfsizlik</div>
                    <div className="text-[10px] text-slate-500">Kibergigiyena</div>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
