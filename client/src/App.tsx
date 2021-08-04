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
import { TemplatetoolProvider } from './contexts/Templatetool';

const Registration = React.lazy(() => import('./Screens/Registration/Registration'))
const Dashboard = React.lazy(() => import('./Screens/Dashboard/Dashboard'))
const CreateCardLayout = React.lazy(() => import('./../src/Screens/CreateCardLayout/CreateCardLayout'));
const SignUp = React.lazy(() => import('./Screens/Registration/Signup/Signup'))

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
