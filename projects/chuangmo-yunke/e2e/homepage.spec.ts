import { test, expect } from '@playwright/test';

test.describe('创模云科 - 首页测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('页面标题正确', async ({ page }) => {
    await expect(page).toHaveTitle(/创模云科/);
  });

  test('导航栏显示所有菜单项', async ({ page }) => {
    const navItems = [
      'AI 生成',
      '模型交易',
      '需求大厅',
      '社区讨论',
      '供应商'
    ];

    for (const item of navItems) {
      await expect(page.getByText(item)).toBeVisible();
    }
  });

  test('点击导航切换页面', async ({ page }) => {
    await page.getByText('模型交易').click();
    await expect(page).toHaveURL(/trading/);
    
    await page.getByText('需求大厅').click();
    await expect(page).toHaveURL(/requirements/);
    
    await page.getByText('社区讨论').click();
    await expect(page).toHaveURL(/community/);
  });

  test('搜索框可见', async ({ page }) => {
    await page.getByText('模型交易').click();
    const searchInput = page.getByPlaceholder(/搜索模型/);
    await expect(searchInput).toBeVisible();
  });

  test('页脚信息显示正确', async ({ page }) => {
    await expect(page.getByText('创模云科')).toBeVisible();
    await expect(page.getByText(/contact@chuangmoyunke.com/)).toBeVisible();
    await expect(page.getByText(/400-888-9999/)).toBeVisible();
  });

  test('移动端菜单响应式', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const menuButton = page.getByRole('button', { name: /menu/i });
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    
    await expect(page.getByText('AI 生成')).toBeVisible();
    await expect(page.getByText('登录')).toBeVisible();
  });

  test('PWA manifest 加载', async ({ page }) => {
    const manifestLink = page.locator('link[rel="manifest"]');
    await expect(manifestLink).toHaveAttribute('href', '/manifest.json');
  });

  test('页面加载性能', async ({ page }) => {
    const startTime = Date.now();
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    expect(loadTime).toBeLessThan(5000); // 5 秒内加载完成
  });
});
