import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { LessonContent, ContentStatus, DifficultyLevel } from '../../types';
import { 
  Settings, 
  Plus, 
  Trash2, 
  Edit3, 
  RotateCcw, 
  Download, 
  ShieldCheck, 
  CheckCircle2, 
  Clock,
  Layers
} from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const { locale, t, lessons, addLesson, updateLesson, deleteLesson, resetAllData } = useApp();

  const [isCreating, setIsCreating] = useState(false);
  const [editingLessonId, setEditingLessonId] = useState<string | null>(null);

  // Form state
  const [formGradeId, setFormGradeId] = useState<number>(1);
  const [formCategory, setFormCategory] = useState<string>('hardware');
  const [formTitle, setFormTitle] = useState<string>('');
  const [formDuration, setFormDuration] = useState<number>(35);
  const [formDifficulty, setFormDifficulty] = useState<DifficultyLevel>('easy');
  const [formLecture, setFormLecture] = useState<string>('');
  const [formRealWorld, setFormRealWorld] = useState<string>('');
  const [formStatus, setFormStatus] = useState<ContentStatus>('published');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) return;

    if (editingLessonId) {
      const existing = lessons.find(l => l.id === editingLessonId);
      if (existing) {
        updateLesson({
          ...existing,
          gradeId: formGradeId,
          subjectCategory: formCategory,
          title: { ...existing.title, [locale]: formTitle },
          durationMinutes: formDuration,
          difficulty: formDifficulty,
          lectureText: { ...existing.lectureText, [locale]: formLecture },
          realLifeExample: { ...existing.realLifeExample, [locale]: formRealWorld },
          status: formStatus,
          updatedAt: new Date().toISOString().slice(0, 10)
        });
      }
      setEditingLessonId(null);
    } else {
      const newLesson: LessonContent = {
        id: `g${formGradeId}-l${Date.now()}`,
        gradeId: formGradeId,
        subjectCategory: formCategory,
        title: {
          'uz-Latn': formTitle,
          'uz-Cyrl': formTitle,
          'ru': formTitle,
          'en': formTitle
        },
        objectives: {
          'uz-Latn': ["Dars maqsadlari va kutilayotgan natijalar"],
          'uz-Cyrl': ["Дарс мақсадлари ва кутилаётган натижалар"],
          'ru': ["Цели и задачи урока"],
          'en': ["Lesson goals and outcomes"]
        },
        prerequisites: {
          'uz-Latn': "Boshlang‘ich kompyuter savodxonligi.",
          'uz-Cyrl': "Бошланғич компьютер саводхонлиги.",
          'ru': "Базовая компьютерная грамотность.",
          'en': "Basic computer literacy."
        },
        durationMinutes: formDuration,
        difficulty: formDifficulty,
        lectureText: {
          'uz-Latn': formLecture || "Dars ma’ruza matni kiritildi.",
          'uz-Cyrl': formLecture || "Дарс маъруза матни киритилди.",
          'ru': formLecture || "Текст лекции добавлен.",
          'en': formLecture || "Lecture text added."
        },
        realLifeExample: {
          'uz-Latn': formRealWorld || "Hayotiy misol keltirildi.",
          'uz-Cyrl': formRealWorld || "Ҳаётий мисол келтирилди.",
          'ru': formRealWorld || "Пример из реальной жизни.",
          'en': formRealWorld || "Real-world example provided."
        },
        stepByStepGuide: {
          'uz-Latn': ["1-qadamni bajaring", "2-qadamni bajaring"],
          'uz-Cyrl': ["1-қадамни бажаринг", "2-қадамни бажаринг"],
          'ru': ["Выполните шаг 1", "Выполните шаг 2"],
          'en': ["Execute step 1", "Execute step 2"]
        },
        commonMistakes: {
          'uz-Latn': ["Tez-tez uchraydigan xatolar"],
          'uz-Cyrl': ["Тез-тез учрайдиган хатолар"],
          'ru': ["Распространенные ошибки"],
          'en': ["Common mistakes"]
        },
        homework: {
          'uz-Latn': "Mavzu bo‘yicha topshiriqni bajaring.",
          'uz-Cyrl': "Мавзу бўйича топшириқни бажаринг.",
          'ru': "Выполните задание по теме.",
          'en': "Complete homework challenge."
        },
        status: formStatus,
        updatedAt: new Date().toISOString().slice(0, 10),
        sources: ["O‘zbekiston davlat ta’lim standarti, 2024"]
      };

      addLesson(newLesson);
      setIsCreating(false);
    }

    // Reset form
    setFormTitle('');
    setFormLecture('');
    setFormRealWorld('');
  };

  const handleEditClick = (lesson: LessonContent) => {
    setEditingLessonId(lesson.id);
    setFormGradeId(lesson.gradeId);
    setFormCategory(lesson.subjectCategory);
    setFormTitle(lesson.title[locale]);
    setFormDuration(lesson.durationMinutes);
    setFormDifficulty(lesson.difficulty);
    setFormLecture(lesson.lectureText[locale]);
    setFormRealWorld(lesson.realLifeExample[locale]);
    setFormStatus(lesson.status);
    setIsCreating(true);
  };

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-2">
              <Settings className="w-3.5 h-3.5" />
              <span>Ma’muriyat va Kontent Boshqaruvi</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {t.admin.title}
            </h1>
            <p className="mt-1 text-xs text-slate-500">
              {t.admin.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setEditingLessonId(null);
                setIsCreating(!isCreating);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>{t.admin.addLesson}</span>
            </button>

            <button
              onClick={() => {
                if (confirm("Haqiqatan ham barcha ma’lumotlarni birlamchi holatga qaytarmoqchimisiz?")) {
                  resetAllData();
                }
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-rose-600 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-xl hover:bg-rose-100 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.admin.resetData}</span>
            </button>
          </div>
        </div>

        {/* Create/Edit Lesson Form Modal/Drawer */}
        {isCreating && (
          <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-md space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
              {editingLessonId ? t.admin.editLesson : t.admin.addLesson}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  Sinf:
                </label>
                <select
                  value={formGradeId}
                  onChange={(e) => setFormGradeId(Number(e.target.value))}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => (
                    <option key={n} value={n}>{n}-sinf</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  Bo‘lim / Yo‘nalish:
                </label>
                <select
                  value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  <option value="hardware">Qurilmalar (Hardware)</option>
                  <option value="algorithms">Algoritmlar</option>
                  <option value="programming">Dasturlash (Python)</option>
                  <option value="cybersecurity">Kiberxavfsizlik</option>
                  <option value="web">Web Texnologiyalar</option>
                  <option value="ai">Sun’iy Intellekt</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  Holat (Status):
                </label>
                <select
                  value={formStatus}
                  onChange={(e) => setFormStatus(e.target.value as ContentStatus)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  <option value="published">{t.admin.statusPublished}</option>
                  <option value="draft">{t.admin.statusDraft}</option>
                  <option value="review">Ko‘rib chiqilmoqda (Review)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                Dars nomi:
              </label>
              <input
                type="text"
                required
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                placeholder="Dars nomini kiriting..."
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                Ma’ruza matni:
              </label>
              <textarea
                rows={5}
                value={formLecture}
                onChange={(e) => setFormLecture(e.target.value)}
                placeholder="Dars mavzusi bo‘yicha nazariy tushuntirish..."
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                Hayotiy misol:
              </label>
              <input
                type="text"
                value={formRealWorld}
                onChange={(e) => setFormRealWorld(e.target.value)}
                placeholder="Mavzuni tushuntiruvchi amaliy hayotiy misol..."
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setIsCreating(false);
                  setEditingLessonId(null);
                }}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm"
              >
                {editingLessonId ? "Saqlash" : "Qo‘shish"}
              </button>
            </div>
          </form>
        )}

        {/* Existing Lessons CRUD Table */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Baza darslari ({lessons.length})
            </h2>
            <span className="text-xs text-slate-400">
              * O‘zgarishlar darhol saqlanadi
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 uppercase font-mono text-[10px]">
                <tr>
                  <th className="p-3">Sinf</th>
                  <th className="p-3">Dars nomi</th>
                  <th className="p-3">Bo‘lim</th>
                  <th className="p-3">Holat</th>
                  <th className="p-3 text-right">Amallar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {lessons.map((lesson) => (
                  <tr key={lesson.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-850">
                    <td className="p-3 font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">
                      {lesson.gradeId}-sinf
                    </td>
                    <td className="p-3 font-medium text-slate-900 dark:text-white">
                      {lesson.title[locale]}
                    </td>
                    <td className="p-3 capitalize text-slate-500 whitespace-nowrap">
                      {lesson.subjectCategory}
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        lesson.status === 'published' 
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' 
                          : 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300'
                      }`}>
                        {lesson.status}
                      </span>
                    </td>
                    <td className="p-3 text-right whitespace-nowrap space-x-2">
                      <button
                        onClick={() => handleEditClick(lesson)}
                        className="text-sky-600 hover:text-sky-700 p-1"
                        title="Tahrirlash"
                      >
                        <Edit3 className="w-4 h-4 inline" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`'${lesson.title[locale]}' darsini o‘chirmoqchimisiz?`)) {
                            deleteLesson(lesson.id);
                          }
                        }}
                        className="text-rose-500 hover:text-rose-600 p-1"
                        title="O‘chirish"
                      >
                        <Trash2 className="w-4 h-4 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
