import React from 'react';
import { Shield, FileText, Lock, AlertTriangle, CheckCircle } from 'lucide-react';

const CopyrightPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            版权保护机制
          </h1>
          <p className="text-lg text-slate-600">
            全方位保护您的原创权益
          </p>
        </div>

        {/* Protection Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {
              icon: <FileText className="w-8 h-8 text-blue-600" />,
              title: '原创认证',
              desc: '区块链存证技术，为每个作品生成唯一数字指纹，永久记录创作时间和作者信息。',
              features: ['时间戳认证', '区块链存证', '不可篡改', '法律效力'],
            },
            {
              icon: <Lock className="w-8 h-8 text-emerald-600" />,
              title: '侵权防护',
              desc: '智能监测系统 7×24 小时扫描，发现疑似侵权自动预警，快速响应处理。',
              features: ['自动监测', '智能识别', '快速下架', '证据保全'],
            },
            {
              icon: <AlertTriangle className="w-8 h-8 text-orange-600" />,
              title: '维权支持',
              desc: '专业法务团队提供维权咨询，协助发送律师函，支持诉讼维权。',
              features: ['法律咨询', '律师函支持', '诉讼协助', '赔偿追讨'],
            },
            {
              icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
              title: '授权管理',
              desc: '灵活的授权体系，支持个人/商业/独家等多种授权类型，收益自动分配。',
              features: ['多种授权', '智能合约', '自动分账', '授权追踪'],
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-slate-50 rounded-lg mr-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              </div>
              <p className="text-slate-600 mb-4">{item.desc}</p>
              <ul className="space-y-2">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            侵权处理流程
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: 1, title: '发现侵权', desc: '用户举报或系统监测' },
              { step: 2, title: '提交申诉', desc: '在线填写侵权申诉表' },
              { step: 3, title: '平台审核', desc: '24 小时内完成初审' },
              { step: 4, title: '处理下架', desc: '确认侵权立即下架' },
              { step: 5, title: '维权跟进', desc: '协助后续法律维权' },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                <div className="text-sm text-slate-500">{item.desc}</div>
                {item.step < 5 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">需要帮助？</h2>
          <p className="text-white/90 mb-6">
            如发现侵权行为或有版权相关问题，请随时联系我们
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-slate-100 transition-colors">
              提交侵权申诉
            </button>
            <button className="px-8 py-3 bg-white/20 text-white rounded-lg font-bold hover:bg-white/30 transition-colors">
              联系版权顾问
            </button>
          </div>
          <div className="mt-6 text-sm text-white/80">
            版权邮箱：copyright@chuangmoyunke.com | 服务热线：400-888-9999
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightPage;
