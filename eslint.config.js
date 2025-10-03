// eslint.config.js

import js from "@eslint/js"
import globals from "globals"
import { defineConfig } from "eslint/config"
// importă path dacă vrei să folosești path.resolve, dar pentru simplitate
// putem folosi un string literal direct

export default defineConfig({
  ignorePatterns: ["dist"],
  files: ["src/**/*.{js,jsx}"],
  // ... restul configurației ...

  // ------------------------------------------
  // SECȚIUNE NOUĂ PENTRU A ÎNȚELEGE ALIAS-UL @/
  // ------------------------------------------
  settings: {
    "import/resolver": {
      alias: {
        map: [
          // Mapează aliasul @/ la calea reală: src/
          ["@", "./src"],
        ],
        extensions: [".js", ".jsx", ".json"],
      },
    },
  },
  // ------------------------------------------

  // ... restul configurației ...
})
