import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductsList from './ProductsList';
import ProductDetails from './ProductDetails';

const Products = () => {
    return (
        <Switch>
            <Route exact path="/products" component={ProductsList} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route exact path="/products/new" component={ProductDetails} />
        </Switch>
    )
}

export default Products;