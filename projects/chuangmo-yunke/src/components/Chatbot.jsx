import React, { useState } from 'react';
import { Bot, X, MessageSquare } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: '您好！我是创模云科的 AI 客服。请问有什么可以帮您？\n您可以问我关于模型生成、悬赏发布、或社区发帖的问题。' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    setMessages([...messages, { id: messages.length + 1, type: 'user', text: inputText }]);
    setInputText('');
    
    // 模拟自动回复
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: prev.length + 1, 
        type: 'bot', 
        text: '感谢您的咨询，我们会尽快为您解答！' 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl mb-4 border border-slate-100 flex flex-col overflow-hidden animate-fade-in-up">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center">
              <Bot className="h-6 w-6 mr-2" />
              <span className="font-medium">Langbot 智能助手</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 p-4 bg-slate-50 overflow-y-auto">
            {messages.map(msg => (
              <div 
                key={msg.id} 
                className={`mb-3 p-3 rounded-lg text-sm max-w-[85%] ${
                  msg.type === 'bot' 
                    ? 'bg-white text-slate-700 rounded-tl-none shadow-sm' 
                    : 'bg-blue-600 text-white rounded-tr-none ml-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-3 bg-white border-t flex gap-2">
            <input 
              type="text" 
              placeholder="输入您的问题..." 
              className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-blue-500"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
            >
              发送
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default Chatbot;
