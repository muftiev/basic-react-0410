import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES } from '../constants'
import { Record } from 'immutable'
import { arrToMap } from './utils'

const ArticleRecord = Record({
  id: null,
  title: null,
  date: null,
  text: null,
  comments: []
})

export default (articles = arrToMap([], ArticleRecord), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articles.delete(payload.id)

    case ADD_COMMENT:
      return articles.updateIn([payload.articleId, 'comments'], (comments) =>
        comments.push(randomId)
      )

    case LOAD_ALL_ARTICLES:
      return arrToMap(response, ArticleRecord)

    default:
      return articles
  }
}
