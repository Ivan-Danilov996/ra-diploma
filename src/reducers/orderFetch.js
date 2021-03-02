import {
    FETCH_ORDER_FAILURE,
    FETCH_ORDER_REQUEST,
    FETCH_ORDER_SUCCESS,
    SET_INITIAL_ORDER_STATE
} from '../actions/actionTypes'


const initialState = {
    error: false,
    loading: false,
    success: false
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
            const message = action.payload
            return {
                ...state,
                loading: false,
                error: message
            }
        }
        case FETCH_ORDER_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                success: true
            }
        }
        case SET_INITIAL_ORDER_STATE: {
            return {
                initialState
            }
        }
        default:
            return state
    }
}