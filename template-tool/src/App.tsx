import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NoSSR from './NoSSR'
import { ROUTE_NAMES } from './routes/route_names';
import { TemplateProvider } from "./contexts/TemplateContext"
const DesignTool = React.lazy(() => import('./components/DesignTool/index'));
const SelectPalette = React.lazy(() => import('./components/SelectPalette/index'));
const Home = React.lazy(() => import('./components/Home'));
import 'tailwindcss/tailwind.css';

const App = () => (
    <Switch>
        <NoSSR>
            <TemplateProvider>
                <Route
                    exact={true}
                    path={ROUTE_NAMES.home}
                    render={() => (
                        <React.Suspense fallback={<div>Loading ...</div>}>
                            <Home />
                        </React.Suspense>)
                    }
                />
                <Route
                    exact={true}
                    path={ROUTE_NAMES.select_palette}
                    render={() => (
                        <React.Suspense fallback={<div>Loading ...</div>}>
                            <SelectPalette />
                        </React.Suspense>)
                    }
                />
                <Route
                    exact={true}
                    path={ROUTE_NAMES.design_tool}
                    render={() => (
                        <React.Suspense fallback={<div>Loading ...</div>}>
                            <DesignTool />
                        </React.Suspense>)
                    }
                />
                <Route
                    exact={true}
                    path={ROUTE_NAMES.design_tool_noID}
                    render={() => (
                        <React.Suspense fallback={<div>Loading ...</div>}>
                            <DesignTool />
                        </React.Suspense>)
                    }
                />
            </TemplateProvider>
        </NoSSR>
    </Switch >
);

export default App;
