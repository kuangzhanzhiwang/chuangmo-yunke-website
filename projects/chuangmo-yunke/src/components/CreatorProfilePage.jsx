import React, { useState } from 'react';
import { User, Mail, MapPin, Link as LinkIcon, Star, Heart, ShoppingCart, Grid, List, CheckCircle } from 'lucide-react';
import { MOCK_MODELS, LEADERBOARD_DATA } from '../data/mockData';

const CreatorProfilePage = () => {
  const [activeTab, setActiveTab] = useState('works');
  const [isFollowing, setIsFollowing] = useState(false);

  const creator = {
    name: 'MechMaster',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: '专注科幻机甲设计 5 年，擅长硬表面建模和细节刻画。作品已应用于多款独立游戏和商业项目。',
    location: '中国·上海',
    website: 'mechmaster.design',
    joined: '2024 年 3 月',
    stats: {
      models: 45,
      followers: 12500,
      following: 234,
      sales: '¥58,200',
      rating: 4.9,
    }
  };

  const creatorModels = MOCK_MODELS.filter(m => m.author === creator.name);

  return (
    <div className="bg-slate-50 min-h-screen animate-fade-in">
      {/* Cover & Header */}
      <div className="relative">
        <div className="h-48 md:h-64 bg-gradient-to-r from-blue-600 to-emerald-600" />
        <div className="absolute -bottom-16 left-4 md:left-8">
          <img 
            src={creator.avatar} 
            alt={creator.name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-20 pb-8">
        {/* Profile Info */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">{creator.name}</h1>
              <p className="text-slate-600 max-w-2xl">{creator.bio}</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                私信
              </button>
              <button className="flex items-center px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                <LinkIcon className="w-5 h-5 mr-2" />
                约稿
              </button>
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  isFollowing
                    ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isFollowing ? '已关注' : '关注'}
              </button>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-600">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {creator.location}
            </div>
            <div className="flex items-center">
              <LinkIcon className="w-4 h-4 mr-1" />
              {creator.website}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              加入于 {creator.joined}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-6 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">{creator.stats.models}</div>
              <div className="text-sm text-slate-500">作品</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">{creator.stats.followers.toLocaleString()}</div>
              <div className="text-sm text-slate-500">粉丝</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">{creator.stats.following}</div>
              <div className="text-sm text-slate-500">关注</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">{creator.stats.sales}</div>
              <div className="text-sm text-slate-500">成交额</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1" />
                <span className="text-2xl font-bold text-slate-900">{creator.stats.rating}</span>
              </div>
              <div className="text-sm text-slate-500">评分</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
          <div className="flex border-b">
            {[
              { id: 'works', label: '全部作品', count: creator.stats.models },
              { id: 'popular', label: '热门作品', count: 12 },
              { id: 'free', label: '免费作品', count: 5 },
              { id: 'reviews', label: '用户评价', count: 128 },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-4 py-4 text-center font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
                <span className="ml-2 text-sm text-slate-400">({tab.count})</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'works' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {creatorModels.map(model => (
                  <div key={model.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                    <img src={model.image} alt={model.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-bold text-slate-900 truncate mb-2">{model.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-bold">{model.price}</span>
                        <div className="flex items-center text-sm text-slate-500">
                          <Heart className="w-4 h-4 mr-1" />
                          {model.likes}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="border-b pb-4 last:border-0">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 flex items-center justify-center text-white font-bold mr-3">
                        U{i}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">用户{i * 100}</div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-slate-500">2026-02-{28 - i}</div>
                    </div>
                    <p className="text-slate-700">
                      模型质量非常高，细节处理到位，直接用到项目里了。作者回复也很及时，推荐！
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfilePage;
