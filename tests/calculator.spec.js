// tests/calculator.spec.js
import { test, expect } from '@playwright/test';

test('should calculate the correct result', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Tester l'addition
  await page.fill('input[type="text"]', '2 + 3');
  await page.click('button:has-text("=")');
  
  const result = await page.textContent('h2');
  expect(result).toBe('Result: 5');
});
