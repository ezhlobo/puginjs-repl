import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import GithubLogo from './GithubLogo'
import Workspace from './Workspace'

const styles = ({ spacing }) => ({
  link: {
    marginRight: spacing.unit * 4,
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },

    '& svg': {
      marginRight: '0.35em',
    },
  },
  body: {
    padding: spacing.unit * 3,
  },
})

const App = ({ classes }) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography
          className={classes.link}
          variant="h6"
          color="inherit"
          component="a"
          href="https://github.com/pugjs/babel-plugin-transform-react-pug"
        >
          <GithubLogo width="20" height="20" />
          babel-plugin-transform-react-pug
        </Typography>

        <Typography
          className={classes.link}
          variant="h6"
          color="inherit"
          component="a"
          href="https://github.com/ezhlobo/puginjs-repl"
        >
          <GithubLogo width="20" height="20" />
          REPL
        </Typography>
      </Toolbar>
    </AppBar>

    <div className={classes.body}>
      <Workspace />
    </div>
  </div>
)

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App)
