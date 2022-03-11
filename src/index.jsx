import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DiceApp from './DiceApp';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <nav>
        <Link to='/tenzies'> Game </Link>
        <Link to='/'> Memes </Link>

      </nav>
      <Routes>
        
        <Route path="/" element={<App />}/>
        <Route path="/tenzies" element={<DiceApp />}/>
        <Route path="/*" element={<h1> Broken link</h1>}/>


        
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
