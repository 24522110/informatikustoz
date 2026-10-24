import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, X, Send, Bot, User, Lightbulb, Code, BookOpen } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
}

export const AiTeacherModal: React.FC = () => {
  const { isAiModalOpen, closeAiModal, aiContext, locale, t } = useApp();

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'ai',
      text: "Salom! Men 'Raqamli Ustoz' — sizning shaxsiy ta’limiy yordamchingizman. Informatika fanidan qaysi mavzu yoki masala bo‘yicha yordam kerak? Men tayyor javobni emas, fikrlashingiz uchun yo‘naltiruvchi maslahatlar beraman!"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  if (!isAiModalOpen) return null;

  const handleSend = async (customPrompt?: string) => {
    const textToSend = customPrompt || input;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: textToSend
    };

    setMessages(prev => [...prev, userMsg]);
    if (!customPrompt) setInput('');
    setIsLoading(true);

    try {
      // Call backend route /api/ai-assistant
      const res = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: textToSend,
          context: aiContext,
          locale
        })
      });

      if (res.ok) {
        const data = await res.json();
        setMessages(prev => [
          ...prev,
          {
            id: `ai-${Date.now()}`,
            sender: 'ai',
            text: data.reply
          }
        ]);
      } else {
        // Fallback pedagogical guide if backend key is unconfigured
        generatePedagogicalFallback(textToSend);
      }
    } catch {
      generatePedagogicalFallback(textToSend);
    } finally {
      setIsLoading(false);
    }
  };

  const generatePedagogicalFallback = (query: string) => {
    let reply = "Ajoyib savol! Ushbu masalani yechish uchun avval uni kichik qismlarga ajratib ko‘raylik. Siz qaysi qadamgacha tushundingiz? Keling, birinchi navbatda boshlang‘ich shartlarni tekshiramiz.";
    
    if (query.toLowerCase().includes('print') || query.toLowerCase().includes('kod')) {
      reply = "Python tilida ekranga chiqarishda qavslar va qo‘shtirnoqlar yopilganini tekshiring: print(\"Matn\"). Agar son hisoblayotgan bo‘lsangiz, qo‘shtirnoqsiz yozing: print(10 + 5).";
    } else if (query.toLowerCase().includes('algoritm')) {
      reply = "Algoritm tuzishda eng asosiysi — qadamlar ketma-ketligi. Masalan, eshikni ochmasdan xonaga kirib bo‘lmaydi. Siz tuzmoqchi bo‘lgan algoritmning 1-qadami nima bo‘lishi kerak deb o‘ylaysiz?";
    } else if (query.toLowerCase().includes('parol') || query.toLowerCase().includes('xavfsiz')) {
      reply = "Kiberxavfsizlikda eng muhim qoida — shaxsiy parollarni hech kimga bermaslik va kamida 12 belgidan iborat harf, son hamda belgilarni aralashtirishdir.";
    }

    setMessages(prev => [
      ...prev,
      {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: reply
      }
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 w-full max-w-xl shadow-2xl flex flex-col h-[560px] animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {t.aiAssistant.title}
              </h3>
              <p className="text-[11px] text-slate-400">
                Pedagogik maslahatchi
              </p>
            </div>
          </div>

          <button
            onClick={closeAiModal}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Context indicator if context is set */}
        {aiContext && (
          <div className="px-4 py-2 bg-sky-50 dark:bg-sky-950/40 text-[11px] text-sky-700 dark:text-sky-300 border-b border-sky-100 dark:border-sky-900/40 truncate">
            Mavzu konteksti: {aiContext}
          </div>
        )}

        {/* Chat message history */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 text-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-sky-600 text-white rounded-tr-none'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 text-xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-2 items-center text-xs text-slate-400 pl-9">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span>Raqamli Ustoz fikrlamoqda...</span>
            </div>
          )}
        </div>

        {/* Suggested Quick Prompts */}
        <div className="p-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto text-[11px]">
          <button
            onClick={() => handleSend("Bu darsdagi asosiy tushunchani sodda qilib tushuntirib bera olasizmi?")}
            className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 whitespace-nowrap"
          >
            💡 Qisqa tushuntir
          </button>
          <button
            onClick={() => handleSend("Hayotdan boshqa qiziqarli misol keltira olasizmi?")}
            className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 whitespace-nowrap"
          >
            🍎 Hayotiy misol
          </button>
          <button
            onClick={() => handleSend("Ushbu mavzuda eng ko‘p qilinadigan xatolar nimalar?")}
            className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 whitespace-nowrap"
          >
            ⚠️ Keng tarqalgan xato
          </button>
        </div>

        {/* Input area */}
        <div className="p-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t.aiAssistant.placeholder}
            className="flex-1 text-xs p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
          />

          <button
            disabled={!input.trim() || isLoading}
            onClick={() => handleSend()}
            className="p-2.5 rounded-xl bg-sky-600 text-white disabled:opacity-40 hover:bg-sky-500 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
