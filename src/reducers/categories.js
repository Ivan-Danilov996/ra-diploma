import {
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    SET_ACTIVE_CATEGORY
} from '../actions/actionTypes'


const initialState = {
    categories: null,
    errorCategories: false,
    loadingCategories: false,
    activeCategory: 11 ,
}

export default function categoriesReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST: {
            return {
                ...state,
                loadingCategories: true
            }
        }
        case FETCH_CATEGORIES_FAILURE: {
            return {
                ...state,
                loadingCategories: false,
                errorCategories: true
            }
        }
        case FETCH_CATEGORIES_SUCCESS: {
            const categories = action.payload
            return {
                ...state,
                loadingCategories: false,
                errorCategories: false,
                categories
            }
        }
        case SET_ACTIVE_CATEGORY: {
            const id = action.payload
            return {
                ...state,
                activeCategory: id
            }
        }
        default:
            return state

    }
}