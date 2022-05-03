import { combineReducers } from 'redux'
import { ticketsReducer } from './ticketsReducer'
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
  tickets: ticketsReducer,
  app: appReducer,
})
