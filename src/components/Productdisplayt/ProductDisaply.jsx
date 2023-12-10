import start_icon from '../assests/star_icon.png'
import start_dull from '../assests/star_dull_icon.png'
import React, { useContext } from 'react'
import './pd.css'
import { ShopContext } from '../../context/ShopContext'
const ProductDisaply = (props) => {
    const { product } = props
    const {addtocart} = useContext(ShopContext);
    return (
        <div>
            <div className="productdisplay">
                <div className="productdisplay-left">
                    <div className="img-list">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                    <div className="main">
                        <img src={product.image} alt="" className="main-img" />
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h1>{product.name}</h1>
                    <div className="start">
                        <img src={start_icon} alt="" />
                        <img src={start_icon} alt="" />
                        <img src={start_icon} alt="" />
                        <img src={start_icon} alt="" />
                        <img src={start_dull} alt="" />
                    </div>
                    <div className="pricrs">
                        <div className="old-price">
                            ${product.old_price}
                        </div>
                        <div className="new">
                            ${product.new_price}
                        </div>
                    </div>

                    <div className="discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae, magni omnis fuga deleniti, aliquid vitae incidunt, maxime porro dolore beatae. Autem qui eum dignissimos quas amet culpa! Perferendis, aliquam!</div>
                    <div className="size">
                        <h1>Select Text</h1>
                        <div className="select-size">
                            <div className="1">S</div>
                            <div className="2">M</div>
                            <div className="3">L</div>
                            <div className="4">XL</div>
                        </div>
                    </div>
                    <button className='Add' onClick={()=>{addtocart(product.id)}} >Add To Cart</button>
                    <p className="cat">
                        <span>Category</span>:Womwn,t-shirt,crop-top
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisaply
