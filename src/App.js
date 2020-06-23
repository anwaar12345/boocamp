import React from 'react';
import Shah from './shah';
import './App.css';


function App({name,age}) {
 
   return (
  
<div className="App jumbotoron">
      <header className="App-header" >
       <h3>Name: {name} Age:{age}</h3>
      

      </header>
      <div className="shah"> <Shah message="Message For Shah Component"/> </div>
    </div>

);
}

export default App;
