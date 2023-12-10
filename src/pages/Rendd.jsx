import React from 'react'
import './ren.css'

const Rendd = (val) => {

  return (
    <div key={val.id} className='rendd-item'>
      {val.cat===val.req?<img src={val.img} alt="" />:false} 
      {val.cat===val.req?<h3>{val.name}</h3>:false}
      {/* {val.cat===val.req?<h4>{val.id}</h4>:false}
      {val.cat===val.req?<h4>{val.old_price}</h4>:false}
      {val.cat===val.req?<h4>{val.new_price}</h4>:false}
      {val.cat===val.req?<h4>{val.cat}</h4>:false} */}
      
    </div>
  )
  }

export default Rendd
