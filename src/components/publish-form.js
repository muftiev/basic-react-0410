import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PublishForm extends Component {
  static propTypes = {
    handler: PropTypes.func.isRequired
  }

  state = {
    text: '',
    user: ''
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="text"
          placeholder="comment text"
          onChange={this.handleInputChange.bind(this)}
        />
        <input
          type="text"
          name="user"
          placeholder="author name"
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handlePublishClick.bind(this)}>Publish</button>
      </div>
    )
  }

  handleInputChange(e) {
    const val = e.target.value
    const prop = e.target.name
    this.setState({ [prop]: val })
  }

  handlePublishClick() {
    const { handler } = this.props

    handler({ ...this.state })
  }
}

export default PublishForm
