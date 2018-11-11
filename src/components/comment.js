import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createCommentSelector } from '../selectors'
import { Consumer as LocalizationConsumer } from '../contexts/localization'

function Comment({ comment }) {
  return (
    <LocalizationConsumer>
      {(localization) => (
        <div>
          {comment.text}{' '}
          <b>
            {localization.by} {comment.user}
          </b>
        </div>
      )}
    </LocalizationConsumer>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string
  }).isRequired
}

const createMapStateToProps = () => {
  const commentSelector = createCommentSelector()

  return (state, ownProps) => ({
    comment: commentSelector(state, ownProps)
  })
}

export default connect(createMapStateToProps)(Comment)
