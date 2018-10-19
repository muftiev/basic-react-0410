import { INCREMENT, DELETE_ARTICLE, ID_FILTER, DATE_FILTER } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function filterIds(values) {
  return {
    type: ID_FILTER,
    payload: { values }
  }
}

export function filterDates(range) {
  return {
    type: DATE_FILTER,
    payload: { range: { ...range } }
  }
}
