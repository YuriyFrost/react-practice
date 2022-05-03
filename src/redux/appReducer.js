import { SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, HIDE_ERROR } from "./types"

const appState = {isLoading: false, isError: false}

export const appReducer = (state = appState, action) => {
    switch (action.type) {
        case SHOW_LOADER: 
            return {...state, isLoading: true}
        case HIDE_LOADER: 
            return {...state, isLoading: false}
        case SHOW_ERROR: 
            return {...state, isError: true}
        case HIDE_ERROR: 
            return {...state, isError: false}
        default: return state
    }
}