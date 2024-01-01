// @ts-check

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  env: {
    node: true,
  },
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:typescript-sort-keys/recommended",
    "plugin:@typescript-eslint/all",
    "prettier",
  ],
  overrides: [
    {
      // For test code
      extends: ["plugin:vitest/all"],
      files: ["*.test.ts"],
      rules: {
        "vitest/max-expects": 0,
        "vitest/require-hook": 0,
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: true,
  },
  plugins: ["sort-destructure-keys", "sort-keys-fix"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": [2, "type"],
    "@typescript-eslint/explicit-function-return-type": [
      2,
      {
        allowExpressions: true,
      },
    ],
    "@typescript-eslint/naming-convention": [
      2,
      {
        format: ["PascalCase"],
        selector: ["typeLike"],
      },
      {
        // basic JavaScript naming conventions
        format: ["camelCase"],
        leadingUnderscore: "allow",
        selector: ["memberLike", "property"],
      },
      {
        format: [],
        // Allow object-keys various cases (kebab-case, camelCase, css selector, etc.).
        selector: ["objectLiteralMethod", "objectLiteralProperty"],
      },
    ],
    "@typescript-eslint/no-magic-numbers": 0,
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/prefer-readonly-parameter-types": 0,
    "@typescript-eslint/strict-boolean-expressions": [
      2,
      {
        allowNullableBoolean: true,
        allowNumber: false,
        allowString: false,
      },
    ],
    "no-console": [
      2,
      {
        allow: ["info", "warn", "error"],
      },
    ],
    "no-implicit-coercion": 2,
    "no-restricted-syntax": [
      2,
      {
        message:
          "Do not use `enum`. Use `Plain Object` or `Literal Types` instead.",
        selector: "TSEnumDeclaration",
      },
      {
        message:
          "`for..in` loops iterate over the entire prototype chain, which is virtually never what you want. Use `for..of` or `Object.{keys,values,entries}`, and iterate over the resulting array.",
        selector: "ForInStatement",
      },
      {
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        selector: "LabeledStatement",
      },
      {
        message:
          "ES-Class has many traps. Use `Plain Object ({})` or function.",
        selector: "ClassDeclaration",
      },
      {
        message: "Use 'src/utils/date' instead.",
        selector: "NewExpression[callee.name='Date']",
      },
    ],
    "prefer-template": 2,
    "sort-destructure-keys/sort-destructure-keys": 2,
    "sort-keys-fix/sort-keys-fix": 2,
    yoda: [2, "never", { onlyEquality: true }],
  },
}

module.exports = config
