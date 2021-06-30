import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NoSSR from './NoSSR'
import { ROUTE_NAMES } from './routes/route_names';
const DesignTool = React.lazy(() => import('./components/DesignTool'));
const SelectPalette = React.lazy(() => import('./components/SelectPalette'));

const App = () => (
    <Switch>
        <NoSSR>
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
        </NoSSR>
    </Switch>
);

export default App;
