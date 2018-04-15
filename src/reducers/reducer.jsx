import * as types from '../constants';
import products from '../../products.json'

const initialState = {
    products
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_NEW_PRODUCT:
            return [ ...state, action.product ]
        case types.UPDATE_PRODUCT:
        return {
            products: state.products.map( item => item.id === action.product.id & action.product )
         }
        default:
            return state;
    }
}

export default reducer;