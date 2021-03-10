import { combineReducers } from 'redux'
import Cart_Reducer from './Cart_Reducer';
import Product_Reducer from './Product_Reducer'


export default combineReducers({
        Cart_Reducer,
        Product_Reducer,
})