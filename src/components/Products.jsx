import React from 'react';
import { connect } from 'react-redux';
import * as types from '../constants'

class Products extends React.Component {
    render() {
        return (
            <h1>Products page</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewProduct: () => dispatch({ type: types.ADD_NEW_PRODUCT, product: {} })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);