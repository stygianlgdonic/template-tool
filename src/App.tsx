import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NoSSR from './NoSSR'

const App = () => (
    <Switch>
        <Route exact={true} path="/" render={() => <NoSSR><Home /></NoSSR>} />
    </Switch>
);

export default App;
