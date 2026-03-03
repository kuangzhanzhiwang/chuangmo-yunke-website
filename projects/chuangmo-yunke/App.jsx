import React, { useState, useEffect } from 'react';
import { Upload, Search, Heart, MessageSquare, Bookmark, Star, User, ShoppingCart, Activity, Calendar, Calculator, Bot, Menu, X, ArrowRight, TrendingUp, Filter, CheckCircle, Clock, ChevronRight, Banknote, Users, Flame, ThumbsUp, Share2, MoreHorizontal, Image as ImageIcon } from 'lucide-react';

// --- 1. MOCK DATA (模拟数据) ---
const MOCK_MODELS = [
  { id: 1, title: "赛博朋克义体手臂", author: "MechMaster", image: "https://images.unsplash.com/photo-1615840287214-7ff58ee0489b?auto=format&fit=crop&q=80&w=600", price: "¥199", likes: 1204, comments: 45, tags: ["科幻", "机械", "OBJ"] },
  { id: 2, title: "低多边形森林场景", author: "LowPolyArt", image: "https://images.unsplash.com/photo-1621360841013-c768371e93cf?auto=format&fit=crop&q=80&w=600", price: "¥50", likes: 856, comments: 23, tags: ["环境", "游戏资产", "FBX"] },
  { id: 3, title: "超写实古董怀表", author: "RetroViz", image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80&w=600", price: "¥299", likes: 2100, comments: 102, tags: ["静物", "高精度", "Blend"] },
  { id: 4, title: "未来战士头盔", author: "FutureDesign", image: "https://images.unsplash.com/photo-1535378437327-109726b23d53?auto=format&fit=crop&q=80&w=600", price: "¥150", likes: 980, comments: 56, tags: ["角色", "科幻", "STL"] },
  { id: 5, title: "卡通风格小怪兽", author: "ToonWorld", image: "https://images.unsplash.com/photo-1596727147705-54a9d094368c?auto=format&fit=crop&q=80&w=600", price: "¥88", likes: 1543, comments: 89, tags: ["卡通", "IP 设计", "Maya"] },
  { id: 6, title: "现代极简沙发", author: "ArchVizPro", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600", price: "¥120", likes: 670, comments: 12, tags: ["家具", "室内设计", "3dsMax"] },
];

const MOCK_SUPPLIERS = [
  { id: 1, name: "精工智造工厂", sales: 12500, rating: 4.9, avgPrice: 500, specialty: "高精度打印", deliveryTime: "3-5 天" },
  { id: 2, name: "极速 3D 打印中心", sales: 8900, rating: 4.7, avgPrice: 300, specialty: "快速原型", deliveryTime: "1-2 天" },
  { id: 3, name: "创模工坊", sales: 5600, rating: 4.8, avgPrice: 800, specialty: "树脂工艺", deliveryTime: "5-7 天" },
  { id: 4, name: "未来制造局", sales: 15000, rating: 4.6, avgPrice: 450, specialty: "批量生产", deliveryTime: "4-6 天" },
  { id: 5, name: "匠心模型社", sales: 3200, rating: 5.0, avgPrice: 1200, specialty: "手工上色", deliveryTime: "7-10 天" },
];

const LEADERBOARD_DATA = [
  { rank: 1, name: "MechMaster", sales: "¥58,200" },
  { rank: 2, name: "RetroViz", sales: "¥42,150" },
  { rank: 3, name: "LowPolyArt", sales: "¥38,900" },
  { rank: 4, name: "ToonWorld", sales: "¥25,600" },
  { rank: 5, name: "ArchVizPro", sales: "¥19,200" },
];

// NEW: 需求大厅数据
const MOCK_REQUIREMENTS = [
  { id: 1, title: "急求！为我的独立游戏设计一个 LowPoly 风格的主角", budget: 2000, author: "IndieDev_01", tags: ["游戏角色", "LowPoly", "Blender"], likes: 45, comments: 12, status: "open", time: "2 小时前" },
  { id: 2, title: "需要定制一个公司年会用的 3D 吉祥物打印模型", budget: 5000, author: "CorpManager", tags: ["3D 打印", "吉祥物", "STL"], likes: 12, comments: 8, status: "urgent", time: "5 小时前" },
  { id: 3, title: "寻找能修复古建筑扫描破损模型的大佬", budget: 1500, author: "HistoryBuff", tags: ["模型修复", "扫描数据", "ZBrush"], likes: 89, comments: 24, status: "open", time: "1 天前" },
  { id: 4, title: "求购一套现代简约风格的客厅家具模型包", budget: 800, author: "InteriorDes", tags: ["室内设计", "家具", "3dsMax"], likes: 5, comments: 2, status: "closed", time: "2 天前" },
  { id: 5, title: "汽车改装件 3D 建模，有参考图", budget: 3000, author: "CarLover", tags: ["硬表面", "汽车", "工业设计"], likes: 32, comments: 15, status: "open", time: "3 天前" },
];

// NEW: 社区帖子数据 (对比图)
const MOCK_POSTS = [
  { id: 1, author: "MakerKing", avatar: "https://randomuser.me/api/portraits/men/32.jpg", title: "历时两周，终于把这把传奇之剑打印出来了！", content: "使用 AI 生成的模型作为底稿，然后在 ZBrush 里细化了纹理。打印用了光敏树脂，上色废了老劲了，大家看看还原度怎么样？", modelImage: "https://images.unsplash.com/photo-1589254065878-42c9da9e2fa6?auto=format&fit=crop&q=80&w=400", realImage: "https://images.unsplash.com/photo-1615671131100-2f95b546522c?auto=format&fit=crop&q=80&w=400", likes: 342, comments: 56, shares: 12, tags: ["实物展示", "涂装"], time: "10 分钟前", heat: 980 },
  { id: 2, author: "DesignGirl", avatar: "https://randomuser.me/api/portraits/women/44.jpg", title: "AI 生成的珠宝首饰，没想到直接铸造效果这么好", content: "尝试了网站的图生 3D 功能，输入了草图，生成的模型稍作修改就直接送去失蜡铸造了。细节保留得很完整！", modelImage: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=400", realImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400", likes: 890, comments: 120, shares: 45, tags: ["珠宝设计", "铸造"], time: "2 小时前", heat: 1200 },
  { id: 3, author: "FuturePrint", avatar: "https://randomuser.me/api/portraits/men/85.jpg", title: "机械结构件验证，精度很顶", content: "功能性验证，尺寸分毫不差，PLA 打印。", modelImage: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&q=80&w=400", realImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400", likes: 120, comments: 18, shares: 2, tags: ["工业", "验证"], time: "5 小时前", heat: 450 }
];

// --- 2. 导航栏组件 (Navbar) ---
const Navbar = ({ activeTab, setActiveTab, onLoginClick }) => (
  <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center overflow-x-auto no-scrollbar">
          {/* LOGO AREA */}
          <div className="flex-shrink-0 flex items-center cursor-pointer mr-6" onClick={() => setActiveTab('generate')}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center text-white font-bold mr-3 shadow-lg flex-shrink-0">
              CM
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-slate-800 tracking-tight">创模云科</h1>
              <p className="text-xs text-slate-500 tracking-wider">CREATION MODEL</p>
            </div>
          </div>
          {/* Main Nav */}
          <div className="flex space-x-4 sm:space-x-8">
            {[
              { id: 'generate', label: 'AI 生成', icon: Activity },
              { id: 'trading', label: '模型交易', icon: ShoppingCart },
              { id: 'requirements', label: '需求大厅', icon: Banknote },
              { id: 'community', label: '社区讨论', icon: Users },
              { id: 'suppliers', label: '供应商', icon: Calculator }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`${
                  activeTab === item.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                } flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap`}
              >
                <item.icon className="w-4 h-4 mr-1 sm:mr-2" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-4 ml-4">
          <button
            onClick={onLoginClick}
            className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            登录
          </button>
          <button
            onClick={onLoginClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-all transform hover:scale-105"
          >
            注册
          </button>
        </div>
      </div>
    </div>
  </nav>
);

// --- 3. 模块一：AI 生成展示区 (GenerateSection) ---
const GenerateSection = () => (
  <div className="animate-fade-in">
    {/* Hero Section */}
    <div className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-20" alt="Background" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          图片转 3D，灵感触手可及
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-slate-300">
          上传您的 2D 设计图，我们 AI 引擎将在几分钟内为您生成高精度 3D 模型预览。
        </p>
        {/* Upload Area */}
        <div className="mt-10 w-full max-w-3xl">
          <div className="border-2 border-dashed border-blue-500/50 bg-slate-800/50 rounded-2xl p-12 hover:border-blue-400 hover:bg-slate-800/80 transition-all cursor-pointer group backdrop-blur-sm">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition-colors">
                <Upload className="h-10 w-10 text-blue-400" />
              </div>
              <p className="mt-4 text-lg font-medium text-slate-200">点击或拖拽上传图片</p>
              <p className="mt-1 text-sm text-slate-400">支持 JPG, PNG, WEBP (最大 20MB)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Showcase Gallery */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-slate-800 flex items-center">
          <Activity className="w-6 h-6 mr-2 text-blue-600" />
          实时生成案例
        </h3>
        <span className="text-sm text-blue-600 cursor-pointer hover:underline">查看更多 &rarr;</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="group relative rounded-xl overflow-hidden shadow-lg h-64 bg-slate-100">
            <div className="absolute inset-0 flex">
              <div className="w-1/2 h-full relative">
                <img src={`https://images.unsplash.com/photo-${item === 1 ? '1625316362031-6e3e5c942942' : item === 2 ? '1563089145-599997674d42' : '1550684848-fac1c5b4e853'}?auto=format&fit=crop&w=400&q=80`} className="w-full h-full object-cover" alt="Original" />
                <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">原图</div>
              </div>
              <div className="w-1/2 h-full bg-slate-800 relative flex items-center justify-center border-l-2 border-white">
                <span className="text-blue-400 font-mono text-lg animate-pulse">Processing...</span>
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">3D 预览</div>
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-medium">生成案例 #{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 4. 模块二：模型交易区 (TradingSection) ---
const TradingSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
                {['最新', '热门', '免费', '机甲', '角色'].map(tag => (
                  <button key={tag} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 whitespace-nowrap text-sm font-medium transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            {/* Model Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_MODELS.map((model) => (
                <div key={model.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img src={model.image} alt={model.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-bold">
                      {model.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-slate-800 truncate pr-2">{model.title}</h3>
                      <button className="text-slate-400 hover:text-blue-500"><Bookmark className="h-5 w-5" /></button>
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
              ))}
            </div>
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
                  <li key={user.rank} className="flex items-center">
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

// --- 5. NEW: 模块三：需求悬赏大厅 (RequirementsSection) ---
const RequirementsSection = () => {
  const [filterTag, setFilterTag] = useState('All');
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
                {['全部', '游戏角色', '3D 打印', '工业设计', '扫描修复'].map(tag => (
                  <button key={tag} className="px-3 py-1.5 rounded-full hover:bg-slate-100 text-slate-600 whitespace-nowrap">{tag}</button>
                ))}
              </div>
              <div className="relative w-full sm:w-64">
                <input type="text" placeholder="搜索 Tag 或关键词..." className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500" />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>
            <div className="space-y-4">
              {sortedRequirements.map(req => (
                <div key={req.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {req.status === 'urgent' && <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded font-bold">急</span>}
                      <h3 className="text-lg font-bold text-slate-800 hover:text-indigo-600 cursor-pointer">{req.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {req.tags.map(tag => (
                        <span key={tag} className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded">#{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-slate-400 gap-4">
                      <span className="flex items-center"><User className="w-3 h-3 mr-1"/> {req.author}</span>
                      <span className="flex items-center"><Clock className="w-3 h-3 mr-1"/> {req.time}</span>
                      <span className="flex items-center"><MessageSquare className="w-3 h-3 mr-1"/> {req.comments}回复</span>
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
                  <li key={idx} className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                      <span className={`w-5 h-5 flex items-center justify-center rounded text-xs mr-2 font-bold ${idx===0?'bg-amber-100 text-amber-700': 'bg-slate-100 text-slate-500'}`}>{user.rank}</span>
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

// --- 6. NEW: 模块四：社区讨论区 (CommunitySection) ---
const CommunitySection = () => {
  const [activeSort, setActiveSort] = useState('hot');
  return (
    <div className="bg-slate-50 min-h-screen py-8 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Feed */}
          <div className="flex-1">
            {/* Feed Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">社区动态</h2>
              <div className="bg-white p-1 rounded-lg border shadow-sm flex">
                <button onClick={() => setActiveSort('new')} className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all flex items-center ${activeSort === 'new' ? 'bg-blue-100 text-blue-700' : 'text-slate-500 hover:bg-slate-50'}`}>
                  <Clock className="w-4 h-4 mr-1"/> 最新
                </button>
                <button onClick={() => setActiveSort('hot')} className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all flex items-center ${activeSort === 'hot' ? 'bg-orange-100 text-orange-700' : 'text-slate-500 hover:bg-slate-50'}`}>
                  <Flame className="w-4 h-4 mr-1"/> 热门
                </button>
              </div>
            </div>
            {/* Create Post Bar */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                <User className="w-6 h-6"/>
              </div>
              <div className="flex-1 bg-slate-50 rounded-full px-4 py-2 text-slate-400 text-sm">
                分享你的作品或见解...
              </div>
              <div className="flex gap-2 text-slate-400">
                <ImageIcon className="w-5 h-5 hover:text-blue-500"/>
                <Activity className="w-5 h-5 hover:text-blue-500"/>
              </div>
            </div>
            {/* Posts List */}
            <div className="space-y-6">
              {MOCK_POSTS.map(post => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                  {/* Post Header */}
                  <div className="p-4 flex justify-between items-start">
                    <div className="flex gap-3">
                      <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full object-cover"/>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">{post.author}</h4>
                        <p className="text-xs text-slate-400">{post.time}</p>
                      </div>
                    </div>
                    <button className="text-slate-400 hover:bg-slate-100 p-1 rounded-full">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                  {/* Post Content */}
                  <div className="px-4 pb-2">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{post.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.content}</p>
                    <div className="flex gap-2 mb-3">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-xs font-medium">#{tag}</span>
                      ))}
                    </div>
                  </div>
                  {/* Comparison Images */}
                  <div className="relative h-64 sm:h-80 bg-slate-100 grid grid-cols-2 gap-0.5 border-t border-b border-slate-100">
                    <div className="relative group overflow-hidden">
                      <img src={post.modelImage} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="3D Model" />
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">3D 模型</span>
                    </div>
                    <div className="relative group overflow-hidden">
                      <img src={post.realImage} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="Real Object" />
                      <span className="absolute bottom-2 left-2 bg-blue-600/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">实物成品</span>
                    </div>
                    {/* Center Badge */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-lg z-10">
                      <div className="bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-full">VS</div>
                    </div>
                  </div>
                  {/* Actions */}
                  <div className="p-3 flex justify-between items-center">
                    <div className="flex gap-6">
                      <button className="flex items-center gap-1.5 text-slate-500 hover:text-red-500 transition-colors">
                        <ThumbsUp className="w-5 h-5"/>
                        <span className="text-sm font-medium">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-slate-500 hover:text-blue-500 transition-colors">
                        <MessageSquare className="w-5 h-5"/>
                        <span className="text-sm font-medium">{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-slate-500 hover:text-green-500 transition-colors">
                        <Share2 className="w-5 h-5"/>
                        <span className="text-sm font-medium">{post.shares}</span>
                      </button>
                    </div>
                    <button className="text-slate-400 hover:text-yellow-500">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Sidebar */}
          <div className="w-full md:w-80 hidden md:block space-y-6">
            {/* Hot Topics */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                <Flame className="w-4 h-4 text-orange-500 mr-2"/> 热门话题
              </h3>
              <div className="flex flex-wrap gap-2">
                {['#树脂涂装大赛', '#FDM 打印技巧', '#AI 辅助建模', '#机甲拼装'].map(topic => (
                  <span key={topic} className="bg-slate-50 hover:bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm cursor-pointer transition-colors">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            {/* Recommended Users */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-slate-800 mb-4">推荐关注</h3>
              <div className="space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                      <div>
                        <p className="text-sm font-bold text-slate-700">ArtMaster_{i}</p>
                        <p className="text-xs text-slate-400">3D 艺术家</p>
                      </div>
                    </div>
                    <button className="text-blue-600 text-xs font-bold border border-blue-200 px-3 py-1 rounded-full hover:bg-blue-50">
                      + 关注
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 7. 模块五：供应商列表 (SupplierSection) ---
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
            <button onClick={() => setSortType('sales')} className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${sortType === 'sales' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:bg-slate-100'}`}>月成交量</button>
            <button onClick={() => setSortType('rating')} className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${sortType === 'rating' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:bg-slate-100'}`}>好评优先</button>
            <button onClick={() => setSortType('price')} className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${sortType === 'price' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:bg-slate-100'}`}>价格 (低到高)</button>
          </div>
        </div>
        {/* List */}
        <div className="space-y-4">
          {sortedSuppliers.map((supplier) => (
            <div key={supplier.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:border-blue-300 transition-colors flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <Activity className="h-8 w-8" />
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                <div className="col-span-2 md:col-span-1">
                  <h3 className="font-bold text-lg text-slate-800">{supplier.name}</h3>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">{supplier.specialty}</span>
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
                <button onClick={() => handleEstimate(supplier)} className="flex-1 md:flex-none px-4 py-2 bg-slate-900 text-white rounded-lg text-sm hover:bg-slate-800 transition-colors flex items-center justify-center">
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
              <button onClick={() => setIsEstimateModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">模型文件上传 (STL/OBJ)</label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center text-slate-500 bg-slate-50">
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
                  <span className="text-sm text-slate-600 flex items-center"><Clock className="h-4 w-4 mr-1"/> 预计工期</span>
                  <span className="font-bold text-slate-800">{selectedSupplier.deliveryTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 flex items-center"><CheckCircle className="h-4 w-4 mr-1"/> 预估报价</span>
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

// --- 8. 底部与杂项 (Footer) ---
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

// --- 9. 主应用入口 (App) ---
export default function App() {
  const [activeTab, setActiveTab] = useState('generate');
  const [showChatbot, setShowChatbot] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* 1. Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} onLoginClick={() => setShowLoginModal(true)} />
      {/* 2. Main Content Area */}
      <main className="flex-grow">
        {activeTab === 'generate' && <GenerateSection />}
        {activeTab === 'trading' && <TradingSection />}
        {activeTab === 'requirements' && <RequirementsSection />}
        {activeTab === 'community' && <CommunitySection />}
        {activeTab === 'suppliers' && <SupplierSection />}
      </main>
      {/* 3. Footer */}
      <Footer />
      {/* 4. Chatbot Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {showChatbot && (
          <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl mb-4 border border-slate-100 flex flex-col overflow-hidden animate-fade-in-up">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center">
                <Bot className="h-6 w-6 mr-2" />
                <span className="font-medium">Langbot 智能助手</span>
              </div>
              <button onClick={() => setShowChatbot(false)}><X className="h-4 w-4" /></button>
            </div>
            <div className="flex-1 p-4 bg-slate-50 overflow-y-auto">
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-slate-700 max-w-[85%]">
                您好！我是创模云科的 AI 客服。请问有什么可以帮您？<br/>您可以问我关于模型生成、悬赏发布、或社区发帖的问题。
              </div>
            </div>
            <div className="p-3 bg-white border-t">
              <input type="text" placeholder="输入您的问题..." className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        )}
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        >
          {showChatbot ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </button>
      </div>
      {/* 5. Login Modal (Simplified) */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative animate-fade-in-up">
            <button onClick={() => setShowLoginModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">欢迎回到创模云科</h2>
            <div className="space-y-4">
              <input type="email" placeholder="邮箱/手机号" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              <input type="password" placeholder="密码" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">立即登录</button>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500">
              还没有账号？<span className="text-blue-600 cursor-pointer hover:underline">去注册</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
