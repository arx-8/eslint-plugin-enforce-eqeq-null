import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/utils"
import { createRule } from "../utils/createRule"

const isNullLiteral = (
  node: TSESTree.Expression | TSESTree.PrivateIdentifier,
): boolean => {
  return node.type === AST_NODE_TYPES.Literal && node.value === null
}

const isUndefinedLiteral = (
  node: TSESTree.Expression | TSESTree.PrivateIdentifier,
): boolean => {
  return node.type === AST_NODE_TYPES.Identifier && node.name === "undefined"
}

export const enforceEqeqNull = createRule({
  create: (context) => {
    return {
      BinaryExpression: (node) => {
        if (
          (node.operator === "===" || node.operator === "!==") &&
          (isNullLiteral(node.left) ||
            isNullLiteral(node.right) ||
            isUndefinedLiteral(node.left) ||
            isUndefinedLiteral(node.right))
        ) {
          context.report({
            messageId: "enforceEqeqNull",
            node,
          })
        }
      },
    }
  },
  defaultOptions: [],
  meta: {
    docs: {
      description: "Enforce the use of == or != for null and undefined checks.",
      recommended: "recommended",
    },
    messages: {
      enforceEqeqNull: `Use "== null" or "!= null" style for "null" and "undefined" checks.`,
    },
    schema: [],
    type: "suggestion",
  },
  name: __filename,
})
