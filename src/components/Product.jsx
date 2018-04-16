import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.product.id
        }
        this.onDelete = this.onDelete.bind(this);
        
    }
    onDelete() {
        this.props.onDelete(this.state.id);
    }
    render() {
        const product = this.props.product;
        return (
            <li>
                <p> <b>Название: </b> { product.name }</p>
                <p> <b>Цена:</b> { product.price } руб.</p>
                <Link className="btn" to={`/products/${product.id}`}>Обновить</Link>
                <button onClick={this.onDelete} className="btn btn-danger">Удалить</button>
            </li>
        );
    }
}
Product.propTypes = {
    product: PropTypes.object.isRequired,
    onDelete: PropTypes.func
}
export default Product;