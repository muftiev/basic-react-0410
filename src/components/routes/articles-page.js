import React, { Component, Fragment } from 'react'
import ArticleList from '../article-list'
import { Route } from 'react-router-dom'
import Article from '../article'

class ArticlesPage extends Component {
  static propTypes = {}

  render() {
    return (
      <Fragment>
        <ArticleList />
        <Route path="/articles/:id" render={this.getArticle} />
      </Fragment>
    )
  }

  getArticle = ({ match }) => {
    console.log('---', 'article match: ', match)
    const { id } = match.params
    return <Article id={id} key={id} isOpen />
  }
}

export default ArticlesPage
