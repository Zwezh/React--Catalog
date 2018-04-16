import * as types from '../constants';
import products from '../../products.json';

const initialState = {
    products
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_NEW_PRODUCT:
            return { products: [...state.products, action.product ] }
        case types.UPDATE_PRODUCT:
        return {
            products: state.products.map( item => item.id !== action.product.id ? item : action.product )
         }
         case types.DELETE_PRODUCT:
        return {
            products: state.products.filter( item => item.id !== action.id)
         }
        default:
            return state;
    }
}

export default reducer;