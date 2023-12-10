import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import { useParams } from 'react-router-dom'
// import all_product from '../components/assests/all_product'
import Breadcrum from '../components/Breadcrum/Breadcrum'
import ProductDisaply from '../components/Productdisplayt/ProductDisaply'
import Description from '../components/Description/Description'
import RelatedProduct from '../components/RelatedProduct/RelatedProduct'
 const Product = () => {
  const {all_product} =useContext(ShopContext)
  const {ID} = useParams();
  // const product = all_product.find((e)=>e.id === Number(ID))
  const product = all_product.find((e)=>e.id === Number(ID))

  // console.log(product)
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisaply product={product} />
      <Description />
      <RelatedProduct />
    </div>
  )
}

export default Product
