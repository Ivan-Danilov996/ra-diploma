import {
    FETCH_ITEMS_FAILURE,
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_TOP_ITEMS_REQUEST,
    FETCH_TOP_ITEMS_SUCCESS,
    FETCH_TOP_ITEMS_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    SET_ACTIVE_CATEGORY,
    FETCH_MORE_ITEMS_REQUEST,
    FETCH_MORE_ITEMS_SUCCESS,
    FETCH_MORE_ITEMS_FAILURE,
    SET_DISABLE,
    CHANGE_VALUE,
    FETCH_ITEM_REQUEST,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHANGE_FORM_VALUE,
    FETCH_ORDER_REQUEST,
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER_FAILURE,
    SET_INITIAL_ORDER_STATE,
    CLEAR_FORM_VALUES
} from './actionTypes'


export const setActiveCategory = (id) => (
    {
        type: SET_ACTIVE_CATEGORY, payload: id
    }
)

export const fetchTopCategoriesRequest = () => (
    {
        type: FETCH_CATEGORIES_REQUEST
    }
)

export const fetchTopCategoriesSuccess = (categories) => (
    {
        type: FETCH_CATEGORIES_SUCCESS, payload: categories
    }
)

export const fetchTopCategoriesFailure = (message) => (
    {
        type: FETCH_CATEGORIES_FAILURE, payload: message
    }
)

export const fetchCategories = () => async dispatch => {
    dispatch(fetchTopCategoriesRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_URL}/categories`)
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(fetchTopCategoriesSuccess(data));
    } catch (e) {
        dispatch(fetchTopCategoriesFailure('Произошла ошибка!'));
    }
}

export const fetchTopItemsRequest = () => (
    {
        type: FETCH_TOP_ITEMS_REQUEST
    }
)

export const fetchTopItemsSuccess = (items) => (
    {
        type: FETCH_TOP_ITEMS_SUCCESS, payload: items
    }
)

export const fetchTopItemsFailure = (message) => (
    {
        type: FETCH_TOP_ITEMS_FAILURE, payload: message
    }
)

export const fetchTopItems = () => async dispatch => {
    dispatch(fetchTopItemsRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_URL}/top-sales`)
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(fetchTopItemsSuccess(data));
    } catch (e) {
        dispatch(fetchTopItemsFailure('Произошла ошибка!'));
    }
}



export const fetchItemsRequest = () => (
    {
        type: FETCH_ITEMS_REQUEST
    }
)

export const fetchItemsSuccess = (items) => (
    {
        type: FETCH_ITEMS_SUCCESS, payload: items
    }
)

export const fetchItemsFailure = (message) => (
    {
        type: FETCH_ITEMS_FAILURE, payload: message
    }
)

export const fetchItems = (id, value) => async dispatch => {
    dispatch(fetchItemsRequest());
    try {
        const response = await fetch(id === 11 ? `${process.env.REACT_APP_URL}/items?q=${value}` : ` ${process.env.REACT_APP_URL}/items?categoryId=${id}&q=${value}`)
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(fetchItemsSuccess(data));
    } catch (e) {
        dispatch(fetchItemsFailure('Произошла ошибка!'));
    }
}



export const fetchMoreItemsRequest = () => (
    {
        type: FETCH_MORE_ITEMS_REQUEST
    }
)

export const fetchMoreItemsSuccess = (items) => (
    {
        type: FETCH_MORE_ITEMS_SUCCESS, payload: items
    }
)

export const fetchMoreItemsFailure = (message) => (
    {
        type: FETCH_MORE_ITEMS_FAILURE, payload: message
    }
)

export const setDisable = (category) => (
    {
        type: SET_DISABLE, payload: category
    }
)

export const fetchMoreItems = (length, activeCategory, value) => async dispatch => {
    dispatch(fetchMoreItemsRequest());
    try {
        const response = await fetch(activeCategory === 11 ?
            `${process.env.REACT_APP_URL}/items?offset=${length}&q=${value}` :
            `${process.env.REACT_APP_URL}/items?categoryId=${activeCategory}&offset=${length}&q=${value}`)
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        if (data.length <= 5) {
            dispatch(setDisable(activeCategory))
        }
        dispatch(fetchMoreItemsSuccess(data));
    } catch (e) {
        dispatch(fetchMoreItemsFailure('Произошла ошибка!'));
    }
}

