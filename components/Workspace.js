import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'

import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import transform from '../lib/transform'
import { setCodeToCache, getCodeFromCache } from '../lib/cache'
import examples from '../lib/examples'
import { load } from '../lib/bundles'

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

  examples: {
    marginTop: spacing.unit * 3,
  },

  buttonWrapper: {
    marginTop: spacing.unit,
  },

  buttonSelected: {
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,

    '&:hover': {
      backgroundColor: palette.primary.dark,
    },
  },
})

const getInitialValue = () => getCodeFromCache()

class Workspace extends Component {
  state = {
    transformed: '',
    error: '',
    example: '',
    isPluginLoaded: false,
  }

  componentDidMount() {
    const initialValue = getInitialValue()

    this.determineExample(initialValue)

    load('7.0.0')
      .then((plugin) => {
        this.plugin = plugin.default
        this.setState({ isPluginLoaded: true })
      })
      .then(() => {
        this.transform(initialValue)
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
              innerRef={this.input}
              initialValue={getInitialValue()}
              onChange={this.handleInputChange}
              error={this.state.error}
            />
          </Paper>
          <div className={classes.examples}>
            <Typography variant="subtitle1">Examples</Typography>
            {Object.keys(examples).map(key => (
              <div key={key} className={classes.buttonWrapper}>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={this.createExampleLoader(key)}
                  className={this.isPickedExample(key) ? classes.buttonSelected : ''}
                >
                  {examples[key].name}
                </Button>
              </div>
            ))}
          </div>
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

  input = createRef()

  cacheCode(code) {
    setCodeToCache(code)
    this.determineExample(code)
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

  handleInputChange = value =>
    this.cacheCode(value)

  createExampleLoader = key => () => {
    const nextInput = examples[key].code

    this.setState({ example: key })

    this.input.current.updateValue(nextInput)
  }

  determineExample = (value) => {
    const possibleExampleKey = Object.keys(examples).find(key => examples[key].code === value)

    if (possibleExampleKey) {
      this.setState({ example: possibleExampleKey })
    } else {
      this.setState({ example: '' })
    }
  }

  isPickedExample = key =>
    this.state.example === key
}

Workspace.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Workspace)
