import React from 'react'
import './breadcrum.css'
import arrow_icon from '../assests/breadcrum_arrow.png'
import Item from '../items/Item'
const Breadcrum = (props) => {
  const {product} = props
  return (
    <div className='breadcrum'>
      Home 
   
      <img src={arrow_icon} alt="" /> 
      shop   <img src={arrow_icon} /> {product.name}<img src= {arrow_icon} alt="" />
      {/* <Item  key={product.id} id={product.id} name = {product.name} image ={product.image}
              new_price = {product.new_price} old_price ={product.old_price} /> */}
    </div>
  )
}

export default Breadcrum
