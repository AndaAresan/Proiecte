import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <img src = "https://avatars2.githubusercontent.com/u/3100817?s=400&u=23e87b446eefd6cdc71013dbc6288ff156837574&v=4" />
      <h1>Jeremi Stadler</h1>
      <p>Developer at Storytel / Ztory</p>
      <p>Tullängsskolan University</p>
      <a href="https://www.facebook.com/jeremistadler">Facebook</a>
      <a href="https://github.com/jeremistadler">GitHub</a>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
