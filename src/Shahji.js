import React from 'react';
import './App.css';
function Shahji({imageTile,body,imageUrl,time}) {
  
    return (
      <div className="card bg-dark text-white">
      <img className="card-img" src={imageUrl} alt="bg pic"/>
      <div className="card-img-overlay">
    <h5 className="card-title">{imageTile}</h5>
        <p className="card-text">{body}</p>
    <p className="card-text">{time}</p>
      </div>
  </div>
       );

 }
export default Shahji;
