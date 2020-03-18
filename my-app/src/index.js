import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom'

import { HomePage } from './pages/homePage';
import { KayakAlloys } from './pages/kayakAlloys';
import { AuthorsTours } from './pages/authorsTours';
import { Equipment } from './pages/equipment';








ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/home">
                <HomePage />
            </Route>
            <Route path="/kayakalloys" exact>
                <KayakAlloys />
            </Route>
            <Route path="/authorstours" exact>
                <AuthorsTours />
            </Route>
            <Route path="/equipment" exact>
                <Equipment />
            </Route>
            <Redirect to="/home"></Redirect>
        </Switch>
    </Router>,   
    


    document.getElementById('root')
);

