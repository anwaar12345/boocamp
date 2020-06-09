import React, {useState} from 'react';

function Room() {
 let [isLit,setLit] = useState(true);
 // var , fun for state
 let [temp,setTemp] = useState(72);
 function lit(){
   console.log("clicked");
   setLit(!isLit);
   
 }

const incTemp = () => {
    setTemp(++temp);
}
const style = {
 marginTop: "10px",
 fontSize: "30px",
 marginBottom: "10px",
 padding: "10px"
};
return (
  
<div className={`App  ${isLit?"light":"dark"}`} style={style}>
The Room is | {isLit ? "lit" : "Dark"}    
<br/>
<h4>Room Temperature : {temp} </h4>
<br/>
<button className="btn btn-primary" onClick={lit}>Switch On Light Button</button>
<br/>
<br/>
<button className="btn btn-primary" onClick={()=>{ setLit(!isLit) }}>Switch Off Light Button</button>
<br/>
<br/>
<button className="btn btn-primary" onClick={incTemp}>Increase Temperature Button</button>
<br/>
<br/>
<button className="btn btn-primary" onClick={()=>{
    setTemp(--temp);
}}>Decrease Temperature Button</button>

</div>

);
}

export default Room;
