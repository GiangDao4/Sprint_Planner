import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.js", "**/*.ts"],
    ignores: ["node_modules", "dist"],
    languageOptions: {
      parserOptions: {
        project: "../tsconfig.elint.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "@typescript-eslint/no-var-requires": "off",
    },
  },
);
