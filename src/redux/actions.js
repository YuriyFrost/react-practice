import { SORTING, TICKETS, CHECKBOXES, SHOW_LOADER, HIDE_LOADER } from "./types"
import { getJSON } from "../utils"

export const setSorting = (value) => ({ type: SORTING, payload: value })
export const setCheckboxes = (value) => ({ type: CHECKBOXES, payload: value })
export const showLoader = () => ({type: SHOW_LOADER})
export const hideLoader = () => ({type: HIDE_LOADER})


export const fetchTickets = () => (dispatch) => {
    dispatch(showLoader())

    let getKeyPromise
    console.log(localStorage.getItem('key'))
    if (!localStorage.getItem('key')) {
        getKeyPromise = getJSON('https://front-test.beta.aviasales.ru/search')
            .then(data => localStorage.setItem('key', data.searchId))
    }
    if (!getKeyPromise) {
        getKeyPromise = Promise.resolve()
    }
    getKeyPromise.then(() => { 
        const key = localStorage.getItem('key') 
        const url = `https://front-test.beta.aviasales.ru/tickets?searchId=${key}` 
        getJSON(url)
            .then(data => {
                dispatch({type: TICKETS, payload: data.tickets})
                dispatch(hideLoader())
            }
        )
        .catch(err => {
            localStorage.removeItem('key')
            dispatch(fetchTickets())
        })
    })
   
}




// getJSON('https://front-test.beta.aviasales.ru/search')
    //     .then((data) => {
    //         console.log(data)
    //         let key = (localStorage.getItem('key') !== null) ? localStorage.getItem('key') : data.searchId
    //         console.log(key, data.searchId)
    //         localStorage.getItem('key') === null ? localStorage.setItem('key', data.searchId) :
    //         console.log(localStorage.getItem('key'))
    //         const url = `https://front-test.beta.aviasales.ru/tickets?searchId=${key}`
    //         return getJSON(url)
    //     })