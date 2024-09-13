/** @type {import("prettier").Config} */
const prettierConfig = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 120,
}

module.exports = prettierConfig
