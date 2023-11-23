import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './components/Router'; 
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);

rootElement.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router /> 
        </Provider>
    </React.StrictMode>,
);
