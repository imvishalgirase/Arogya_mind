import { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2 } from 'lucide-react';
import api from '../services/api';

const Chatbot = ({ mood }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (mood) {
      setMessages([
        {
          sender: 'bot',
          text: `I noticed you logged that you're feeling ${mood}. I'm here for you. Would you like to talk about it?`
        }
      ]);
    }
  }, [mood]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      const res = await api.post('/chat', { mood, message: userMessage, history: messages });
      setMessages(prev => [...prev, { sender: 'bot', text: res.data.reply }]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: "Sorry, I'm having trouble connecting to AI services right now." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-800 shadow-xl overflow-hidden">

      {/* Header */}
      <div className="p-4 border-b border-gray-100 dark:border-slate-800 bg-white/40 dark:bg-slate-800/40 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
          <Bot size={24} />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 dark:text-gray-100">Arogya AI</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Your Wellness Companion</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 opacity-50">
            <Bot size={48} className="mb-4" />
            <p>Select a mood above to start chatting</p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${msg.sender === 'user'
                ? 'bg-blue-600 text-white rounded-tr-sm'
                : 'bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-slate-700 rounded-tl-sm'
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-4 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-tl-sm flex gap-2 items-center text-gray-500">
              <Loader2 size={16} className="animate-spin" />
              <span>Thinking...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-4 bg-white/40 dark:bg-slate-800/40 border-t border-gray-100 dark:border-slate-800">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!mood || loading}
            placeholder={mood ? "Type your message here..." : "Select a mood first"}
            className="w-full pl-4 pr-12 py-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-full focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-800 dark:text-gray-100 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!mood || loading || !input.trim()}
            className="absolute right-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </form>

    </div>
  );
};

export default Chatbot;