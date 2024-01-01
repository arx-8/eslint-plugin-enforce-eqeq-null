/// <reference types="vitest" />

import { defineConfig } from "vite"

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export -- `export default` is required for vite.config.ts
export default defineConfig({
  test: {
    exclude: ["**/node_modules/**", "**/dist/**"],
    globals: true,
  },
})
