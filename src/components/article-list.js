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
    const { articles, filters, openItemId, toggleOpenItem } = this.props
    return this._filterArticles(articles, filters).map((article) => (
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

  _filterArticles(articles, filters) {
    const idFilter = filters.ids.map((item) => item.value)
    const dateFilterFrom =
      filters.dates.from && new Date(filters.dates.from).getTime()
    const dateFilterTo =
      filters.dates.to && new Date(filters.dates.to).getTime()
    const noDateFilter = !dateFilterFrom && !dateFilterTo

    if (!idFilter.length && noDateFilter) return articles

    const exactDate =
      dateFilterFrom && !dateFilterTo
        ? new Date(dateFilterFrom).setHours(0, 0, 0, 0)
        : null

    return articles.filter((article) => {
      const date = article.date && new Date(article.date).getTime()
      const idCheck = !idFilter.length || idFilter.includes(article.id)
      const exactDateCheck =
        exactDate && new Date(date).setHours(0, 0, 0, 0) === exactDate
      const dateRangeCheck = date >= dateFilterFrom && date <= dateFilterTo

      return idCheck && (noDateFilter || exactDateCheck || dateRangeCheck)
    })
  }
}

const ArticleListWithAccordion = accordionDecorator(ArticleList)

export default connect((state) => ({
  articles: state.articles,
  filters: state.filters
}))(ArticleListWithAccordion)
