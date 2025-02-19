import { test, expect } from '@playwright/test';

test('has welcome text', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page.locator("p#welcome")).toContainText("Welcome");
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByRole('link', { name: 'CNN' }).click();

  await expect(page).toHaveURL("http://localhost:3000/station/cnnnews")
  await expect(page.locator("h1")).toContainText("CNN")
});
