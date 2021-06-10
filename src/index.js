import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { GlobalStyles } from "./styledComponents";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
