import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Lock, UserCheck, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const { t } = useApp();

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Voyaga yetmaganlar xavfsizligi</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Maxfiylik Siyosati (Privacy Policy)
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Oxirgi yangilanish: 2026-yil oktyabr
          </p>
        </div>

        <article className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-5 leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              1. Bolalar va o‘quvchilar ma’lumotlarini himoya qilish
            </h2>
            <p>
              RAQAMLI OLAM platformasi maktab yoshidagi voyaga yetmagan o‘quvchilar xavfsizligini birinchi o‘ringa qo‘yadi. Platformada foydalanuvchidan ortiqcha shaxsiy ma’lumotlar (to‘liq uy manzili, pasport ma’lumotlari, shaxsiy telefon raqamlari) hech qachon talab qilinmaydi va saqlanmaydi.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              2. Qanday ma’lumotlar saqlanadi?
            </h2>
            <p>
              Faqatgina o‘quv jarayoni va rivojlanish ko‘rsatkichlari (tugallangan darslar, to‘plangan XP ballar, yutuq nishonlari va test natijalari) brauzerning xavfsiz lokal xotirasida (localStorage) saqlanadi.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              3. Uchinchi shaxslarga ma’lumot bermaslik
            </h2>
            <p>
              O‘quvchilarning bilim ko‘rsatkichlari, test natijalari yoki shaxsiy faoliyati uchinchi shaxslarga, reklama beruvchilarga yoki tijoriy tashkilotlarga sotilmaydi va taqdim etilmaydi.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              4. O‘qituvchi va ota-onalar nazorati
            </h2>
            <p>
              O‘qituvchilar o‘z sinflaridagi o‘zlashtirish tahlilini faqat ta’limiy sifatni yaxshilash maqsadida ko‘rish huquqiga ega.
            </p>
          </section>

        </article>

      </div>
    </div>
  );
};
