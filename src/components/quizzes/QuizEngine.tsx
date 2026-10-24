import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { QuizQuestion, DifficultyLevel } from '../../types';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Printer, 
  Download, 
  Clock, 
  Filter,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const QuizEngine: React.FC = () => {
  const { locale, t, quizzes, saveQuizResult } = useApp();

  // Filters
  const [gradeFilter, setGradeFilter] = useState<number | 'all'>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyLevel | 'all'>('all');

  // Quiz running state
  const [quizActive, setQuizActive] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Filtered Questions
  const filteredQuestions = useMemo(() => {
    return quizzes.filter(q => {
      const matchGrade = gradeFilter === 'all' || q.gradeId === gradeFilter;
      const matchDiff = difficultyFilter === 'all' || q.difficulty === difficultyFilter;
      return matchGrade && matchDiff;
    });
  }, [quizzes, gradeFilter, difficultyFilter]);

  const activeQuestion: QuizQuestion | undefined = filteredQuestions[currentQuestionIndex];

  const handleStartQuiz = () => {
    if (filteredQuestions.length === 0) return;
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setIsSubmitted(false);
    setQuizActive(true);
  };

  const handleSelectAnswer = (optionIdx: number) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optionIdx
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calculate score & finish
      handleSubmitQuiz();
    }
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    let correctCount = 0;
    filteredQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctOptionIndex) {
        correctCount += 1;
      }
    });
    saveQuizResult(`quiz-g${gradeFilter}-${Date.now()}`, correctCount, filteredQuestions.length);
  };

  const calculateScore = () => {
    let correct = 0;
    filteredQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctOptionIndex) {
        correct++;
      }
    });
    return correct;
  };

  const handleExportCsv = () => {
    const rows = [
      ["Savol №", "Savol matni", "Sizning javobingiz", "To‘g‘ri javob", "Natija"],
      ...filteredQuestions.map((q, idx) => {
        const userPick = userAnswers[idx] !== undefined ? q.options[locale][userAnswers[idx]] : "Belgilanmagan";
        const correctPick = q.options[locale][q.correctOptionIndex];
        const isCorrect = userAnswers[idx] === q.correctOptionIndex ? "To‘g‘ri" : "Noto‘g‘ri";
        return [
          String(idx + 1),
          `"${q.questionText[locale].replace(/"/g, '""')}"`,
          `"${userPick.replace(/"/g, '""')}"`,
          `"${correctPick.replace(/"/g, '""')}"`,
          isCorrect
        ];
      })
    ];

    const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `test_natijalari_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Bilimni baholash moduli</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {t.quizzes.title}
          </h1>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            {t.quizzes.subtitle}
          </p>
        </div>

        {/* If Quiz is NOT started */}
        {!quizActive && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Filter controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t.quizzes.filterGrade}
                </label>
                <select
                  value={gradeFilter}
                  onChange={(e) => setGradeFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none"
                >
                  <option value="all">{t.quizzes.allGrades}</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => (
                    <option key={n} value={n}>{n}-sinf</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t.quizzes.filterDifficulty}
                </label>
                <select
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value as any)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none"
                >
                  <option value="all">{t.quizzes.allDifficulties}</option>
                  <option value="easy">Oson (Boshlang‘ich)</option>
                  <option value="medium">O‘rta (Standart)</option>
                  <option value="hard">Murakkab (Chuqurlashtirilgan)</option>
                </select>
              </div>
            </div>

            {/* Assessment info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-500 space-y-1">
                <div>• Tanlangan savollar soni: <strong className="text-slate-900 dark:text-white font-mono">{filteredQuestions.length} ta</strong></div>
                <div>• Har bir to‘g‘ri javob uchun: <strong className="text-sky-600 font-mono">+10 XP</strong></div>
                <div>• Vaqt chegarasi: Cheklanmagan (Diqqat bilan o‘ylab javob bering)</div>
              </div>

              <button
                disabled={filteredQuestions.length === 0}
                onClick={handleStartQuiz}
                className="px-6 py-3 rounded-xl font-semibold text-xs text-white bg-sky-600 hover:bg-sky-500 disabled:opacity-50 transition-all shadow-sm active:scale-95"
              >
                {t.quizzes.startQuiz}
              </button>
            </div>

          </div>
        )}

        {/* If Quiz is in progress */}
        {quizActive && !isSubmitted && activeQuestion && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Progress header */}
            <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100 dark:border-slate-800">
              <span>{t.quizzes.questionNumber} {currentQuestionIndex + 1} / {filteredQuestions.length}</span>
              <span className="font-semibold text-sky-600">{activeQuestion.gradeId}-sinf · {activeQuestion.topic}</span>
            </div>

            {/* Question Text */}
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
              {activeQuestion.questionText[locale]}
            </h3>

            {/* Options list */}
            <div className="space-y-3">
              {activeQuestion.options[locale].map((option, idx) => {
                const isSelected = userAnswers[currentQuestionIndex] === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectAnswer(idx)}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-sky-500 bg-sky-50/80 dark:bg-sky-950/60 text-sky-900 dark:text-sky-200 shadow-sm'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span>{option}</span>
                    <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-sky-600 bg-sky-600 text-white text-[10px]' : 'border-slate-300'
                    }`}>
                      {isSelected ? '✓' : ''}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 disabled:opacity-40"
              >
                Oldingi savol
              </button>

              <button
                disabled={userAnswers[currentQuestionIndex] === undefined}
                onClick={handleNextQuestion}
                className="px-5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 disabled:opacity-50 rounded-xl transition-all shadow-sm"
              >
                {currentQuestionIndex < filteredQuestions.length - 1 ? t.quizzes.nextQuestion : t.quizzes.finishQuiz}
              </button>
            </div>

          </div>
        )}

        {/* If Quiz is Finished / Report */}
        {quizActive && isSubmitted && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Score header */}
            <div className="text-center pb-6 border-b border-slate-100 dark:border-slate-800 space-y-2">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {t.quizzes.scoreReport}
              </h2>
              <div className="text-3xl font-extrabold font-mono text-sky-600 dark:text-sky-400">
                {calculateScore()} / {filteredQuestions.length}
              </div>
              <p className="text-xs text-slate-500">
                O‘zlashtirish darajasi: {Math.round((calculateScore() / Math.max(filteredQuestions.length, 1)) * 100)}%
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  setQuizActive(false);
                  setIsSubmitted(false);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.quizzes.retake}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportCsv}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.quizzes.exportCsv}</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{t.quizzes.printReport}</span>
                </button>
              </div>
            </div>

            {/* Detailed answers review */}
            <div className="space-y-4 pt-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {t.quizzes.reviewQuestions}
              </h3>

              {filteredQuestions.map((q, idx) => {
                const userChoice = userAnswers[idx];
                const isCorrect = userChoice === q.correctOptionIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border text-xs space-y-2 ${
                      isCorrect 
                        ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20' 
                        : 'border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-bold text-slate-900 dark:text-white">
                        {idx + 1}. {q.questionText[locale]}
                      </span>
                      {isCorrect ? (
                        <span className="text-emerald-600 font-bold flex items-center gap-1 shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>To‘g‘ri</span>
                        </span>
                      ) : (
                        <span className="text-rose-600 font-bold flex items-center gap-1 shrink-0">
                          <XCircle className="w-4 h-4" />
                          <span>Noto‘g‘ri</span>
                        </span>
                      )}
                    </div>

                    <div className="text-slate-600 dark:text-slate-400">
                      Sizning javobingiz: <strong className={isCorrect ? "text-emerald-700" : "text-rose-700"}>
                        {userChoice !== undefined ? q.options[locale][userChoice] : "Javob berilmagan"}
                      </strong>
                    </div>

                    {!isCorrect && (
                      <div className="text-emerald-700 dark:text-emerald-400 font-semibold">
                        To‘g‘ri javob: {q.options[locale][q.correctOptionIndex]}
                      </div>
                    )}

                    <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800 text-[11px] text-slate-500">
                      💡 Izoh: {q.explanation[locale]}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
