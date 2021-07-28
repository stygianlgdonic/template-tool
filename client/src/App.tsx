import React from 'react';
import "tailwindcss/tailwind.css"
import NoSSR from './NoSSR'
import { BrowserRouter as Router, useRoutes } from "react-router-dom"
import './App.css';
const Dashboard = React.lazy(() => import('./Screens/Dashboard/Dashboard'));
const CreateCardLayout = React.lazy(() => import('./Screens/CreateCardLayout/CreateCardLayout'));

const App = () => {
    const routing = useRoutes([
        { path: '/', element: <Dashboard /> }]);

    return (

        { routing }

    );
}


export default App;
