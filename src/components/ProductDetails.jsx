import React from 'react';
import { connect } from 'react-redux';
import * as types from '../constants';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);          
        const {products, id} = this.props;     
        const product = id.search('new') !== -1 ? {
            id: Date.now(),
            name: '',
            price: '',
            description: ''
        } :
            products.find(item => item.id === this.props.id);
            
        this.state = {
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description
        }
        this.onAddUpdateProduct = this.onAddUpdateProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    onAddUpdateProduct() {
        this.props.id.search('new') !== -1 ? 
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
            <form onSubmit={this.handleSubmit}>
                <h2>Detail product</h2>
                <div className="detail-products">
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Введите название товара"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        name="price"
                        className="form-control"
                        type="number"
                        placeholder="Введите цену товара"
                        value={this.state.price}
                        onChange={this.handleChange}
                    />
                    <textarea
                        name="description"
                        className="form-control"
                        placeholder="Введите описание товара"
                        value={this.state.description}
                        onChange={this.handleChange}
                    ></textarea>
                </div>
                <button type="button" onClick={this.onAddUpdateProduct} className="btn btn-primary">Добавить новый продукт</button>
            </form>
        )
    }
}
ProductDetails.propTypes = {
    products: PropTypes.array.isRequired,
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