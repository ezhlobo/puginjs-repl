import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    let assetsProvider

    // Render app and page and get the context of the page with collected side effects.
    const page = ctx.renderPage((Component) => {
      const WrappedComponent = (props) => {
        assetsProvider = props.assetsProvider

        return <Component {...props} />
      }

      return WrappedComponent
    })

    let css

    if (assetsProvider) {
      css = assetsProvider.sheetsRegistry.toString()
    }

    return {
      ...page,
      assetsProvider,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <React.Fragment>
          <style
            id="jss-server-side"
            dangerouslySetInnerHTML={{ __html: css }}
          />
          {flush() || null}
        </React.Fragment>
      ),
    }
  }

  render = () => (
    <html lang="en-US">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  )
}
