import * as Babel from '@babel/standalone'
import prettier from 'prettier/standalone'
import prettierParserBabel from 'prettier/parser-babylon'

function sanitize(input) {
  return input
    .split('\n')
    .map(line => line.trimRight())
    .join('\n')
}

function transform(input, config) {
  let code = ' '
  let error = {}

  try {
    const babelResult = Babel.transform(sanitize(input), {
      parserOpts: {
        plugins: [
          'jsx',
        ],
      },
      ...config,
    })

    const formattedCode = prettier.format(babelResult.code, {
      plugins: [prettierParserBabel],
      parser: 'babel',
      semi: false,
      singleQuote: true,
    })

    code = formattedCode
  } catch (e) {
    error = e
  }

  return {
    code,
    error,
  }
}

export default transform
