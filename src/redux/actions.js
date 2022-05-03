import { SORTING, TICKETS, CHECKBOXES, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR } from './types'
import { getJSON } from '../utils'

export const setSorting = (value) => ({ type: SORTING, payload: value })
export const setCheckboxes = (value) => ({ type: CHECKBOXES, payload: value })
export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({ type: HIDE_LOADER })
export const showError = () => ({ type: SHOW_ERROR })

// export const fetchTickets = () => (dispatch) => {
//   dispatch(showLoader())

//   getJSON('https://front-test.beta.aviasales.ru/tickets')
//     .then((data) => {
//       dispatch({ type: TICKETS, payload: data.tickets })
//       dispatch(hideLoader())
//     })
//     .catch((err) => {
//       dispatch(hideLoader())
//       dispatch(showError(err))
//     })
// }

export const fetchTickets = () => (dispatch) => {
  getJSON()
    .then((data) => {
      dispatch({type: TICKETS, payload: data})
    })
}
