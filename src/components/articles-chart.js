import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ArticlesChart extends Component {
  static propTypes = {
    articles: PropTypes.array
  }

  render() {
    return <div ref={this.setContainerRef} />
  }

  componentDidUpdate() {
    //update chart with new props
  }

  setContainerRef = (ref) => {
    this.container = ref
    if (ref) {
      //do some charting with d3 inside ref
    } else {
      //perform some cleanup
    }
  }
}

export default ArticlesChart
