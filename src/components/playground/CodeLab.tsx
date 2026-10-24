import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Play, RotateCcw, Copy, Check, Terminal, Globe, Sparkles } from 'lucide-react';

const PYTHON_TEMPLATES = [
  {
    name: "Salom, Dunyo!",
    code: `# Birinchi Python dasturi
print("Salom, O‘zbekiston!")
ism = "Azizbek"
print("Xush kelibsiz,", ism)
`
  },
  {
    name: "Kalkulyator va hisoblash",
    code: `# Arifmetik amallar
a = 25
b = 15
print("Yig‘indi:", a + b)
print("Ayirma:", a - b)
print("Ko‘paytma:", a * b)
print("Bo‘linma:", a / b)
`
  },
  {
    name: "Shart va mantiq (if/else)",
    code: `# Bahoni aniqlash dasturi
ball = 85

if ball >= 86:
    print("Baho: 5 (A’lo)")
elif ball >= 71:
    print("Baho: 4 (Yaxshi)")
else:
    print("Baho: 3 (Qoniqarli)")
`
  },
  {
    name: "Takrorlanish (for sikli)",
    code: `# 1 dan 5 gacha sonlarni chiqarish
for i in range(1, 6):
    print(f"Qadam raqami: {i}")
`
  }
];

const HTML_TEMPLATES = [
  {
    name: "Mening birinchi veb-sahifam",
    html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 20px; background: #f8fafc; color: #1e293b; }
    h1 { color: #0284c7; }
    .card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
    button { background: #0284c7; color: white; border: none; padding: 10px 16px; border-radius: 8px; cursor: pointer; }
    button:hover { background: #0369a1; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Salom, Veb Dasturlash!</h1>
    <p>Men RAQAMLI OLAM platformasida HTML va CSS o‘rganmoqdaman.</p>
    <button onclick="alert('Tabriklaymiz, siz tugmani bosdingiz!')">Meni bosing</button>
  </div>
</body>
</html>`
  }
];

export const CodeLab: React.FC = () => {
  const { t, openAiModal } = useApp();

  const [activeTab, setActiveTab] = useState<'python' | 'web'>('python');

  // Python state
  const [pythonCode, setPythonCode] = useState(PYTHON_TEMPLATES[0].code);
  const [pythonOutput, setPythonOutput] = useState<string[]>([]);
  const [isPythonRunning, setIsPythonRunning] = useState(false);

  // Web state
  const [webCode, setWebCode] = useState(HTML_TEMPLATES[0].html);

  // Safe client-side school-level Python execution emulator
  const runPython = () => {
    setIsPythonRunning(true);
    setPythonOutput([]);

    setTimeout(() => {
      const logs: string[] = [];
      const lines = pythonCode.split('\n');
      const variables: Record<string, any> = {};

      try {
        for (let i = 0; i < lines.length; i++) {
          const rawLine = lines[i].trim();
          if (!rawLine || rawLine.startsWith('#')) continue;

          // Simple variable assignment: a = 25 or ism = "Aziz"
          if (rawLine.includes('=') && !rawLine.startsWith('if') && !rawLine.startsWith('for') && !rawLine.startsWith('print')) {
            const parts = rawLine.split('=');
            if (parts.length === 2) {
              const varName = parts[0].trim();
              const valExpr = parts[1].trim();

              if ((valExpr.startsWith('"') && valExpr.endsWith('"')) || (valExpr.startsWith("'") && valExpr.endsWith("'"))) {
                variables[varName] = valExpr.slice(1, -1);
              } else if (!isNaN(Number(valExpr))) {
                variables[varName] = Number(valExpr);
              } else if (valExpr in variables) {
                variables[varName] = variables[valExpr];
              }
            }
          }

          // Simple print handling
          if (rawLine.startsWith('print(') && rawLine.endsWith(')')) {
            const content = rawLine.slice(6, -1);
            
            // Handle f-string f"..."
            if (content.startsWith('f"') && content.endsWith('"')) {
              let fStr = content.slice(2, -1);
              Object.keys(variables).forEach(k => {
                fStr = fStr.replace(new RegExp(`{${k}}`, 'g'), variables[k]);
              });
              logs.push(fStr);
            } 
            // Comma separated arguments
            else {
              const args = content.split(',').map(a => a.trim());
              const renderedArgs = args.map(arg => {
                if ((arg.startsWith('"') && arg.endsWith('"')) || (arg.startsWith("'") && arg.endsWith("'"))) {
                  return arg.slice(1, -1);
                }
                if (arg in variables) {
                  return variables[arg];
                }
                // Try arithmetic evaluation safely
                try {
                  // Replace variable names in expression
                  let expr = arg;
                  Object.keys(variables).forEach(k => {
                    expr = expr.replace(new RegExp(`\\b${k}\\b`, 'g'), variables[k]);
                  });
                  // Only allow digits and basic math
                  if (/^[0-9+\-*/().\s]+$/.test(expr)) {
                    return Function(`'use strict'; return (${expr})`)();
                  }
                } catch {
                  // fallback
                }
                return arg;
              });
              logs.push(renderedArgs.join(' '));
            }
          }

          // Simple for i in range(...) simulation
          if (rawLine.startsWith('for i in range(')) {
            const rangeMatch = rawLine.match(/range\((.*?)\)/);
            if (rangeMatch) {
              const rangeArgs = rangeMatch[1].split(',').map(n => Number(n.trim()));
              const start = rangeArgs.length === 2 ? rangeArgs[0] : 0;
              const end = rangeArgs.length === 2 ? rangeArgs[1] : rangeArgs[0];
              
              // Find inner indented lines
              let innerPrint = "";
              if (i + 1 < lines.length && lines[i + 1].trim().startsWith('print(')) {
                innerPrint = lines[i + 1].trim();
                i++; // skip next line in outer loop
              }

              for (let r = start; r < end; r++) {
                variables['i'] = r;
                if (innerPrint) {
                  const content = innerPrint.slice(6, -1);
                  if (content.startsWith('f"') && content.endsWith('"')) {
                    let fStr = content.slice(2, -1);
                    fStr = fStr.replace(/{i}/g, String(r));
                    logs.push(fStr);
                  } else {
                    logs.push(String(r));
                  }
                }
              }
            }
          }
        }

        if (logs.length === 0) {
          logs.push(">>> Dastur muvaffaqiyatli bajarildi (Chiqarish natijasi bo‘sh)");
        }
      } catch (err: any) {
        logs.push(`SyntaxError / Xatolik: ${err.message || 'Kod sintaksisini tekshiring'}`);
      }

      setPythonOutput(logs);
      setIsPythonRunning(false);
    }, 200);
  };

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950/60 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Lab Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400 mb-1">
              <Terminal className="w-4 h-4" />
              <span>Interaktiv Dasturlash Muhiti</span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Kod Laboratoriyasi
            </h1>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActiveTab('python')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'python'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Python Mini-Lab</span>
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'web'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>HTML / CSS Sandbox</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Python Mini Lab */}
        {activeTab === 'python' && (
          <div className="space-y-4">
            
            {/* Quick Templates Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-500 font-medium shrink-0">Namunalar:</span>
              {PYTHON_TEMPLATES.map((tmpl, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setPythonCode(tmpl.code);
                    setPythonOutput([]);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-sky-500 shrink-0 font-medium transition-colors"
                >
                  {tmpl.name}
                </button>
              ))}
            </div>

            {/* Editor & Console Split */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              
              {/* Code Editor */}
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400">
                    <span className="font-mono">main.py</span>
                    <button
                      onClick={() => openAiModal(`Ushbu Python kodida xatoni topishga yordam bering:\n${pythonCode}`)}
                      className="text-sky-400 hover:underline flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>AI Ustozdan so‘rash</span>
                    </button>
                  </div>

                  <textarea
                    value={pythonCode}
                    onChange={(e) => setPythonCode(e.target.value)}
                    rows={14}
                    spellCheck={false}
                    className="w-full bg-transparent font-mono text-xs text-sky-200 leading-relaxed focus:outline-none resize-none"
                    placeholder="Python kodingizni bu yerga yozing..."
                  />
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    * Xavfsiz maktab Python simulyatori
                  </span>

                  <button
                    disabled={isPythonRunning}
                    onClick={runPython}
                    className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-all shadow-sm active:scale-95"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isPythonRunning ? "Bajarilmoqda..." : "Ishga tushirish (Run)"}</span>
                  </button>
                </div>
              </div>

              {/* Console Output */}
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-sm font-mono text-xs text-slate-300 flex flex-col">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
                  <span>Terminal / Natijalar</span>
                  <button
                    onClick={() => setPythonOutput([])}
                    className="text-slate-500 hover:text-slate-300"
                  >
                    Tozalash
                  </button>
                </div>

                <div className="flex-1 min-h-[220px] overflow-y-auto space-y-1 text-slate-200">
                  {pythonOutput.length === 0 ? (
                    <div className="text-slate-500 italic py-8 text-center">
                      Kodni ishga tushirish uchun 'Run' tugmasini bosing
                    </div>
                  ) : (
                    pythonOutput.map((line, idx) => (
                      <div key={idx} className="leading-relaxed">
                        {line.startsWith('SyntaxError') ? (
                          <span className="text-rose-400 font-bold">{line}</span>
                        ) : (
                          <span>&gt;&gt; {line}</span>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: HTML & CSS Sandbox */}
        {activeTab === 'web' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              
              {/* HTML Editor */}
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-sm flex flex-col">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400">
                  <span className="font-mono">index.html</span>
                  <span className="text-[11px] text-emerald-400">Jonli tahrirlash (Live)</span>
                </div>

                <textarea
                  value={webCode}
                  onChange={(e) => setWebCode(e.target.value)}
                  rows={16}
                  spellCheck={false}
                  className="w-full bg-transparent font-mono text-xs text-amber-200 leading-relaxed focus:outline-none resize-none"
                />
              </div>

              {/* Live Preview in Sandboxed Iframe */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm flex flex-col">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                  <span className="font-semibold">Brauzer ko‘rinishi (Preview)</span>
                  <span className="text-[10px] font-mono text-slate-400">sandbox="allow-scripts"</span>
                </div>

                <div className="flex-1 min-h-[300px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white">
                  <iframe
                    title="Live Web Preview"
                    srcDoc={webCode}
                    sandbox="allow-scripts"
                    className="w-full h-full min-h-[320px] border-0"
                  />
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
