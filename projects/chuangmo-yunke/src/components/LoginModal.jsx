import React from 'react';
import { X } from 'lucide-react';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative animate-fade-in-up">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">欢迎回到创模云科</h2>
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="邮箱/手机号" 
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
          />
          <input 
            type="password" 
            placeholder="密码" 
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
            立即登录
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-slate-500">
          还没有账号？<span className="text-blue-600 cursor-pointer hover:underline">去注册</span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
