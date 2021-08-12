// Crosstyan custom eslint rule based on Airbnb
module.exports = {
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
    // You can add comment to the function body
    // to avoid this
    "no-empty-function": "error", 
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
    // On the other hand, if the code is targeting only ES5-compliant
    // environments passing the radix 10 may be redundant.
    // In such a case you might want to disallow using such a radix.
    "radix": "off"
  },
}
