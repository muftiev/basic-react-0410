import crypto from 'crypto'
import { ADD_COMMENT } from '../constants'

export default (store) => (next) => (action) => {
  if (action.type === ADD_COMMENT) {
    console.log('id-generator', 'before: ', action)
    action.payload.id = crypto.randomBytes(24).toString('hex')
    console.log('id-generator', 'udated: ', action)
  }
  next(action)
  console.log('id-generator', 'after: ', store.getState())
}
