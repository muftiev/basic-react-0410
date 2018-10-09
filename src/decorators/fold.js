import React, { Component } from 'react'

const foldDecorator = (OriginalComponent) =>
  class FoldDecorator extends Component {
    constructor(props) {
      super(props)
      const initial = props.isOpen === undefined ? false : props.isOpen
      this.state = { isOpen: initial }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen !== this.state.isOpen) {
        this.setState({ isOpen: nextProps.isOpen })
      }
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isOpen={this.state.isOpen}
          toggleFold={this.toggleFold}
        />
      )
    }

    toggleFold = (...args) => {
      this.setState({ isOpen: !this.state.isOpen })
      typeof this.props.callback === 'function' && this.props.callback(...args)
    }
  }

export default foldDecorator
