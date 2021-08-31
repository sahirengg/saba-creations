import React,{useState, useEffect,useContext} from 'react'
import classes from './productdetails.module.css'
import { Grid } from '@material-ui/core'
import {DataContext} from "../../../providers/Data-provider/data-context";
import Counter from '../counter/Counter'

import SidePics from '../SidePics/SidePics'
import ReactImageMagnify from 'react-image-magnify';

import Pincode from '../pincode/Pincode'
import Description from '../description/Description'
import { Height } from '@material-ui/icons';



const CatDetails = () => {
    const [mock, setMock] = useState<any>({});

useEffect(() => {
  mockData()  
}, [])
   
const  {imgSrc} = useContext(DataContext)
    const mockData:any = () =>{
        const data = {
"prodId": 78787322,
"status": 200,
"prodName":"Black Cotton Kurta",
"prodDetails": {size:"XL", price: 500, color: "Black", desc:"Black Solid Rayon Kurta"}
}
setMock(data)
console.log(mock)
    }
    const sizeArr:any = [{ size: 'XS' }, { size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }, { size: 'XXL' }]

  
   
 console.log(imgSrc,"big image------------------>")
    return (
        <div className={classes.catDetails} >
            <Grid container spacing={3} lg={12} xs={6} sm={3}>
                
                <div className={classes.mainConatiner}>
                    <div className={classes.productPreview}>
                        <ReactImageMagnify {...{
    smallImage: {
        alt: 'big image',
        isFluidWidth: true,
        src: imgSrc
    },
    largeImage: {
        src: imgSrc,
        width: 1200,
        height: 1800
    }
}} />

                    </div>

                    <div className={classes.productData}>
                        <h1 className={classes.productTitle}>Black Solid Rayon Kurta   </h1>
                        <p className={classes.productDescription}>Black Solid Rayon Kurta</p>
                        <h4 className={classes.price}>Rs. 1,499</h4>
                        <hr/>
                        
                        
                        <div className={classes.size}>
                            {sizeArr && sizeArr.map((item:any) => {
                                return (
                                    <button className={classes.buttonSize}  >{item.size}</button>
                                )
                            })}
                        </div>
                        <h3 className={classes.sectionHeading}>Size Guide</h3>
                        <p className={classes.p}>Please check the Size Guide and fit info before choosing your size.</p>
                        <Counter/>
                        <div className={classes.button}>
                            <button className={classes.bagButton}>Add To Bag</button>
                        </div>
                       
                             <Pincode />
                             <Description/>
                        

                    </div>


                </div>
            </Grid>

        </div>
    )
}

export default CatDetails
