import React, { useState } from 'react';
import { Clock, Flame, User, ImageIcon, Activity, MoreHorizontal, ThumbsUp, MessageSquare, Share2, Bookmark, Star } from 'lucide-react';
import { MOCK_POSTS } from '../data/mockData';

const CommunitySection = () => {
  const [activeSort, setActiveSort] = useState('hot');

  return (
    <div className="bg-slate-50 min-h-screen py-8 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Feed */}
          <div className="flex-1">
            {/* Feed Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">社区动态</h2>
              <div className="bg-white p-1 rounded-lg border shadow-sm flex">
                <button 
                  onClick={() => setActiveSort('new')} 
                  className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all flex items-center ${
                    activeSort === 'new' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <Clock className="w-4 h-4 mr-1"/> 最新
                </button>
                <button 
                  onClick={() => setActiveSort('hot')} 
                  className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all flex items-center ${
                    activeSort === 'hot' 
                      ? 'bg-orange-100 text-orange-700' 
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <Flame className="w-4 h-4 mr-1"/> 热门
                </button>
              </div>
            </div>

            {/* Create Post Bar */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                <User className="w-6 h-6"/>
              </div>
              <div className="flex-1 bg-slate-50 rounded-full px-4 py-2 text-slate-400 text-sm">
                分享你的作品或见解...
              </div>
              <div className="flex gap-2 text-slate-400">
                <ImageIcon className="w-5 h-5 hover:text-blue-500 transition-colors"/>
                <Activity className="w-5 h-5 hover:text-blue-500 transition-colors"/>
              </div>
            </div>

            {/* Posts List */}
            <div className="space-y-6">
              {MOCK_POSTS.map(post => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                  {/* Post Header */}
                  <div className="p-4 flex justify-between items-start">
                    <div className="flex gap-3">
                      <img 
                        src={post.avatar} 
                        alt={post.author} 
                        className="w-10 h-10 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">{post.author}</h4>
                        <p className="text-xs text-slate-400">{post.time}</p>
                      </div>
                    </div>
                    <button className="text-slate-400 hover:bg-slate-100 p-1 rounded-full transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Post Content */}
                  <div className="px-4 pb-2">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{post.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.content}</p>
                    <div className="flex gap-2 mb-3">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-xs font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Comparison Images */}
                  <div className="relative h-64 sm:h-80 bg-slate-100 grid grid-cols-2 gap-0.5 border-t border-b border-slate-100">
                    <div className="relative group overflow-hidden">
                      <img 
                        src={post.modelImage} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        alt="3D Model"
                        loading="lazy"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                        3D 模型
                      </span>
                    </div>
                    <div className="relative group overflow-hidden">
                      <img 
                        src={post.realImage} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        alt="Real Object"
                        loading="lazy"
                      />
                      <span className="absolute bottom-2 left-2 bg-blue-600/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                        实物成品
                      </span>
                    </div>
                    {/* Center Badge */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-lg z-10">
                      <div className="bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-full">VS</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-3 flex justify-between items-center">
                    <div className="flex gap-6">
                      <button className="flex items-center gap-1.5 text-slate-500 hover:text-red-500 transition-colors">
                        <ThumbsUp className="w-5 h-5"/>
                        <span className="text-sm font-medium">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-slate-500 hover:text-blue-500 transition-colors">
                        <MessageSquare className="w-5 h-5"/>
                        <span className="text-sm font-medium">{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-slate-500 hover:text-green-500 transition-colors">
                        <Share2 className="w-5 h-5"/>
                        <span className="text-sm font-medium">{post.shares}</span>
                      </button>
                    </div>
                    <button className="text-slate-400 hover:text-yellow-500 transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-80 hidden md:block space-y-6">
            {/* Hot Topics */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                <Flame className="w-4 h-4 text-orange-500 mr-2"/> 热门话题
              </h3>
              <div className="flex flex-wrap gap-2">
                {['#树脂涂装大赛', '#FDM 打印技巧', '#AI 辅助建模', '#机甲拼装'].map(topic => (
                  <span 
                    key={topic} 
                    className="bg-slate-50 hover:bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm cursor-pointer transition-colors"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Recommended Users */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-slate-800 mb-4">推荐关注</h3>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                      <div>
                        <p className="text-sm font-bold text-slate-700">ArtMaster_{i}</p>
                        <p className="text-xs text-slate-400">3D 艺术家</p>
                      </div>
                    </div>
                    <button className="text-blue-600 text-xs font-bold border border-blue-200 px-3 py-1 rounded-full hover:bg-blue-50 transition-colors">
                      + 关注
                    </button>
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

export default CommunitySection;
