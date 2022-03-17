module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      process.env.NODE_ENV === "development" ? "warn" : "error",
      {
        varsIgnorePattern: "React",
        args: "none",
        ignoreRestSiblings: true
      }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": process.env.NODE_ENV === "development" ? "warn" : "error",
    curly: "error",
    "no-var": "error",
    eqeqeq: "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
