import { createContext, useState } from "react";
import all_product from '../components/assests/all_product'
export const ShopContext = createContext(null);
const getdefaultcart = () =>{
    let cart = {};
    for(let index =0 ; index < all_product.length+1;index++){
        cart[index] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) =>{
    const [cartitems,setcartitems] = useState(getdefaultcart())

    const addtocart = (itemId) =>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removefromcart = (itemId) =>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const gettotal=() =>{
        let total =0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                let iteminfo = all_product.find((product)=>product.id === Number(item))
                total += iteminfo.new_price * cartitems[item]
            }
        }
        return total;
    }

    const qn = () =>{
        let i = 0
        for(const item in cartitems){
            if(cartitems[item]>0){
                i += cartitems[item];
            }
        }
        console.log(i)
        return i;
    }



    const contextValue = {all_product,cartitems,addtocart,removefromcart,gettotal,qn};
    return(
        <ShopContext.Provider value={contextValue}>
         {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;