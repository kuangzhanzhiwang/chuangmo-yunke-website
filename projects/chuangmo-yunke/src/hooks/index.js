import { useState, useEffect } from 'react';

/**
 * 图片上传 Hook
 * @param {string} accept - 接受的文件类型
 * @param {number} maxSize - 最大文件大小 (MB)
 */
export function useImageUpload(accept = 'image/*', maxSize = 20) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateFile = (file) => {
    if (!file) return '请选择文件';
    
    const fileSize = file.size / 1024 / 1024;
    if (fileSize > maxSize) {
      return `文件大小不能超过 ${maxSize}MB`;
    }
    
    if (!file.type.startsWith('image/')) {
      return '请上传图片文件';
    }
    
    return null;
  };

  const uploadFile = (uploadedFile) => {
    const validationError = validateFile(uploadedFile);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setFile(uploadedFile);
    setLoading(true);
    setProgress(0);

    // 创建预览
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(uploadedFile);

    // 模拟上传进度
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 300);
  };

  const reset = () => {
    setFile(null);
    setPreview(null);
    setProgress(null);
    setError(null);
    setLoading(false);
  };

  return {
    file,
    preview,
    progress: Math.min(progress, 100),
    error,
    loading,
    uploadFile,
    reset
  };
}

/**
 * 本地存储 Hook
 * @param {string} key - 存储键名
 * @param {any} initialValue - 初始值
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue, removeValue];
}

/**
 * 防抖 Hook
 * @param {Function} func - 要防抖的函数
 * @param {number} wait - 等待时间 (ms)
 */
export function useDebounce(func, wait = 300) {
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const debouncedFunc = (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    const newTimeoutId = setTimeout(() => {
      func(...args);
    }, wait);
    
    setTimeoutId(newTimeoutId);
  };

  return debouncedFunc;
}
