import React from 'react';
import { Target, Zap, Award, Users, Shield, Globe } from 'lucide-react';
import { PLATFORM_STATS } from '../data/mockData';

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            关于创模云科
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            全球领先的 3D 模型生成与供应链平台，让创意触手可及
          </p>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-slate-800/50 rounded-2xl backdrop-blur">
            <Target className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">我们的使命</h3>
            <p className="text-slate-400">
              降低 3D 创作门槛，让每个人都能轻松将创意转化为 3D 现实
            </p>
          </div>
          <div className="text-center p-8 bg-slate-800/50 rounded-2xl backdrop-blur">
            <Zap className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">我们的愿景</h3>
            <p className="text-slate-400">
              成为全球最大的 3D 内容生态平台，连接创作者、消费者和制造商
            </p>
          </div>
          <div className="text-center p-8 bg-slate-800/50 rounded-2xl backdrop-blur">
            <Award className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">我们的优势</h3>
            <p className="text-slate-400">
              AI 驱动 + 专业社区 + 完整供应链，一站式 3D 解决方案
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-slate-800/50 rounded-2xl p-8 mb-16 backdrop-blur">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{PLATFORM_STATS.modelsGenerated}</div>
              <div className="text-slate-400">AI 生成模型</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{PLATFORM_STATS.activeUsers}</div>
              <div className="text-slate-400">活跃用户</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{PLATFORM_STATS.modelsTraded}</div>
              <div className="text-slate-400">交易模型</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">{PLATFORM_STATS.totalTransactions}</div>
              <div className="text-slate-400">交易总额</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{PLATFORM_STATS.creators}</div>
              <div className="text-slate-400">创作者</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{PLATFORM_STATS.suppliers}</div>
              <div className="text-slate-400">供应商</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="flex items-start p-6 bg-slate-800/50 rounded-xl">
            <Users className="w-8 h-8 text-blue-400 mr-4 flex-shrink-0" />
            <div>
              <h4 className="font-bold mb-2">专业社区</h4>
              <p className="text-slate-400 text-sm">汇聚全球优秀 3D 创作者，分享作品、交流经验、共同成长</p>
            </div>
          </div>
          <div className="flex items-start p-6 bg-slate-800/50 rounded-xl">
            <Shield className="w-8 h-8 text-emerald-400 mr-4 flex-shrink-0" />
            <div>
              <h4 className="font-bold mb-2">平台担保</h4>
              <p className="text-slate-400 text-sm">交易全流程担保，版权保护机制，让您放心创作、安心交易</p>
            </div>
          </div>
          <div className="flex items-start p-6 bg-slate-800/50 rounded-xl">
            <Globe className="w-8 h-8 text-purple-400 mr-4 flex-shrink-0" />
            <div>
              <h4 className="font-bold mb-2">全球服务</h4>
              <p className="text-slate-400 text-sm">支持中英文双语，服务全球用户，7×24 小时在线客服</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">核心团队</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: '张明', role: '创始人 & CEO', desc: '前腾讯 AI  Lab 负责人' },
              { name: '李华', role: 'CTO', desc: '10 年 3D 引擎开发经验' },
              { name: '王芳', role: '设计总监', desc: '知名游戏美术指导' },
              { name: '陈伟', role: '运营总监', desc: '前阿里巴巴运营专家' },
            ].map((member, i) => (
              <div key={i} className="p-6 bg-slate-800/50 rounded-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  {member.name[0]}
                </div>
                <div className="font-bold text-lg">{member.name}</div>
                <div className="text-blue-400 text-sm mb-2">{member.role}</div>
                <div className="text-slate-400 text-sm">{member.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
