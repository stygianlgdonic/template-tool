import React, { Suspense } from 'react';
import "tailwindcss/tailwind.css"
import NoSSR from './NoSSR'
import { Routes, Route } from "react-router-dom"
import './App.css';
// const Dashboard = React.lazy(() => import('./Screens/Dashboard/Dashboard'));
import Centerboard from './components/Centerboard/Centerboard';
import LeftSidebar from './components/LeftSideBar/LeftSidebar';
import { DesignToolProvider } from './contexts/DesignToolContext';
import { TemplateProvider } from './contexts/TemplateContext';
import { HeaderProvider } from './contexts/HeaderContext';
import PrivateRoute from './routes/Private';
import PublicRoute from './routes/Public';

import SignUp from './layouts/LoggedOutLayout/Registration/Signup/Signup'
import Registration from './layouts/LoggedOutLayout/Registration/Registration'
const Dashboard = React.lazy(() => import('./layouts/LoggedInLayout/Dashboard/Dashboard'))
const CreateCardLayout = React.lazy(() => import('./layouts/LoggedInLayout/CreateCardLayout/CreateCardLayout'));

const App = () => {


    return (
        <>

            <NoSSR >
                <Suspense fallback={<p>Loading ...</p>}>
                    <DesignToolProvider>
                        <TemplateProvider>
                            <Routes>
                                <PublicRoute path="/signin" element={Registration}>
                                </PublicRoute>
                                <PublicRoute path="/signup" element={SignUp}>
                                </PublicRoute>
                                <PrivateRoute path="/" element={Dashboard}>
                                </PrivateRoute>

                                <HeaderProvider>

                                    <PrivateRoute path="/createcard" element={CreateCardLayout}>
                                    </PrivateRoute>
                                </HeaderProvider>

                            </Routes>
                        </TemplateProvider>
                    </DesignToolProvider>
                </Suspense >
            </NoSSR>
        </>
    );
}


export default App;
