import { describe, it, expect, vi } from 'vitest';
import { formatNumber, formatTime, formatRelativeTime, debounce, throttle } from '../helpers.js';

describe('Helper Functions', () => {
  describe('formatNumber', () => {
    it('应该正确格式化数字', () => {
      expect(formatNumber(1000)).toBe('1,000');
      expect(formatNumber(1000000)).toBe('1,000,000');
      expect(formatNumber(123456789)).toBe('123,456,789');
    });
  });

  describe('formatTime', () => {
    it('应该正确格式化时间', () => {
      const date = new Date('2024-01-15 14:30:00');
      expect(formatTime(date, 'YYYY-MM-DD')).toBe('2024-01-15');
      expect(formatTime(date, 'YYYY-MM-DD HH:mm')).toBe('2024-01-15 14:30');
    });
  });

  describe('formatRelativeTime', () => {
    it('应该显示刚刚', () => {
      const now = new Date();
      expect(formatRelativeTime(now)).toBe('刚刚');
    });

    it('应该显示 X 分钟前', () => {
      const past = new Date(Date.now() - 30 * 60000); // 30 分钟前
      expect(formatRelativeTime(past)).toContain('分钟前');
    });

    it('应该显示 X 小时前', () => {
      const past = new Date(Date.now() - 3 * 3600000); // 3 小时前
      expect(formatRelativeTime(past)).toContain('小时前');
    });
  });

  describe('debounce', () => {
    it('应该延迟执行函数', async () => {
      const mockFn = vi.fn();
      const debouncedFn = debounce(mockFn, 100);
      
      debouncedFn();
      expect(mockFn).not.toHaveBeenCalled();
      
      await new Promise(resolve => setTimeout(resolve, 150));
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('throttle', () => {
    it('应该限制函数执行频率', async () => {
      const mockFn = vi.fn();
      const throttledFn = throttle(mockFn, 100);
      
      throttledFn();
      throttledFn();
      throttledFn();
      
      expect(mockFn).toHaveBeenCalledTimes(1);
      
      await new Promise(resolve => setTimeout(resolve, 150));
      throttledFn();
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
  });
});
