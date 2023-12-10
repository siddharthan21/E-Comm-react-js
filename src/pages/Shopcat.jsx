import React, { useContext } from 'react'
import all_product from '../components/assests/all_product'
import {ShopContext} from '../context/ShopContext'
import './ren.css'
import Item from '../components/items/Item'
import dropdown from '../components/assests/dropdown_icon.png'
const Shopcat = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='shop-cat'>
        <img className='shopcat-banner'  src={props.banner} alt="" />
        <div className="shop-cat-indexsort">
          <p>
            <span>Showing 1-12</span> Out of 36product
          </p>
          <div className="shopcat-sort">
            ssort by <img src={dropdown} alt="" />
          </div>
        </div>
        <div className="shopcat-product">
          {all_product.map((item,i)=>{
            if(props.category === item.category){
              return <Item  key={i} id={item.id} name = {item.name} image ={item.image}
              new_price = {item.new_price} old_price ={item.old_price} />
            }else{
              return null
            }
          })}
        </div>
        <div className="shopcat-loadmore">
          Exploree
        </div>
    </div>
  )
}

export default Shopcat ;
