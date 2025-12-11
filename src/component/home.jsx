import React from 'react'
import './home.css'

export default function () {
  return (
    <div>
        <div className='div'>
<h1 id='he'>Contact Form</h1>
        <div className='child'>
      <h1 style={{color:"red"}}>Name</h1>
      <input type="text" placeholder='Enter Here' />
      </div>
      <div className='child'>
      <h1>Email</h1>
      <input type="email" placeholder='Enter Here' /> 
      </div>
      <div className='child'>
      <h1>Number</h1>
      <input type="number" placeholder='Enter Here' />
      </div>
      
      <div className='child'>
        <h1>Address</h1>
      <input type="text" placeholder='Enter Here' />
</div>
<div className='child'>

<h1>Message</h1>
      <input type="text" placeholder='Enter Here' />
           
           </div>
           <button>SUBMIT</button> 
</div>

    </div>
  )
}
