/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { GradeSelector } from './components/home/GradeSelector';
import { QuickSection } from './components/home/QuickSection';
import { TopicTracks } from './components/home/TopicTracks';
import { StatsSection } from './components/home/StatsSection';
import { GradeCurriculumView } from './components/lessons/GradeCurriculumView';
import { LessonDetailView } from './components/lessons/LessonDetailView';
import { GamesHub } from './components/games/GamesHub';
import { QuizEngine } from './components/quizzes/QuizEngine';
import { CodeLab } from './components/playground/CodeLab';
import { CyberSecurityCenter } from './components/security/CyberSecurityCenter';
import { CareerExplorer } from './components/careers/CareerExplorer';
import { GlossaryView } from './components/glossary/GlossaryView';
import { FactsView } from './components/facts/FactsView';
import { StudentDashboard } from './components/student/StudentDashboard';
import { TeacherDashboard } from './components/teacher/TeacherDashboard';
import { AdminPanel } from './components/admin/AdminPanel';
import { AiTeacherModal } from './components/ai/AiTeacherModal';
import { AlgorithmVisualizer } from './components/visualizer/AlgorithmVisualizer';
import { ExercisesView } from './components/exercises/ExercisesView';
import { SearchResultsView } from './components/search/SearchResultsView';
import { HelpPage } from './components/pages/HelpPage';
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage';
import { TermsPage } from './components/pages/TermsPage';

const MainContent: React.FC = () => {
  const { activePage } = useApp();

  return (
    <main className="flex-1">
      {activePage === 'home' && (
        <>
          <HeroSection />
          <GradeSelector />
          <QuickSection />
          <TopicTracks />
          <StatsSection />
        </>
      )}

      {activePage === 'grades' && <GradeSelector />}
      {activePage === 'curriculum' && <GradeCurriculumView />}
      {activePage === 'lesson-detail' && <LessonDetailView />}
      {activePage === 'games' && <GamesHub />}
      {activePage === 'quizzes' && <QuizEngine />}
      {activePage === 'codelab' && <CodeLab />}
      {activePage === 'algo-visualizer' && <AlgorithmVisualizer />}
      {activePage === 'exercises' && <ExercisesView />}
      {activePage === 'search-results' && <SearchResultsView />}
      {activePage === 'security' && <CyberSecurityCenter />}
      {activePage === 'careers' && <CareerExplorer />}
      {activePage === 'glossary' && <GlossaryView />}
      {activePage === 'facts' && <FactsView />}
      {activePage === 'profile' && <StudentDashboard />}
      {activePage === 'teacher' && <TeacherDashboard />}
      {activePage === 'admin' && <AdminPanel />}
      {activePage === 'help' && <HelpPage />}
      {activePage === 'privacy' && <PrivacyPolicyPage />}
      {activePage === 'terms' && <TermsPage />}
    </main>
  );
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors font-sans antialiased selection:bg-sky-500 selection:text-white">
        <Navbar />
        <MainContent />
        <Footer />
        <AiTeacherModal />
      </div>
    </AppProvider>
  );
}
