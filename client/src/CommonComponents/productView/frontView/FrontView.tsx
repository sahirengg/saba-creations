import React from 'react'

import classes from './frontView.module.css'

const FrontView = () => {
    return(
        <div className={classes.mainConatiner}>
            <div className={classes.productData}>
           <div className={classes.productPreview}>
                        <img style ={{width:'100%'}} src='https://cdn.shopify.com/s/files/1/0341/4805/7228/products/9075_1_1800x1800.jpg?v=1599916985' alt='kurta' />

                    </div>

                    <div className={classes.productData}>
                        <h1 className={classes.productTitle}>Black Cotton Kurtab  classic style </h1>
                        <p className={classes.productDescription}>Women Black & Green Printed Straight Kurta</p>
                        <h4 className={classes.price}>Rs. 1,499</h4>
                        <h3 className={classes.sectionHeading}>Select Color</h3>
                        
                        <h3 className={classes.sectionHeading}>Size Guide</h3>
                        </div>
                        </div>
        </div>

    )
}
export default FrontView