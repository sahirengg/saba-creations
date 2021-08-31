import React from 'react'
import ProductDetalis from '../productView/ProductDetails/ProductDetails'
import SlidePics from '../productView/SidePics/SidePics'

import classes from './pView.module.css'

const ProductView = () =>{
     const imageArr = [
       {id:1,image:'https://cdn.shopify.com/s/files/1/0341/4805/7228/products/9075_1_360x.jpg?v=1599916985' },
      {id:2,image:'https://cdn.shopify.com/s/files/1/0341/4805/7228/products/9075_2_360x.jpg?v=1599916986'},
      { id:3,image: 'https://cdn.shopify.com/s/files/1/0341/4805/7228/products/9075_3_1800x1800.jpg?v=1599916985' },
     {id:4,image:'https://cdn.shopify.com/s/files/1/0341/4805/7228/products/9075_4_360x.jpg?v=1599916986'},
     {id:5,image:'https://cdn.shopify.com/s/files/1/0341/4805/7228/products/9075_5_360x.jpg?v=1599916986'}
    ]
    return(
        <div className = {classes.pView}>
            <SlidePics img = {imageArr}/>
            <ProductDetalis/>

        </div>

    )
}

export default ProductView