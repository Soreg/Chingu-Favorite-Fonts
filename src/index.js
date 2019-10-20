import React from "react";
import ReactDOM from "react-dom";
import App from './router.jsx';
import './reset.css';
import './styles.css';
import reducer from './store/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#app")
);