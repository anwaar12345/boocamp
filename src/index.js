import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  
  <React.StrictMode>
   <App name="Syed Anwar Ahmed Shah" age={23}/>
  </React.StrictMode>,
  
  document.getElementById('root')
);

serviceWorker.unregister();
