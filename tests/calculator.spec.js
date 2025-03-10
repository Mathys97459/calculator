// tests/calculator.spec.js
const { test, expect } = require('@playwright/test');

test('should calculate the correct result', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Assure-toi que ton app tourne en local

  // Tester l'addition
  await page.fill('input[type="text"]', '2 + 3');
  await page.click('button:has-text("Calculate")');
  
  const result = await page.textContent('h2');
  expect(result).toBe('Result: 5');
});
