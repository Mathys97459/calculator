import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    exclude: ['tests-e2e/**/*.spec.js', 'node_modules', 'dist', '.next'],
    globals: false,
  },
});
