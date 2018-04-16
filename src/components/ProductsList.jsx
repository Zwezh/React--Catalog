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
                <div className="products">
                    <div className="products__new">
                        <Link className="btn btn-primary" to="/products/new">Добавить новый товар</Link></div>
                    <div className="row">
                        {
                            this.props.products.map(item =>
                                <Product
                                    onDelete={this.props.deleteProduct}
                                    key={item.id}
                                    product={item}
                                />
                            )
                        }
                    </div>
                </div>
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
        deleteProduct: (id) => dispatch({ type: types.DELETE_PRODUCT, id: id }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);