import React from 'react';
import { useApp } from '../../context/AppContext';
import { gradesData } from '../../data/gradesData';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  PlayCircle, 
  Bookmark, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const GradeCurriculumView: React.FC = () => {
  const { 
    locale, 
    t, 
    selectedGradeId, 
    setSelectedGradeId, 
    lessons, 
    setSelectedLessonId, 
    setActivePage,
    userProgress 
  } = useApp();

  const currentGrade = gradesData.find(g => g.id === selectedGradeId) || gradesData[0];
  
  // Filter lessons for this grade
  const gradeLessons = lessons.filter(l => l.gradeId === currentGrade.id);

  const handleOpenLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    setActivePage('lesson-detail');
  };

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-[calc(100vh-16rem)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActivePage('grades')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Barcha sinflar</span>
            </button>
            <div className="h-4 w-px bg-slate-300 dark:bg-slate-700" />
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {currentGrade.title[locale]} o‘quv dasturi
            </h1>
          </div>

          {/* Quick grade selector tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
            {gradesData.map((g) => (
              <button
                key={g.id}
                onClick={() => setSelectedGradeId(g.id)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  g.id === selectedGradeId
                    ? 'bg-sky-600 text-white font-semibold shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {g.id}-sinf
              </button>
            ))}
          </div>
        </div>

        {/* Grade Overview Hero Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-sky-600 dark:text-sky-400 mb-2">
                <span>{currentGrade.ageRange}</span>
                <span>·</span>
                <span>{currentGrade.topicsCount} ta asosiy modul</span>
                <span>·</span>
                <span>{currentGrade.totalLessons} ta darslik</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {currentGrade.description[locale]}
              </h2>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>O‘zbekiston Respublikasi Xalq ta’limi tasdiqlagan darsliklar asosida</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 shrink-0 text-center">
              <div className="text-xs text-slate-500 mb-1">O‘zlashtirish darajangiz</div>
              <div className="text-2xl font-bold font-mono text-sky-600 dark:text-sky-400">
                {gradeLessons.filter(l => userProgress.completedLessons.includes(l.id)).length} / {gradeLessons.length || 1}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">dars yakunlandi</div>
            </div>
          </div>
        </div>

        {/* Lessons List for this Grade */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Mavjud darslar ro‘yxati ({gradeLessons.length})
            </h3>
            <span className="text-xs text-slate-500">
              * Darslarni o‘zlashtirib +50 XP to‘plang
            </span>
          </div>

          {gradeLessons.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 text-center text-slate-500">
              <BookOpen className="w-8 h-8 mx-auto text-slate-400 mb-2" />
              <p className="text-sm">Ushbu sinf uchun namunaviy darslar kiritilmoqda yoki administrator tomonidan yangilanmoqda.</p>
              <button
                onClick={() => setSelectedGradeId(1)}
                className="mt-3 text-xs font-semibold text-sky-600 hover:underline"
              >
                1-sinf darslarini ko‘rish
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gradeLessons.map((lesson, idx) => {
                const isCompleted = userProgress.completedLessons.includes(lesson.id);

                return (
                  <div
                    key={lesson.id}
                    className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:border-sky-400 dark:hover:border-sky-600 transition-all shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                        <span className="font-mono font-medium text-slate-400">
                          {idx + 1}-dars
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{lesson.durationMinutes} daqiqa</span>
                          </span>
                          {isCompleted && (
                            <span className="text-emerald-600 flex items-center gap-1 font-semibold">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Bajarildi</span>
                            </span>
                          )}
                        </div>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                        {lesson.title[locale]}
                      </h4>

                      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                        {lesson.lectureText[locale].slice(0, 140)}...
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-slate-500 capitalize">
                        Yo‘nalish: {lesson.subjectCategory}
                      </span>

                      <button
                        onClick={() => handleOpenLesson(lesson.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors"
                      >
                        <PlayCircle className="w-3.5 h-3.5" />
                        <span>Darsni boshlash</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
