import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 中文翻译
const zhCN = {
  translation: {
    // 导航
    'nav.generate': 'AI 生成',
    'nav.trading': '模型交易',
    'nav.requirements': '需求大厅',
    'nav.community': '社区讨论',
    'nav.suppliers': '供应商',
    
    // 通用
    'common.login': '登录',
    'common.register': '注册',
    'common.logout': '退出',
    'common.search': '搜索',
    'common.loading': '加载中...',
    'common.error': '出错了',
    'common.success': '成功',
    'common.cancel': '取消',
    'common.confirm': '确认',
    'common.submit': '提交',
    'common.save': '保存',
    'common.delete': '删除',
    'common.edit': '编辑',
    'common.view': '查看',
    'common.close': '关闭',
    
    // AI 生成
    'generate.title': '图片转 3D，灵感触手可及',
    'generate.subtitle': '上传您的 2D 设计图，我们 AI 引擎将在几分钟内为您生成高精度 3D 模型预览。',
    'generate.upload': '点击或拖拽上传图片',
    'generate.support': '支持 JPG, PNG, WEBP (最大 20MB)',
    'generate.cases': '实时生成案例',
    
    // 模型交易
    'trading.search': '搜索模型关键字...',
    'trading.filters.all': '全部',
    'trading.filters.latest': '最新',
    'trading.filters.hot': '热门',
    'trading.filters.free': '免费',
    'trading.creatorBoard': '创作者榜单',
    
    // 需求大厅
    'requirements.title': '需求悬赏大厅',
    'requirements.subtitle': '找不到满意的模型？发布悬赏，让数万创作者为您定制。',
    'requirements.publish': '发布新需求',
    'requirements.budget': '悬赏金额',
    'requirements.viewDetail': '查看详情',
    
    // 社区
    'community.title': '社区动态',
    'community.sort.new': '最新',
    'community.sort.hot': '热门',
    'community.share': '分享你的作品或见解...',
    
    // 供应商
    'suppliers.title': '优质供应商',
    'suppliers.subtitle': '连接线下工厂，实现一站式制造交付',
    'suppliers.sales': '月成交量',
    'suppliers.rating': '综合评分',
    'suppliers.price': '平均报价',
    'suppliers.estimate': '估价/工期',
    
    // 支付
    'payment.title': '订单支付',
    'payment.amount': '支付金额',
    'payment.method': '选择支付方式',
    'payment.alipay': '支付宝',
    'payment.wechat': '微信支付',
    'payment.card': '银行卡',
    'payment.company': '对公转账',
    'payment.secure': '安全加密支付，请放心使用',
    'payment.pay': '立即支付',
    'payment.success': '支付成功！',
    'payment.thanks': '感谢您的购买',
    
    // 表单验证
    'validation.required': '此项为必填项',
    'validation.email': '请输入有效的邮箱地址',
    'validation.phone': '请输入有效的手机号',
    'validation.password': '密码至少 8 位，包含大小写字母和数字',
    'validation.tooLong': '内容过长',
    
    // 错误提示
    'error.network': '网络连接失败，请检查网络',
    'error.server': '服务器错误，请稍后重试',
    'error.notFound': '页面未找到',
    'error.unauthorized': '未授权，请先登录',
    
    // 页脚
    'footer.about': '创模云科',
    'footer.description': '致力于打造全球领先的 3D 模型生成与供应链平台。让创意落地，让制造简单。',
    'footer.services': '平台服务',
    'footer.support': '支持与帮助',
    'footer.contact': '联系我们'
  }
};

// English translation
const enUS = {
  translation: {
    // Navigation
    'nav.generate': 'AI Generate',
    'nav.trading': 'Marketplace',
    'nav.requirements': 'Requirements',
    'nav.community': 'Community',
    'nav.suppliers': 'Suppliers',
    
    // Common
    'common.login': 'Login',
    'common.register': 'Register',
    'common.logout': 'Logout',
    'common.search': 'Search',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
    'common.submit': 'Submit',
    'common.save': 'Save',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.view': 'View',
    'common.close': 'Close',
    
    // AI Generate
    'generate.title': 'Image to 3D, Inspiration at Hand',
    'generate.subtitle': 'Upload your 2D design, our AI engine will generate a high-precision 3D model preview in minutes.',
    'generate.upload': 'Click or drag to upload image',
    'generate.support': 'Support JPG, PNG, WEBP (Max 20MB)',
    'generate.cases': 'Real-time Generation Cases',
    
    // Trading
    'trading.search': 'Search models...',
    'trading.filters.all': 'All',
    'trading.filters.latest': 'Latest',
    'trading.filters.hot': 'Hot',
    'trading.filters.free': 'Free',
    'trading.creatorBoard': 'Creator Leaderboard',
    
    // Payment
    'payment.title': 'Order Payment',
    'payment.amount': 'Amount',
    'payment.method': 'Payment Method',
    'payment.alipay': 'Alipay',
    'payment.wechat': 'WeChat Pay',
    'payment.success': 'Payment Successful!',
    'payment.thanks': 'Thank you for your purchase'
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'zh-CN': zhCN,
      'en-US': enUS
    },
    lng: 'zh-CN',
    fallbackLng: 'zh-CN',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;
export { zhCN, enUS };
