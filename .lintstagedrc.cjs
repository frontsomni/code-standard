module.exports = {
  "*.{js,jsx,ts,tsx}": ["prettier --write", "eslint"],
  "*.{css,less,scss,html}": ["prettier --write", "stylelint --allow-empty-input"]
}