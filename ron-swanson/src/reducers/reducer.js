import {FETCHING_DATA,
        FETCHING_DATA_SUCCESFULL,
        FETCHING_DATA_FAILED} 
from '../actions/action'


const initialState = {
    quotes : [],
    isLoading : false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_DATA :
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_DATA_SUCCESFULL :
            return {
                ...state,
                isLoading: false,
                quotes: action.payload
            }
        case FETCHING_DATA_FAILED :
            return {
                ...state,
                error: action.payload
            }
        default :
            return state
    }
}