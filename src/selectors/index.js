import { createSelector } from 'reselect'

export const selectionSelector = (state) => state.filters.selected
export const dateRangeSelector = (state) => state.filters.dateRange
export const articleListSelector = (state) => state.articles
export const commentsSelector = (state) => state.comments
export const idSelector = (_, props) => props.id

export const filtratedArticlesSelector = createSelector(
  selectionSelector,
  dateRangeSelector,
  articleListSelector,
  (selected, dateRange, articles) => {
    console.log('---', 'article list selector')
    const { from, to } = dateRange
    const ids = selected.length
      ? selected.map((item) => item.value)
      : Object.keys(articles)

    return ids.reduce((acc, id) => {
      const article = articles[id]
      const published = Date.parse(article.date)
      return !from || !to || (published > from && published < to)
        ? {
            ...acc,
            [id]: article
          }
        : { ...acc }
    }, {})
  }
)

export const createCommentSelector = () =>
  createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments[id]
  })
