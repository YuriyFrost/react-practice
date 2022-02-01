import { SORTING, TICKETS, CHECKBOXES } from "./types"

const ticketsBlockState = {
    sorting: 'sortingPrice',
    tickets: [],
    checkboxes: [0, 1, 2, 3, 4, 5, 6]
}

export const ticketsReducer = (state = ticketsBlockState, action) => {
    switch (action.type) {
        case SORTING:
            return {...state, sorting: action.payload}
        case CHECKBOXES:
            return {...state, checkboxes: action.payload}
        case TICKETS:
            return {...state, tickets: action.payload}
        default: return state
    }
}