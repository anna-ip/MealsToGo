module.exports = {
  extends: [
    "@react-native-community",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  plugins: ["import"],
  rules: {
    "sort-imports": [
      "error",
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          ["external", "builtin"],
          "internal",
          ["sibling", "parent"],
          "index",
        ],
        pathGroups: [
          {
            pattern: "@(react|react-native)",
            group: "external",
            position: "before",
          },
          {
            pattern: "@src/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal", "react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    quotes: [2, "double", { avoidEscape: true }],
    "react/prop-types": 0,
  },
};
