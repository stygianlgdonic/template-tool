import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query"

import App from './App';

const queryClient = new QueryClient()

hydrate(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QueryClientProvider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
