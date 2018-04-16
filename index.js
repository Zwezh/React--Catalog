import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Nav from './src/components/Nav';
import Home from './src/components/Home';
import About from './src/components/About';
import Products from './src/components/Products';
import ProductDetails from './src/components/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from './src/reducers/reducer';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
    <Provider store = { store } >
        <Router>
            <div className = "container">
                <Nav />
                <Switch>
                    <Route exact path = "/" component={Home} />
                    <Route path = "/about" component={About} />
                    <Route exact path = "/products" component={Products} />
                    <Route path = "/products/:id" component={ProductDetails} />
                    <Route exact path = "/products/new" component={ProductDetails} />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
