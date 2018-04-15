import * as types from '../constants';

export const addNewProduct = (product) => {
    return {
        type: types.ADD_NEW_PRODUCT,
        payload: product
    }
}

export const updateProduct = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        payload: product
    }
}

export const deleteProduct = (product) => {
    return {
        type: types.DELETE_PRODUCT,
        payload: product
    }
}