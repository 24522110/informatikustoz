import React from 'react';
import { useApp } from '../../context/AppContext';
import { initialBadgesData } from '../../data/badgesData';
import { 
  Award, 
  BookCheck, 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Clock
} from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  const { locale, t, userProgress, lessons, setSelectedLessonId, setActivePage } = useApp();

  const completedList = lessons.filter(l => userProgress.completedLessons.includes(l.id));

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Profile Hero Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center font-bold text-2xl shadow-md">
                🎓
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {t.studentProfile.title}
                </h1>
                <p className="text-xs text-slate-500">
                  Umumiy o‘rta ta’lim maktabi o‘quvchisi
                </p>
              </div>
            </div>

            {/* Quick KPI stats with tabular figures */}
            <div className="flex items-center gap-6 text-center font-mono">
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">{t.studentProfile.totalXp}</span>
                <span className="text-xl sm:text-2xl font-extrabold text-sky-600 dark:text-sky-400 tabular-nums">
                  {userProgress.xp} XP
                </span>
              </div>
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">{t.studentProfile.streak}</span>
                <span className="text-xl sm:text-2xl font-extrabold text-amber-500 flex items-center justify-center gap-1 tabular-nums">
                  <Flame className="w-5 h-5 fill-current" />
                  <span>{userProgress.currentStreakDays} kun</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Badges and Achievements */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>{t.studentProfile.badges}</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono">
              {userProgress.unlockedBadges.length} / {initialBadgesData.length} ochilgan
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {initialBadgesData.map((badge) => {
              const isUnlocked = userProgress.unlockedBadges.includes(badge.id);

              return (
                <div
                  key={badge.id}
                  className={`p-4 rounded-xl border text-center space-y-2 transition-all ${
                    isUnlocked
                      ? 'border-amber-300 dark:border-amber-800/60 bg-amber-50/40 dark:bg-amber-950/20'
                      : 'border-slate-200 dark:border-slate-800 opacity-40 bg-slate-50 dark:bg-slate-800/50'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 text-2xl mx-auto flex items-center justify-center shadow-sm">
                    {badge.id === 'first-lesson' ? '🥇' : badge.id === 'fast-typer' ? '⚡' : badge.id === 'cyber-detective' ? '🛡️' : '🧩'}
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                    {badge.title[locale]}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {badge.description[locale]}
                  </p>
                  <span className="text-[10px] font-semibold text-amber-600 block pt-1">
                    {isUnlocked ? "✓ Erishildi" : "Qulflangan"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Completed Lessons list */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookCheck className="w-5 h-5 text-emerald-600" />
            <span>{t.studentProfile.completedLessons} ({completedList.length})</span>
          </h2>

          {completedList.length === 0 ? (
            <p className="text-xs text-slate-400 py-4">Hozircha yakunlangan darslar yo‘q. Sinflar bo‘limidan birinchi darsni boshlang!</p>
          ) : (
            <div className="space-y-2">
              {completedList.map((lesson) => (
                <div
                  key={lesson.id}
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs hover:border-sky-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">
                        {lesson.title[locale]}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {lesson.gradeId}-sinf · {lesson.subjectCategory}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedLessonId(lesson.id);
                      setActivePage('lesson-detail');
                    }}
                    className="text-xs font-semibold text-sky-600 hover:underline flex items-center gap-1"
                  >
                    <span>Qayta ko‘rish</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
