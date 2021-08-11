module.exports = {
  "plugins": ["@typescript-eslint"],
  rules: {
    // ? Just some style stuff
    // ! I hate semi
    semi: ["error", "never"],
    // Just modify error to warn
    "array-bracket-spacing": ["warn", "never"],
    "brace-style": "warn",
    "object-curly-spacing": "warn",
    "no-param-reassign": "warn",
    "no-underscore-dangle": "warn",
    "no-empty-function": "warn",
    "no-trailing-spaces": "warn",
    "arrow-parens": "warn",
    "eol-last": "warn",
    'max-len': "warn",
    "comma-dangle": "warn",
    camelcase: "off",
    quotes: "off",
    "linebreak-style": ["off", "unix"],
    "lines-between-class-members": "off",
    // ? Security and Error proof

    // Don't use bitwise unless you know what are you doing
    "no-bitwise": "error",
    "no-unused-vars": "warn",
    "class-methods-use-this": "warn",
    "max-classes-per-file": "off",
    "no-plusplus": "off",
    'no-console': 'warn',

    // ? TypeScript
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
}
