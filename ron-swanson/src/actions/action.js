import axios from 'axios'

export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHING_DATA_SUCCESFULL = 'FETCHING_DATA_SUCCESFULL'
export const FETCHING_DATA_FAILED = 'FETCHING_DATA_FAILED'

export const fetchingData = () => {
    return dispatch => {
        dispatch({type : FETCHING_DATA})

        axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`)
            .then(res => {
                console.log(res)
                dispatch({type : FETCHING_DATA_SUCCESFULL, payload : res.data.results})
            })
            .catch(err => {
                dispatch({type : FETCHING_DATA_FAILED, payload: err})
            })
    }
 }