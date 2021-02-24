import { CHANGE_FORM_VALUE } from '../actions/actionTypes'

const initialState = {
    phone: '',
    address: '',
}

export default function orderFormReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_FORM_VALUE:
            const {name, value} = action.payload
            return {
                ...state,
                [name]: value
            }
        default:
            return state
    }
}