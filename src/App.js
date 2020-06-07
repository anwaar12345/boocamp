import React from 'react';
import Shah from './shah';
import './App.css';


function App({name,age}) {
 
   return (
  
<div className="App jumbotoron">
      <header className="App-header" >
      Name: <h3>{name}</h3>
      Age: <h3>{age}</h3>
      <h1> Syed Anwar Ahmed Shah </h1>
      </header>
      <div className="shah"> <Shah message="Message For Shah Component"/> </div>
    </div>

);
}

export default App;
