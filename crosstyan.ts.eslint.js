/*
 * Use file this after 
 * plugin:@typescript-eslint/recommended
 */
module.exports = {
  "plugins": ["@typescript-eslint"],
  rules: {
    // ? TypeScript
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/ban-ts-comment": ["error",{
        "ts-ignore": "allow-with-description",
        "minimumDescriptionLength": 10
      }],
    "@typescript-eslint/explicit-module-boundary-types": "off",

    // For compatibility
    // See https://github.com/typescript-eslint/typescript-eslint/issues/2483
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error"
  },
}
