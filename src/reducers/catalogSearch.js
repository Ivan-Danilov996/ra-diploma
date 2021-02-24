import { CHANGE_VALUE } from '../actions/actionTypes'

const initialState = {
    value: ''
}

export default function changeValueReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_VALUE:
            const value = action.payload
            console.log(value)
            return {
                ...state,
                value
            }
        default:
            return state
    }
}