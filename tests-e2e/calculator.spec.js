import { test, expect } from '@playwright/test';

test('should calculate the correct result', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Tester l'addition
  await page.fill('input[type="text"]', '2 + 3');
  await page.click('button:has-text("=")');
  
  const result = await page.textContent('h2');
  expect(result).toBe('Result: 5');
});


test('should add element to history and clear the history', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.click('button:has-text("1")');
  await page.click('button:has-text("2")');
  await page.click('button:has-text("+")');
  await page.click('button:has-text("3")');
  await page.click('button:has-text("=")');

  const historyBeforeClear = await page.textContent('ul');
  expect(historyBeforeClear).toContain('12+3 = 15');

  await page.click('button:has-text("Clear History")');

  // Vérifier que l'historique est vide
  const historyAfterClear = await page.textContent('ul');
  expect(historyAfterClear).toBe(''); 
  
  const result = await page.textContent('h2');
  expect(result).toBe('Result: 15');
});


test('should delete the calculation when clicking on C', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('input[type="text"]', '2 + 3');

  await page.click('button:has-text("C")');

  const clearedInput = await page.inputValue('input[type="text"]');
  expect(clearedInput).toBe('');
});



test('should delete the last character when clicking on ⌫', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('input[type="text"]', '123');

  let inputValue = await page.inputValue('input[type="text"]');
  expect(inputValue).toBe('123');

  await page.click('button:has-text("Delete")');

  inputValue = await page.inputValue('input[type="text"]');
  expect(inputValue).toBe('12');
});
