import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import itemsListReducer from '../reducers/itemsList';
import topItemsListReducer from '../reducers/topItemsList'
import categoriesReducer from '../reducers/categories'
import changeValueReducer from '../reducers/catalogSearch'
import itemReducer from '../reducers/item'
import cartReducer from '../reducers/cart'
import orderFormReducer from '../reducers/orderForm'
import orderFetchReducer from '../reducers/orderFetch'
import thunk from "redux-thunk";
const reducer = combineReducers({
    itemsListReducer,
    topItemsListReducer,
    categoriesReducer,
    changeValueReducer,
    itemReducer,
    cartReducer,
    orderFormReducer,
    orderFetchReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
