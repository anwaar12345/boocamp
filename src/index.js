import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './Nav';
import Shahji from "./Shahji";
import Room from "./Room";
import * as serviceWorker from './serviceWorker';
ReactDOM.render(

  <React.StrictMode>
 <Nav logo="Shah Nav"/>
   <App name="Syed Anwar Ahmed Shah" age={25}/>
   <Shahji imageTile="Title of Image" body="The Body" imageUrl="https://images.unsplash.com/photo-1535443274868-756b0f070b6e?ixlib=rb-1.2.1&w=1000&q=80" time="Last updated 3 mins ago"/>
  <Room/>
   </React.StrictMode>,
  
  document.getElementById('root')
);

serviceWorker.unregister();
