import React from 'react';
import { useApp } from '../../context/AppContext';
import { Search, BookOpen, HelpCircle, Gamepad2, ArrowRight } from 'lucide-react';

export const SearchResultsView: React.FC = () => {
  const { locale, t, searchQuery, lessons, quizzes, setSelectedLessonId, setActivePage, setActiveGameId } = useApp();

  const query = searchQuery.trim().toLowerCase();

  const matchingLessons = lessons.filter(l => 
    l.title[locale].toLowerCase().includes(query) ||
    l.lectureText[locale].toLowerCase().includes(query) ||
    l.subjectCategory.toLowerCase().includes(query)
  );

  const matchingQuizzes = quizzes.filter(q =>
    q.questionText[locale].toLowerCase().includes(query) ||
    q.topic.toLowerCase().includes(query)
  );

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
            <Search className="w-3.5 h-3.5 text-sky-600" />
            <span>Qidiruv natijalari</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            "{searchQuery}" so‘rovi bo‘yicha natijalar
          </h1>
        </div>

        {/* Matching Lessons */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-sky-600" />
            <span>Topilgan darslar ({matchingLessons.length})</span>
          </h2>

          {matchingLessons.length === 0 ? (
            <p className="text-xs text-slate-400 py-2">Darslar topilmadi.</p>
          ) : (
            <div className="space-y-2">
              {matchingLessons.map(lesson => (
                <div
                  key={lesson.id}
                  onClick={() => {
                    setSelectedLessonId(lesson.id);
                    setActivePage('lesson-detail');
                  }}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-400 cursor-pointer transition-all flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs text-sky-600 dark:text-sky-400 font-semibold mb-0.5">
                      {lesson.gradeId}-sinf · {lesson.subjectCategory}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {lesson.title[locale]}
                    </h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Matching Quizzes */}
        <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-purple-600" />
            <span>Topilgan test savollari ({matchingQuizzes.length})</span>
          </h2>

          {matchingQuizzes.length === 0 ? (
            <p className="text-xs text-slate-400 py-2">Mos keluvchi test savollari topilmadi.</p>
          ) : (
            <div className="space-y-2">
              {matchingQuizzes.map(q => (
                <div
                  key={q.id}
                  onClick={() => setActivePage('quizzes')}
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-purple-400 cursor-pointer transition-all flex items-center justify-between"
                >
                  <div>
                    <div className="text-[11px] text-purple-600 dark:text-purple-400 font-medium">
                      {q.gradeId}-sinf testi · {q.topic}
                    </div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {q.questionText[locale]}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
