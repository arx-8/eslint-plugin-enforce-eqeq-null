import { ESLintUtils } from "@typescript-eslint/utils"
import * as path from "path"

export const createRule = ESLintUtils.RuleCreator((name) => {
  const dirname = path.relative(__dirname, path.dirname(name))
  const basename = path.basename(name, path.extname(name))
  return `https://github.com/arx-8/eslint-plugin-enforce-eqeq-null/blob/master/docs/${dirname}/${basename}.md`
})
