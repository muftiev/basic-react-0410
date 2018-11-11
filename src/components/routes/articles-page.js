import React, { Component, Fragment } from 'react'
import ArticleList from '../article-list'
import { Route } from 'react-router-dom'
import Article from '../article'
import { Consumer as LocalizationConsumer } from '../../contexts/localization'

class ArticlesPage extends Component {
  static propTypes = {}

  render() {
    console.log('---', 'articles-page match: ', this.props.match)
    //      const title = this.props.match.isExact && <h1>Select an Article</h1>
    console.log('---', 1)
    return (
      <Fragment>
        <ArticleList />
        <Route path="/articles/:id" children={this.getArticle} />
      </Fragment>
    )
  }

  getArticle = ({ match }) => {
    console.log('---', 'article match: ', match)

    if (!match)
      return (
        <LocalizationConsumer>
          {(localization) => <h1>{localization.please_select_an_article}</h1>}
        </LocalizationConsumer>
      )

    const { id } = match.params
    return <Article id={id} key={id} isOpen />
  }
}

export default ArticlesPage
