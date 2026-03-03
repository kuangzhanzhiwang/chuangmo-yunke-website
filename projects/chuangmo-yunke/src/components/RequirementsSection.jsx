import React, { useState } from 'react';
import { Banknote, User, Clock, MessageSquare, Search, Star } from 'lucide-react';
import { MOCK_REQUIREMENTS } from '../data/mockData';

const RequirementsSection = () => {
  const [filterTag, setFilterTag] = useState('全部');
  
  const tags = ['全部', '游戏角色', '3D 打印', '工业设计', '扫描修复'];
  const sortedRequirements = [...MOCK_REQUIREMENTS].sort((a, b) => b.budget - a.budget);

  const bountyLeaderboard = [
    { rank: 1, name: "CorpManager", total: "¥12,500", tasks: 3 },
    { rank: 2, name: "IndieDev_01", total: "¥8,000", tasks: 2 },
    { rank: 3, name: "CarLover", total: "¥3,000", tasks: 1 },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 mb-8 text-white flex flex-col md:flex-row justify-between items-center shadow-lg">
          <div>
            <h2 className="text-3xl font-bold mb-2">需求悬赏大厅</h2>
            <p className="text-indigo-100 opacity-90">找不到满意的模型？发布悬赏，让数万创作者为您定制。</p>
          </div>
          <button className="mt-4 md:mt-0 bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold shadow-md hover:bg-indigo-50 transition-transform transform hover:scale-105 flex items-center">
            <Banknote className="w-5 h-5 mr-2" />
            发布新需求
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main List */}
          <div className="flex-1">
            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex gap-2 text-sm font-medium overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                {tags.map(tag => (
                  <button 
                    key={tag} 
                    onClick={() => setFilterTag(tag)}
                    className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                      filterTag === tag 
                        ? 'bg-indigo-100 text-indigo-700' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="relative w-full sm:w-64">
                <input 
                  type="text" 
                  placeholder="搜索 Tag 或关键词..." 
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500" 
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Requirements List */}
            <div className="space-y-4">
              {sortedRequirements.map(req => (
                <div 
                  key={req.id} 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col sm:flex-row gap-4 cursor-pointer"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {req.status === 'urgent' && (
                        <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded font-bold">急</span>
                      )}
                      <h3 className="text-lg font-bold text-slate-800 hover:text-indigo-600 transition-colors">
                        {req.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {req.tags.map(tag => (
                        <span key={tag} className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded">#{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-slate-400 gap-4">
                      <span className="flex items-center">
                        <User className="w-3 h-3 mr-1"/> {req.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1"/> {req.time}
                      </span>
                      <span className="flex items-center">
                        <MessageSquare className="w-3 h-3 mr-1"/> {req.comments}回复
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-between items-center sm:items-end border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0 sm:pl-6 min-w-[140px]">
                    <div className="text-right">
                      <p className="text-xs text-slate-400 mb-1">悬赏金额</p>
                      <p className="text-2xl font-bold text-amber-500">¥{req.budget}</p>
                    </div>
                    <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors mt-2">
                      查看详情
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                <Star className="w-5 h-5 text-amber-400 mr-2" />
                悬赏金主榜
              </h3>
              <ul className="space-y-4">
                {bountyLeaderboard.map((user, idx) => (
                  <li key={idx} className="flex justify-between items-center text-sm cursor-pointer hover:bg-slate-50 -mx-2 px-2 py-1 rounded transition-colors">
                    <div className="flex items-center">
                      <span className={`w-5 h-5 flex items-center justify-center rounded text-xs mr-2 font-bold ${
                        idx === 0 ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {user.rank}
                      </span>
                      <span className="text-slate-700">{user.name}</span>
                    </div>
                    <span className="font-bold text-slate-800">{user.total}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-2">如何发布需求？</h4>
              <ul className="text-sm text-blue-700 space-y-2 list-disc list-inside">
                <li>描述您的具体需求</li>
                <li>上传参考图或草图 (支持 AI 辅助)</li>
                <li>设置合理的悬赏金额</li>
                <li>等待创作者接单或提交方案</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementsSection;
