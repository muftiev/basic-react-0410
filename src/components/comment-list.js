import React, { Component } from 'react'
import Comment from './comment'
import foldDecorator from '../decorators/fold'

class CommentList extends Component {
  render() {
    return (
      <div>
        <h4>Comments</h4>
        {this.button}
        {this.body}
      </div>
    )
  }

  get body() {
    const { isOpen } = this.props
    const comments = this.props.comments || []

    if (!comments.length) return 'No comments yet :('
    return isOpen ? <ul>{this.list}</ul> : null
  }

  get list() {
    const comments = this.props.comments || []
    return !comments.length
      ? 'No comments yet :('
      : comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))
  }

  get button() {
    const { isOpen } = this.props
    const comments = this.props.comments || []
    const text = isOpen ? 'hide' : 'show'

    return !comments.length ? null : (
      <button onClick={this.onButtonClick}>{text}</button>
    )
  }

  onButtonClick = () => this.props.toggleFold()
}

export default foldDecorator(CommentList)
