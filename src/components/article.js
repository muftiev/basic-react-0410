import React, { PureComponent } from 'react'
import foldDecorator from '../decorators/fold'

class Article extends PureComponent {
  render() {
    console.log('---', 'rendering article')
    const { article, isOpen } = this.props
    const text = isOpen ? 'hide' : 'show'

    return (
      <div>
        <h3 ref={this.setTitleRef}>{article.title}</h3>
        <button onClick={this.onButtonClick}>{text}</button>
        {this.body}
      </div>
    )
  }

  setTitleRef = (ref) => {
    console.log('---', 'article title', ref)
  }

  onButtonClick = () => this.props.toggleFold(this.props.article.id)

  get body() {
    const { isOpen, article } = this.props
    if (isOpen === false) return null
    return <section>{article.text}</section>
  }
}

export default foldDecorator(Article)
