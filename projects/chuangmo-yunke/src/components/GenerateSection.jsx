import React, { useState, useEffect } from 'react';
import { Upload, Activity } from 'lucide-react';

const GenerateSection = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleUpload(files[0]);
    }
  };

  const handleUpload = (file) => {
    // 模拟上传进度
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            alt="Background"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            图片转 3D，灵感触手可及
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-300">
            上传您的 2D 设计图，我们 AI 引擎将在几分钟内为您生成高精度 3D 模型预览。
          </p>
          
          {/* Upload Area */}
          <div className="mt-10 w-full max-w-3xl">
            <div 
              className={`border-2 border-dashed rounded-2xl p-12 transition-all cursor-pointer backdrop-blur-sm ${
                isDragOver 
                  ? 'border-blue-400 bg-slate-800/80' 
                  : 'border-blue-500/50 bg-slate-800/50 hover:border-blue-400 hover:bg-slate-800/80'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById('fileInput').click()}
            >
              <input 
                id="fileInput" 
                type="file" 
                accept="image/jpeg,image/png,image/webp" 
                className="hidden"
                onChange={(e) => e.target.files[0] && handleUpload(e.target.files[0])}
              />
              <div className="flex flex-col items-center">
                <div className="p-4 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition-colors">
                  <Upload className="h-10 w-10 text-blue-400" />
                </div>
                <p className="mt-4 text-lg font-medium text-slate-200">点击或拖拽上传图片</p>
                <p className="mt-1 text-sm text-slate-400">支持 JPG, PNG, WEBP (最大 20MB)</p>
                
                {uploadProgress !== null && (
                  <div className="mt-4 w-full max-w-xs">
                    <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-blue-500 h-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                    <p className="text-sm text-slate-400 mt-2">{uploadProgress}%</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Showcase Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-slate-800 flex items-center">
            <Activity className="w-6 h-6 mr-2 text-blue-600" />
            实时生成案例
          </h3>
          <span className="text-sm text-blue-600 cursor-pointer hover:underline">查看更多 →</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative rounded-xl overflow-hidden shadow-lg h-64 bg-slate-100">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full relative">
                  <img 
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1625316362031-6e3e5c942942' : item === 2 ? '1563089145-599997674d42' : '1550684848-fac1c5b4e853'}?auto=format&fit=crop&w=400&q=80`} 
                    className="w-full h-full object-cover" 
                    alt="Original"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">原图</div>
                </div>
                <div className="w-1/2 h-full bg-slate-800 relative flex items-center justify-center border-l-2 border-white">
                  <span className="text-blue-400 font-mono text-lg animate-pulse-slow">Processing...</span>
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">3D 预览</div>
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-medium">生成案例 #{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenerateSection;
