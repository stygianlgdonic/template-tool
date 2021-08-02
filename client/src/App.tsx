import React, { Suspense } from 'react';
import "tailwindcss/tailwind.css"
import NoSSR from './NoSSR'
import { BrowserRouter, useRoutes, Routes, Route } from "react-router-dom"
import './App.css';
// const Dashboard = React.lazy(() => import('./Screens/Dashboard/Dashboard'));
import Dashboard from './../src/Screens/Dashboard/Dashboard';
import CreateCardLayout from './../src/Screens/CreateCardLayout/CreateCardLayout';
import Centerboard from './components/Centerboard/Centerboard';
import LeftSidebar from './components/LeftSideBar/LeftSidebar';
import { DesignToolProvider } from './contexts/DesignToolContext';
import { TemplateProvider } from './contexts/TemplateContext';
// const CreateCardLayout = React.lazy(() => import('./../src/Screens/CreateCardLayout/CreateCardLayout'));

// const CreateCardLayout = React.lazy(() => import('./Screens/CreateCardLayout/CreateCardLayout'));

const App = () => {


    return (
        // <Suspense fallback={
        //     <Dashboard />
        // }>

        <NoSSR >
            <Routes>

                <Route path="/" element={<Dashboard />}>
                    <Route path="/sss" element={<Centerboard />} />
                    <Route path="/404" element={<LeftSidebar />} />

                </Route>
                <DesignToolProvider>
                    <TemplateProvider>


                        <Route path="createcard" element={<CreateCardLayout />}>
                            <Route path="/sss" element={<Centerboard />} />
                            <Route path="/404" element={<LeftSidebar />} />

                        </Route>
                    </TemplateProvider>
                </DesignToolProvider>

            </Routes>
        </NoSSR>
        // </Suspense>
    );
}


export default App;
