import React, { Component } from 'react'
import Article from './article'
import accordionDecorator from '../decorators/accordion'

class ArticleList extends Component {
  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    const { articles, openItemId, toggleOpenItem } = this.props
    return articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={openItemId === article.id}
          callback={toggleOpenItem}
        />
      </li>
    ))
  }
}

export default accordionDecorator(ArticleList)
