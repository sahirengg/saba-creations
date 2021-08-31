
// import { Button } from '@material-ui/core'
import React, { useState,useReducer } from 'react'
import img1 from '../../CommonComponents/Assets/productPagePics/image_saba_1.jpg'
import img2 from '../../CommonComponents/Assets/productPagePics/image_saba_2.jpg'
import Counter from '../productView/counter/Counter'

// import ContactInfo from '../Contact_Info/Contact'

import  CartSec from './cart/CartSec'

import './ShoppingCart.scss'

const cartArr = [{
    id: 'a',
        image: img1,
        title: 'Black Solid Rayon Kurta',
        size: 'XS',
        price: '1400'
    },
    {
        id:"b",
        image: img2,
        title: 'Black  Kurta',
        size: 'XS',
        price: '1800'}]


const initialState ={
    item:cartArr,
    totalAmount: 0,
    totalItem:0,

}

const ShoppingCart = () =>{
    const [item, setItem] = useState(cartArr)
    const [filter, setFilter] = useState('')
 

    const handleRemove = () =>{
        return(
            cartArr.filter((remove) => remove.id !== filter)
        )
    }

    return(
        <div className = 'cat'>
        <h1 className ='heading'>Cart</h1>
        <p className = 'pera'>
            Continue shopping
        </p>
        <br/>
        
        <br/>
       
        <section className = 'main-cart-section'>
           
            {
                item && item.map((items:any, index) =>{
                    return(
                    <CartSec key ={index} {...items}  handleRemove={handleRemove} setFilter={setFilter} />
                    )
                })
            }
                  
                  <div className = 'button'>
                      <h3>SUBTOTAL <span>1400</span></h3>
                     <button className = 'btn1'>CONTINUE SHOPPING</button> <button className = 'btn2'>PLACE ORDER</button>
                  </div>

        </section>
        {/* <ContactInfo/> */}
        </div>
    )
}

export default ShoppingCart;