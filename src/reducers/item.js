import {
    FETCH_ITEM_FAILURE,
    FETCH_ITEM_REQUEST,
    FETCH_ITEM_SUCCESS,
} from '../actions/actionTypes'


const initialState = {
    item: null,
    error: false,
    loading: false,
}

export default function itemReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_ITEM_REQUEST: {
            return {
                ...state,
                loading: true,
                disable: false
            }
        }
        case FETCH_ITEM_FAILURE: {
            const message = action.payload
            return {
                ...state,
                loading: false,
                error: message
            }
        }
        case FETCH_ITEM_SUCCESS: {
            const item = action.payload
            return {
                ...state,
                loading: false,
                error: false,
                item
            }
        }
        default:
            return state

    }
}