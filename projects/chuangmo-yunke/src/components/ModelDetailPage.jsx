import React, { useState } from 'react';
import { Star, Heart, MessageSquare, Bookmark, ShoppingCart, User, Download, Share2, ChevronLeft, RotateCcw, ZoomIn } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { MOCK_MODELS } from '../data/mockData';
import ModelViewer from './ModelViewer';

const ModelDetailPage = () => {
  const { id } = useParams();
  const model = MOCK_MODELS.find(m => m.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  if (!model) return <div className="p-8 text-center">模型不存在</div>;

  const relatedModels = MOCK_MODELS.filter(m => 
    m.tags.some(tag => model.tags.includes(tag)) && m.id !== model.id
  ).slice(0, 4);

  const galleryImages = [
    model.image,
    `https://images.unsplash.com/photo-${model.id % 2 === 0 ? '1615840287214-7ff58ee0489b' : '1535378437327-109726b23d53'}?auto=format&fit=crop&q=80&w=600`,
    `https://images.unsplash.com/photo-${model.id % 3 === 0 ? '1618005182384-a83a8bd57fbe' : '1596727147705-54a9d094368c'}?auto=format&fit=crop&q=80&w=600`,
    `https://images.unsplash.com/photo-${model.id % 4 === 0 ? '1595429035839-c99c298ffdde' : '1550684848-fac1c5b4e853'}?auto=format&fit=crop&q=80&w=600`,
  ];

  return (
    <div className="bg-slate-50 min-h-screen animate-fade-in">
      {/* Back Button */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <button className="flex items-center text-slate-600 hover:text-blue-600 transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            返回列表
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left: 3D Viewer & Gallery */}
          <div>
            {/* 3D Viewer */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-4">
              <div className="aspect-square bg-slate-100 flex items-center justify-center">
                <ModelViewer 
                  modelUrl="/models/sample.glb"
                  autoRotate
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 flex items-center justify-between text-sm text-slate-500">
                <span>🖱️ 左键旋转 | 滚轮缩放 | 右键平移</span>
                <button className="flex items-center text-blue-600 hover:text-blue-700">
                  <ZoomIn className="w-4 h-4 mr-1" />
                  全屏查看
                </button>
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-blue-600' : 'border-transparent hover:border-slate-300'
                  }`}
                >
                  <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info & Purchase */}
          <div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h1 className="text-2xl font-bold text-slate-900 mb-2">{model.title}</h1>
              
              {/* Author */}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 flex items-center justify-center text-white font-bold mr-3">
                  {model.author[0]}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{model.author}</div>
                  <div className="text-sm text-slate-500">已关注 12.5K</div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                  关注
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pb-4 border-b">
                <div className="flex items-center mr-6">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="text-lg font-bold">4.9</span>
                  <span className="text-slate-500 text-sm ml-1">(128 评价)</span>
                </div>
                <div className="flex items-center mr-6">
                  <Heart className="w-5 h-5 text-pink-500 mr-1" />
                  <span className="text-slate-700">{model.likes}</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-blue-500 mr-1" />
                  <span className="text-slate-700">{model.comments}</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-blue-600">{model.price}</span>
                  <span className="text-slate-400 line-through text-sm ml-2">¥{parseInt(model.price.replace('¥', '')) * 1.5}</span>
                  <span className="ml-2 px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded">限时 7 折</span>
                </div>
                <div className="text-sm text-slate-500">
                  授权类型：<span className="text-emerald-600 font-medium">商业可用</span>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  加入购物车
                </button>
                <button className="flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                  <Download className="w-5 h-5 mr-2" />
                  立即购买
                </button>
              </div>

              <div className="flex gap-2 mb-6">
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg border transition-colors ${
                    isLiked ? 'border-pink-500 bg-pink-50 text-pink-600' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Heart className={`w-5 h-5 mr-2 ${isLiked ? 'fill-pink-500' : ''}`} />
                  收藏
                </button>
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg border transition-colors ${
                    isBookmarked ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 mr-2 ${isBookmarked ? 'fill-blue-500' : ''}`} />
                  收藏
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {model.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Specs */}
            <div className="bg-white rounded-xl p-6 shadow-sm mt-4">
              <h3 className="font-bold text-lg mb-4">技术规格</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">多边形数</span>
                  <span className="font-medium">{model.polyCount || '15K'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">贴图分辨率</span>
                  <span className="font-medium">2K (2048×2048)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">文件格式</span>
                  <span className="font-medium">{model.format || 'OBJ/FBX/Blend'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">是否绑定</span>
                  <span className="font-medium">否</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">授权类型</span>
                  <span className="font-medium text-emerald-600">商业授权</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="font-bold text-lg mb-4">模型描述</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                这是一款高质量的{model.title}，适用于游戏开发、动画制作、3D 打印等多种场景。
                模型布线合理，拓扑结构优秀，可直接用于生产流程。
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>高精度建模，细节丰富</li>
                <li>优化的拓扑结构，适合动画绑定</li>
                <li>包含完整的 UV 展开和贴图</li>
                <li>支持多种主流 3D 软件</li>
                <li>提供商业授权，可放心使用</li>
              </ul>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">用户评价 (12)</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 flex items-center justify-center text-white text-sm font-bold mr-3">
                        U{i}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">用户{i * 100}</div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="text-xs text-slate-500">2026-02-{28 - i}</div>
                    </div>
                    <p className="text-slate-700 text-sm">
                      模型质量很高，布线合理，直接用到项目里了。作者也很负责，有问题及时回复。推荐！
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Models */}
          <div>
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-20">
              <h3 className="font-bold text-lg mb-4">相关模型</h3>
              <div className="space-y-4">
                {relatedModels.map((m) => (
                  <div key={m.id} className="flex gap-3 cursor-pointer hover:bg-slate-50 -mx-2 px-2 py-2 rounded transition-colors">
                    <img src={m.image} alt={m.title} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate mb-1">{m.title}</div>
                      <div className="text-blue-600 font-bold text-sm">{m.price}</div>
                      <div className="flex items-center text-xs text-slate-500">
                        <Heart className="w-3 h-3 mr-1" />
                        {m.likes}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetailPage;
