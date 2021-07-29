import React, { Suspense } from 'react';
import "tailwindcss/tailwind.css"
import NoSSR from './NoSSR'
import { Routes, Route } from "react-router-dom"
import './App.css';
import { DesignToolProvider } from './contexts/DesignToolContext';
import { TemplateProvider } from './contexts/TemplateContext';

import Dashboard from './Screens/Dashboard/Dashboard'
const CreateCardLayout = React.lazy(() => import('./../src/Screens/CreateCardLayout/CreateCardLayout'));

const App = () => {


    return (

        <NoSSR >
            <Routes>

                <Route path="/" element={<Dashboard />}>
                </Route>

                <DesignToolProvider>
                    <TemplateProvider>
                        <Suspense fallback={
                            <p>Loading ...</p>
                        }>
                            <Route path="createcard" element={<CreateCardLayout />}>
                            </Route>
                        </Suspense>
                    </TemplateProvider>
                </DesignToolProvider>

            </Routes>
        </NoSSR>
    );
}


export default App;