export const changeValue = (value) => (
    {
        type: CHANGE_VALUE, payload: value
    }
)

export const fetchFilterItems = (value, activeCategory) => async dispatch => {
    dispatch(fetchItemsRequest());
    try {
        const response = await fetch(activeCategory === 11 ? `${process.env.REACT_APP_URL}/items?q=${value}` :
            `${process.env.REACT_APP_URL}/items?q=${value}&categoryId=${activeCategory}`)
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(fetchItemsSuccess(data));
    } catch (e) {
        dispatch(fetchItemsFailure('Произошла ошибка!'));
    }
}


export const fetchItemRequest = () => (
    {
        type: FETCH_ITEM_REQUEST
    }
)

export const fetchItemSuccess = (item) => (
    {
        type: FETCH_ITEM_SUCCESS, payload: item
    }
)

export const fetchItemFailure = (message) => (
    {
        type: FETCH_ITEM_FAILURE, payload: message
    }
)

export const fetchItem = (id) => async dispatch => {
    dispatch(fetchItemRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_URL}/items/${id}`)
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(fetchItemSuccess(data));
    } catch (e) {
        dispatch(fetchItemFailure('Произошла ошибка!'));
    }
}



export const changeFormValue = (name, value) => (
    {
        type: CHANGE_FORM_VALUE, payload: {
            name: name,
            value: value
        }
    }
)

export const clearFormValues = () => (
    {
        type: CLEAR_FORM_VALUES
    }
)

export const fetchOrder = (order) => async dispatch => {
    dispatch(fetchOrderRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_URL}/order`, {
            method: 'POST',
            body: JSON.stringify(order),
            headers: { 'Content-Type': 'application/json' }
        })
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        //const data = await response.json()
        dispatch(fetchOrderSuccess());
    } catch (e) {
        dispatch(fetchOrderFailure('Произошла ошибка!'));
    }
}
export const fetchOrderRequest = () => (
    {
        type: FETCH_ORDER_REQUEST
    }
)

export const fetchOrderSuccess = () => (
    {
        type: FETCH_ORDER_SUCCESS
    }
)

export const fetchOrderFailure = (message) => (
    {
        type: FETCH_ORDER_FAILURE, payload: message
    }
)

export const setInitialOrderState = () => (
    {
        type: SET_INITIAL_ORDER_STATE
    }
)




export const addToCart = (items) => (
    {
        type: ADD_TO_CART, payload: items
    }
)

export const removeFromCart = () => (
    {
        type: REMOVE_FROM_CART
    }
)

export const clearCart = () => dispatch => {
    localStorage.removeItem('cart')
    dispatch(removeFromCart())
}


export const setCart = (key, size, count, item) => dispatch => {
    //set items cart to localStorage
    if (localStorage.getItem('cart')) {
        const cartItems = JSON.parse(localStorage.getItem('cart'))
        if (cartItems.find(cartItem => cartItem.key === parseInt(key))) {
            const newCartItems = cartItems.map(cartItem => {
                if (cartItem.key === parseInt(key)) {
                    return { ...item, key: parseInt(key), sizes: size, count: cartItem.count + count }
                }
                return cartItem
            }
            )
            localStorage.setItem('cart', JSON.stringify(newCartItems))
        } else {
            const newCartItems = { ...item, key: parseInt(key), sizes: size, count }
            cartItems.push(newCartItems)
            localStorage.setItem('cart', JSON.stringify(cartItems))
        }
    } else {
        const array = []
        const cartItem = { ...item, key: parseInt(key), sizes: size, count }
        array.push(cartItem)
        localStorage.setItem('cart', JSON.stringify(array))
    }

    // get items cart from localStorage

    const storageItems = JSON.parse(localStorage.getItem('cart'))

    dispatch(addToCart(storageItems))
}

export const removeItemFromCart = (key) => dispatch => {
    const items = JSON.parse(localStorage.getItem('cart')).filter(item => item.key !== key)
    localStorage.setItem('cart', JSON.stringify(items))
    dispatch(addToCart(items))
}
