# 创模云科 - 3D 模型生成与交易平台

<div align="center">

![创模云科](https://img.shields.io/badge/创模云科-v1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646cff)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.0-38bdf8)

**图片转 3D，灵感触手可及** 🚀

[在线演示](#) | [文档](#) | [API](#)

</div>

---

## ✨ 核心功能

### 🎨 AI 生成区
- 图片转 3D 模型功能
- 支持 JPG, PNG, WEBP (最大 20MB)
- 实时生成进度展示
- 拖拽上传交互

### 💰 模型交易区
- 3D 模型市场
- 搜索与筛选（最新、热门、免费、机甲、角色等）
- 模型卡片展示：价格、作者、标签、点赞、评论
- 创作者榜单（本周成交额排名）

### 📋 需求悬赏大厅
- 用户发布定制需求，创作者接单
- 悬赏金额排序
- 需求状态：open / urgent / closed
- 悬赏金主榜

### 💬 社区讨论区
- 作品展示与分享
- 对比图展示（3D 模型 vs 实物成品）
- 热门话题标签
- 推荐关注创作者

### 🏭 供应商列表
- 连接线下 3D 打印工厂
- 供应商信息：月成交量、评分、平均报价、专长、工期
- 快速估价工具
- 多种排序方式

---

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 生产构建

```bash
npm run build
```

### 预览构建

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

---

## 📁 项目结构

```
chuangmo-yunke/
├── index.html              # 入口 HTML（SEO 优化）
├── package.json            # 依赖配置
├── vite.config.js          # Vite 构建配置
├── tailwind.config.js      # TailwindCSS 配置
├── postcss.config.js       # PostCSS 配置
├── public/                 # 静态资源
│   └── favicon.svg         # 网站图标
└── src/
    ├── main.jsx            # React 入口
    ├── App.jsx             # 主应用组件
    ├── index.css           # 全局样式
    ├── components/         # React 组件
    │   ├── Navbar.jsx              # 导航栏
    │   ├── GenerateSection.jsx     # AI 生成区
    │   ├── TradingSection.jsx      # 模型交易区
    │   ├── RequirementsSection.jsx # 需求大厅
    │   ├── CommunitySection.jsx    # 社区讨论区
    │   ├── SupplierSection.jsx     # 供应商列表
    │   ├── Footer.jsx              # 页脚
    │   ├── LoginModal.jsx          # 登录弹窗
    │   └── Chatbot.jsx             # 智能客服
    └── data/
        └── mockData.js     # 模拟数据
```

---

## 🎯 优化亮点

### 性能优化
- ✅ **代码分割** - 按 vendor 拆分，优化加载速度
- ✅ **图片懒加载** - 使用 `loading="lazy"` 属性
- ✅ **组件按需加载** - 路由级代码分割
- ✅ **Tailwind JIT** - 按需生成 CSS，减小体积

### 用户体验
- ✅ **响应式设计** - 完美支持移动端、平板、桌面
- ✅ **交互动画** - 淡入、滑动、缩放等流畅动画
- ✅ **骨架屏加载** - 避免页面闪烁
- ✅ **拖拽上传** - 支持文件拖拽 + 进度条
- ✅ **智能客服** - 内置 Chatbot 组件

### SEO 优化
- ✅ **Meta 标签** - 完整的 SEO 元数据
- ✅ **语义化 HTML** - 利于搜索引擎抓取
- ✅ **Open Graph** - 社交媒体分享优化
- ✅ **Twitter Card** - Twitter 分享卡片

### 开发体验
- ✅ **热更新** - Vite HMR 秒级更新
- ✅ **ESLint** - 代码质量检查
- ✅ **组件化** - 高内聚低耦合
- ✅ **数据分离** - 统一管理 mock 数据

---

## 🛠️ 技术栈

- **前端框架:** React 18.2.0
- **构建工具:** Vite 5.0.8
- **UI 框架:** TailwindCSS 3.4.0
- **图标库:** Lucide React
- **路由:** React Router DOM 6.20.0

---

## 📱 浏览器支持

| 浏览器 | 版本 |
|--------|------|
| Chrome | >= 90 |
| Firefox | >= 88 |
| Safari | >= 14 |
| Edge | >= 90 |

---

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

---

## 📞 联系方式

- **邮箱:** contact@chuangmoyunke.com
- **电话:** 400-888-9999
- **地址:** 北京市朝阳区创模云科大厦

---

<div align="center">

**创模云科** - 让创意落地，让制造简单 ✨

[返回顶部](#创模云科 -3d-模型生成与交易平台)

</div>
