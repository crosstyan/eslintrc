/* Crosstyan Version ESLint based on 
    https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base  
    https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/configs

   - no semi. (I hate semi)
   - @typescript-eslint
   - no import (sometime this brings bugs) especially in Vue
   - no node (not everyone running node)
   - less strict but still warn you. 
   - just my personal taste

   Last one in extends properties has highest priority
   I'm using TypeScript so @typescript-eslint is required
*/

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/strict',
    './rules/crosstyan.rules',
  ].map(require.resolve),
}