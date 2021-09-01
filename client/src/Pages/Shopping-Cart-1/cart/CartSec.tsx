import React from "react"
import {Grid} from '@material-ui/core'
import img1 from '../../../CommonComponents/Assets/productPagePics/image_saba_1.jpg'
import './cartSec.scss'
import '../../productView/counter/Counter'
import Counter from "../../productView/counter/Counter"

const CartSec = (props:any) =>{
     const {id,image, title,size,price, handleRemove, setFilter} = props

    return(

<div className= 'catDetails' >
    <hr/>
            <Grid container spacing={3} lg={12}>
                
                <div className= 'mainConatiner'>
                    <div className= 'productPreview'>
                        <img className =  'bigImg' style ={{width:'50%' }} src={image} alt='kurta' />

                    </div>

                    <div className= 'productData'>
                        <h1 className= 'productTitle'>{title}  </h1>
                        <p className= 'productDescription'>{size}</p>
                        <h4 className= 'price'>{price}</h4>
                        <h5>Quantity: <span>1</span></h5>
                        <Counter/>
                        <button className = 'btnRemove'>REMOVE</button><br/>

                        
            <div className = 'btn_shopping'>

                <button className = 'btn1'>CONTINUE SHOPPING</button>

                <button className = 'btn2'>PLACE ORDER</button>
            </div>
            </div>
      </div>
          </Grid>
          <hr/>
 </div>
      
    )
}

export default CartSec