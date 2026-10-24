import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Folder, FileText, Image, Music, Code2, CheckCircle2, RotateCcw, Award } from 'lucide-react';

interface FileItem {
  id: string;
  name: string;
  type: 'docs' | 'images' | 'audio' | 'code';
}

const FILES_TO_ORGANIZE: FileItem[] = [
  { id: '1', name: "insho_vatanning_kelajagi.docx", type: 'docs' },
  { id: '2', name: "maktab_bog‘i_bahor.png", type: 'images' },
  { id: '3', name: "shashmaqom_kuyi.mp3", type: 'audio' },
  { id: '4', name: "kalkulyator_dasturi.py", type: 'code' },
  { id: '5', name: "dars_jadvali_2026.pdf", type: 'docs' },
  { id: '6', name: "sinf_surati_bitiruvchilar.jpg", type: 'images' },
  { id: '7', name: "birinchi_veb_sahifa.html", type: 'code' },
  { id: '8', name: "qushlar_sayrashi.wav", type: 'audio' }
];

export const FileOrganizerGame: React.FC = () => {
  const { t, incrementGameCount } = useApp();

  const [remainingFiles, setRemainingFiles] = useState<FileItem[]>(FILES_TO_ORGANIZE);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const currentFile = remainingFiles[currentFileIndex];
  const isFinished = !currentFile;

  const handleFolderClick = (folderType: 'docs' | 'images' | 'audio' | 'code') => {
    if (!currentFile) return;

    if (currentFile.type === folderType) {
      setScore(prev => prev + 10);
      setFeedback("To‘g‘ri! Fayl mos papkaga joylashtirildi.");
      const nextIndex = currentFileIndex + 1;
      if (nextIndex >= remainingFiles.length) {
        incrementGameCount('file-organizer');
      }
      setCurrentFileIndex(nextIndex);
    } else {
      setMistakes(prev => prev + 1);
      setFeedback("Noto‘g‘ri papka! Fayl kengaytmasiga diqqat qiling.");
    }
  };

  const handleRestart = () => {
    setRemainingFiles([...FILES_TO_ORGANIZE].sort(() => 0.5 - Math.random()));
    setCurrentFileIndex(0);
    setScore(0);
    setMistakes(0);
    setFeedback(null);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 max-w-2xl mx-auto shadow-sm space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Folder className="w-5 h-5 text-amber-500" />
            <span>Fayllarni tartibla (File Organizer)</span>
          </h3>
          <p className="text-xs text-slate-500">
            Fayl nomining kengaytmasiga qarab uni to‘g‘ri papkaga joylashtiring
          </p>
        </div>

        <div className="text-xs font-mono tabular-nums text-slate-600 dark:text-slate-300">
          Ball: <strong className="text-sky-600 font-bold">{score}</strong> | Xatolar: <strong className="text-rose-500 font-bold">{mistakes}</strong>
        </div>
      </div>

      {!isFinished ? (
        <div className="space-y-6">
          
          {/* Current File Target Card */}
          <div className="p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-center space-y-2">
            <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
              Joylashtirilishi kerak bo‘lgan fayl ({currentFileIndex + 1} / {remainingFiles.length}):
            </span>
            <div className="text-base sm:text-lg font-mono font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
              <FileText className="w-5 h-5 text-amber-600" />
              <span>{currentFile.name}</span>
            </div>
            <p className="text-xs text-slate-500">
              Quyidagi qaysi papkaga joylashtirasiz?
            </p>
          </div>

          {/* 4 Destination Folders */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleFolderClick('docs')}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-sky-500 text-left transition-all group"
            >
              <div className="flex items-center gap-3 mb-1">
                <FileText className="w-5 h-5 text-sky-600" />
                <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  📁 Hujjatlar
                </span>
              </div>
              <span className="text-[11px] text-slate-400 block font-mono">.docx, .pdf, .txt</span>
            </button>

            <button
              onClick={() => handleFolderClick('images')}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-emerald-500 text-left transition-all group"
            >
              <div className="flex items-center gap-3 mb-1">
                <Image className="w-5 h-5 text-emerald-600" />
                <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  📁 Rasmlar
                </span>
              </div>
              <span className="text-[11px] text-slate-400 block font-mono">.png, .jpg, .svg</span>
            </button>

            <button
              onClick={() => handleFolderClick('audio')}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-purple-500 text-left transition-all group"
            >
              <div className="flex items-center gap-3 mb-1">
                <Music className="w-5 h-5 text-purple-600" />
                <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  📁 Musiqa & Ovoz
                </span>
              </div>
              <span className="text-[11px] text-slate-400 block font-mono">.mp3, .wav</span>
            </button>

            <button
              onClick={() => handleFolderClick('code')}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-indigo-500 text-left transition-all group"
            >
              <div className="flex items-center gap-3 mb-1">
                <Code2 className="w-5 h-5 text-indigo-600" />
                <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  📁 Dasturlar & Kod
                </span>
              </div>
              <span className="text-[11px] text-slate-400 block font-mono">.py, .html, .js</span>
            </button>
          </div>

          {feedback && (
            <div className="text-center text-xs text-slate-600 dark:text-slate-300 font-medium">
              {feedback}
            </div>
          )}

        </div>
      ) : (
        /* Finished State */
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-500 mx-auto flex items-center justify-center">
            <Award className="w-9 h-9" />
          </div>

          <h4 className="text-xl font-bold text-slate-900 dark:text-white">
            Barcha fayllar tartibga solindi!
          </h4>

          <p className="text-xs text-slate-500">
            Siz barcha kengaytmalarni to‘g‘ri ajratdingiz. Ish stoli toza va tartibli!
          </p>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 font-mono text-sm inline-block">
            To‘plangan ball: <strong className="text-sky-600">{score}</strong> / 80
          </div>

          <div className="pt-2">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Qayta o‘ynash</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
