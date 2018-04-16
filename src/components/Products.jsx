import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Product from './Product';

import * as types from '../constants';

class Products extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Products page</h1>

                <Link className="btn btn-default" to="/products/new">Добавить</Link>
                <ul>
                    {
                        this.props.products.map(item =>
                            <Product
                                onDelete={this.props.deleteProduct}
                                key={item.id}
                                product={item}
                            />
                        )
                    }
                </ul>
            </div>
        )
    }
}
Products.propTypes = {
    products: PropTypes.array.isRequired,
    deleteProduct: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: (id) => dispatch({ type: types.DELETE_PRODUCT, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);