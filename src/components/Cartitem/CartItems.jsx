import React, { useContext } from 'react'
import remove_icon from '../assests/cart_cross_icon.png'
import { ShopContext } from '../../context/ShopContext'
import './cart.css'
import all_product from '../assests/all_product'
const CartItems = () => {
    const {all_product,cartitems, addtocart, removefromcart,gettotal } = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className="main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className='hr' />

            {all_product.map((e) => {
                if (cartitems[e.id] > 0) {
                return ( <div key={e.id}>
                        <div className="formate main">
                            <img src={e.image} alt="" className="product-item" />
                            <p>{e.name}</p>
                            <p>{e.new_price}</p>
                            <button className='Quantity-btn'>{cartitems[e.id]}</button>
                            <p>{e.new_price*cartitems[e.id]}</p>
                            <img src={remove_icon} className='remove' onClick={() => { removefromcart(e.id) }} alt="" />
                        </div>
                        <hr className='hr' />
                    </div>)
                }
                return null;
            })}
            <div className="down">
                <div className="total">
                    <h1>Cart Totals:</h1>
                    <div className="">
                        <div className="total-item">
                            <p>Subtotal</p>
                            <p>${gettotal()}</p>
                        </div>
                        <hr className="hr" />
                        <div className="total-item">
                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr className="hr" />
                        <div className="total-item">
                            <h3>Total</h3>
                            <h1>${gettotal()}</h1>
                        </div>
                    </div>
                    <button>Proceed To CheckOut</button>
                </div>
                <div className="promocode">
                    <p>If You Promo Code, ?</p>
                    <div className="promo-input">
                        <input type="text" placeholder='Promocode!!' />
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
