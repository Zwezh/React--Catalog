import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './src/components/Nav';
import Home from './src/components/Home';
import About from './src/components/About';
import Products from './src/components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router>
        <div className="container">
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/products" component={Products} />                
            </Switch>
        </div>
    </Router>, 
    document.getElementById('root')
);
