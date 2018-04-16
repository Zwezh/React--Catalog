import React from 'react';
import { connect } from 'react-redux';
import * as types from '../constants';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        const products = this.props.products;
        const newProduct = this.props.id.search('new') !== -1;

        const product = newProduct ? {
            id: Date.now(),
            name: '',
            price: '',
            description: ''
        } :
            products.find(item => item.id === this.props.id);

        this.state = {
            newProduct: newProduct,
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description
        }
        this.onAddUpdateProduct = this.onAddUpdateProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    onAddUpdateProduct() {
        this.state.newProduct ?
            this.props.addNewProduct(this.state) :
            this.props.updateProduct(this.state);
        this.props.redirect('/products');
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <form onSubmit={this.handleSubmit} className="product-details">
                            <h2 className="product-details__title">
                            {
                                this.state.newProduct ? "Добавить новый товар" : "Обновить товар"
                            }
                            </h2>
                            <div className="detail-products">
                                <input
                                    name="name"
                                    className="form-control product-details__input"
                                    type="text"
                                    placeholder="Введите название товара"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                                <input
                                    name="price"
                                    className="form-control product-details__input"
                                    type="number"
                                    placeholder="Введите цену товара"
                                    value={this.state.price}
                                    onChange={this.handleChange}
                                />
                                <textarea
                                    name="description"
                                    className="form-control product-details__input product-details__textarea"
                                    placeholder="Введите описание товара"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                ></textarea>
                            </div>
                            <div className="product-details__btn">
                            <button
                                type="button"
                                onClick={this.onAddUpdateProduct}
                                className="btn btn-primary "
                            >
                                {
                                    this.state.newProduct ?
                                        "Добавить новый продукт" :
                                        "Обновить продукт"
                                }
                            </button>
                            </div>                            
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
ProductDetails.propTypes = {
    products: PropTypes.array,
    id: PropTypes.string.isRequired,
    addNewProduct: PropTypes.func.isRequired,
    updateProduct: PropTypes.func.isRequired,
    redirect: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products,
        id: ownProps.match.params.id,
        redirect: ownProps.history.push
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewProduct: (product) => dispatch({ type: types.ADD_NEW_PRODUCT, product: product }),
        updateProduct: (product) => dispatch({ type: types.UPDATE_PRODUCT, product: product })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);