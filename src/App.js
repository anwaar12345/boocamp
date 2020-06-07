import React from 'react';
import Shah from './shah';
import './App.css';


function App({name,age}) {
 
   return (
  
<div className="App">
      <header className="App-header">
      Name: <h3>{name}</h3>
      Age: <h3>{age}</h3>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Syed Anwar Ahmed Shah
        </a>
      </header>
      <div className="shah"> <Shah message="Message For Shah "/> </div>
    </div>

);
}

export default App;
