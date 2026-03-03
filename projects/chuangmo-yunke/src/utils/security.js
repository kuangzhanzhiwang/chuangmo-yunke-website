import DOMPurify from 'dompurify';

/**
 * 安全工具集
 * XSS 防护，输入清理等
 */

/**
 * 清理 HTML，防止 XSS 攻击
 */
export function sanitizeHTML(html) {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'ol', 'li', 'span'],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class', 'id'],
    ADD_ATTR: ['target'],
    FORCE_ATTR: {
      a: { target: '_blank', rel: 'noopener noreferrer' }
    }
  });
}

/**
 * 清理文本输入
 */
export function sanitizeText(text) {
  if (typeof text !== 'string') return text;
  
  // 移除潜在的恶意脚本
  return text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim();
}

/**
 * 验证邮箱格式
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 验证手机号格式（中国大陆）
 */
export function isValidPhone(phone) {
  const phoneRegex = /^1[3-9]\d{9}$/;
  return phoneRegex.test(phone);
}

/**
 * 验证 URL 格式
 */
export function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * 验证密码强度
 * 至少 8 位，包含大小写字母和数字
 */
export function validatePassword(password) {
  const requirements = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
  };

  const score = Object.values(requirements).filter(Boolean).length;
  
  return {
    valid: score >= 3 && requirements.length,
    score,
    requirements
  };
}

/**
 * 防止 CSRF 攻击 - 生成 Token
 */
export function generateCSRFToken() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * 验证 CSRF Token
 */
export function validateCSRFToken(token, storedToken) {
  if (!token || !storedToken) return false;
  return token === storedToken;
}

/**
 * 安全地设置 Cookie
 */
export function setSecureCookie(name, value, days = 7) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; Secure; SameSite=Strict`;
}

/**
 * 获取 Cookie
 */
export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

/**
 * 删除 Cookie
 */
export function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

/**
 * 内容安全策略 (CSP) 报告
 */
export function reportCSPViolation(violation) {
  console.warn('CSP Violation:', violation);
  
  // 可以发送到服务器进行记录
  fetch('/api/security/csp-report', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'csp-report': violation })
  }).catch(console.error);
}

/**
 * 监听 CSP 违规
 */
export function listenCSPViolations() {
  document.addEventListener('securitypolicyviolation', (e) => {
    reportCSPViolation({
      'blocked-uri': e.blockedURI,
      'violated-directive': e.violatedDirective,
      'original-policy': e.originalPolicy,
      'source-file': e.sourceFile,
      'line-number': e.lineNumber,
      'column-number': e.columnNumber
    });
  });
}

/**
 * 防止点击劫持
 */
export function preventClickjacking() {
  if (window.top !== window.self) {
    window.top.location = window.self.location;
  }
}

/**
 * 安全的文件类型检查
 */
export function validateFileType(file, allowedTypes) {
  const fileType = file.type || '';
  const fileName = file.name.toLowerCase();
  
  // 检查 MIME 类型
  if (allowedTypes.includes(fileType)) return true;
  
  // 检查文件扩展名
  const extension = fileName.split('.').pop();
  return allowedTypes.some(type => type.endsWith(extension));
}

/**
 * 限制文件大小
 */
export function validateFileSize(file, maxSizeMB) {
  const maxSize = maxSizeMB * 1024 * 1024;
  return file.size <= maxSize;
}

export default {
  sanitizeHTML,
  sanitizeText,
  isValidEmail,
  isValidPhone,
  isValidURL,
  validatePassword,
  generateCSRFToken,
  validateCSRFToken,
  setSecureCookie,
  getCookie,
  deleteCookie,
  reportCSPViolation,
  listenCSPViolations,
  preventClickjacking,
  validateFileType,
  validateFileSize
};
