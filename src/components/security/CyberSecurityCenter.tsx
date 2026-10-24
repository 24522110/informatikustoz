import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { cybersecurityRules } from '../../data/cybersecurityData';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Key, 
  Eye, 
  EyeOff, 
  AlertTriangle, 
  Gamepad2, 
  Lock,
  HeartPulse
} from 'lucide-react';

export const CyberSecurityCenter: React.FC = () => {
  const { locale, t, setActiveGameId, setActivePage } = useApp();

  // Password analyzer state
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const calculatePasswordStrength = (pwd: string) => {
    if (!pwd) return { score: 0, text: "Kiritilmagan", color: "bg-slate-200 text-slate-500", time: "0 soniya" };
    
    let score = 0;
    if (pwd.length >= 8) score += 1;
    if (pwd.length >= 12) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[a-z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

    if (score <= 2) {
      return { score: 1, text: "Juda kuchsiz (Tezda buziladi)", color: "bg-rose-500 text-rose-700", time: "Bir necha soniya" };
    } else if (score <= 4) {
      return { score: 2, text: "O‘rtacha (Yaxshilash mumkin)", color: "bg-amber-500 text-amber-700", time: "Bir necha kun" };
    } else {
      return { score: 3, text: "Juda kuchli va ishonchli", color: "bg-emerald-500 text-emerald-700", time: "Yuzlab yillar" };
    }
  };

  const strength = calculatePasswordStrength(password);

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 text-xs font-semibold mb-2">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Kiberxavfsizlik va Etika</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {t.securityCenter.title}
          </h1>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            {t.securityCenter.subtitle}
          </p>
        </div>

        {/* 1. Interactive Password Strength Sandbox */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-sky-600 flex items-center justify-center">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {t.securityCenter.passwordTesterTitle}
              </h2>
              <p className="text-xs text-slate-500">
                {t.securityCenter.passwordTesterDesc}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.securityCenter.enterPassword}
                className="w-full p-3.5 pr-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Strength meter bar */}
            {password && (
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">{t.securityCenter.passwordStrength}</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{strength.text}</span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 h-1.5">
                  <div className={`rounded-full ${strength.score >= 1 ? strength.color : 'bg-slate-200 dark:bg-slate-700'}`} />
                  <div className={`rounded-full ${strength.score >= 2 ? strength.color : 'bg-slate-200 dark:bg-slate-700'}`} />
                  <div className={`rounded-full ${strength.score >= 3 ? strength.color : 'bg-slate-200 dark:bg-slate-700'}`} />
                </div>

                <div className="text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Kompyuter yordamida taxminiy buzish vaqti:</span>
                  <strong className="font-mono text-slate-700 dark:text-slate-300">{strength.time}</strong>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 2. Qat'iyan Taqiqlangan Harakatlar (Legal and Ethical rules) */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-rose-50 dark:bg-rose-950/50 text-rose-600 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {t.securityCenter.rulesTitle}
              </h2>
              <p className="text-xs text-slate-500">
                {t.securityCenter.rulesDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cybersecurityRules.map((rule) => (
              <div
                key={rule.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850 space-y-2"
              >
                <div className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {rule.title[locale]}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-4">
                  {rule.explanation[locale]}
                </p>

                {rule.legalNotice && (
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 pl-4 font-medium italic">
                    ⚖ {rule.legalNotice[locale]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3. Link to Cyber Detective Game */}
        <div className="bg-gradient-to-r from-sky-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-lg font-bold">
              Amaliyotda sinab ko‘ring: Kiberxavfsizlik Detektivi
            </h3>
            <p className="text-xs text-sky-100 max-w-lg leading-relaxed">
              Fishing havolalari, soxta SMS va shubhali xabarlarni farqlash bo‘yicha 4 ta real vaziyatni tahlil qiling.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveGameId('cyber-detective');
              setActivePage('games');
            }}
            className="px-5 py-2.5 rounded-xl bg-white text-slate-900 font-semibold text-xs hover:bg-sky-50 transition-colors whitespace-nowrap shadow-sm shrink-0"
          >
            Detektivlikni boshlash
          </button>
        </div>

      </div>
    </div>
  );
};
