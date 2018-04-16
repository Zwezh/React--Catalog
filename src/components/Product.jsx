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
            <div className="col-sm-6 col-md-3 products__product">
                <div className="thumbnail">
                    <img src="https://www.troublemakercustomleather.com/image/cache/catalog/placeholderproduct-500x500.png" />
                    <div className="caption">
                        <h3 className="products__product-name">{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Стоимость: <strong>{product.price}</strong> руб.</p>
                        <p>
                            <Link 
                                className="btn btn-info" 
                                to={`/products/${product.id}`}
                            >Обновить</Link>
                            <button 
                                onClick={this.onDelete} 
                                className="btn btn-danger products__product-delete"
                            >Удалить</button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
Product.propTypes = {
    product: PropTypes.object.isRequired,
    onDelete: PropTypes.func
}
export default Product;