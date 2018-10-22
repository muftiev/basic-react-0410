import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordionDecorator from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    const { articles, openItemId, toggleOpenItem } = this.props
    return articles.map((article) => (
      <li key={article.id} className="test--article-list__item">
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem}
        />
      </li>
    ))
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }
}

export default connect((state) => {
  const {
    selected,
    dateRange: { from, to }
  } = state.filters

  const filtratedArticles = state.articles.filter((article) => {
    const published = Date.parse(article.date)
    return (
      (!selected.length ||
        selected.find((selected) => selected.value === article.id)) &&
      (!from || !to || (published > from && published < to))
    )
  })
  return {
    articles: filtratedArticles
  }
})(accordionDecorator(ArticleList))
