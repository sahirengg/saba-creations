import React,{useState, useEffect} from 'react'
import classes from './productdetails.module.css'
import { Grid } from '@material-ui/core'

import Counter from '../counter/Counter'

import SidePics from '../SidePics/SidePics'




const CatDetails = () => {
    const [mock, setMock] = useState<any>({});
    //  const [value, setValue] = useState<any>(1)

useEffect(() => {
  mockData()  
}, [])
   

    const mockData:any = () =>{
        const data = {
"prodId": 78787322,
"status": 200,
"prodName":"Black Cotton Kurta",
"prodDetails": {size:"XL", price: 500, color: "Black", desc:"Women Black & Green Printed Straight Kurta"}
}
setMock(data)
console.log(mock)
    }
    const sizeArr:any = [{ size: 'XS' }, { size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }, { size: 'XXL' }]

    
//     const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
   

    return (
        <div className={classes.catDetails} >
            <Grid container spacing={3} lg={12}>
                
                <div className={classes.mainConatiner}>
                    <div className={classes.productPreview}>
                        <img style ={{width:'100%'}} src='https://cdn.shopify.com/s/files/1/0341/4805/7228/products/9075_1_1800x1800.jpg?v=1599916985' alt='kurta' />

                    </div>

                    <div className={classes.productData}>
                        <h1 className={classes.productTitle}>Black Cotton Kurtab  classic style </h1>
                        <p className={classes.productDescription}>Women Black & Green Printed Straight Kurta</p>
                        <h4 className={classes.price}>Rs. 1,499</h4>
                        <h3 className={classes.sectionHeading}>Select Color</h3>
                        
                        <h3 className={classes.sectionHeading}>Size Guide</h3>
                        <Counter/>
                        <div className={classes.size}>
                            {sizeArr && sizeArr.map((item:any) => {
                                return (
                                    <button className={classes.buttonSize}  >{item.size}</button>
                                )
                            })}
                        </div>
                        <div className={classes.button}>
                            <button className={classes.bagButton}>Add To Bag</button>
                        </div>
                    </div>

                </div>
            </Grid>

        </div>
    )
}

export default CatDetails
