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
    const babelResult = window.Babel.transform(sanitize(input), {
      parserOpts: {
        plugins: [
          'jsx',
        ],
      },
      ...config,
    })

    const formattedCode = window.prettier.format(babelResult.code, {
      plugins: window.prettierPlugins,
      parser: 'babylon',
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
