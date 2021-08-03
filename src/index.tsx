import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./store";
import {Counter} from "./Counter";

const app=(
    <Provider store={store}>
      <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root')
);

reportWebVitals();
