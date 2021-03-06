import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, About, Board, NotFound, Product} from './index';
import LayHeader from '../Layout/LayHeader';

const Routers = () => (
    <BrowserRouter>
        <LayHeader />
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/About" component={ About } />
            <Route exact path="/Board" component={ Board } />
            <Route exact path="/Product" component={ Product } />
            <Route path="*" component={ NotFound } />
        </Switch>
    </BrowserRouter>
);

export default Routers;