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

const Registration = React.lazy(() => import('./layouts/LoggedOutLayout/Registration/Registration'))
const Dashboard = React.lazy(() => import('./layouts/LoggedInLayout/Dashboard/Dashboard'))
const CreateCardLayout = React.lazy(() => import('./layouts/LoggedInLayout/CreateCardLayout/CreateCardLayout'));
const SignUp = React.lazy(() => import('./layouts/LoggedOutLayout/Registration/Signup/Signup'))

const App = () => {


    return (

        <NoSSR >
            <Suspense fallback={<p>Loading ...</p>}>
                <DesignToolProvider>
                    <TemplateProvider>
                        <Routes>

                            <Route path="/" element={<Dashboard />}>
                            </Route>

                            <HeaderProvider>

                                <Route path="createcard" element={<CreateCardLayout />}>
                                </Route>
                            </HeaderProvider>
                            <Route path="/signin" element={<Registration />}>
                            </Route>
                            <Route path="/signup" element={<SignUp />}>
                            </Route>

                        </Routes>
                    </TemplateProvider>
                </DesignToolProvider>
            </Suspense >
        </NoSSR>
    );
}


export default App;
