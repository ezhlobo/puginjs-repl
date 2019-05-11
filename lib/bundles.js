const fnNoop = () => null

const requirejsCallbacks = []
const onRequirejsReady = (callback = fnNoop) => {
  const getReference = () => window.requirejs

  if (getReference()) {
    callback(getReference())
  } else {
    requirejsCallbacks.push(callback)

    const idScript = 'script-requirejs'

    if (!document.getElementById(idScript)) {
      const script = document.createElement('script')
      script.src = 'https://requirejs.org/docs/release/2.3.6/minified/require.js'
      script.async = true
      script.id = idScript

      script.addEventListener('load', () => {
        requirejsCallbacks.forEach(cllb => cllb(getReference()))
      })

      document.head.appendChild(script)
    }
  }
}

export const load = version => new Promise((resolve) => {
  onRequirejsReady((define) => {
    define([`/static/bundles/${version}/index.min.js`], plugin => resolve(plugin))
  })
})
