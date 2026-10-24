export type SupportedLocale = 'uz-Latn' | 'uz-Cyrl' | 'ru' | 'en';

export type UserRole = 'student' | 'teacher' | 'admin';

export type ContentStatus = 'draft' | 'review' | 'published' | 'archived';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface GradeInfo {
  id: number; // 1 to 11
  title: Record<SupportedLocale, string>;
  stage: 'elementary' | 'middle' | 'high'; // 1-4, 5-8, 9-11
  ageRange: string;
  color: string;
  description: Record<SupportedLocale, string>;
  topicsCount: number;
  totalLessons: number;
}

export interface LessonContent {
  id: string;
  gradeId: number;
  subjectCategory: string; // e.g. 'hardware', 'algorithms', 'python', 'cybersecurity', 'web', 'ai'
  title: Record<SupportedLocale, string>;
  objectives: Record<SupportedLocale, string[]>;
  prerequisites: Record<SupportedLocale, string>;
  durationMinutes: number;
  difficulty: DifficultyLevel;
  lectureText: Record<SupportedLocale, string>;
  realLifeExample: Record<SupportedLocale, string>;
  interactiveComponent?: string; // id of simulator or diagram
  diagramSvgKey?: string;
  stepByStepGuide: Record<SupportedLocale, string[]>;
  codeSnippet?: {
    language: 'python' | 'html' | 'pseudocode' | 'scratch';
    code: string;
    explanation: Record<SupportedLocale, string>;
  };
  commonMistakes: Record<SupportedLocale, string[]>;
  homework: Record<SupportedLocale, string>;
  status: ContentStatus;
  updatedAt: string;
  sources: string[];
}

export interface QuizQuestion {
  id: string;
  gradeId: number;
  topic: string;
  difficulty: DifficultyLevel;
  questionText: Record<SupportedLocale, string>;
  options: Record<SupportedLocale, string[]>;
  correctOptionIndex: number;
  explanation: Record<SupportedLocale, string>;
}

export interface InteractiveGame {
  id: string;
  title: Record<SupportedLocale, string>;
  description: Record<SupportedLocale, string>;
  targetGrades: number[];
  category: 'hardware' | 'typing' | 'algorithm' | 'security' | 'coding' | 'logic';
  icon: string;
  difficulty: DifficultyLevel;
}

export interface GlossaryTerm {
  id: string;
  term: Record<SupportedLocale, string>;
  shortDefinition: Record<SupportedLocale, string>;
  fullExplanation: Record<SupportedLocale, string>;
  realLifeExample: Record<SupportedLocale, string>;
  gradeLevel: number;
  category: string;
}

export interface FactItem {
  id: string;
  title: Record<SupportedLocale, string>;
  factText: Record<SupportedLocale, string>;
  source: string;
  category: string;
  verifiedDate: string;
}

export interface CareerItem {
  id: string;
  title: Record<SupportedLocale, string>;
  shortDescription: Record<SupportedLocale, string>;
  responsibilities: Record<SupportedLocale, string[]>;
  requiredSkills: string[];
  schoolSubjects: Record<SupportedLocale, string[]>;
  starterProject: Record<SupportedLocale, string>;
  averageSalaryUz: string;
  iconName: string;
}

export interface StudentBadge {
  id: string;
  title: Record<SupportedLocale, string>;
  description: Record<SupportedLocale, string>;
  icon: string;
  unlockedAt?: string;
}

export interface UserProgress {
  completedLessons: string[];
  bookmarkedLessons: string[];
  xp: number;
  currentStreakDays: number;
  quizScores: Record<string, { score: number; total: number; date: string }>;
  gamesPlayed: Record<string, number>;
  unlockedBadges: string[];
}
