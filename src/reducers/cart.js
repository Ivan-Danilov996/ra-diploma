import { getItems } from '../actions/actionCreators'
import {
    ADD_TO_CART,
} from '../actions/actionTypes'


const initialState = {
    items: Object.entries(localStorage)
}

export default function cartReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const items = action.payload
            return {
                ...state,
                items
            }
        }
        default:
            return state
    }
}