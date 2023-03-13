module.exports = {
  "*.{js,jsx,ts,tsx}": ["prettier --write", "eslint"],
  "*.{css,less,scss}": ["prettier --write", "stylelint"]
}