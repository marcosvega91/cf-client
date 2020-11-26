module.exports = {
  '**/*.ts': (files) => [`eslint --quiet --fix ${files.join(' ')}`, `jest --passWithNoTests`],
  '**/*.{ts, js}': (files) => [`prettier --write ${files.join(' ')}`],
}
