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

const Registration = React.lazy(() => import('./Screens/Registration/Registration'))
const Dashboard = React.lazy(() => import('./Screens/Dashboard/Dashboard'))
const CreateCardLayout = React.lazy(() => import('./../src/Screens/CreateCardLayout/CreateCardLayout'));
const SignUp = React.lazy(() => import('./Screens/Registration/Signup/Signup'))

const App = () => {


    return (

        <NoSSR >
            <Suspense fallback={<p>Loading ...</p>}>
                <Routes>

                    <Route path="/" element={<Dashboard />}>
                    </Route>

                    <DesignToolProvider>
                        <TemplateProvider>

                            <Route path="createcard" element={<CreateCardLayout />}>
                            </Route>
                        </TemplateProvider>
                    </DesignToolProvider>
                    <Route path="/signin" element={<Registration />}>
                    </Route>
                    <Route path="/signup" element={<SignUp />}>
                    </Route>

                </Routes>
            </Suspense >
        </NoSSR>
    );
}


export default App;
