import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HelpCircle, ChevronDown, ChevronUp, BookOpen, ShieldCheck, Mail } from 'lucide-react';

const FAQS = [
  {
    q: "RAQAMLI OLAM platformasidan foydalanish bepulmi?",
    a: "Ha, platformadagi barcha 1–11-sinf informatika darslari, interaktiv o‘yinlar, testlar va kod laboratoriyasi O‘zbekiston maktab o‘quvchilari va o‘qituvchilari uchun mutlaqo bepul taqdim etiladi."
  },
  {
    q: "O‘qituvchilar darsda proyektor rejimidan qanday foydalanishi mumkin?",
    a: "O‘qituvchi profiliga o‘ting (yuqori o‘ng burchakdagi rolni almashtirish orqali) va 'Proyektor (Katta ekran) rejimi' tugmasini bosing. Dars slaydlari butun ekranga kattalashtirilib, dars o‘tish uchun qulay tarzda ko‘rinadi."
  },
  {
    q: "Darslar qaysi standartlar asosida tuzilgan?",
    a: "Barcha mavzular O‘zbekiston Respublikasi Xalq ta’limi vazirligi tasdiqlagan amaldagi umumiy o‘rta ta’lim standarti va zamonaviy informatika darsliklari asosida tayyorlangan."
  },
  {
    q: "Test natijalarini qanday yuklab olish mumkin?",
    a: "Testni yakunlaganingizdan so‘ng, natijalar sahifasida 'CSV yuklab olish' yoki 'Natijani chop etish' tugmalari paydo bo‘ladi."
  }
];

export const HelpPage: React.FC = () => {
  const { t, setActivePage } = useApp();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Ko‘p beriladigan savollar</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Foydalanish bo‘yicha yordam va FAQ
          </h1>
          <p className="mt-1 text-xs text-slate-500">
            Platformadan samarali foydalanish bo‘yicha asosiy savollarga javoblar.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-slate-900 dark:text-white"
              >
                <span>{faq.q}</span>
                {openIdx === idx ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>

              {openIdx === idx && (
                <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Contact support */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-2">
          <Mail className="w-6 h-6 text-sky-600 mx-auto mb-1" />
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Savol yoki taklifingiz bormi?
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Metodistlar va ishlab chiquvchilar bilan bog‘lanish uchun: info@raqamli-olam.uz
          </p>
        </div>

      </div>
    </div>
  );
};
