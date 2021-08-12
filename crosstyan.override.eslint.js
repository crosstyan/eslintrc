// Only include override options
module.exports = {
  extends: [
    './rules/crosstyan.rules',
  ].map(require.resolve),
}