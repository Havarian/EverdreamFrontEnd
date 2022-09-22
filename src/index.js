import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "@mui/material";
import appTheme from "./appTheme";
import {configureStore} from "@reduxjs/toolkit";
import securityStore from "./redux/stores/securityStore";
import {Provider} from "react-redux";
import contentStore from "./redux/stores/contentStore";
import appStateStore from "./redux/stores/appStateStore";
import axios from "axios";
import AuthHeader from "./services/authentication/AuthHeader";

if (localStorage.getItem('user')) {
    axios.defaults.headers.common['Authorization'] = AuthHeader().Authorization
}

export const store = configureStore({
    reducer: {
        security: securityStore,
        content: contentStore,
        appState: appStateStore
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ThemeProvider theme={appTheme}>
            <App />
        </ThemeProvider>
    </Provider>
);

reportWebVitals();
