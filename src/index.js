import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './roots/rootReducer/rootReducer';

function  init() {
    const store = createStore(rootReducer)
    process.env.NODE_ENV !== 'production' && (window.store = store);

    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root')
    );
}

init();
