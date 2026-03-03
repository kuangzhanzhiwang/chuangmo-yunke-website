import React, { useState } from 'react';
import { X, CreditCard, Smartphone, Building } from 'lucide-react';

/**
 * 支付弹窗组件
 * 支持多种支付方式
 */
const PaymentModal = ({ 
  isOpen, 
  onClose, 
  amount, 
  title = '订单支付',
  description,
  onSuccess,
  onCancel
}) => {
  const [selectedMethod, setSelectedMethod] = useState('alipay');
  const [processing, setProcessing] = useState(false);

  const paymentMethods = [
    {
      id: 'alipay',
      name: '支付宝',
      icon: Smartphone,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'wechat',
      name: '微信支付',
      icon: Smartphone,
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 'card',
      name: '银行卡',
      icon: CreditCard,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'company',
      name: '对公转账',
      icon: Building,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    }
  ];

  const handlePay = async () => {
    setProcessing(true);
    
    // 模拟支付流程
    setTimeout(() => {
      setProcessing(false);
      onSuccess?.({
        method: selectedMethod,
        amount,
        timestamp: new Date().toISOString(),
        orderId: `ORD${Date.now()}`
      });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 animate-fade-in-up relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-slate-800 mb-2">{title}</h2>
        {description && (
          <p className="text-slate-600 text-sm mb-6">{description}</p>
        )}

        {/* 金额显示 */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 mb-6 text-white">
          <p className="text-sm opacity-90 mb-1">支付金额</p>
          <p className="text-4xl font-bold">¥{amount}</p>
        </div>

        {/* 支付方式选择 */}
        <div className="mb-6">
          <h3 className="font-bold text-slate-800 mb-3">选择支付方式</h3>
          <div className="grid grid-cols-2 gap-3">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedMethod === method.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`${method.color} mb-2`}>
                  <method.icon className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-slate-700">{method.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* 安全提示 */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
          <p className="text-sm text-green-700 flex items-center gap-2">
            <span className="text-lg">🔒</span>
            安全加密支付，请放心使用
          </p>
        </div>

        {/* 操作按钮 */}
        <div className="flex gap-3">
          <button
            onClick={onCancel || onClose}
            disabled={processing}
            className="flex-1 px-4 py-3 border border-slate-200 text-slate-600 rounded-lg font-medium hover:bg-slate-50 transition-colors disabled:opacity-50"
          >
            取消
          </button>
          <button
            onClick={handlePay}
            disabled={processing}
            className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {processing ? '支付中...' : `立即支付 ¥${amount}`}
          </button>
        </div>

        {/* 支付说明 */}
        <p className="text-xs text-slate-400 text-center mt-4">
          点击"立即支付"即表示您同意我们的服务条款和隐私政策
        </p>
      </div>
    </div>
  );
};

/**
 * 支付成功弹窗
 */
export const PaymentSuccessModal = ({ isOpen, onClose, orderInfo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-md p-8 text-center animate-fade-in-up">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-slate-800 mb-2">支付成功！</h2>
        <p className="text-slate-600 mb-6">感谢您的购买</p>

        {orderInfo && (
          <div className="bg-slate-50 rounded-lg p-4 mb-6 text-left">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-500">订单号</span>
              <span className="text-sm font-medium text-slate-700">{orderInfo.orderId}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-500">支付金额</span>
              <span className="text-sm font-medium text-slate-700">¥{orderInfo.amount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-500">支付时间</span>
              <span className="text-sm font-medium text-slate-700">
                {new Date(orderInfo.timestamp).toLocaleString('zh-CN')}
              </span>
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
        >
          完成
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
