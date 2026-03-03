import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('generate');
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { id: 'generate', label: 'AI 生成' },
    { id: 'trading', label: '模型交易' },
    { id: 'printing', label: '3D 打印' },
    { id: 'account', label: '账户会员' },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            常见问题
          </h2>
          <p className="text-lg text-slate-600">
            快速找到你需要的答案
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-blue-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {FAQ_DATA[activeCategory]?.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-slate-50 flex items-center justify-between transition-colors"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex items-center">
                  <HelpCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="font-medium text-slate-900">{item.q}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">没有找到想要的答案？</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            联系在线客服
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
