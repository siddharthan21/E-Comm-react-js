import React from 'react'
import '../popolar/popolar.css'
import data_product from '../assests/data'
import Item from '../items/Item'
const Popolar = () => {
  return (
    <div className='popular'>
        <h1>Popular In Women</h1>
        <hr />
        <div className="popolar-item">
            {data_product.map((item,i)=>{
                return <Item  key={i} id={item.id} name = {item.name} image ={item.image}
                new_price = {item.new_price} old_price ={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popolar 
