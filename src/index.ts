import type { TSESLint } from "@typescript-eslint/utils"
import { enforceEqeqNull } from "./rules/enforce-eqeq-null"

export default {
  configs: {
    extends: {
      plugins: ["enforce-eqeq-null"],
      rules: {
        "enforce-eqeq-null/enforce-eqeq-null": "error",
      },
    },
  },
  rules: {
    "enforce-eqeq-null": enforceEqeqNull,
  },
} satisfies TSESLint.Linter.Plugin
