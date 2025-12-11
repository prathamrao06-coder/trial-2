import React, { useState } from 'react';


export default function Prathamji() {

  const[Count,setCount]=useState(0)
let a=()=>{
if (Count>0){setCount(Count-1)}
}

  return (
    
    <div>
      <h1>Count:-{Count}</h1>
      
      <button className='' onClick={()=>setCount(Count+1)}>Add</button>

      <button onClick={a}>Remove</button>
      
      <button onClick={()=>setCount(Count*Count)}>Square</button>
      
      <button onClick={()=>setCount(0)} >Zero</button>
    
    </div>
  )
}

