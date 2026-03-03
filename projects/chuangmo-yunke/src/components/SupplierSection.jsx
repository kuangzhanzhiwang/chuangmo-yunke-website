import React, { useState } from 'react';
import { Activity, Star, Clock, CheckCircle, Calculator, X, Upload } from 'lucide-react';
import { MOCK_SUPPLIERS } from '../data/mockData';

const SupplierSection = () => {
  const [sortType, setSortType] = useState('sales');
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const handleEstimate = (supplier) => {
    setSelectedSupplier(supplier);
    setIsEstimateModalOpen(true);
  };

  const sortedSuppliers = [...MOCK_SUPPLIERS].sort((a, b) => {
    if (sortType === 'sales') return b.sales - a.sales;
    if (sortType === 'rating') return b.rating - a.rating;
    if (sortType === 'price') return a.avgPrice - b.avgPrice;
    return 0;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-8 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Sort */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">优质供应商</h2>
            <p className="text-slate-500 mt-1">连接线下工厂，实现一站式制造交付</p>
          </div>
          <div className="bg-white p-1 rounded-lg border flex shadow-sm">
            <button 
              onClick={() => setSortType('sales')} 
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                sortType === 'sales' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              月成交量
            </button>
            <button 
              onClick={() => setSortType('rating')} 
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                sortType === 'rating' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              好评优先
            </button>
            <button 
              onClick={() => setSortType('price')} 
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                sortType === 'price' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              价格 (低到高)
            </button>
          </div>
        </div>

        {/* List */}
        <div className="space-y-4">
          {sortedSuppliers.map((supplier) => (
            <div 
              key={supplier.id} 
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:border-blue-300 transition-colors flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <Activity className="h-8 w-8" />
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                <div className="col-span-2 md:col-span-1">
                  <h3 className="font-bold text-lg text-slate-800">{supplier.name}</h3>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">
                    {supplier.specialty}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-slate-400">月成交量</p>
                  <p className="font-mono font-bold text-slate-700">{supplier.sales.toLocaleString()}+</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">综合评分</p>
                  <div className="flex items-center text-yellow-500 font-bold">
                    <Star className="h-4 w-4 fill-current mr-1" />
                    {supplier.rating}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-400">平均报价</p>
                  <p className="font-mono font-bold text-slate-700">¥{supplier.avgPrice}起</p>
                </div>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <button 
                  onClick={() => handleEstimate(supplier)}
                  className="flex-1 md:flex-none px-4 py-2 bg-slate-900 text-white rounded-lg text-sm hover:bg-slate-800 transition-colors flex items-center justify-center"
                >
                  <Calculator className="h-4 w-4 mr-2" />
                  估价/工期
                </button>
                <button className="flex-1 md:flex-none px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-sm hover:bg-slate-50 transition-colors">
                  售后咨询
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Estimate Modal */}
      {isEstimateModalOpen && selectedSupplier && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 animate-fade-in-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-800">快速估价 - {selectedSupplier.name}</h3>
              <button 
                onClick={() => setIsEstimateModalOpen(false)} 
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">模型文件上传 (STL/OBJ)</label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center text-slate-500 bg-slate-50 hover:border-blue-400 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-slate-400" />
                  <span className="text-sm">点击选择文件</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">材质</label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm border p-2 text-sm">
                    <option>PLA (通用塑料)</option>
                    <option>ABS (工程塑料)</option>
                    <option>光敏树脂</option>
                    <option>尼龙</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">填充率</label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm border p-2 text-sm">
                    <option>20%</option>
                    <option>50%</option>
                    <option>100% (实心)</option>
                  </select>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-600 flex items-center">
                    <Clock className="h-4 w-4 mr-1"/> 预计工期
                  </span>
                  <span className="font-bold text-slate-800">{selectedSupplier.deliveryTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1"/> 预估报价
                  </span>
                  <span className="font-bold text-blue-600 text-lg">待计算...</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                提交询价请求
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupplierSection;
