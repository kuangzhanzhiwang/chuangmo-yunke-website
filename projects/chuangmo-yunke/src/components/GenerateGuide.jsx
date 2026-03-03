import React, { useState } from 'react';
import { Camera, Check, X, Upload, Lightbulb, Image as ImageIcon } from 'lucide-react';

const GenerateGuide = () => {
  const [activeTab, setActiveTab] = useState('tips');

  return (
    <div className="bg-slate-50 min-h-screen py-16 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            AI 生成使用指南
          </h1>
          <p className="text-lg text-slate-600">
            掌握这些技巧，获得更优质的 3D 模型
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-xl p-1 shadow-sm">
            {[
              { id: 'tips', label: '拍摄技巧' },
              { id: 'process', label: '生成流程' },
              { id: 'faq', label: '常见问题' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === 'tips' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Do's */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <Check className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">推荐做法</h2>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: '正面或 45 度角拍摄',
                    desc: '清晰展示物体主要特征，避免过于复杂的角度',
                    img: 'https://images.unsplash.com/photo-1615671131100-2f95b546522c?auto=format&fit=crop&q=80&w=400',
                  },
                  {
                    title: '光线充足',
                    desc: '自然光或柔光灯，避免强烈阴影和反光',
                    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400',
                  },
                  {
                    title: '背景简洁',
                    desc: '纯色或简单背景，突出主体物体',
                    img: 'https://images.unsplash.com/photo-1621360841013-c768371e93cf?auto=format&fit=crop&q=80&w=400',
                  },
                  {
                    title: '高分辨率',
                    desc: '建议使用 1080P 以上清晰图片',
                    img: 'https://images.unsplash.com/photo-1596727147705-54a9d094368c?auto=format&fit=crop&q=80&w=400',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 pb-4 border-b last:border-0 last:pb-0">
                    <img src={item.img} alt={item.title} className="w-24 h-24 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                      <div className="text-sm text-slate-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Don'ts */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">避免事项</h2>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: '避免模糊照片',
                    desc: '模糊图片会导致生成模型细节丢失',
                    img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400',
                  },
                  {
                    title: '避免逆光拍摄',
                    desc: '逆光会导致主体过暗，细节不清晰',
                    img: 'https://images.unsplash.com/photo-1535378437327-109726b23d53?auto=format&fit=crop&q=80&w=400',
                  },
                  {
                    title: '避免复杂背景',
                    desc: '杂乱背景会干扰 AI 识别主体',
                    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400',
                  },
                  {
                    title: '避免多物体',
                    desc: '单张图片建议只包含一个主体物体',
                    img: 'https://images.unsplash.com/photo-1595429035839-c99c298ffdde?auto=format&fit=crop&q=80&w=400',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 pb-4 border-b last:border-0 last:pb-0">
                    <img src={item.img} alt={item.title} className="w-24 h-24 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                      <div className="text-sm text-slate-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              生成流程
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: '上传图片',
                  desc: '支持 JPG、PNG、WEBP 格式，最大 20MB',
                  icon: <Upload className="w-8 h-8" />,
                  time: '30 秒',
                },
                {
                  step: 2,
                  title: '选择参数',
                  desc: '设置模型精度、输出格式、贴图分辨率',
                  icon: <Lightbulb className="w-8 h-8" />,
                  time: '1 分钟',
                },
                {
                  step: 3,
                  title: 'AI 处理',
                  desc: 'AI 引擎自动分析并生成 3D 模型',
                  icon: <ImageIcon className="w-8 h-8" />,
                  time: '2-5 分钟',
                },
                {
                  step: 4,
                  title: '下载模型',
                  desc: '预览满意后下载，支持多种格式',
                  icon: <Camera className="w-8 h-8" />,
                  time: '1 分钟',
                },
              ].map((item) => (
                <div key={item.step} className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">Step {item.step}</div>
                  <div className="font-bold text-slate-900 mb-2">{item.title}</div>
                  <div className="text-slate-600 mb-2">{item.desc}</div>
                  <div className="text-sm text-blue-600 font-medium">预计 {item.time}</div>
                  {item.step < 4 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">常见问题</h2>
            <div className="space-y-6">
              {[
                {
                  q: '支持哪些图片格式？',
                  a: '我们支持 JPG、PNG、WEBP 格式，单张图片最大 20MB。建议使用清晰的正面或 45 度角图片，生成效果更佳。',
                },
                {
                  q: '生成一个模型需要多长时间？',
                  a: '通常 2-5 分钟，具体取决于模型复杂度。简单物体约 2 分钟，复杂角色或场景约 4-5 分钟。',
                },
                {
                  q: '生成的模型可以用于商业用途吗？',
                  a: '可以！您拥有生成模型的完整使用权，包括商业用途。但我们建议对重要项目进行二次优化。',
                },
                {
                  q: '模型精度能达到多少？',
                  a: '默认生成模型面数在 1 万 -10 万之间，可根据需求调整。支持导出高精度版本用于 3D 打印。',
                },
                {
                  q: '可以指定输出格式吗？',
                  a: '支持 OBJ、FBX、Blend、STL 等多种格式导出，会员用户可同时导出多种格式。',
                },
                {
                  q: '生成不满意可以重新生成吗？',
                  a: '可以！每个用户每天有 3 次免费生成机会，会员无限次。每次可调整参数重新生成。',
                },
              ].map((item, idx) => (
                <div key={idx} className="border-b pb-6 last:border-0 last:pb-0">
                  <div className="font-bold text-slate-900 mb-2 flex items-center">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm mr-3">
                      {idx + 1}
                    </span>
                    {item.q}
                  </div>
                  <div className="text-slate-600 ml-9">{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateGuide;
