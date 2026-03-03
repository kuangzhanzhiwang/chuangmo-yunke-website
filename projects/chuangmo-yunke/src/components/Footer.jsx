import React from 'react';

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-white text-lg font-bold mb-4">创模云科</h2>
          <p className="text-sm">致力于打造全球领先的 3D 模型生成与供应链平台。让创意落地，让制造简单。</p>
        </div>
        <div>
          <h3 className="text-white font-medium mb-4">平台服务</h3>
          <ul className="space-y-2 text-sm">
            <li>AI 模型生成</li>
            <li>3D 资产交易</li>
            <li>需求悬赏大厅</li>
            <li>社区与论坛</li>
            <li>供应链制造</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-medium mb-4">支持与帮助</h3>
          <ul className="space-y-2 text-sm">
            <li>帮助中心</li>
            <li>版权说明</li>
            <li>供应商入驻</li>
            <li>API 文档</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-medium mb-4">联系我们</h3>
          <p className="text-sm mb-2">Email: contact@chuangmoyunke.com</p>
          <p className="text-sm">Tel: 400-888-9999</p>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 text-center text-xs">
        <p>&copy; 2024 创模云科 (Creation Model Cloud Tech). All rights reserved.</p>
        <p className="mt-2 text-slate-500">京 ICP 备 12345678 号 -1 | 京公网安备 11000002000088 号</p>
      </div>
    </div>
  </footer>
);

export default Footer;
