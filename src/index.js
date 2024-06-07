import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
root.render(
    <QueryClientProvider client={queryClient}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </QueryClientProvider>
);