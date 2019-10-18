import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard1 from './components/Wizard/Wizard1';
import Wizard2 from './components/Wizard/Wizard2';
import Wizard3 from './components/Wizard/Wizard3';

export default (
    <Switch>
        <Route exact path='/' component={ Dashboard } />
        <Route path='/wizard/step1' component={ Wizard1 } />
        <Route path='/wizard/step2' component={ Wizard2 } />
        <Route path='/wizard/step3' component={ Wizard3 } />
    </Switch>
)