import { describe, it, expect, vi } from 'vitest';
import { sanitizeText, isValidEmail, isValidPhone, validatePassword } from '../security.js';

describe('Security Utils', () => {
  describe('sanitizeText', () => {
    it('应该移除 script 标签', () => {
      const input = '<script>alert("xss")</script>Hello';
      expect(sanitizeText(input)).not.toContain('<script>');
    });

    it('应该移除 javascript: 协议', () => {
      const input = 'javascript:alert(1)';
      expect(sanitizeText(input)).not.toContain('javascript:');
    });

    it('应该移除 on 事件处理器', () => {
      const input = 'onclick=alert(1)';
      expect(sanitizeText(input)).not.toContain('onclick=');
    });
  });

  describe('isValidEmail', () => {
    it('应该验证正确的邮箱', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.cn')).toBe(true);
    });

    it('应该拒绝错误的邮箱', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
    });
  });

  describe('isValidPhone', () => {
    it('应该验证正确的手机号', () => {
      expect(isValidPhone('13800138000')).toBe(true);
      expect(isValidPhone('19912345678')).toBe(true);
    });

    it('应该拒绝错误的手机号', () => {
      expect(isValidPhone('12345678901')).toBe(false);
      expect(isValidPhone('1380013800')).toBe(false);
      expect(isValidPhone('23800138000')).toBe(false);
    });
  });

  describe('validatePassword', () => {
    it('应该验证强密码', () => {
      const result = validatePassword('Test1234!');
      expect(result.valid).toBe(true);
      expect(result.score).toBeGreaterThanOrEqual(3);
    });

    it('应该拒绝弱密码', () => {
      const result = validatePassword('123456');
      expect(result.valid).toBe(false);
    });

    it('应该检查密码要求', () => {
      const result = validatePassword('Test1234');
      expect(result.requirements.length).toBe(true);
      expect(result.requirements.uppercase).toBe(true);
      expect(result.requirements.lowercase).toBe(true);
      expect(result.requirements.number).toBe(true);
    });
  });
});
