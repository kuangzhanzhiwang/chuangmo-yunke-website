import React, { useState } from 'react';
import { Search, Heart, MessageSquare, Bookmark, User, ShoppingCart, TrendingUp, ChevronRight } from 'lucide-react';
import { MOCK_MODELS, LEADERBOARD_DATA } from '../data/mockData';

const ModelCard = ({ model }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={model.image} 
        alt={model.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-bold">
        {model.price}
      </div>
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-slate-800 truncate pr-2">{model.title}</h3>
        <button className="text-slate-400 hover:text-blue-500">
          <Bookmark className="h-5 w-5" />
        </button>
      </div>
      <div className="flex items-center text-sm text-slate-500 mb-3">
        <User className="h-3 w-3 mr-1" />
        {model.author}
      </div>
      <div className="flex flex-wrap gap-1 mb-4">
        {model.tags.map(tag => (
          <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs rounded-full">#{tag}</span>
        ))}
      </div>
      <div className="border-t pt-3 flex items-center justify-between text-slate-500 text-sm">
        <div className="flex gap-4">
          <button className="flex items-center hover:text-pink-500 transition-colors">
            <Heart className="h-4 w-4 mr-1" />
            {model.likes}
          </button>
          <button className="flex items-center hover:text-blue-500 transition-colors">
            <MessageSquare className="h-4 w-4 mr-1" />
            {model.comments}
          </button>
        </div>
        <button className="text-blue-600 hover:bg-blue-50 p-1 rounded transition-colors">
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
);

const TradingSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('全部');
  
  const filters = ['全部', '最新', '热门', '免费', '机甲', '角色'];

  const filteredModels = MOCK_MODELS.filter(model => {
    const matchesSearch = model.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         model.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === '全部' || model.tags.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-8 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Search & Filters */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="搜索模型关键字..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                {filters.map(tag => (
                  <button 
                    key={tag} 
                    onClick={() => setActiveFilter(tag)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                      activeFilter === tag 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Model Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredModels.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>

            {filteredModels.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-500 text-lg">未找到匹配的模型</p>
              </div>
            )}
          </div>

          {/* Sidebar - Leaderboard */}
          <div className="w-full lg:w-80">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-slate-800 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-red-500" />
                  创作者榜单
                </h3>
                <span className="text-xs text-slate-400">本周</span>
              </div>
              <ul className="space-y-4">
                {LEADERBOARD_DATA.map((user) => (
                  <li key={user.rank} className="flex items-center cursor-pointer hover:bg-slate-50 -mx-2 px-2 py-1 rounded transition-colors">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3 ${
                      user.rank === 1 ? 'bg-yellow-100 text-yellow-600' :
                      user.rank === 2 ? 'bg-gray-100 text-gray-600' :
                      user.rank === 3 ? 'bg-orange-50 text-orange-600' :
                      'bg-slate-50 text-slate-400'
                    }`}>
                      {user.rank}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-800 text-sm">{user.name}</p>
                      <p className="text-xs text-slate-400">成交额：{user.sales}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-300" />
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 py-2 text-sm text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                查看完整榜单
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingSection;
