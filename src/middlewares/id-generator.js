import crypto from 'crypto'
import { ADD_COMMENT } from '../constants'

export default (store) => (next) => (action) => {
  if (action.type === ADD_COMMENT) {
    action.payload.id = crypto.randomBytes(16).toString('hex')
  }
  next(action)
}
