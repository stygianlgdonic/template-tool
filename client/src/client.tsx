import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query"
import App from './App';
const queryClient = new QueryClient()
hydrate(
    <QueryClientProvider client={queryClient}>
        <Router>
            <App />
        </Router>,
    </QueryClientProvider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
