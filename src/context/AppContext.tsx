import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLocale, UserRole, LessonContent, QuizQuestion, UserProgress } from '../types';
import { initialLessonsData } from '../data/lessonsData';
import { initialQuizzesData } from '../data/quizzesData';
import { initialBadgesData } from '../data/badgesData';
import { locales } from '../locales';

export type NavigationPage = 
  | 'home' 
  | 'grades' 
  | 'curriculum' 
  | 'lesson-detail' 
  | 'games' 
  | 'quizzes' 
  | 'codelab' 
  | 'algo-visualizer'
  | 'exercises'
  | 'search-results'
  | 'security' 
  | 'careers' 
  | 'glossary' 
  | 'facts' 
  | 'profile' 
  | 'teacher' 
  | 'admin'
  | 'help'
  | 'privacy'
  | 'terms';

interface AppContextType {
  locale: SupportedLocale;
  setLocale: (l: SupportedLocale) => void;
  t: typeof locales['uz-Latn'];
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  activePage: NavigationPage;
  setActivePage: (p: NavigationPage) => void;
  selectedGradeId: number;
  setSelectedGradeId: (id: number) => void;
  selectedLessonId: string;
  setSelectedLessonId: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  lessons: LessonContent[];
  addLesson: (lesson: LessonContent) => void;
  updateLesson: (lesson: LessonContent) => void;
  deleteLesson: (id: string) => void;
  quizzes: QuizQuestion[];
  addQuizQuestion: (question: QuizQuestion) => void;
  userProgress: UserProgress;
  markLessonComplete: (lessonId: string) => void;
  saveQuizResult: (quizId: string, score: number, total: number) => void;
  incrementGameCount: (gameId: string) => void;
  isAiModalOpen: boolean;
  aiContext: string;
  openAiModal: (contextText?: string) => void;
  closeAiModal: () => void;
  resetAllData: () => void;
  activeGameId: string | null;
  setActiveGameId: (id: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<SupportedLocale>(() => {
    const saved = localStorage.getItem('ro_locale');
    if (saved === 'uz-Latn' || saved === 'uz-Cyrl' || saved === 'ru' || saved === 'en') {
      return saved;
    }
    return 'uz-Latn';
  });

  const [theme, setThemeState] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('ro_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'light';
  });

  const [userRole, setUserRoleState] = useState<UserRole>(() => {
    const saved = localStorage.getItem('ro_role');
    if (saved === 'student' || saved === 'teacher' || saved === 'admin') return saved;
    return 'student';
  });

