import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { Play, Pause, RotateCcw, Shuffle, Sparkles, BarChart2, Info } from 'lucide-react';

export const AlgorithmVisualizer: React.FC = () => {
  const { locale, t, incrementGameCount } = useApp();

  const [algorithm, setAlgorithm] = useState<'bubble' | 'selection' | 'insertion'>('bubble');
  const [array, setArray] = useState<number[]>([45, 12, 85, 32, 89, 39, 69, 44, 42, 25, 76, 58]);
  const [comparing, setComparing] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(300);
  const [comparisonsCount, setComparisonsCount] = useState(0);
  const [swapsCount, setSwapsCount] = useState(0);

  const isSortingRef = useRef(false);

  const resetArray = () => {
    isSortingRef.current = false;
    setIsPlaying(false);
    setComparing([]);
    setSortedIndices([]);
    setComparisonsCount(0);
    setSwapsCount(0);
    const newArr = Array.from({ length: 12 }, () => Math.floor(Math.random() * 85) + 15);
    setArray(newArr);
  };

  const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  const runBubbleSort = async () => {
    isSortingRef.current = true;
    setIsPlaying(true);

    const arr = [...array];
    const n = arr.length;
    let comps = 0;
    let swaps = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!isSortingRef.current) return;

        setComparing([j, j + 1]);
        comps++;
        setComparisonsCount(comps);
        await sleep(speed);

        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swaps++;
          setSwapsCount(swaps);
          setArray([...arr]);
          await sleep(speed);
        }
      }
      setSortedIndices(prev => [...prev, n - i - 1]);
    }

    setComparing([]);
    setSortedIndices(Array.from({ length: n }, (_, i) => i));
    setIsPlaying(false);
    isSortingRef.current = false;
    incrementGameCount('algo-visualizer');
  };

  const runSelectionSort = async () => {
    isSortingRef.current = true;
    setIsPlaying(true);

    const arr = [...array];
    const n = arr.length;
    let comps = 0;
    let swaps = 0;

    for (let i = 0; i < n; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (!isSortingRef.current) return;

        setComparing([minIdx, j]);
        comps++;
        setComparisonsCount(comps);
        await sleep(speed);

        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }

      if (minIdx !== i) {
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        swaps++;
        setSwapsCount(swaps);
        setArray([...arr]);
        await sleep(speed);
      }

      setSortedIndices(prev => [...prev, i]);
    }

    setComparing([]);
    setSortedIndices(Array.from({ length: n }, (_, i) => i));
    setIsPlaying(false);
    isSortingRef.current = false;
    incrementGameCount('algo-visualizer');
  };

  const handleStart = () => {
    if (isPlaying) {
      isSortingRef.current = false;
      setIsPlaying(false);
    } else {
      if (algorithm === 'bubble') runBubbleSort();
      else if (algorithm === 'selection') runSelectionSort();
    }
  };

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 text-xs font-semibold mb-2">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Interaktiv Simulyator</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Algoritmlar Vizualizatori
          </h1>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            Saralash algoritmlarining bosqichma-bosqich ishlashini jonli ko‘ring va tahlil qiling.
          </p>
        </div>

        {/* Visualizer Stage */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
          
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setAlgorithm('bubble');
                  resetArray();
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  algorithm === 'bubble' ? 'bg-sky-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                Pufaksimon (Bubble Sort)
              </button>
              <button
                onClick={() => {
                  setAlgorithm('selection');
                  resetArray();
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  algorithm === 'selection' ? 'bg-sky-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                Tanlash (Selection Sort)
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={resetArray}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Aralashtirish</span>
              </button>

              <button
                onClick={handleStart}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg text-white transition-all shadow-sm ${
                  isPlaying ? 'bg-amber-600 hover:bg-amber-500' : 'bg-sky-600 hover:bg-sky-500'
                }`}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{isPlaying ? "Pauza" : "Boshlash"}</span>
              </button>
            </div>
          </div>

          {/* Interactive Graphic Array Bars */}
          <div className="h-64 sm:h-72 flex items-end justify-between gap-1.5 sm:gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800">
            {array.map((val, idx) => {
              const isComp = comparing.includes(idx);
              const isSorted = sortedIndices.includes(idx);

              let barColor = "bg-sky-500 dark:bg-sky-600";
              if (isComp) barColor = "bg-amber-500 dark:bg-amber-400";
              if (isSorted) barColor = "bg-emerald-500 dark:bg-emerald-400";

              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <span className="text-[10px] font-mono text-slate-500 font-semibold">{val}</span>
                  <div
                    style={{ height: `${val}%` }}
                    className={`w-full rounded-t-md transition-all duration-150 ${barColor}`}
                  />
                  <span className="text-[9px] font-mono text-slate-400">[{idx}]</span>
                </div>
              );
            })}
          </div>

          {/* Legend and live metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-between">
              <span className="text-slate-500">Taqqoslashlar:</span>
              <strong className="font-mono text-sky-600 text-sm">{comparisonsCount} marta</strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-between">
              <span className="text-slate-500">O‘rin almashishlar:</span>
              <strong className="font-mono text-emerald-600 text-sm">{swapsCount} marta</strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-between">
              <span className="text-slate-500">Murakkablik (Big-O):</span>
              <strong className="font-mono text-slate-800 dark:text-slate-200 text-sm">O(n²)</strong>
            </div>
          </div>

          {/* Educational explanation box */}
          <div className="p-4 rounded-xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/40 text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <strong className="font-semibold text-sky-900 dark:text-sky-300 block">
              💡 {algorithm === 'bubble' ? "Pufaksimon saralash (Bubble Sort)" : "Tanlash orqali saralash (Selection Sort)"} qanday ishlaydi:
            </strong>
            <p className="leading-relaxed">
              {algorithm === 'bubble' 
                ? "Yonma-yon turgan ikkita element solishtiriladi: agar chapdagi son o‘ngdagisidan katta bo‘lsa, ularning o‘rni almashtiriladi. Eng katta son xuddi suv tagidagi pufakcha kabi massivning oxiriga ko‘tarilib boradi."
                : "Har bir qadamda qolgan elementlar ichidan eng kichigi (minimal) topiladi va boshidagi element bilan o‘rni almashtiriladi."}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
