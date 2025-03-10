// playwright.config.js
export default {
    testDir: './tests',  // Assure-toi que tes tests sont dans ce dossier
    timeout: 30000,
    use: {
      headless: true,  // Pour ne pas afficher le navigateur pendant les tests
      actionTimeout: 10000,
    },
  };
  