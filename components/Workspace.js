import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import transform from '../lib/transform'
import { setCodeToCache, getCodeFromCache } from '../lib/cache'

import Input from './Input'
import Result from './Result'

const getMinHeight = spacing => spacing.unit * 30

const styles = ({ spacing, palette }) => ({
  paper: {
    minHeight: getMinHeight(spacing),
    overflow: 'hidden',
    position: 'relative',

    '& .CodeMirror': {
      height: 'auto !important',
      minHeight: getMinHeight(spacing),
      fontSize: 14,
      display: 'flex',
      flexDirection: 'column',
    },

    '& .CodeMirror-placeholder': {
      color: palette.text.secondary,
    },

    '& .CodeMirror-scroll': {
      flex: 1,
    },
  },
})

class Workspace extends Component {
  state = {
    transformed: '',
    error: '',
    isPluginLoaded: false,
  }

  componentDidMount() {
    import('../bundles/6.0.1')
      .then((plugin) => {
        this.plugin = plugin.default
        this.setState({ isPluginLoaded: true })
      })
      .then(() => {
        const code = getCodeFromCache()
        this.transform(code)
      }, (error) => {
        // eslint-disable-next-line no-console
        console.error(error)
        this.setState({ error: 'Plugin can\'t be loaded, try again later' })
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
        this.setState({ error: 'Unexpected error during transpiling' })
      })
  }

  render() {
    const { classes } = this.props

    return (
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Input
              initialValue={getCodeFromCache()}
              onChange={this.handleInputChange}
              error={this.state.error}
            />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Result
              isReady={this.state.isPluginLoaded}
              value={this.state.transformed}
            />
          </Paper>
        </Grid>
      </Grid>
    )
  }

  cacheCode(code) {
    setCodeToCache(code)
    this.transform(code)
  }

  transform(code) {
    if (!this.plugin) {
      return
    }

    const result = transform(code, {
      plugins: [this.plugin],
    })

    this.setState({
      transformed: result.code,
      error: result.error.message,
    })
  }

  handleInputChange = (value) => {
    this.cacheCode(value)
  }
}

Workspace.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Workspace)
