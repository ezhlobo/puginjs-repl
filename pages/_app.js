import App, { Container } from 'next/app'
import JssProvider from 'react-jss/lib/JssProvider'
import { MuiThemeProvider } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'

import getAssetsProvider from '../lib/getAssetsProvider'

class EntryPoint extends App {
  constructor() {
    super()

    this.assetsProvider = getAssetsProvider()
  }

  // It doesn't use `this` because it's coupled with DOM only
  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render = () => (
    <Container>
      <JssProvider
        registry={this.assetsProvider.sheetsRegistry}
        generateClassName={this.assetsProvider.generateClassName}
      >
        <MuiThemeProvider
          theme={this.assetsProvider.theme}
          sheetsManager={this.assetsProvider.sheetsManager}
        >
          <CssBaseline />

          <this.props.Component {...this.props.pageProps} assetsProvider={this.assetsProvider} />
        </MuiThemeProvider>
      </JssProvider>
    </Container>
  )
}

export default EntryPoint
