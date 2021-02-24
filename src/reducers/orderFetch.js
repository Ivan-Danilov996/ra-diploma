import {
    FETCH_ORDER_FAILURE,
    FETCH_ORDER_REQUEST,
    FETCH_ORDER_SUCCESS
} from '../actions/actionTypes'


const initialState = {
    error: false,
    loading: false,
}

export default function ordeFetchReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ORDER_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case FETCH_ORDER_FAILURE: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case FETCH_ORDER_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }
        default:
            return state
    }
}