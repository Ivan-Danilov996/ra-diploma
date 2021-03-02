import {
    FETCH_TOP_ITEMS_FAILURE,
    FETCH_TOP_ITEMS_REQUEST,
    FETCH_TOP_ITEMS_SUCCESS
} from '../actions/actionTypes'


const initialState = {
    items: null,
    error: false,
    loading: false
}

export default function topItemsListReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_TOP_ITEMS_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_TOP_ITEMS_FAILURE: {
            const message = action.payload
            return {
                ...state,
                loading: false,
                error: message
            }
        }
        case FETCH_TOP_ITEMS_SUCCESS: {
            const items = action.payload
            return {
                ...state,
                loading: false,
                error: false,
                items
            }
        }
        default:
            return state

    }
}