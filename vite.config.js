import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    exclude: ['tests/**/*.spec.js', 'node_modules', 'dist', '.next']
  },
});

