import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

const styles = ({ spacing, palette, shape }) => ({
  root: {
    margin: 0,
    padding: spacing.unit * 2,
    borderTop: `1px solid ${palette.error.main}`,
    borderBottomLeftRadius: shape.borderRadius,
    borderBottomRightRadius: shape.borderRadius,
    color: palette.error.dark,
    backgroundColor: 'rgb(255, 235, 238, 0.35)',
    overflow: 'auto',
  },
})

function Error({ classes, ...props }) {
  return (
    <pre className={classes.root} {...props} />
  )
}

Error.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Error)
