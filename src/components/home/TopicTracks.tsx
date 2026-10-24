import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Laptop, 
  Binary, 
  Code2, 
  Globe, 
  ShieldAlert, 
  FileSpreadsheet, 
  Bot, 
  Cpu, 
  ArrowRight 
} from 'lucide-react';

export const TopicTracks: React.FC = () => {
  const { t, setActivePage, setSelectedGradeId } = useApp();

  const tracks = [
    {
      id: 'literacy',
      title: t.tracks.literacy,
      desc: "Kompyuter qurilmalari, Windows/Linux ish stoli, fayllar bilan ishlash.",
      icon: Laptop,
      color: "text-sky-600 bg-sky-50 dark:bg-sky-950/50",
      gradeTarget: 1
    },
    {
      id: 'algorithms',
      title: t.tracks.algorithms,
      desc: "Ketma-ketlik, blok-sxemalar, chiziqli va tarmoqlanuvchi algoritmlar.",
      icon: Binary,
      color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/50",
      gradeTarget: 3
    },
    {
      id: 'programming',
      title: t.tracks.programming,
      desc: "Python va JavaScript sintaksisi, o‘zgaruvchilar, funksiyalar va massivlar.",
      icon: Code2,
      color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50",
      gradeTarget: 7
    },
    {
      id: 'webDev',
      title: t.tracks.webDev,
      desc: "HTML teglar, CSS uslublar, responsive dizayn va veb-sayt tuzish.",
      icon: Globe,
      color: "text-teal-600 bg-teal-50 dark:bg-teal-950/50",
      gradeTarget: 8
    },
    {
      id: 'security',
      title: t.tracks.security,
      desc: "Kibergigiyena, shaxsiy ma’lumotlar himoyasi, fishing va qonuniy me’yorlar.",
      icon: ShieldAlert,
      color: "text-rose-600 bg-rose-50 dark:bg-rose-950/50",
      gradeTarget: 9
    },
    {
      id: 'office',
      title: t.tracks.office,
      desc: "MS Word, Excel elektron jadvallari, formulalar va taqdimotlar.",
      icon: FileSpreadsheet,
      color: "text-amber-600 bg-amber-50 dark:bg-amber-950/50",
      gradeTarget: 5
    },
    {
      id: 'ai',
      title: t.tracks.ai,
      desc: "Mashinali o‘rganish asoslari, neyron tarmoqlar va mas’uliyatli AI madaniyati.",
      icon: Bot,
      color: "text-purple-600 bg-purple-50 dark:bg-purple-950/50",
      gradeTarget: 11
    },
    {
      id: 'robotics',
      title: t.tracks.robotics,
      desc: "Datchiklar, mikrokontrollerlar, avtomatlashtirish va aqlli qurilmalar.",
      icon: Cpu,
      color: "text-cyan-600 bg-cyan-50 dark:bg-cyan-950/50",
      gradeTarget: 10
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t.sections.tracksTitle}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {t.sections.tracksDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.id}
                onClick={() => {
                  setSelectedGradeId(track.gradeTarget);
                  setActivePage('curriculum');
                }}
                className="group cursor-pointer rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:border-sky-400 dark:hover:border-sky-600 transition-all hover:shadow-sm bg-white dark:bg-slate-850 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${track.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors mb-1.5">
                    {track.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {track.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-sky-600 dark:text-sky-400 font-medium">
                  <span>Darslar moduli</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
