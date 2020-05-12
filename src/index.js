import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'simplebar/dist/simplebar.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Helmet } from 'react-helmet';

import { store, persistor } from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Helmet>
                <title>Sportify</title>
            </Helmet>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
document.getElementById('root')
);
