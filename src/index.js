import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';

const store = configureStore({
    reducer: rootReducer
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
