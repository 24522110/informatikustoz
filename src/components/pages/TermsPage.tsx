import React from 'react';
import { useApp } from '../../context/AppContext';
import { FileText, CheckCircle2 } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 text-xs font-semibold mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>Foydalanish qoidalari</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Foydalanish Shartlari (Terms of Service)
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Oxirgi yangilanish: 2026-yil oktyabr
          </p>
        </div>

        <article className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-5 leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              1. Platformaning maqsadi va vazifasi
            </h2>
            <p>
              RAQAMLI OLAM platformasi O‘zbekiston Respublikasi maktablarida informatika, algoritmik fikrlash, dasturlash va kiberxavfsizlik ko‘nikmalarini o‘quvchilarga yetkazish uchun ta’limiy resurs sifatida xizmat qiladi.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              2. Qat’iyan taqiqlangan harakatlar
            </h2>
            <p>
              Foydalanuvchilar platformaning xavfsizlik tizimlarini ataylab buzishga urinish, boshqa foydalanuvchilar akkauntlariga ruxsatsiz kirish, zararli skriptlar yoki axloqsiz kontent tarqatishdan tiyilishlari shart.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              3. Mualliflik huquqi va litsenziya
            </h2>
            <p>
              Platformadagi o‘quv qo‘llanmalar, test savollari va o‘yinlar ta’lim maqsadlarida bepul foydalanish uchun ochiq. Boshqa tijoriy maqsadlarda kontentni to‘liq ko‘chirib tarqatish qonun bilan cheklanadi.
            </p>
          </section>

        </article>

      </div>
    </div>
  );
};
