import { CHANGE_FORM_VALUE, CLEAR_FORM_VALUES } from '../actions/actionTypes'

const initialState = {
    phone: '',
    address: '',
}

export default function orderFormReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_FORM_VALUE:
            const { name, value } = action.payload
            return {
                ...state,
                [name]: value
            }
        case CLEAR_FORM_VALUES:
            return {
                initialState
            }
        default:
            return state
    }
}