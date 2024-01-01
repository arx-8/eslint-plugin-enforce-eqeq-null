import { TSESLint } from "@typescript-eslint/utils"
import { enforceEqeqNull } from "../../src/rules/enforce-eqeq-null"

export const ruleTester = new TSESLint.RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
})

ruleTester.run("enforce-eqeq-null", enforceEqeqNull, {
  invalid: [
    {
      code: "x === null",
      errors: [{ messageId: "enforceEqeqNull" }],
    },
    {
      code: "x !== null",
      errors: [{ messageId: "enforceEqeqNull" }],
    },
    {
      code: "x === undefined",
      errors: [{ messageId: "enforceEqeqNull" }],
    },
    {
      code: "x !== undefined",
      errors: [{ messageId: "enforceEqeqNull" }],
    },
  ],
  valid: [
    "x == null",
    "x != null",
    "if (x == null) {}",
    "if (x != null) {}",
    "if (x == null || x != null) {}",
    "if (x != null && x == null) {}",
  ],
})
