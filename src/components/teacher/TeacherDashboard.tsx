import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Users, 
  Tv, 
  Download, 
  Plus, 
  BookOpen, 
  CheckCircle2, 
  BarChart3,
  Sparkles,
  Maximize2
} from 'lucide-react';

interface ClassGroup {
  id: string;
  name: string;
  grade: number;
  studentsCount: number;
  averageScore: number;
}

export const TeacherDashboard: React.FC = () => {
  const { locale, t, lessons, setSelectedLessonId, setActivePage } = useApp();

  const [groups, setGroups] = useState<ClassGroup[]>([
    { id: 'g1', name: "7-A sinf", grade: 7, studentsCount: 28, averageScore: 84 },
    { id: 'g2', name: "8-B sinf", grade: 8, studentsCount: 26, averageScore: 78 },
    { id: 'g3', name: "9-V sinf", grade: 9, studentsCount: 30, averageScore: 91 }
  ]);

  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupGrade, setNewGroupGrade] = useState(7);
  const [isAddingGroup, setIsAddingGroup] = useState(false);

  // Projector mode state
  const [projectorLessonId, setProjectorLessonId] = useState(lessons[0]?.id || "g1-l1");
  const [isProjectorActive, setIsProjectorActive] = useState(false);

  const handleAddGroup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGroupName.trim()) return;

    setGroups(prev => [
      ...prev,
      {
        id: `g-${Date.now()}`,
        name: newGroupName.trim(),
        grade: newGroupGrade,
        studentsCount: 25,
        averageScore: 80
      }
    ]);
    setNewGroupName('');
    setIsAddingGroup(false);
  };

  const handleExportGradebook = () => {
    const rows = [
      ["Guruh nomi", "Sinf darajasi", "O‘quvchilar soni", "O‘rtacha o‘zlashtirish (%)"],
      ...groups.map(g => [g.name, `${g.grade}-sinf`, String(g.studentsCount), `${g.averageScore}%`])
    ];

    const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `oqituvchi_hisoboti_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const selectedProjLesson = lessons.find(l => l.id === projectorLessonId) || lessons[0];

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 text-xs font-semibold mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>Pedagogik Boshqaruv Tizimi</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {t.teacherCabinet.title}
            </h1>
            <p className="mt-1 text-xs text-slate-500">
              {t.teacherCabinet.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsProjectorActive(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-sky-600 rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Tv className="w-4 h-4" />
              <span>{t.teacherCabinet.projectorMode}</span>
            </button>

            <button
              onClick={handleExportGradebook}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{t.teacherCabinet.exportGrades}</span>
            </button>
          </div>
        </div>

        {/* Groups Cards Grid */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-sky-600" />
              <span>Biriktirilgan sinf guruhlari ({groups.length})</span>
            </h2>

            <button
              onClick={() => setIsAddingGroup(!isAddingGroup)}
              className="text-xs font-semibold text-sky-600 hover:underline flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{t.teacherCabinet.createGroup}</span>
            </button>
          </div>

          {isAddingGroup && (
            <form onSubmit={handleAddGroup} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Guruh nomi (masalan: 7-B sinf)"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  className="text-xs p-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                  autoFocus
                />
                <select
                  value={newGroupGrade}
                  onChange={(e) => setNewGroupGrade(Number(e.target.value))}
                  className="text-xs p-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(g => (
                    <option key={g} value={g}>{g}-sinf</option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddingGroup(false)}
                  className="px-3 py-1.5 text-xs text-slate-500"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-sky-600 rounded-lg"
                >
                  Qo‘shish
                </button>
              </div>
            </form>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {groups.map((grp) => (
              <div
                key={grp.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    {grp.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300">
                    {grp.grade}-sinf
                  </span>
                </div>

                <div className="text-xs text-slate-500 space-y-1">
                  <div>O‘quvchilar: <strong className="text-slate-800 dark:text-slate-200">{grp.studentsCount} nafar</strong></div>
                  <div>O‘zlashtirish: <strong className="text-emerald-600 font-mono">{grp.averageScore}%</strong></div>
                </div>

                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-[11px] text-slate-400">Jurnal faol</span>
                  <button
                    onClick={() => {
                      setProjectorLessonId(lessons.find(l => l.gradeId === grp.grade)?.id || "g1-l1");
                      setIsProjectorActive(true);
                    }}
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    Darsni ochish
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projector Full-Screen Presentation Overlay */}
        {isProjectorActive && selectedProjLesson && (
          <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col p-6 sm:p-12 overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-sky-500/20 text-sky-400 font-mono text-xs uppercase font-bold">
                  Proyektor Rejimi
                </span>
                <span className="text-slate-400 text-sm">
                  {selectedProjLesson.gradeId}-sinf · {selectedProjLesson.subjectCategory}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={projectorLessonId}
                  onChange={(e) => setProjectorLessonId(e.target.value)}
                  className="bg-slate-900 border border-slate-700 text-xs px-3 py-1.5 rounded-lg text-white"
                >
                  {lessons.map(l => (
                    <option key={l.id} value={l.id}>{l.title[locale]}</option>
                  ))}
                </select>

                <button
                  onClick={() => setIsProjectorActive(false)}
                  className="px-4 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-semibold hover:bg-rose-500"
                >
                  Chiqish (Esc)
                </button>
              </div>
            </div>

            {/* Huge Presentation Slide */}
            <div className="max-w-4xl mx-auto space-y-8 flex-1">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {selectedProjLesson.title[locale]}
              </h1>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                {selectedProjLesson.lectureText[locale]}
              </div>

              {selectedProjLesson.codeSnippet && (
                <div className="p-6 rounded-2xl bg-black border border-slate-800 font-mono text-base text-emerald-400 shadow-2xl">
                  <pre>{selectedProjLesson.codeSnippet.code}</pre>
                </div>
              )}

              <div className="p-6 rounded-2xl bg-sky-950/40 border border-sky-800 text-sky-200 text-base leading-relaxed">
                <strong className="block text-sky-400 font-bold mb-2">💡 Hayotiy misol:</strong>
                {selectedProjLesson.realLifeExample[locale]}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
