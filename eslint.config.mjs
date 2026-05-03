import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["react", "react-dom"],
              message:
                "React 17 이상에서는 React를 명시적으로 import할 필요가 없습니다.",
            },
          ],
        },
      ],
    },
    languageOptions: { globals: globals.browser },
    settings: { react: { version: "detect" } },
  },
  pluginReact.configs.flat.recommended,
]);
