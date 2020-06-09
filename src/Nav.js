import React from 'react';
import './App.css';

function Nav({logo}) {
 const style = {
      backgroundColor: "aqua",
      height: "80px"  
};
   return (
<nav className="navbar navbar-expand-lg navbar-light" style={style}>
   <a className="navbar-brand" href="#welcome">{logo}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#qualification">Qualification</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#Portfolio">Portfolio</a>
      </li> 
      <li className="nav-item active">
        <a className="nav-link" href="#about">About Us</a>
      </li>
      
      <li className="nav-item active">
        <a className="nav-link" href="#contact">Contact Us</a>
      </li>
    </ul>
  </div>
  
 
</nav>
  );
}

export default Nav;
