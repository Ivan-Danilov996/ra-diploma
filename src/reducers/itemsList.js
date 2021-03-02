import {
    FETCH_ITEMS_FAILURE,
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_MORE_ITEMS_REQUEST,
    FETCH_MORE_ITEMS_SUCCESS,
    FETCH_MORE_ITEMS_FAILURE,
    SET_DISABLE,
} from '../actions/actionTypes'


const initialState = {
    items: null,
    error: false,
    loading: false,
    errorMoreItems: false,
    loadingMoreItems: false, 
    disable: false
}

export default function itemsListReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_ITEMS_REQUEST: {
            return {
                ...state,
                loading: true,
                disable: false
            }
        }
        case FETCH_ITEMS_FAILURE: {
            const message = action.payload
            return {
                ...state,
                loading: false,
                error: message
            }
        }
        case FETCH_ITEMS_SUCCESS: {
            const items = action.payload
            return {
                ...state,
                loading: false,
                error: false,
                items
            }
        }
        case FETCH_MORE_ITEMS_REQUEST: {
            return {
                ...state,
                loadingMoreItems: true
            }
        }
        case FETCH_MORE_ITEMS_FAILURE: {
            const message = action.payload
            return {
                ...state,
                loadingMoreItems: false,
                errorMoreItems: message
            }
        }
        case FETCH_MORE_ITEMS_SUCCESS: {
            const newItems = action.payload
            return {
                ...state,
                loadingMoreItems: false,
                errorMoreItems: false,
                items: [...state.items, ...newItems]
            }
        }
        case SET_DISABLE: {
            return {
                ...state,
                disable: true
            }
        }
        default:
            return state

    }
}