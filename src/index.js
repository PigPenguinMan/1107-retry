import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
// 리덕스 프로바이더 
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './Modules';

// store 생성 
const store = createStore(rootReducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={'https://pigpenguinman.github.io/1107React-test'} >
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>  
  </React.StrictMode>
);

reportWebVitals();
