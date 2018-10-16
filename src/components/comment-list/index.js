import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'

export class CommentList extends Component {
  /*
  static defaultProps = {
    comments: []
  }
*/
  static propTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test--comment-list__btn">
          {text}
        </button>
        <CSSTransition
          transitionAppear
          transitionName="comment-list"
          transitionEnterTimeout={500}
          transitionAppearTimeout={1000}
          transitionLeaveTimeout={300}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const { comments = [], isOpen } = this.props
    if (!isOpen) return null

    const body = comments.length ? (
      <ul className="test--comment-list__body">
        {comments.map((comment) => (
          <li key={comment.id} className="test--comment-list__item">
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3 className="test--comment-list__empty">No comments yet</h3>
    )

    return <div>{body}</div>
  }
}

export default toggleOpen(CommentList)
