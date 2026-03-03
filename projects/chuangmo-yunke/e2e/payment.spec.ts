import { test, expect } from '@playwright/test';

test.describe('支付流程测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByText('模型交易').click();
  });

  test('支付弹窗打开', async ({ page }) => {
    // 点击第一个模型卡片
    const firstModel = page.locator('[data-testid="model-card"]').first();
    await firstModel.click();
    
    // 点击购买按钮
    await page.getByText('购买').click();
    
    // 检查支付弹窗
    await expect(page.getByText('订单支付')).toBeVisible();
  });

  test('选择支付方式', async ({ page }) => {
    // 打开支付弹窗
    await page.getByText('购买').first().click();
    
    // 选择支付宝
    await page.getByText('支付宝').click();
    const alipayButton = page.locator('[data-testid="payment-alipay"]');
    await expect(alipayButton).toHaveClass(/border-blue-500/);
  });

  test('支付成功流程', async ({ page }) => {
    // 打开支付弹窗
    await page.getByText('购买').first().click();
    
    // 点击支付
    await page.getByText(/立即支付/).click();
    
    // 等待支付成功
    await expect(page.getByText('支付成功！')).toBeVisible();
  });
});
