/**
 * API 服务配置
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.chuangmoyunke.com';

/**
 * 通用请求方法
 */
async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.error('Request failed:', error);
    return { data: null, error: error.message };
  }
}

/**
 * API 服务
 */
export const api = {
  // 用户相关
  user: {
    login: (credentials) => request('/auth/login', { 
      method: 'POST', 
      body: JSON.stringify(credentials) 
    }),
    register: (userData) => request('/auth/register', { 
      method: 'POST', 
      body: JSON.stringify(userData) 
    }),
    profile: () => request('/user/profile'),
    updateProfile: (data) => request('/user/profile', { 
      method: 'PUT', 
      body: JSON.stringify(data) 
    }),
  },

  // 模型相关
  models: {
    list: (params = {}) => request('/models?' + new URLSearchParams(params)),
    detail: (id) => request(`/models/${id}`),
    create: (data) => request('/models', { 
      method: 'POST', 
      body: JSON.stringify(data) 
    }),
    update: (id, data) => request(`/models/${id}`, { 
      method: 'PUT', 
      body: JSON.stringify(data) 
    }),
    delete: (id) => request(`/models/${id}`, { 
      method: 'DELETE' 
    }),
    search: (query) => request(`/models/search?q=${encodeURIComponent(query)}`),
  },

  // AI 生成相关
  ai: {
    generate: (imageFile) => {
      const formData = new FormData();
      formData.append('image', imageFile);
      
      return request('/ai/generate', {
        method: 'POST',
        body: formData,
      });
    },
    status: (taskId) => request(`/ai/status/${taskId}`),
    result: (taskId) => request(`/ai/result/${taskId}`),
  },

  // 需求相关
  requirements: {
    list: (params = {}) => request('/requirements?' + new URLSearchParams(params)),
    detail: (id) => request(`/requirements/${id}`),
    create: (data) => request('/requirements', { 
      method: 'POST', 
      body: JSON.stringify(data) 
    }),
    update: (id, data) => request(`/requirements/${id}`, { 
      method: 'PUT', 
      body: JSON.stringify(data) 
    }),
    delete: (id) => request(`/requirements/${id}`, { 
      method: 'DELETE' 
    }),
  },

  // 社区相关
  posts: {
    list: (params = {}) => request('/posts?' + new URLSearchParams(params)),
    detail: (id) => request(`/posts/${id}`),
    create: (data) => request('/posts', { 
      method: 'POST', 
      body: JSON.stringify(data) 
    }),
    like: (id) => request(`/posts/${id}/like`, { method: 'POST' }),
    comment: (id, content) => request(`/posts/${id}/comments`, { 
      method: 'POST', 
      body: JSON.stringify({ content }) 
    }),
  },

  // 供应商相关
  suppliers: {
    list: (params = {}) => request('/suppliers?' + new URLSearchParams(params)),
    detail: (id) => request(`/suppliers/${id}`),
    estimate: (id, data) => request(`/suppliers/${id}/estimate`, { 
      method: 'POST', 
      body: JSON.stringify(data) 
    }),
  },

  // 排行榜相关
  leaderboard: {
    creators: () => request('/leaderboard/creators'),
    bounty: () => request('/leaderboard/bounty'),
  },
};

export default api;
