import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import { loadArticleComments } from '../../ac'
import './style.css'
import Loader from '../common/loader'
import { Consumer as UserConsumer } from '../../contexts/user'
import { Consumer as LocalizationConsumer } from '../../contexts/localization'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  /*
    static defaultProps = {
      comments: []
    }
  */
  componentDidUpdate(oldProps) {
    const { isOpen, article, loadArticleComments } = this.props
    if (
      isOpen &&
      !oldProps.isOpen &&
      !article.commentsLoading &&
      !article.commentsLoaded
    ) {
      loadArticleComments(article.id)
    }
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    return (
      <div>
        <LocalizationConsumer>
          {(localization) => (
            <button onClick={toggleOpen} className="test__comment-list--btn">
              {isOpen ? localization.hide_comments : localization.show_comments}
            </button>
          )}
        </LocalizationConsumer>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const {
      article: { comments, id, commentsLoading, commentsLoaded },
      isOpen
    } = this.props
    if (!isOpen) return null
    if (commentsLoading) return <Loader />
    if (!commentsLoaded) return null

    return (
      <div className="test__comment-list--body">
        <UserConsumer>
          {(username) => (
            <LocalizationConsumer>
              {(localization) => (
                <h3>
                  {localization.username}: {username}
                </h3>
              )}
            </LocalizationConsumer>
          )}
        </UserConsumer>
        {comments.length ? (
          this.comments
        ) : (
          <LocalizationConsumer>
            {(localization) => (
              <h3 className="test__comment-list--empty">
                {localization.no_comments_yet}
              </h3>
            )}
          </LocalizationConsumer>
        )}
        <CommentForm articleId={id} />
      </div>
    )
  }

  get comments() {
    return (
      <ul>
        {this.props.article.comments.map((id) => (
          <li key={id} className="test__comment-list--item">
            <Comment id={id} />
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(
  null,
  { loadArticleComments }
)(toggleOpen(CommentList))
