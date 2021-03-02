import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../actions/actionTypes'


const initialState = {
    items: JSON.parse(localStorage.getItem('cart')) || []
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const items = action.payload
            return {
                ...state,
                items
            }
        }
        case REMOVE_FROM_CART: {
            return initialState

        }
        default:
            return state
    }
}