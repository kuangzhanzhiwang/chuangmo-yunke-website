import React from 'react';
import { Activity, ShoppingCart, Banknote, Users, Calculator, Menu, X } from 'lucide-react';

const iconMap = { Activity, ShoppingCart, Banknote, Users, Calculator };

const Navbar = ({ 
  activeTab, 
  setActiveTab, 
  onLoginClick, 
  onPricingClick, 
  onGuideClick, 
  onCopyrightClick,
  onAboutClick,
  onHomeClick,
  mobileMenuOpen, 
  setMobileMenuOpen 
}) => {
  const navItems = [
    { id: 'generate', label: 'AI 生成', icon: Activity },
    { id: 'trading', label: '模型交易', icon: ShoppingCart },
    { id: 'requirements', label: '需求大厅', icon: Banknote },
    { id: 'community', label: '社区讨论', icon: Users },
    { id: 'suppliers', label: '供应商', icon: Calculator }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* LOGO */}
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer mr-6" 
              onClick={() => setActiveTab('generate')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center text-white font-bold mr-3 shadow-lg">
                CM
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-slate-800 tracking-tight">创模云科</h1>
                <p className="text-xs text-slate-500 tracking-wider">CREATION MODEL</p>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`${
                    activeTab === item.id 
                      ? 'border-blue-500 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  } flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onGuideClick}
              className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              title="AI 生成指南"
            >
              📚 教程
            </button>
            <button
              onClick={onPricingClick}
              className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              title="会员套餐"
            >
              💎 会员
            </button>
            <button
              onClick={onLoginClick}
              className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              登录
            </button>
            <button
              onClick={onLoginClick}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-all transform hover:scale-105"
            >
              注册
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700 p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 py-4">
          <div className="flex flex-col space-y-2 px-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`${
                  activeTab === item.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                } flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-2">
              <button
                onClick={onLoginClick}
                className="text-gray-600 hover:bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left"
              >
                登录
              </button>
              <button
                onClick={onLoginClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                注册
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
