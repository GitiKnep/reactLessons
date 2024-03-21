import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import toDoReducer from './Components/project/Store/reducers/toDoReducer'
import usersReducer from './Components/project/Store/reducers/usersReducer'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let x= createStore(combineReducers({users: usersReducer, toDo: toDoReducer}))

root.render(
  //<React.StrictMode>
  <Provider store={x}>
    <App />
    </Provider>
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
