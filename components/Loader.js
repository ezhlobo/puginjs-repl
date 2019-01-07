import PropTypes from 'prop-types'

import LinearProgress from '@material-ui/core/LinearProgress'

import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
})

function Loader({ classes }) {
  return (
    <div className={classes.loader}>
      <LinearProgress />
    </div>
  )
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Loader)
