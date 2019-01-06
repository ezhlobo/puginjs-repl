const { transformSync } = require('@babel/core')
const prettier = require('prettier')

module.exports = (input, version) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const plugin = require(`../bundles/${version}/index`)

  const code = transformSync(input, {
    plugins: [plugin],
    parserOpts: {
      plugins: [
        'jsx',
      ],
    },
    generatorOpts: {
      retainFunctionParens: true,
    },
  }).code

  return prettier.format(code, {
    parser: 'babylon',
    semi: false,
    singleQuote: true,
  })
}
