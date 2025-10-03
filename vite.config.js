import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  // ADĂUGĂ AICI CONFIGURAȚIA DE RESOLVE (ALIAS)
  resolve: {
    alias: {
      // @/ va fi echivalent cu C:/Users/anghe/Desktop/portofolio/src/
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // FINAL CONFIGURAȚIE
})
