import React from 'react'
import ProductDetalis from './ProductDetails/ProductDetails'
import SlidePics from './SidePics/SidePics'

import img1 from '../../CommonComponents/Assets/productPagePics/image_saba_1.jpg'
import img2 from '../../CommonComponents/Assets/productPagePics/image_saba_2.jpg'
import img3 from '../../CommonComponents/Assets/productPagePics/image_saba_3.jpg'
import img4 from '../../CommonComponents/Assets/productPagePics/image_saba_4.jpg'
import img5 from '../../CommonComponents/Assets/productPagePics/image_saba_5.jpg'
import img6 from '../../CommonComponents/Assets/productPagePics/image_saba_6.jpg'

import classes from './pView.module.css'

const ProductView = () =>{
   
     const imageArr = [
       {id:1,image: img1 },
      {id:2,image: img2},
      { id:3,image: img3 },
     {id:4,image:img4},
     {id:5,image:img5},
     {id:6,image:img6}
    ]
    return(
        <div className = {classes.pView}>
            <SlidePics img = {imageArr}/>
            <ProductDetalis/>

        </div>

    )
}

export default ProductView