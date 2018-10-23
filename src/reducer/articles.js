import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case ADD_COMMENT:
      const comments = articlesState[payload.articleId].comments || []
      return {
        ...articlesState,
        [payload.articleId]: {
          ...articlesState[payload.articleId],
          comments: [].concat(payload.id, comments)
        }
      }

    default:
      return articlesState
  }
}
