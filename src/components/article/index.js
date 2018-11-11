import React, { PureComponent } from 'react'
import CSSTransition from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentList from '../comment-list'
import { deleteArticle, loadArticleById } from '../../ac'
import './style.css'
import Loader from '../common/loader'
import { articleSelector } from '../../selectors'
import { Consumer as LocalizationConsumer } from '../../contexts/localization'

class Article extends PureComponent {
  static propTypes = {
    id: PropTypes.string,

    article: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string
    }),
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  componentDidMount() {
    const { loadArticleById, article, id } = this.props
    if (!article || (!article.text && !article.loading)) loadArticleById(id)
  }

  render() {
    const { article } = this.props
    if (!article) return null

    return (
      <div>
        <h3>
          {article.title}
          <LocalizationConsumer>
            {(localization) => (
              <button onClick={this.handleDeleteClick}>
                {localization.delete_me}
              </button>
            )}
          </LocalizationConsumer>
        </h3>
        <CSSTransition
          transitionAppear
          transitionName="article"
          transitionEnterTimeout={500}
          transitionAppearTimeout={1000}
          transitionLeaveTimeout={300}
        >
          {this.body}
        </CSSTransition>
      </div>
    )
  }

  handleDeleteClick = () => {
    const { deleteArticle, article } = this.props
    deleteArticle(article.id)
  }

  get body() {
    const { isOpen, article } = this.props
    if (!isOpen) return null
    if (this.state.error)
      return (
        <LocalizationConsumer>
          {(localization) => <h3>{localization.error}</h3>}
        </LocalizationConsumer>
      )
    if (article.loading) return <Loader />

    return (
      <section className="test--article__body">
        {article.text}
        <CommentList article={article} />
      </section>
    )
  }
}

export default connect(
  (state, props) => ({
    article: articleSelector(state, props)
  }),
  { deleteArticle, loadArticleById }
)(Article)
