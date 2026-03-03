// 创模云科 - 完整 Mock 数据
// 包含：3D 模型、供应商、创作者榜单、需求悬赏、社区帖子、用户评价、生成案例、FAQ

// ==================== 3D 模型交易数据 (50+ 个) ====================
export const MOCK_MODELS = [
  // 科幻/机甲类 (1-10)
  { id: 1, title: "赛博朋克义体手臂", author: "MechMaster", image: "https://images.unsplash.com/photo-1615840287214-7ff58ee0489b?auto=format&fit=crop&q=80&w=600", price: "¥199", likes: 1204, comments: 45, tags: ["科幻", "机械", "OBJ"], polyCount: "15K", format: "OBJ/FBX" },
  { id: 2, title: "未来战士头盔", author: "FutureDesign", image: "https://images.unsplash.com/photo-1535378437327-109726b23d53?auto=format&fit=crop&q=80&w=600", price: "¥150", likes: 980, comments: 56, tags: ["角色", "科幻", "STL"], polyCount: "22K", format: "STL/OBJ" },
  { id: 3, title: "机甲战士全身装甲", author: "MechMaster", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600", price: "¥599", likes: 2340, comments: 128, tags: ["科幻", "角色", "FBX"], polyCount: "85K", format: "FBX/OBJ" },
  { id: 4, title: "科幻武器 - 等离子步枪", author: "WeaponSmith", image: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?auto=format&fit=crop&q=80&w=600", price: "¥299", likes: 1567, comments: 89, tags: ["科幻", "武器", "OBJ"], polyCount: "35K", format: "OBJ/FBX" },
  { id: 5, title: "太空飞船 - 探索者号", author: "SpaceDesigner", image: "https://images.unsplash.com/photo-1614728853975-69c960772555?auto=format&fit=crop&q=80&w=600", price: "¥899", likes: 3201, comments: 201, tags: ["科幻", "载具", "Blend"], polyCount: "120K", format: "Blend/OBJ" },
  { id: 6, title: "机器人助手 - 家用型", author: "RobotLab", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600", price: "¥450", likes: 1890, comments: 95, tags: ["科幻", "角色", "FBX"], polyCount: "45K", format: "FBX/OBJ" },
  { id: 7, title: "能量核心 - 反应堆", author: "MechMaster", image: "https://images.unsplash.com/photo-1614727188586-8a6c0f8a8c8a?auto=format&fit=crop&q=80&w=600", price: "¥180", likes: 756, comments: 34, tags: ["科幻", "道具", "OBJ"], polyCount: "18K", format: "OBJ" },
  { id: 8, title: "外骨骼装甲套装", author: "ArmorTech", image: "https://images.unsplash.com/photo-1535378437327-109726b23d53?auto=format&fit=crop&q=80&w=600", price: "¥680", likes: 2100, comments: 112, tags: ["科幻", "装备", "FBX"], polyCount: "65K", format: "FBX/STL" },
  { id: 9, title: "无人机 - 侦察型", author: "DroneWorks", image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=600", price: "¥220", likes: 890, comments: 45, tags: ["科幻", "载具", "OBJ"], polyCount: "25K", format: "OBJ/FBX" },
  { id: 10, title: "全息投影仪", author: "TechViz", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600", price: "¥160", likes: 654, comments: 28, tags: ["科幻", "道具", "Blend"], polyCount: "12K", format: "Blend/OBJ" },

  // 角色/人物类 (11-20)
  { id: 11, title: "奇幻精灵弓箭手", author: "FantasyArt", image: "https://images.unsplash.com/photo-1596727147705-54a9d094368c?auto=format&fit=crop&q=80&w=600", price: "¥380", likes: 1456, comments: 78, tags: ["角色", "奇幻", "FBX"], polyCount: "42K", format: "FBX/OBJ" },
  { id: 12, title: "中世纪骑士", author: "HistoryViz", image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80&w=600", price: "¥420", likes: 1678, comments: 92, tags: ["角色", "历史", "OBJ"], polyCount: "55K", format: "OBJ/FBX" },
  { id: 13, title: "卡通风格小怪兽", author: "ToonWorld", image: "https://images.unsplash.com/photo-1596727147705-54a9d094368c?auto=format&fit=crop&q=80&w=600", price: "¥88", likes: 1543, comments: 89, tags: ["卡通", "IP 设计", "Maya"], polyCount: "8K", format: "Maya/OBJ" },
  { id: 14, title: "东方武侠 - 剑客", author: "WuxiaMaster", image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&q=80&w=600", price: "¥520", likes: 2890, comments: 156, tags: ["角色", "武侠", "FBX"], polyCount: "58K", format: "FBX/OBJ" },
  { id: 15, title: "赛博少女 - 霓虹版", author: "CyberPunk", image: "https://images.unsplash.com/photo-1535378437327-109726b23d53?auto=format&fit=crop&q=80&w=600", price: "¥480", likes: 3456, comments: 198, tags: ["角色", "科幻", "Blend"], polyCount: "48K", format: "Blend/FBX" },
  { id: 16, title: "恶魔领主", author: "DarkArt", image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=600", price: "¥580", likes: 2100, comments: 134, tags: ["角色", "奇幻", "ZBrush"], polyCount: "95K", format: "ZBrush/OBJ" },
  { id: 17, title: "机械姬 - 战斗型", author: "RobotLab", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600", price: "¥620", likes: 2780, comments: 167, tags: ["角色", "科幻", "FBX"], polyCount: "62K", format: "FBX/OBJ" },
  { id: 18, title: "森林精灵", author: "NatureArt", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600", price: "¥350", likes: 1234, comments: 67, tags: ["角色", "奇幻", "OBJ"], polyCount: "38K", format: "OBJ/FBX" },
  { id: 19, title: "蒸汽朋克发明家", author: "SteamWorks", image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=600", price: "¥460", likes: 1567, comments: 89, tags: ["角色", "蒸汽朋克", "Blend"], polyCount: "52K", format: "Blend/OBJ" },
  { id: 20, title: "忍者刺客", author: "ShadowArt", image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80&w=600", price: "¥400", likes: 1890, comments: 102, tags: ["角色", "武侠", "FBX"], polyCount: "45K", format: "FBX/OBJ" },

  // 环境/场景类 (21-30)
  { id: 21, title: "低多边形森林场景", author: "LowPolyArt", image: "https://images.unsplash.com/photo-1621360841013-c768371e93cf?auto=format&fit=crop&q=80&w=600", price: "¥50", likes: 856, comments: 23, tags: ["环境", "游戏资产", "FBX"], polyCount: "5K", format: "FBX/OBJ" },
  { id: 22, title: "未来城市街区", author: "CityBuilder", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=600", price: "¥1200", likes: 3456, comments: 189, tags: ["环境", "科幻", "UE5"], polyCount: "250K", format: "UE5/FBX" },
  { id: 23, title: "中世纪城堡", author: "HistoryViz", image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80&w=600", price: "¥980", likes: 2345, comments: 134, tags: ["环境", "历史", "Blend"], polyCount: "180K", format: "Blend/OBJ" },
  { id: 24, title: "赛博街道 - 雨夜", author: "CyberPunk", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=600", price: "¥850", likes: 2890, comments: 156, tags: ["环境", "科幻", "UE5"], polyCount: "150K", format: "UE5/FBX" },
  { id: 25, title: "日式庭院", author: "ZenGarden", image: "https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?auto=format&fit=crop&q=80&w=600", price: "¥680", likes: 1678, comments: 92, tags: ["环境", "东方", "OBJ"], polyCount: "95K", format: "OBJ/FBX" },
  { id: 26, title: "太空站内部", author: "SpaceDesigner", image: "https://images.unsplash.com/photo-1614728853975-69c960772555?auto=format&fit=crop&q=80&w=600", price: "¥1100", likes: 2100, comments: 112, tags: ["环境", "科幻", "FBX"], polyCount: "200K", format: "FBX/OBJ" },
  { id: 27, title: "魔法森林", author: "FantasyArt", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600", price: "¥750", likes: 1890, comments: 98, tags: ["环境", "奇幻", "Blend"], polyCount: "120K", format: "Blend/OBJ" },
  { id: 28, title: "废弃工厂", author: "UrbanDecay", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600", price: "¥620", likes: 1234, comments: 67, tags: ["环境", "写实", "OBJ"], polyCount: "110K", format: "OBJ/FBX" },
  { id: 29, title: "海底世界", author: "OceanViz", image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=600", price: "¥880", likes: 2567, comments: 145, tags: ["环境", "自然", "UE5"], polyCount: "165K", format: "UE5/FBX" },
  { id: 30, title: "沙漠绿洲", author: "NatureArt", image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80&w=600", price: "¥580", likes: 1456, comments: 78, tags: ["环境", "自然", "OBJ"], polyCount: "85K", format: "OBJ/FBX" },

  // 静物/道具类 (31-40)
  { id: 31, title: "超写实古董怀表", author: "RetroViz", image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80&w=600", price: "¥299", likes: 2100, comments: 102, tags: ["静物", "高精度", "Blend"], polyCount: "35K", format: "Blend/OBJ" },
  { id: 32, title: "魔法水晶球", author: "FantasyArt", image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=600", price: "¥180", likes: 1234, comments: 56, tags: ["道具", "奇幻", "OBJ"], polyCount: "22K", format: "OBJ/FBX" },
  { id: 33, title: "复古留声机", author: "RetroViz", image: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?auto=format&fit=crop&q=80&w=600", price: "¥320", likes: 987, comments: 45, tags: ["静物", "复古", "FBX"], polyCount: "28K", format: "FBX/OBJ" },
  { id: 34, title: "骑士之剑 - 传说版", author: "WeaponSmith", image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80&w=600", price: "¥260", likes: 1567, comments: 78, tags: ["道具", "奇幻", "OBJ"], polyCount: "18K", format: "OBJ/STL" },
  { id: 35, title: "魔法书 - 古老卷轴", author: "FantasyArt", image: "https://images.unsplash.com/photo-1535378437327-109726b23d53?auto=format&fit=crop&q=80&w=600", price: "¥150", likes: 890, comments: 34, tags: ["道具", "奇幻", "Blend"], polyCount: "15K", format: "Blend/OBJ" },
  { id: 36, title: "蒸汽朋克望远镜", author: "SteamWorks", image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=600", price: "¥220", likes: 756, comments: 29, tags: ["道具", "蒸汽朋克", "OBJ"], polyCount: "20K", format: "OBJ/FBX" },
  { id: 37, title: "宝石收藏套装", author: "GemCutter", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600", price: "¥280", likes: 1123, comments: 52, tags: ["道具", "高精度", "Blend"], polyCount: "32K", format: "Blend/OBJ" },
  { id: 38, title: "炼金术工作台", author: "FantasyArt", image: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?auto=format&fit=crop&q=80&w=600", price: "¥450", likes: 1345, comments: 67, tags: ["道具", "奇幻", "FBX"], polyCount: "55K", format: "FBX/OBJ" },
  { id: 39, title: "未来通讯器", author: "TechViz", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600", price: "¥190", likes: 678, comments: 28, tags: ["道具", "科幻", "OBJ"], polyCount: "16K", format: "OBJ/FBX" },
  { id: 40, title: "海盗宝箱", author: "AdventureArt", image: "https://images.unsplash.com/photo-1535378437327-109726b23d53?auto=format&fit=crop&q=80&w=600", price: "¥240", likes: 945, comments: 41, tags: ["道具", "冒险", "Blend"], polyCount: "25K", format: "Blend/OBJ" },

  // 家具/室内类 (41-50)
  { id: 41, title: "现代极简沙发", author: "ArchVizPro", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600", price: "¥120", likes: 670, comments: 12, tags: ["家具", "室内设计", "3dsMax"], polyCount: "12K", format: "3dsMax/OBJ" },
  { id: 42, title: "北欧风格餐桌椅套装", author: "NordicDesign", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=600", price: "¥280", likes: 1234, comments: 56, tags: ["家具", "室内设计", "FBX"], polyCount: "25K", format: "FBX/OBJ" },
  { id: 43, title: "中式古典太师椅", author: "OrientalArt", image: "https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?auto=format&fit=crop&q=80&w=600", price: "¥350", likes: 890, comments: 34, tags: ["家具", "东方", "OBJ"], polyCount: "32K", format: "OBJ/FBX" },
  { id: 44, title: "智能办公桌椅组合", author: "ModernWork", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=600", price: "¥320", likes: 1567, comments: 78, tags: ["家具", "办公", "3dsMax"], polyCount: "28K", format: "3dsMax/FBX" },
  { id: 45, title: "豪华卧室套装", author: "LuxuryViz", image: "https://images.unsplash.com/photo-1505693416388-b0346ef414b9?auto=format&fit=crop&q=80&w=600", price: "¥680", likes: 2100, comments: 98, tags: ["家具", "室内设计", "FBX"], polyCount: "65K", format: "FBX/OBJ" },
  { id: 46, title: "工业风书架", author: "UrbanDesign", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=600", price: "¥180", likes: 756, comments: 29, tags: ["家具", "工业风", "OBJ"], polyCount: "18K", format: "OBJ/FBX" },
  { id: 47, title: "日式榻榻米套装", author: "ZenGarden", image: "https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?auto=format&fit=crop&q=80&w=600", price: "¥420", likes: 1345, comments: 67, tags: ["家具", "东方", "Blend"], polyCount: "38K", format: "Blend/OBJ" },
  { id: 48, title: "现代吊灯组合", author: "LightDesign", image: "https://images.unsplash.com/photo-1513506003013-d5347888e329?auto=format&fit=crop&q=80&w=600", price: "¥220", likes: 987, comments: 45, tags: ["家具", "灯具", "3dsMax"], polyCount: "22K", format: "3dsMax/OBJ" },
  { id: 49, title: "复古梳妆台", author: "RetroViz", image: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?auto=format&fit=crop&q=80&w=600", price: "¥290", likes: 1123, comments: 52, tags: ["家具", "复古", "FBX"], polyCount: "26K", format: "FBX/OBJ" },
  { id: 50, title: "户外庭院家具套装", author: "GardenViz", image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=600", price: "¥520", likes: 1678, comments: 89, tags: ["家具", "户外", "OBJ"], polyCount: "48K", format: "OBJ/FBX" },

  // 免费专区 (51-55)
  { id: 51, title: "基础几何体套装", author: "BeginnerHub", image: "https://images.unsplash.com/photo-1621360841013-c768371e93cf?auto=format&fit=crop&q=80&w=600", price: "免费", likes: 3456, comments: 123, tags: ["免费", "基础", "OBJ"], polyCount: "2K", format: "OBJ/FBX/Blend" },
  { id: 52, title: "简单树木模型包", author: "NatureArt", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600", price: "免费", likes: 2890, comments: 98, tags: ["免费", "自然", "FBX"], polyCount: "5K", format: "FBX/OBJ" },
  { id: 53, title: "基础武器包", author: "WeaponSmith", image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80&w=600", price: "免费", likes: 4567, comments: 189, tags: ["免费", "武器", "OBJ"], polyCount: "8K", format: "OBJ/FBX" },
  { id: 54, title: "简易房屋模型", author: "CityBuilder", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=600", price: "免费", likes: 2345, comments: 87, tags: ["免费", "建筑", "Blend"], polyCount: "10K", format: "Blend/OBJ" },
  { id: 55, title: "卡通表情合集", author: "ToonWorld", image: "https://images.unsplash.com/photo-1596727147705-54a9d094368c?auto=format&fit=crop&q=80&w=600", price: "免费", likes: 5678, comments: 234, tags: ["免费", "卡通", "FBX"], polyCount: "3K", format: "FBX/OBJ" },
];

// ==================== 供应商数据 ====================
export const MOCK_SUPPLIERS = [
  { id: 1, name: "精工智造工厂", sales: 12500, rating: 4.9, avgPrice: 500, specialty: "高精度打印", deliveryTime: "3-5 天", location: "深圳", equipment: "SLA/DLP/FDM", materials: ["树脂", "PLA", "ABS", "尼龙"], maxBuildSize: "300×300×400mm", cases: 156, description: "专注高精度 SLA 打印，表面光洁度 Ra0.8，支持小批量生产" },
  { id: 2, name: "极速 3D 打印中心", sales: 8900, rating: 4.7, avgPrice: 300, specialty: "快速原型", deliveryTime: "1-2 天", location: "上海", equipment: "FDM/SLA", materials: ["PLA", "ABS", "PETG"], maxBuildSize: "500×500×500mm", cases: 234, description: "24 小时快速出货，适合原型验证和急单" },
  { id: 3, name: "创模工坊", sales: 5600, rating: 4.8, avgPrice: 800, specialty: "树脂工艺", deliveryTime: "5-7 天", location: "北京", equipment: "SLA/DLP/多材料", materials: ["高透树脂", "韧性树脂", "铸造树脂"], maxBuildSize: "200×200×250mm", cases: 89, description: "高端树脂打印，支持透明件和可铸造材料" },
  { id: 4, name: "未来制造局", sales: 15000, rating: 4.6, avgPrice: 450, specialty: "批量生产", deliveryTime: "4-6 天", location: "东莞", equipment: "FDM 阵列/SLA", materials: ["PLA", "ABS", "尼龙", "PC"], maxBuildSize: "400×400×400mm", cases: 312, description: "规模化生产能力，100 件以上享折扣" },
  { id: 5, name: "匠心模型社", sales: 3200, rating: 5.0, avgPrice: 1200, specialty: "手工上色", deliveryTime: "7-10 天", location: "杭州", equipment: "SLA + 手工后处理", materials: ["光敏树脂", "特种材料"], maxBuildSize: "250×250×300mm", cases: 67, description: "打印 + 上色一站式服务，专业涂装师团队" },
  { id: 6, name: "金属打印专家", sales: 6800, rating: 4.8, avgPrice: 2500, specialty: "金属 3D 打印", deliveryTime: "7-14 天", location: "苏州", equipment: "SLM/DMLS", materials: ["不锈钢", "铝合金", "钛合金"], maxBuildSize: "250×250×325mm", cases: 45, description: "工业级金属打印，航空铝/钛合金可选" },
];

// ==================== 创作者榜单 ====================
export const LEADERBOARD_DATA = [
  { rank: 1, name: "MechMaster", sales: "¥58,200", avatar: "https://randomuser.me/api/portraits/men/32.jpg", models: 45, followers: 12500 },
  { rank: 2, name: "RetroViz", sales: "¥42,150", avatar: "https://randomuser.me/api/portraits/men/44.jpg", models: 32, followers: 8900 },
  { rank: 3, name: "LowPolyArt", sales: "¥38,900", avatar: "https://randomuser.me/api/portraits/women/33.jpg", models: 67, followers: 15600 },
  { rank: 4, name: "ToonWorld", sales: "¥25,600", avatar: "https://randomuser.me/api/portraits/women/44.jpg", models: 89, followers: 23400 },
  { rank: 5, name: "ArchVizPro", sales: "¥19,200", avatar: "https://randomuser.me/api/portraits/men/85.jpg", models: 28, followers: 5600 },
  { rank: 6, name: "FantasyArt", sales: "¥17,800", avatar: "https://randomuser.me/api/portraits/women/65.jpg", models: 56, followers: 9800 },
  { rank: 7, name: "CyberPunk", sales: "¥15,400", avatar: "https://randomuser.me/api/portraits/men/22.jpg", models: 23, followers: 18900 },
  { rank: 8, name: "SpaceDesigner", sales: "¥13,200", avatar: "https://randomuser.me/api/portraits/men/55.jpg", models: 19, followers: 7200 },
];

// ==================== 需求悬赏数据 ====================
export const MOCK_REQUIREMENTS = [
  { id: 1, title: "急求！为我的独立游戏设计一个 LowPoly 风格的主角", budget: 2000, author: "IndieDev_01", avatar: "https://randomuser.me/api/portraits/men/12.jpg", tags: ["游戏角色", "LowPoly", "Blender"], likes: 45, comments: 12, status: "open", time: "2 小时前", description: "需要一款 LowPoly 风格的男性战士角色，用于 Unity 游戏项目。希望有基础的绑定，方便后续动画制作。" },
  { id: 2, title: "需要定制一个公司年会用的 3D 吉祥物打印模型", budget: 5000, author: "CorpManager", avatar: "https://randomuser.me/api/portraits/women/23.jpg", tags: ["3D 打印", "吉祥物", "STL"], likes: 12, comments: 8, status: "urgent", time: "5 小时前", description: "公司 Logo 拟人化的吉祥物，需要打印出来作为年会奖品。高度约 30cm，需要中空设计节省材料。" },
  { id: 3, title: "寻找能修复古建筑扫描破损模型的大佬", budget: 1500, author: "HistoryBuff", avatar: "https://randomuser.me/api/portraits/men/67.jpg", tags: ["模型修复", "扫描数据", "ZBrush"], likes: 89, comments: 24, status: "open", time: "1 天前", description: "有古建筑的激光扫描数据，但是有很多破洞和噪点，需要修复成完整的可用于展示的模型。" },
  { id: 4, title: "求购一套现代简约风格的客厅家具模型包", budget: 800, author: "InteriorDes", avatar: "https://randomuser.me/api/portraits/women/34.jpg", tags: ["室内设计", "家具", "3dsMax"], likes: 5, comments: 2, status: "closed", time: "2 天前", description: "用于室内效果图制作，需要沙发、茶几、电视柜、餐桌椅等完整套装。" },
  { id: 5, title: "汽车改装件 3D 建模，有参考图", budget: 3000, author: "CarLover", avatar: "https://randomuser.me/api/portraits/men/45.jpg", tags: ["硬表面", "汽车", "工业设计"], likes: 32, comments: 15, status: "open", time: "3 天前", description: "需要设计一款汽车后扰流板，有详细参考图和尺寸要求，需要可用于 3D 打印的 STL 文件。" },
  { id: 6, title: "VR 游戏场景 - 赛博朋克酒吧", budget: 8000, author: "VRStudio", avatar: "https://randomuser.me/api/portraits/women/56.jpg", tags: ["VR", "场景", "UE5"], likes: 67, comments: 23, status: "open", time: "1 天前", description: "需要完整的赛博朋克风格酒吧场景，包括吧台、桌椅、装饰、灯光等，用于 UE5 VR 项目。" },
  { id: 7, title: "珠宝设计 - 定制婚戒 3D 模型", budget: 1200, author: "JewelryDesign", avatar: "https://randomuser.me/api/portraits/men/78.jpg", tags: ["珠宝", "高精度", "Matrix"], likes: 23, comments: 9, status: "urgent", time: "4 小时前", description: "根据客户手绘草图制作婚戒 3D 模型，需要可用于失蜡铸造的高精度模型。" },
  { id: 8, title: "动画短片角色绑定服务", budget: 4500, author: "AnimationPro", avatar: "https://randomuser.me/api/portraits/women/12.jpg", tags: ["角色绑定", "动画", "Maya"], likes: 34, comments: 11, status: "open", time: "2 天前", description: "已有角色模型，需要专业的角色绑定，包括面部绑定和身体绑定，用于 Maya 动画制作。" },
];

// ==================== 社区帖子数据 ====================
export const MOCK_POSTS = [
  { id: 1, author: "MakerKing", avatar: "https://randomuser.me/api/portraits/men/32.jpg", title: "历时两周，终于把这把传奇之剑打印出来了！", content: "使用 AI 生成的模型作为底稿，然后在 ZBrush 里细化了纹理。打印用了光敏树脂，上色废了老劲了，大家看看还原度怎么样？", modelImage: "https://images.unsplash.com/photo-1589254065878-42c9da9e2fa6?auto=format&fit=crop&q=80&w=400", realImage: "https://images.unsplash.com/photo-1615671131100-2f95b546522c?auto=format&fit=crop&q=80&w=400", likes: 342, comments: 56, shares: 12, tags: ["实物展示", "涂装"], time: "10 分钟前", heat: 980 },
  { id: 2, author: "DesignGirl", avatar: "https://randomuser.me/api/portraits/women/44.jpg", title: "AI 生成的珠宝首饰，没想到直接铸造效果这么好", content: "尝试了网站的图生 3D 功能，输入了草图，生成的模型稍作修改就直接送去失蜡铸造了。细节保留得很完整！", modelImage: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=400", realImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400", likes: 890, comments: 120, shares: 45, tags: ["珠宝设计", "铸造"], time: "2 小时前", heat: 1200 },
  { id: 3, author: "FuturePrint", avatar: "https://randomuser.me/api/portraits/men/85.jpg", title: "机械结构件验证，精度很顶", content: "功能性验证，尺寸分毫不差，PLA 打印。", modelImage: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&q=80&w=400", realImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400", likes: 120, comments: 18, shares: 2, tags: ["工业", "验证"], time: "5 小时前", heat: 450 },
  { id: 4, author: "ArtLover", avatar: "https://randomuser.me/api/portraits/women/67.jpg", title: "第一次用 AI 生成 3D 模型，效果惊艳！", content: "上传了一张手绘草图，没想到生成的 3D 模型这么完整。稍微调整了一下就导入 Blender 了，太方便了！", modelImage: "https://images.unsplash.com/photo-1621360841013-c768371e93cf?auto=format&fit=crop&q=80&w=400", realImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=400", likes: 567, comments: 89, shares: 34, tags: ["AI 生成", "新手"], time: "1 天前", heat: 780 },
  { id: 5, author: "GameDev", avatar: "https://randomuser.me/api/portraits/men/23.jpg", title: "用这里的模型做了个游戏 Demo，分享一下", content: "在模型交易区买了不少资产，组合起来做了个 RPG 小 Demo。感谢各位创作者的优质内容！", modelImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400", realImage: "https://images.unsplash.com/photo-1535378437327-109726b23d53?auto=format&fit=crop&q=80&w=400", likes: 1234, comments: 156, shares: 67, tags: ["游戏开发", "作品展示"], time: "2 天前", heat: 1560 },
  { id: 6, author: "PrintMaster", avatar: "https://randomuser.me/api/portraits/men/56.jpg", title: "3D 打印参数分享 - 如何获得最佳表面质量", content: "分享一些打印参数设置心得，包括层高、填充率、支撑设置等。希望能帮到新手朋友！", modelImage: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&q=80&w=400", realImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400", likes: 678, comments: 92, shares: 45, tags: ["教程", "3D 打印"], time: "3 天前", heat: 890 },
];

// ==================== 用户评价数据 (新增) ====================
export const USER_REVIEWS = [
  { id: 1, user: "独立游戏开发者", avatar: "https://randomuser.me/api/portraits/men/12.jpg", rating: 5, content: "AI 生成功能太实用了！上传概念图就能快速得到 3D 模型，大大加快了我们的原型开发速度。", project: "游戏资产生成", time: "2026-02-28" },
  { id: 2, user: "珠宝设计师 Lisa", avatar: "https://randomuser.me/api/portraits/women/23.jpg", rating: 5, content: "生成的模型精度很高，直接用于失蜡铸造完全没问题。已经推荐给同行朋友们了！", project: "珠宝设计", time: "2026-02-25" },
  { id: 3, user: "建筑可视化工作室", avatar: "https://randomuser.me/api/portraits/men/34.jpg", rating: 4, content: "模型质量不错，交易流程也很顺畅。希望以后能增加更多建筑类的预制模型。", project: "建筑可视化", time: "2026-02-20" },
  { id: 4, user: "3D 打印爱好者", avatar: "https://randomuser.me/api/portraits/women/45.jpg", rating: 5, content: "在这里接了不少定制单，平台担保很放心。供应商打印质量也很可靠！", project: "3D 打印服务", time: "2026-02-18" },
  { id: 5, user: "动画制作公司", avatar: "https://randomuser.me/api/portraits/men/56.jpg", rating: 5, content: "模型交易区的资源太丰富了，帮我们节省了大量建模时间。会员套餐性价比很高！", project: "动画制作", time: "2026-02-15" },
  { id: 6, user: "产品设计师", avatar: "https://randomuser.me/api/portraits/women/67.jpg", rating: 4, content: "AI 生成速度快，质量也不错。如果能增加更多格式导出就更完美了。", project: "产品设计", time: "2026-02-10" },
];

// ==================== 生成案例数据 (新增) ====================
export const GENERATION_CASES = [
  { id: 1, title: "赛博朋克义肢", inputImage: "https://images.unsplash.com/photo-1615840287214-7ff58ee0489b?auto=format&fit=crop&q=80&w=400", outputImage: "https://images.unsplash.com/photo-1535378437327-109726b23d53?auto=format&fit=crop&q=80&w=400", polyCount: "15,234", time: "2 分 15 秒", format: "OBJ/FBX", description: "从概念图到完整 3D 模型，保留所有机械细节" },
  { id: 2, title: "奇幻生物 - 龙", inputImage: "https://images.unsplash.com/photo-1596727147705-54a9d094368c?auto=format&fit=crop&q=80&w=400", outputImage: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=400", polyCount: "42,567", time: "3 分 08 秒", format: "FBX/Blend", description: "手绘草图转 3D，自动生成鳞片和翅膀结构" },
  { id: 3, title: "现代建筑", inputImage: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=400", outputImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400", polyCount: "85,123", time: "4 分 32 秒", format: "OBJ/3dsMax", description: "建筑立面图转 3D 模型，自动添加窗户和阳台细节" },
  { id: 4, title: "复古汽车", inputImage: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=400", outputImage: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=400", polyCount: "67,890", time: "3 分 45 秒", format: "FBX/OBJ", description: "老照片修复后生成 3D 模型，车身曲线完美还原" },
  { id: 5, title: "珠宝首饰", inputImage: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=400", outputImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400", polyCount: "28,456", time: "2 分 50 秒", format: "STL/OBJ", description: "设计手稿转 3D，可直接用于 3D 打印和铸造" },
  { id: 6, title: "游戏角色", inputImage: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&q=80&w=400", outputImage: "https://images.unsplash.com/photo-1535378437327-109726b23d53?auto=format&fit=crop&q=80&w=400", polyCount: "35,678", time: "3 分 20 秒", format: "FBX/Maya", description: "角色概念图转 3D，自动绑定基础骨骼" },
  { id: 7, title: "家具设计", inputImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400", outputImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=400", polyCount: "18,234", time: "2 分 05 秒", format: "OBJ/3dsMax", description: "产品草图转 3D，适合室内可视化使用" },
  { id: 8, title: "机械零件", inputImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400", outputImage: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&q=80&w=400", polyCount: "12,567", time: "1 分 55 秒", format: "STL/STEP", description: "工程图转 3D，尺寸精确可用于生产" },
  { id: 9, title: "动漫角色", inputImage: "https://images.unsplash.com/photo-1596727147705-54a9d094368c?auto=format&fit=crop&q=80&w=400", outputImage: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&q=80&w=400", polyCount: "32,890", time: "2 分 40 秒", format: "FBX/Blend", description: "二次元立绘转 3D，保留原有风格特征" },
  { id: 10, title: "场景道具", inputImage: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?auto=format&fit=crop&q=80&w=400", outputImage: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80&w=400", polyCount: "22,345", time: "2 分 25 秒", format: "OBJ/FBX", description: "参考图转 3D 道具，适合游戏和动画使用" },
];

// ==================== FAQ 常见问题 (新增) ====================
export const FAQ_DATA = {
  generate: [
    { q: "支持哪些图片格式？", a: "我们支持 JPG、PNG、WEBP 格式，单张图片最大 20MB。建议使用清晰的正面或 45 度角图片，生成效果更佳。" },
    { q: "生成一个模型需要多长时间？", a: "通常 2-5 分钟，具体取决于模型复杂度。简单物体约 2 分钟，复杂角色或场景约 4-5 分钟。" },
    { q: "生成的模型可以用于商业用途吗？", a: "可以！您拥有生成模型的完整使用权，包括商业用途。但我们建议对重要项目进行二次优化。" },
    { q: "模型精度能达到多少？", a: "默认生成模型面数在 1 万 -10 万之间，可根据需求调整。支持导出高精度版本用于 3D 打印。" },
    { q: "可以指定输出格式吗？", a: "支持 OBJ、FBX、Blend、STL 等多种格式导出，会员用户可同时导出多种格式。" },
    { q: "生成不满意可以重新生成吗？", a: "可以！每个用户每天有 3 次免费生成机会，会员无限次。每次可调整参数重新生成。" },
  ],
  trading: [
    { q: "如何购买模型？", a: "点击模型卡片 → 加入购物车 → 结算支付。支付成功后可在「我的模型」中下载。" },
    { q: "购买后可以退款吗？", a: "下载前可全额退款。下载后如发现模型与描述严重不符，48 小时内可申请客服介入。" },
    { q: "模型授权范围是什么？", a: "个人授权：可用于个人项目。商业授权：可用于商业项目。独家授权：买断版权，具体见模型详情页。" },
    { q: "如何成为创作者售卖模型？", a: "完成实名认证 → 上传作品审核 → 审核通过后即可上架售卖。平台抽成 15%。" },
  ],
  printing: [
    { q: "如何选择靠谱的供应商？", a: "查看供应商评分（4.8 分以上推荐）、成交量、用户评价。平台担保交易，不满意可申诉。" },
    { q: "打印价格如何计算？", a: "根据模型体积、材料、工艺自动估算。可在上传模型后获取即时报价。" },
    { q: "打印周期是多久？", a: "通常 3-7 天，加急服务 1-2 天（额外收费）。具体见供应商详情页。" },
    { q: "支持哪些打印材料？", a: "PLA、ABS、树脂、尼龙、金属等多种材料。不同供应商支持的材料可能不同。" },
  ],
  account: [
    { q: "会员有哪些权益？", a: "无限次 AI 生成、高清模型下载、专属折扣、优先客服、批量下载等。月卡¥99，年卡¥999。" },
    { q: "如何修改个人信息？", a: "进入个人中心 → 账户设置 → 修改资料。头像、昵称、简介均可自定义。" },
    { q: "账号安全如何保障？", a: "支持手机验证、邮箱验证、两步验证。建议绑定手机和邮箱，开启二次验证。" },
  ],
};

// ==================== 导航配置 ====================
export const NAV_ITEMS = [
  { id: 'generate', label: 'AI 生成', icon: 'Activity' },
  { id: 'trading', label: '模型交易', icon: 'ShoppingCart' },
  { id: 'requirements', label: '需求大厅', icon: 'Banknote' },
  { id: 'community', label: '社区讨论', icon: 'Users' },
  { id: 'suppliers', label: '供应商', icon: 'Calculator' }
];

// ==================== 平台统计数据 (新增) ====================
export const PLATFORM_STATS = {
  modelsGenerated: "50,000+",
  activeUsers: "10,000+",
  modelsTraded: "25,000+",
  totalTransactions: "¥8,500,000+",
  creators: "3,500+",
  suppliers: "150+"
};
