const prepare = input => input
  .split('\n')
  .map(line => line.replace(/\s{6}/, ''))
  .join('\n')
  .trim()

const examples = {
  intro: {
    name: 'Introduction',
    code: prepare(`
      export const ReactComponent = props => pug\`
        .wrapper
          if props.shouldShowGreeting
            p.greeting Hello World!

          button(onClick=props.notify) Click Me
      \`
    `),
  },

  basic: {
    name: 'Basic Functionality',
    code: prepare(`
      const Component = props => pug\`
        div
          if props.amount > MAX_AMOUNT
            OtherComponent(fluid crucial)
          else
            p You can set bigger amount ;)

          each item, index in props.items
            div(key=item.id)
              h3 Header #{index + 1}
              = item.body
      \`
    `),
  },

  primitives: {
    name: 'Function and Other Primitives',
    code: prepare(`
      const Component = props => pug\`
        div
          button(
            type="button"
            onClick=props.onClick
          ) Click Me

          OtherComponent(
            ...props.objectWithPropsForChild
            fluid
            data-array=[1, 2, 3]
          )
      \`
    `),
  },

  javascript: {
    name: 'Variables and JavaScript',
    code: prepare(`
      const Component = props => pug\`
        Fragment
          button(
            ...one
            ...two
            onClick=() => alert('Hello')
            text='number ' + 10
            condition=foo === bar ? foo : bar
          )

          - const variable = format(props.no)
          p Variable is #{variable}
      \`
    `),
  },

  interpolation: {
    name: 'Interpolation',
    code: prepare(`
      const Component = props => pug\`
        ul(className=\${props.modifier})
          \${props.items.map((item, index) => pug\`li(key=\${index}) \${item}\`)}
      \`
    `),
  },
}

export default examples
