import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import reducers from './redux/reducer';

const stores = createStore(reducers, {}, applyMiddleware(reduxThunk))
const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactDOM.render(
  root.render(
  <React.StrictMode>

    <Provider store ={stores} >
        {/* <BrowserRouter> */}
            <App />
        {/* </BrowserRouter> */}
    </Provider>
    </React.StrictMode>
, document.getElementById('root'));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
