import React from 'react';
import { Route, Switch } from 'react-router-dom';
const Dashboard = React.lazy(() => import('./Screens/Dashboard/Dashboard'));
import 'tailwindcss/tailwind.css';
import NoSSR from './NoSSR'
import './App.css';
// import Dashboard from './components/Dashboard/Dashboard';

const App = () => (
    <Switch>
        <NoSSR>
            <Route exact={true} path="/" render={() => (
                <React.Suspense fallback={<div className="text-red-700">Loading ...</div>}>
                    <Dashboard />
                </React.Suspense>)
            } />

        </NoSSR>
    </Switch>
);

export default App;
