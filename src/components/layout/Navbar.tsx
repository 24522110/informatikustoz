import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { localeNames } from '../../locales';
import { SupportedLocale } from '../../types';
import { 
  Sun, 
  Moon, 
  Search, 
  User, 
  Menu, 
  X, 
  GraduationCap, 
  ShieldCheck, 
  BookOpen, 
  Gamepad2, 
  CheckSquare, 
  Sparkles,
  Settings
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    locale, 
    setLocale, 
    t, 
    theme, 
    toggleTheme, 
    userRole, 
    setUserRole, 
    activePage, 
    setActivePage, 
    searchQuery, 
    setSearchQuery,
    openAiModal 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const navLinks = [
    { page: 'grades' as const, label: t.nav.grades },
    { page: 'curriculum' as const, label: t.nav.lessons },
    { page: 'games' as const, label: t.nav.games },
    { page: 'quizzes' as const, label: t.nav.quizzes },
    { page: 'codelab' as const, label: t.nav.codeLab },
    { page: 'algo-visualizer' as const, label: 'Algoritmlar' },
    { page: 'exercises' as const, label: 'Mashqlar' },
    { page: 'security' as const, label: t.nav.security },
    { page: 'careers' as const, label: t.nav.careers },
    { page: 'glossary' as const, label: t.nav.glossary },
  ];

  const handleNavClick = (page: typeof activePage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          
          {/* Zone 1: Single text element wordmark */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
                RAQAMLI OLAM
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wider uppercase -mt-1 hidden sm:block">
                O‘zbekiston Maktablari
              </span>
            </div>
          </button>

          {/* Zone 2: 4–5 clean single-line nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.slice(0, 6).map(link => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`whitespace-nowrap transition-colors py-1 ${
                  activePage === link.page
                    ? 'text-sky-600 dark:text-sky-400 font-semibold border-b-2 border-sky-600 dark:border-sky-400'
                    : 'hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Interactive controls and Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick search input */}
            <div className="relative hidden xl:block w-44 focus-within:w-60 transition-all duration-200">
              <button 
                onClick={() => {
                  if (searchQuery.trim()) setActivePage('search-results');
                }}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-sky-600 transition-colors"
                title="Qidirish"
              >
                <Search className="w-4 h-4" />
              </button>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    setActivePage('search-results');
                  }
                }}
                placeholder={t.nav.search}
                className="w-full text-xs pl-8 pr-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg border border-transparent focus:border-sky-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none transition-all"
              />
            </div>

            {/* AI Assistant Button */}
            <button
              onClick={() => openAiModal()}
              title={t.aiAssistant.title}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 rounded-lg hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span className="hidden md:inline">{t.aiAssistant.title}</span>
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Tilni tanlash / Выбор языка"
              >
                <span>{localeNames[locale].flag}</span>
                <span className="hidden sm:inline font-semibold">{localeNames[locale].label}</span>
              </button>

              {langDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100"
                  onMouseLeave={() => setLangDropdownOpen(false)}
                >
                  {(Object.keys(localeNames) as SupportedLocale[]).map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        setLocale(loc);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between ${
                        locale === loc
                          ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-semibold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50'
                      }`}
                    >
                      <span>{localeNames[loc].flag} {localeNames[loc].label}</span>
                      {locale === loc && <span className="text-sky-600 dark:text-sky-400">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Role Switcher */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title={t.nav.roleSwitch}
              >
                <User className="w-3.5 h-3.5" />
                <span className="hidden sm:inline capitalize">
                  {userRole === 'student' ? t.nav.studentRole : userRole === 'teacher' ? t.nav.teacherRole : t.nav.adminRole}
                </span>
              </button>

              {roleDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-44 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg py-1.5 z-50"
                  onMouseLeave={() => setRoleDropdownOpen(false)}
                >
                  <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {t.nav.roleSwitch}
                  </div>
                  <button
                    onClick={() => {
                      setUserRole('student');
                      setRoleDropdownOpen(false);
                      setActivePage('profile');
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center gap-2 ${
                      userRole === 'student' ? 'text-sky-600 font-semibold bg-sky-50 dark:bg-sky-950/50' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{t.nav.studentRole} ({t.nav.profile})</span>
                  </button>
                  <button
                    onClick={() => {
                      setUserRole('teacher');
                      setRoleDropdownOpen(false);
                      setActivePage('teacher');
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center gap-2 ${
                      userRole === 'teacher' ? 'text-sky-600 font-semibold bg-sky-50 dark:bg-sky-950/50' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{t.nav.teacherRole} ({t.nav.teacherRoom})</span>
                  </button>
                  <button
                    onClick={() => {
                      setUserRole('admin');
                      setRoleDropdownOpen(false);
                      setActivePage('admin');
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center gap-2 ${
                      userRole === 'admin' ? 'text-sky-600 font-semibold bg-sky-50 dark:bg-sky-950/50' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <Settings className="w-3.5 h-3.5" />
                    <span>{t.nav.adminRole} ({t.nav.adminPanel})</span>
                  </button>
                </div>
              )}
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => {
                if (userRole === 'teacher') handleNavClick('teacher');
                else if (userRole === 'admin') handleNavClick('admin');
                else handleNavClick('profile');
              }}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-sky-600 hover:bg-slate-800 dark:hover:bg-sky-500 rounded-lg transition-colors whitespace-nowrap shadow-sm"
            >
              {userRole === 'teacher' ? t.nav.teacherRoom : userRole === 'admin' ? t.nav.adminPanel : t.nav.profile}
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 py-3 space-y-1">
            <div className="px-3 mb-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.nav.search}
                className="w-full text-xs px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none"
              />
            </div>
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activePage === link.page
                    ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between px-3 text-xs">
              <span className="text-slate-500">{t.appName}</span>
              <button
                onClick={() => {
                  openAiModal();
                  setMobileMenuOpen(false);
                }}
                className="text-sky-600 font-semibold"
              >
                {t.aiAssistant.title}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
