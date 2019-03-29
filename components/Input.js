import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Clear from '@material-ui/icons/Clear'

import Loader from './Loader'
import Error from './Error'

const styles = {
  clearButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    zIndex: 100,
  },
}

class Input extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    initialValue: PropTypes.string.isRequired,
    codemirror: PropTypes.func.isRequired,
    error: PropTypes.string,
  }

  static defaultProps = {
    error: '',
  }

  componentDidMount() {
    this.codemirror = this.codemirror || this.props.codemirror(document.getElementById('input'), {
      value: this.props.initialValue,
      mode: 'pug',
      placeholder: 'Write your JavaScript here or check out examples below',
    })

    this.codemirror.on('change', (instance) => {
      const value = instance.doc.getValue()

      this.props.onChange(value)
    })
  }

  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <div id="input" />

        <IconButton
          className={classes.clearButton}
          onClick={this.resetValue}
        >
          <Clear fontSize="small" />
        </IconButton>

        {this.props.error && (
          <Error>
            {this.props.error}
          </Error>
        )}
      </React.Fragment>
    )
  }

  updateValue = value => {
    this.codemirror.doc.setValue(value)
  }

  resetValue = () =>
    this.updateValue('')
}

const StyledInput = withStyles(styles)(Input)

const DynamicInput = dynamic({
  ssr: false,
  modules: () => ({
    CodeMirror: () => import('../lib/CodeMirror'),
  }),
  render: (props, { CodeMirror }) => (
    <StyledInput codemirror={CodeMirror.default} innerRef={props.innerRef} {...props} />
  ),
  loading: Loader,
})

export default DynamicInput
