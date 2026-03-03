import React from 'react';
import { Star, CheckCircle, Users, Box, TrendingUp, Shield } from 'lucide-react';
import { USER_REVIEWS, PLATFORM_STATS } from '../data/mockData';

const ReviewsSection = () => {
  return (
    <div className="bg-white py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            用户怎么说
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            来自 10,000+ 创作者的真实评价
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          <div className="text-center p-4 bg-slate-50 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-blue-600">{PLATFORM_STATS.modelsGenerated}</div>
            <div className="text-sm text-slate-600 mt-1">生成模型</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-blue-600">{PLATFORM_STATS.activeUsers}</div>
            <div className="text-sm text-slate-600 mt-1">活跃用户</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-blue-600">{PLATFORM_STATS.modelsTraded}</div>
            <div className="text-sm text-slate-600 mt-1">交易模型</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-blue-600">{PLATFORM_STATS.totalTransactions}</div>
            <div className="text-sm text-slate-600 mt-1">交易总额</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-blue-600">{PLATFORM_STATS.creators}</div>
            <div className="text-sm text-slate-600 mt-1">创作者</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-blue-600">{PLATFORM_STATS.suppliers}</div>
            <div className="text-sm text-slate-600 mt-1">供应商</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USER_REVIEWS.map((review) => (
            <div key={review.id} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img src={review.avatar} alt={review.user} className="w-12 h-12 rounded-full object-cover" />
                <div className="ml-4 flex-1">
                  <div className="font-semibold text-slate-900">{review.user}</div>
                  <div className="text-sm text-slate-500">{review.time}</div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
                  ))}
                </div>
              </div>
              <p className="text-slate-700 mb-3">{review.content}</p>
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                <CheckCircle className="w-3 h-3 mr-1" />
                {review.project}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center justify-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
            <Shield className="w-12 h-12 text-blue-600 mr-4" />
            <div>
              <div className="font-bold text-slate-900">平台担保</div>
              <div className="text-sm text-slate-600">交易安全无忧</div>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl">
            <Users className="w-12 h-12 text-emerald-600 mr-4" />
            <div>
              <div className="font-bold text-slate-900">专业社区</div>
              <div className="text-sm text-slate-600">10,000+ 创作者</div>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
            <TrendingUp className="w-12 h-12 text-purple-600 mr-4" />
            <div>
              <div className="font-bold text-slate-900">品质保证</div>
              <div className="text-sm text-slate-600">严格审核机制</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
