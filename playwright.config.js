export default {
  testDir: './tests-e2e',
  timeout: 30000,
  use: {
    headless: true,
    actionTimeout: 10000,
  },
  globalSetup: './global-setup.js', // Ajoute un fichier pour isoler les contextes globaux
};
