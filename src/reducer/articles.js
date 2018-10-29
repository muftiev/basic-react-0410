import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  SUCCESS,
  START
} from '../constants'
import { Record } from 'immutable'
import { arrToMap } from './utils'

const ArticleRecord = Record({
  id: null,
  title: null,
  date: null,
  text: null,
  comments: []
})

const ReducerRecord = Record({
  entities: arrToMap([], ArticleRecord),
  loading: false,
  loaded: false,
  error: null
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case DELETE_ARTICLE:
      return state.deleteIn(['entities', payload.id])

    case ADD_COMMENT:
      return state.updateIn(
        ['entities', payload.articleId, 'comments'],
        (comments) => comments.push(randomId)
      )

    case LOAD_ALL_ARTICLES + START:
      return state.set('loading', true)

    case LOAD_ALL_ARTICLES + SUCCESS:
      return state
        .set('entities', arrToMap(response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true)

    default:
      return state
  }
}
