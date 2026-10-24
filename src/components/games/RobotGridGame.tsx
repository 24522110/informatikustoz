import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Play, RotateCcw, ArrowRight, CornerDownRight, CornerDownLeft, Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react';

type Direction = 'UP' | 'RIGHT' | 'DOWN' | 'LEFT';
type Command = 'FORWARD' | 'TURN_RIGHT' | 'TURN_LEFT';

const GRID_SIZE = 6;
const OBSTACLES = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 1 },
  { x: 4, y: 2 }
];
const TARGET = { x: 4, y: 4 };

const DIRECTIONS: Direction[] = ['UP', 'RIGHT', 'DOWN', 'LEFT'];

export const RobotGridGame: React.FC = () => {
  const { t, incrementGameCount } = useApp();

  const [robotPos, setRobotPos] = useState({ x: 0, y: 0 });
  const [robotDir, setRobotDir] = useState<Direction>('RIGHT');
  const [commands, setCommands] = useState<Command[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [gameWon, setGameWon] = useState(false);

  const addCommand = (cmd: Command) => {
    if (commands.length < 15 && !isRunning) {
      setCommands(prev => [...prev, cmd]);
    }
  };

  const removeCommand = (index: number) => {
    if (!isRunning) {
      setCommands(prev => prev.filter((_, i) => i !== index));
    }
  };

  const clearCommands = () => {
    if (!isRunning) {
      setCommands([]);
      setStatusMessage(null);
    }
  };

  const resetGame = () => {
    setRobotPos({ x: 0, y: 0 });
    setRobotDir('RIGHT');
    setCommands([]);
    setIsRunning(false);
    setStatusMessage(null);
    setGameWon(false);
  };

  const runSimulation = async () => {
    if (commands.length === 0 || isRunning) return;
    setIsRunning(true);
    setStatusMessage("Robot harakatlanmoqda...");

    let curX = 0;
    let curY = 0;
    let curDir: Direction = 'RIGHT';

    setRobotPos({ x: 0, y: 0 });
    setRobotDir('RIGHT');

    for (let i = 0; i < commands.length; i++) {
      const cmd = commands[i];
      await new Promise(r => setTimeout(r, 450));

      if (cmd === 'TURN_RIGHT') {
        const curIdx: number = DIRECTIONS.indexOf(curDir);
        const nextIdx: number = (curIdx + 1) % 4;
        curDir = DIRECTIONS[nextIdx];
        setRobotDir(curDir);
      } else if (cmd === 'TURN_LEFT') {
        const curIdx: number = DIRECTIONS.indexOf(curDir);
        const nextIdx: number = (curIdx + 3) % 4;
        curDir = DIRECTIONS[nextIdx];
        setRobotDir(curDir);
      } else if (cmd === 'FORWARD') {
        let nextX = curX;
        let nextY = curY;

        if (curDir === 'UP') nextY -= 1;
        if (curDir === 'DOWN') nextY += 1;
        if (curDir === 'LEFT') nextX -= 1;
        if (curDir === 'RIGHT') nextX += 1;

        // Check boundary
        if (nextX < 0 || nextX >= GRID_SIZE || nextY < 0 || nextY >= GRID_SIZE) {
          setStatusMessage("Xatolik! Robot maydon chegarasidan chiqib ketdi.");
          setIsRunning(false);
          return;
        }

        // Check obstacle
        const hitObstacle = OBSTACLES.some(obs => obs.x === nextX && obs.y === nextY);
        if (hitObstacle) {
          setStatusMessage("To‘siqqa urildi! Qaytadan rejalashtiring.");
          setIsRunning(false);
          return;
        }

        curX = nextX;
        curY = nextY;
        setRobotPos({ x: curX, y: curY });
      }

      // Check target
      if (curX === TARGET.x && curY === TARGET.y) {
        setGameWon(true);
        setStatusMessage("Tabriklaymiz! Robot yulduzchaga yetib keldi!");
        setIsRunning(false);
        incrementGameCount('robot-grid');
        return;
      }
    }

    if (curX !== TARGET.x || curY !== TARGET.y) {
      setStatusMessage("Buyruqlar tugadi, lekin nishonga yetib bormadi. Yana buyruq qo‘shing!");
    }
    setIsRunning(false);
  };

  const getRobotArrow = () => {
    switch (robotDir) {
      case 'UP': return '▲';
      case 'DOWN': return '▼';
      case 'LEFT': return '◄';
      case 'RIGHT': return '►';
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 max-w-3xl mx-auto shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Robotni manzilga olib bor
          </h3>
          <p className="text-xs text-slate-500">
            Algoritm tuzing: buyruqlarni tanlang va robotni yulduzcha tomon yo‘naltiring
          </p>
        </div>
        <button
          onClick={resetGame}
          className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 font-medium"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Qayta o‘rnatish</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Left: 6x6 Grid Visualizer */}
        <div className="md:col-span-7 bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center">
          <div className="grid grid-cols-6 gap-1.5 w-full max-w-[320px] aspect-square">
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, idx) => {
              const x = idx % GRID_SIZE;
              const y = Math.floor(idx / GRID_SIZE);

              const isRobot = robotPos.x === x && robotPos.y === y;
              const isTarget = TARGET.x === x && TARGET.y === y;
              const isObstacle = OBSTACLES.some(obs => obs.x === x && obs.y === y);

              let cellBg = "bg-white dark:bg-slate-800 border-slate-200/80 dark:border-slate-700/80";
              if (isObstacle) cellBg = "bg-slate-300 dark:bg-slate-700 border-slate-400";
              if (isTarget) cellBg = "bg-amber-100 dark:bg-amber-950/50 border-amber-300";
              if (isRobot) cellBg = "bg-sky-100 dark:bg-sky-950/60 border-sky-400 ring-2 ring-sky-400";

              return (
                <div
                  key={idx}
                  className={`rounded-lg border flex items-center justify-center font-bold text-sm transition-all duration-300 ${cellBg}`}
                >
                  {isRobot && (
                    <span className="text-sky-600 dark:text-sky-400 text-base animate-pulse">
                      🤖 {getRobotArrow()}
                    </span>
                  )}
                  {!isRobot && isTarget && <span className="text-xl">⭐</span>}
                  {!isRobot && isObstacle && <span className="text-base text-slate-500">🧱</span>}
                </div>
              );
            })}
          </div>

          {/* Grid Legend */}
          <div className="mt-4 flex items-center gap-4 text-[11px] text-slate-500">
            <span>🤖 Boshlang‘ich [0,0]</span>
            <span>🧱 To‘siq</span>
            <span>⭐ Nishon [4,4]</span>
          </div>
        </div>

        {/* Right: Command Palette & Program sequence */}
        <div className="md:col-span-5 space-y-4">
          
          {/* Command Buttons */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Buyruqlar qo‘shish:
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                disabled={isRunning}
                onClick={() => addCommand('FORWARD')}
                className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 border border-sky-200 dark:border-sky-800 text-xs font-semibold text-sky-700 dark:text-sky-300 transition-colors"
              >
                Oldinga (1)
              </button>
              <button
                disabled={isRunning}
                onClick={() => addCommand('TURN_RIGHT')}
                className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300 transition-colors"
              >
                O‘ngga ↷
              </button>
              <button
                disabled={isRunning}
                onClick={() => addCommand('TURN_LEFT')}
                className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 border border-purple-200 dark:border-purple-800 text-xs font-semibold text-purple-700 dark:text-purple-300 transition-colors"
              >
                Chapga ↶
              </button>
            </div>
          </div>

          {/* Planned Code Stack */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                Tuzilgan dastur ({commands.length} ta buyruq):
              </span>
              {commands.length > 0 && !isRunning && (
                <button
                  onClick={clearCommands}
                  className="text-rose-500 hover:underline"
                >
                  Tozalash
                </button>
              )}
            </div>

            <div className="min-h-[140px] max-h-[180px] overflow-y-auto p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-1.5 font-mono text-xs">
              {commands.length === 0 ? (
                <div className="text-slate-400 text-center py-8">
                  Yuqoridagi tugmalar orqali buyruqlar zanjirini yig‘ing
                </div>
              ) : (
                commands.map((cmd, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-1.5 rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600"
                  >
                    <span className="text-slate-800 dark:text-slate-200">
                      {idx + 1}. {cmd === 'FORWARD' ? "Oldinga yur()" : cmd === 'TURN_RIGHT' ? "O‘ngga buril(90°)" : "Chapga buril(90°)"}
                    </span>
                    {!isRunning && (
                      <button
                        onClick={() => removeCommand(idx)}
                        className="text-slate-400 hover:text-rose-500 text-xs"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Run Button */}
          <button
            disabled={commands.length === 0 || isRunning}
            onClick={runSimulation}
            className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-white bg-sky-600 hover:bg-sky-500 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{isRunning ? "Bajarilmoqda..." : "Dasturni ishga tushirish (Run)"}</span>
          </button>

          {/* Feedback Status Alert */}
          {statusMessage && (
            <div className={`p-3 rounded-lg text-xs font-medium border ${
              gameWon 
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300' 
                : 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300'
            }`}>
              {statusMessage}
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