  const [activePage, setActivePage] = useState<NavigationPage>('home');
  const [selectedGradeId, setSelectedGradeId] = useState<number>(1);
  const [selectedLessonId, setSelectedLessonId] = useState<string>("g1-l1");
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeGameId, setActiveGameId] = useState<string | null>(null);

  // AI Assistant state
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiContext, setAiContext] = useState<string>('');

  // Lessons CRUD State
  const [lessons, setLessons] = useState<LessonContent[]>(() => {
    const saved = localStorage.getItem('ro_lessons');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialLessonsData;
      }
    }
    return initialLessonsData;
  });

  // Quizzes State
  const [quizzes, setQuizzes] = useState<QuizQuestion[]>(() => {
    const saved = localStorage.getItem('ro_quizzes');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialQuizzesData;
      }
    }
    return initialQuizzesData;
  });

  // User Progress State
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('ro_progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // default
      }
    }
    return {
      completedLessons: ["g1-l1"],
      bookmarkedLessons: [],
      xp: 150,
      currentStreakDays: 3,
      quizScores: {
        "q-1": { score: 1, total: 1, date: "2026-10-23" }
      },
      gamesPlayed: {
        "hardware-explorer": 2
      },
      unlockedBadges: ["first-lesson"]
    };
  });

  useEffect(() => {
    localStorage.setItem('ro_locale', locale);
  }, [locale]);

  useEffect(() => {
    localStorage.setItem('ro_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('ro_role', userRole);
  }, [userRole]);

  useEffect(() => {
    localStorage.setItem('ro_lessons', JSON.stringify(lessons));
  }, [lessons]);

  useEffect(() => {
    localStorage.setItem('ro_quizzes', JSON.stringify(quizzes));
  }, [quizzes]);

  useEffect(() => {
    localStorage.setItem('ro_progress', JSON.stringify(userProgress));
  }, [userProgress]);

  const setLocale = (l: SupportedLocale) => {
    setLocaleState(l);
  };

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const setUserRole = (role: UserRole) => {
    setUserRoleState(role);
  };

  const addLesson = (newLesson: LessonContent) => {
    setLessons(prev => [newLesson, ...prev]);
  };

  const updateLesson = (updated: LessonContent) => {
    setLessons(prev => prev.map(item => item.id === updated.id ? updated : item));
  };

  const deleteLesson = (id: string) => {
    setLessons(prev => prev.filter(item => item.id !== id));
  };

  const addQuizQuestion = (q: QuizQuestion) => {
    setQuizzes(prev => [...prev, q]);
  };

  const markLessonComplete = (lessonId: string) => {
    setUserProgress(prev => {
      const isAlready = prev.completedLessons.includes(lessonId);
      const newCompleted = isAlready ? prev.completedLessons : [...prev.completedLessons, lessonId];
      const newBadges = [...prev.unlockedBadges];
      if (!newBadges.includes('first-lesson')) {
        newBadges.push('first-lesson');
      }
      return {
        ...prev,
        completedLessons: newCompleted,
        xp: isAlready ? prev.xp : prev.xp + 50,
        unlockedBadges: newBadges
      };
    });
  };

  const saveQuizResult = (quizId: string, score: number, total: number) => {
    setUserProgress(prev => {
      const xpEarned = Math.round((score / Math.max(total, 1)) * 30);
      return {
        ...prev,
        xp: prev.xp + xpEarned,
        quizScores: {
          ...prev.quizScores,
          [quizId]: { score, total, date: new Date().toISOString().slice(0, 10) }
        }
      };
    });
  };

  const incrementGameCount = (gameId: string) => {
    setUserProgress(prev => ({
      ...prev,
      xp: prev.xp + 20,
      gamesPlayed: {
        ...prev.gamesPlayed,
        [gameId]: (prev.gamesPlayed[gameId] || 0) + 1
      }
    }));
  };

  const openAiModal = (contextText?: string) => {
    setAiContext(contextText || '');
    setIsAiModalOpen(true);
  };

  const closeAiModal = () => {
    setIsAiModalOpen(false);
  };

  const resetAllData = () => {
    setLessons(initialLessonsData);
    setQuizzes(initialQuizzesData);
    setUserProgress({
      completedLessons: ["g1-l1"],
      bookmarkedLessons: [],
      xp: 150,
      currentStreakDays: 3,
      quizScores: {},
      gamesPlayed: {},
      unlockedBadges: ["first-lesson"]
    });
    localStorage.removeItem('ro_lessons');
    localStorage.removeItem('ro_quizzes');
    localStorage.removeItem('ro_progress');
  };

  const t = locales[locale] || locales['uz-Latn'];

  return (
    <AppContext.Provider
      value={{
        locale,
        setLocale,
        t,
        theme,
        toggleTheme,
        userRole,
        setUserRole,
        activePage,
        setActivePage,
        selectedGradeId,
        setSelectedGradeId,
        selectedLessonId,
        setSelectedLessonId,
        searchQuery,
        setSearchQuery,
        lessons,
        addLesson,
        updateLesson,
        deleteLesson,
        quizzes,
        addQuizQuestion,
        userProgress,
        markLessonComplete,
        saveQuizResult,
        incrementGameCount,
        isAiModalOpen,
        aiContext,
        openAiModal,
        closeAiModal,
        resetAllData,
        activeGameId,
        setActiveGameId
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
