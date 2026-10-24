import React from 'react';
import { useApp } from '../../context/AppContext';
import { HardwareExplorerGame } from './HardwareExplorerGame';
import { TypingTrainerGame } from './TypingTrainerGame';
import { RobotGridGame } from './RobotGridGame';
import { CyberDetectiveGame } from './CyberDetectiveGame';
import { AlgorithmFlowGame } from './AlgorithmFlowGame';
import { FileOrganizerGame } from './FileOrganizerGame';
import { BugHunterGame } from './BugHunterGame';
import { 
  Gamepad2, 
  ArrowLeft, 
  Trophy, 
  Cpu, 
  Keyboard, 
  Navigation, 
  ShieldCheck, 
  ListOrdered, 
  Folder, 
  Bug 
} from 'lucide-react';

export const GamesHub: React.FC = () => {
  const { t, activeGameId, setActiveGameId, userProgress } = useApp();

  const games = [
    {
      id: 'hardware-explorer',
      title: "Kompyuter qismlarini topish",
      description: "Monitor, tizim bloki, protsessor, xotira va qurilmalarning vazifalarini aniqlang.",
      icon: Cpu,
      category: "1–4-sinflar",
      color: "bg-sky-50 text-sky-600 dark:bg-sky-950/60 dark:text-sky-400"
    },
    {
      id: 'typing-trainer',
      title: "Klaviatura tezligi (Typing Speed)",
      description: "Matnni ko‘chirib yozish, WPM (so‘z/daqiqa) va xatosizlik darajasini oshirish.",
      icon: Keyboard,
      category: "Barcha sinflar",
      color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400"
    },
    {
      id: 'algorithm-flow',
      title: "Algoritmni yig‘ (Flow Builder)",
      description: "Harakatlar ketma-ketligini mantiqiy tartibda siljitib to‘g‘ri algoritm tuzing.",
      icon: ListOrdered,
      category: "3–6-sinflar",
      color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400"
    },
    {
      id: 'robot-grid',
      title: "Robotni manzilga olib bor",
      description: "To‘siqli labirintdan robotni buyruqlar ketma-ketligi (algoritm) orqali nishonga yetkazing.",
      icon: Navigation,
      category: "3–7-sinflar",
      color: "bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400"
    },
    {
      id: 'file-organizer',
      title: "Fayllarni tartibla (File Organizer)",
      description: "Hujjatlar, rasmlar, audio va kod fayllarini to‘g‘ri papkalarga saralang.",
      icon: Folder,
      category: "4–6-sinflar",
      color: "bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400"
    },
    {
      id: 'bug-hunter',
      title: "Xatoni top (Bug Hunter)",
      description: "Dasturiy koddagi sintaktik va mantiqiy xatoliklarni aniqlab bartaraf eting.",
      icon: Bug,
      category: "7–11-sinflar",
      color: "bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400"
    },
    {
      id: 'cyber-detective',
      title: "Kiberxavfsizlik Detektivi",
      description: "Fishing xabarlari, soxta havolalar va firibgarlik tuzoqlarini aniqlab zararsizlantiring.",
      icon: ShieldCheck,
      category: "7–11-sinflar",
      color: "bg-teal-50 text-teal-600 dark:bg-teal-950/60 dark:text-teal-400"
    }
  ];

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* If an active game is selected */}
        {activeGameId ? (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <button
                onClick={() => setActiveGameId(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>O‘yinlar ro‘yxatiga qaytish</span>
              </button>

              <div className="text-xs font-mono text-slate-500">
                O‘ynalgan soni: <strong className="text-sky-600">{userProgress.gamesPlayed[activeGameId] || 0}</strong>
              </div>
            </div>

            {activeGameId === 'hardware-explorer' && <HardwareExplorerGame />}
            {activeGameId === 'typing-trainer' && <TypingTrainerGame />}
            {activeGameId === 'algorithm-flow' && <AlgorithmFlowGame />}
            {activeGameId === 'robot-grid' && <RobotGridGame />}
            {activeGameId === 'file-organizer' && <FileOrganizerGame />}
            {activeGameId === 'bug-hunter' && <BugHunterGame />}
            {activeGameId === 'cyber-detective' && <CyberDetectiveGame />}
          </div>
        ) : (
          /* Games Catalog */
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400 mb-2">
                <Gamepad2 className="w-4 h-4" />
                <span>Interaktiv ta’limiy simulyatsiyalar ({games.length} ta o‘yin)</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t.sections.popularGamesTitle}
              </h1>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {t.sections.popularGamesDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {games.map((game) => {
                const Icon = game.icon;
                const playedCount = userProgress.gamesPlayed[game.id] || 0;

                return (
                  <div
                    key={game.id}
                    className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:border-sky-400 dark:hover:border-sky-600 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${game.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {game.category}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                        {game.title}
                      </h3>

                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                        {game.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-mono">
                        {playedCount > 0 ? `${playedCount}x o‘ynaldi` : "Boshlanmagan"}
                      </span>

                      <button
                        onClick={() => setActiveGameId(game.id)}
                        className="px-3.5 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors shadow-sm"
                      >
                        O‘ynash
                      </button>
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
