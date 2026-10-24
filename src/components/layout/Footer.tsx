import React from 'react';
import { useApp } from '../../context/AppContext';
import { GraduationCap, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, setActivePage } = useApp();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                RAQAMLI OLAM
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {t.motto}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.hero.officialSyllabusTag}</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              {t.nav.lessons} & {t.nav.grades}
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button onClick={() => setActivePage('grades')} className="hover:text-sky-600 transition-colors">
                  1–4-sinflar (Boshlang‘ich)
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('grades')} className="hover:text-sky-600 transition-colors">
                  5–8-sinflar (O‘rta)
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('grades')} className="hover:text-sky-600 transition-colors">
                  9–11-sinflar (Yuqori)
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('codelab')} className="hover:text-sky-600 transition-colors">
                  {t.nav.codeLab}
                </button>
              </li>
            </ul>
          </div>

          {/* Tools & Practice Col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              {t.nav.games} & {t.nav.quizzes}
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button onClick={() => setActivePage('games')} className="hover:text-sky-600 transition-colors">
                  {t.nav.games}
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('quizzes')} className="hover:text-sky-600 transition-colors">
                  {t.nav.quizzes}
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('algo-visualizer')} className="hover:text-sky-600 transition-colors">
                  Algoritmlar vizualizatori
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('exercises')} className="hover:text-sky-600 transition-colors">
                  Amaliy mashqlar
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('security')} className="hover:text-sky-600 transition-colors">
                  {t.nav.security}
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('careers')} className="hover:text-sky-600 transition-colors">
                  {t.nav.careers}
                </button>
              </li>
            </ul>
          </div>

          {/* Knowledge & About Col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              {t.nav.glossary} & {t.footer.contact}
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button onClick={() => setActivePage('glossary')} className="hover:text-sky-600 transition-colors">
                  {t.nav.glossary}
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('facts')} className="hover:text-sky-600 transition-colors">
                  {t.nav.facts}
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('help')} className="hover:text-sky-600 transition-colors">
                  Yordam va FAQ
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('privacy')} className="hover:text-sky-600 transition-colors">
                  Maxfiylik siyosati
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('terms')} className="hover:text-sky-600 transition-colors">
                  Foydalanish shartlari
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('profile')} className="hover:text-sky-600 transition-colors">
                  {t.studentProfile.title}
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('teacher')} className="hover:text-sky-600 transition-colors">
                  {t.teacherCabinet.title}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="max-w-2xl text-center md:text-left leading-relaxed">
            {t.footer.disclaimer}
          </p>
          <div className="flex items-center gap-3 text-xs shrink-0">
            <button onClick={() => setActivePage('privacy')} className="hover:text-sky-600 transition-colors">Maxfiylik</button>
            <span>·</span>
            <button onClick={() => setActivePage('terms')} className="hover:text-sky-600 transition-colors">Shartlar</button>
            <span>·</span>
            <button onClick={() => setActivePage('help')} className="hover:text-sky-600 transition-colors">Yordam</button>
            <span>·</span>
            <span>© {new Date().getFullYear()} RAQAMLI OLAM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
