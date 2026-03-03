import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { GENERATION_CASES } from '../data/mockData';

const GenerationCases = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeFilter, setActiveFilter] = useState('全部');

  const filters = ['全部', '角色', '场景', '道具', '建筑', '珠宝'];

  const filteredCases = activeFilter === '全部' 
    ? GENERATION_CASES 
    : GENERATION_CASES.filter(c => {
        if (activeFilter === '角色') return c.title.includes('角色') || c.title.includes('生物') || c.title.includes('义肢');
        if (activeFilter === '场景') return c.title.includes('建筑') || c.title.includes('场景');
        if (activeFilter === '道具') return c.title.includes('道具') || c.title.includes('零件');
        if (activeFilter === '珠宝') return c.title.includes('珠宝');
        return true;
      });

  return (
    <div className="bg-slate-50 py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            生成案例展示
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            看看其他用户如何用 AI 生成精美 3D 模型
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-blue-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedCase(item)}
            >
              <div className="relative h-48">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 h-full relative border-r-2 border-white">
                    <img src={item.inputImage} alt="Input" className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">原图</div>
                  </div>
                  <div className="w-1/2 h-full relative">
                    <img src={item.outputImage} alt="Output" className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">3D</div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>⏱️ {item.time}</span>
                  <span>🔺 {item.polyCount} 面</span>
                  <span>📦 {item.format}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCase && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setSelectedCase(null)}>
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
                <h3 className="text-xl font-bold">{selectedCase.title}</h3>
                <button onClick={() => setSelectedCase(null)} className="text-slate-400 hover:text-slate-600 text-2xl">×</button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-sm font-medium text-slate-600 mb-2">输入图片</div>
                    <img src={selectedCase.inputImage} alt="Input" className="w-full rounded-lg" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-600 mb-2">生成结果</div>
                    <img src={selectedCase.outputImage} alt="Output" className="w-full rounded-lg" />
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-bold text-slate-900 mb-3">生成详情</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-slate-500">生成时间</div>
                      <div className="font-semibold">{selectedCase.time}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">多边形数</div>
                      <div className="font-semibold">{selectedCase.polyCount}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">导出格式</div>
                      <div className="font-semibold">{selectedCase.format}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">描述</div>
                      <div className="font-semibold text-sm">{selectedCase.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerationCases;
