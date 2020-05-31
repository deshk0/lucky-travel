import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom'

import { HomePage } from './pages/homepage/homePage';
import { KayakAlloysReg } from './pages/kayakAlloys/kayakAlloysRegister'
import { KayakAlloysRegister } from './pages/kayakAlloys/kayakAlloysReg'
import { KayakAlloys } from './pages/kayakAlloys/kayakAlloys';
import { AuthorsTours } from './pages/authorsTours';
import { Equipment } from './pages/equipment/equipment';
import { EquipmentReg } from './pages/equipment/equipmentReg';
import { AboutUs } from './pages/aboutus';
import { KayakAlloysPers } from './pages/kayakAlloys/kayakAlloysPers';
import { ThanksPage } from './pages/thanks';
import { KayakAlloysMob } from './pages/mobileversion/kayakAlloysMob';
import { FormMobile } from './pages/mobileversion/formMob';
import { EquipmentMobile } from './pages/mobileversion/equipmentMob';







ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/home">
                <HomePage />
            </Route>
            <Route path="/thankspage" exact>
                <ThanksPage />
            </Route>
            <Route path="/formmobile" exact>
                <FormMobile />
            </Route>
            <Route path="/kayakalloys" exact>
                <KayakAlloys />
            </Route>
            <Route path="/kayakalloysmob" exact>
                <KayakAlloysMob />
            </Route>
            <Route path="/kayakalloysreg" exact>
                <KayakAlloysReg />
            </Route>
            <Route path="/kayakalloysregister" exact>
                <KayakAlloysRegister />
            </Route>
            <Route path="/kayakalloyspers" exact>
                <KayakAlloysPers />
            </Route>
            <Route path="/authorstours" exact>
                <AuthorsTours />
            </Route>
            <Route path="/equipment" exact>
                <Equipment />
            </Route>
            <Route path="/equipmentmobile" exact>
                <EquipmentMobile />
            </Route>
            <Route path="/equipmentreg" exact>
                <EquipmentReg />
            </Route>
            <Route path="/aboutus" exact>
                <AboutUs />
            </Route>
            <Redirect to="/home"></Redirect>
        </Switch>
    </Router>,   
    


    document.getElementById('root')
);

