import React, { useState } from 'react';
import { Check, Star, Crown, Zap, Download, Shield, Headphones } from 'lucide-react';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: '免费版',
      price: 0,
      period: '永久',
      icon: <Star className="w-8 h-8 text-slate-400" />,
      features: [
        { text: '每日 3 次 AI 生成', included: true },
        { text: '标准分辨率下载', included: true },
        { text: '个人使用授权', included: true },
        { text: '社区访问', included: true },
        { text: '高清模型下载', included: false },
        { text: '商业使用授权', included: false },
        { text: '批量下载', included: false },
        { text: '优先客服支持', included: false },
      ],
      cta: '开始使用',
      popular: false,
    },
    {
      name: '专业版',
      price: isAnnual ? 83 : 99,
      period: '月',
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      features: [
        { text: '每日 3 次 AI 生成', included: true },
        { text: '标准分辨率下载', included: true },
        { text: '个人使用授权', included: true },
        { text: '社区访问', included: true },
        { text: '高清模型下载', included: true },
        { text: '商业使用授权', included: true },
        { text: '批量下载 (10 个/次)', included: true },
        { text: '优先客服支持', included: true },
        { text: '专属 9 折优惠', included: true },
        { text: '无广告体验', included: true },
      ],
      cta: '免费试用 7 天',
      popular: true,
    },
    {
      name: '企业版',
      price: isAnnual ? 166 : 199,
      period: '月',
      icon: <Crown className="w-8 h-8 text-purple-500" />,
      features: [
        { text: '无限次 AI 生成', included: true },
        { text: '4K 超清下载', included: true },
        { text: '商业使用授权', included: true },
        { text: '社区访问', included: true },
        { text: '高清模型下载', included: true },
        { text: '批量下载 (无限)', included: true },
        { text: '专属客服支持', included: true },
        { text: '专属 8 折优惠', included: true },
        { text: 'API 访问权限', included: true },
        { text: '定制化服务', included: true },
        { text: '团队协作功能', included: true },
      ],
      cta: '联系销售',
      popular: false,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            选择适合你的方案
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            灵活定价，满足不同需求
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>月付</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="mx-3 relative w-14 h-8 bg-slate-600 rounded-full transition-colors focus:outline-none"
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  isAnnual ? 'left-7' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              年付 <span className="text-emerald-400 font-medium ml-1">省 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl overflow-hidden ${
                plan.popular ? 'ring-4 ring-blue-500 scale-105 shadow-2xl' : 'shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-blue-500 to-emerald-500 text-white text-center py-2 text-sm font-bold">
                  ⭐ 最受欢迎
                </div>
              )}
              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-slate-100 rounded-xl mr-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-slate-900">¥{plan.price}</span>
                    <span className="text-slate-500 ml-2">/{plan.period}</span>
                  </div>
                  {isAnnual && plan.price > 0 && (
                    <div className="text-sm text-emerald-600 mt-1">
                      年付仅需 ¥{plan.price * 12}（省¥{plan.price * 12 * 0.2}）
                    </div>
                  )}
                </div>
                <button
                  className={`w-full py-3 rounded-lg font-bold mb-6 transition-colors ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:from-blue-700 hover:to-emerald-700'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check
                        className={`w-5 h-5 mr-3 flex-shrink-0 ${
                          feature.included ? 'text-emerald-500' : 'text-slate-300'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          feature.included ? 'text-slate-700' : 'text-slate-400 line-through'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">功能对比详情</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">功能</th>
                  <th className="text-center py-3 px-4 text-slate-600 font-medium">免费版</th>
                  <th className="text-center py-3 px-4 text-blue-600 font-medium">专业版</th>
                  <th className="text-center py-3 px-4 text-purple-600 font-medium">企业版</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['AI 生成次数', '3 次/天', '无限次', '无限次'],
                  ['模型下载分辨率', '标准', '高清 (2K)', '超清 (4K)'],
                  ['使用授权', '个人', '商业', '商业'],
                  ['批量下载', '❌', '10 个/次', '无限'],
                  ['客服支持', '社区', '优先', '专属'],
                  ['商城折扣', '无', '9 折', '8 折'],
                  ['API 访问', '❌', '❌', '✅'],
                  ['定制服务', '❌', '❌', '✅'],
                  ['团队协作', '❌', '❌', '✅'],
                ].map((row, idx) => (
                  <tr key={idx} className="border-b hover:bg-slate-50">
                    <td className="py-3 px-4 text-slate-900 font-medium">{row[0]}</td>
                    <td className="py-3 px-4 text-center text-slate-600">{row[1]}</td>
                    <td className="py-3 px-4 text-center text-slate-900 font-medium">{row[2]}</td>
                    <td className="py-3 px-4 text-center text-slate-900 font-medium">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
            <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-2">安全支付</h3>
            <p className="text-slate-300 text-sm">支持支付宝、微信、银行卡</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
            <Download className="w-12 h-12 text-blue-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-2">随时取消</h3>
            <p className="text-slate-300 text-sm">不满意可随时取消订阅</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
            <Headphones className="w-12 h-12 text-purple-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-2">7×24 客服</h3>
            <p className="text-slate-300 text-sm">专业团队在线支持</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">常见问题</h2>
          <p className="text-slate-300 mb-8">
            订阅后不支持退款，但可随时取消下周期续费
          </p>
          <button className="px-8 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-colors">
            查看更多 FAQ
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
