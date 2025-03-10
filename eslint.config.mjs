import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    extends: [
      pluginJs.configs.recommended,  // Utilisation de la configuration ESLint pour le JavaScript
      pluginReact.configs.flat.recommended, // Utilisation de la configuration pour React
    ],
  },
];
