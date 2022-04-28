import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from "./globalStyles"

import App from './App';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
        <GlobalStyles />
    </React.StrictMode>
);

