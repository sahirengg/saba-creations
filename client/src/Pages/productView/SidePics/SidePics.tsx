import React, {useState,useEffect, useContext} from 'react'
import Slider from "react-slick";

import classes from './sidePics.module.css'
import {DataContext} from '../../../providers/Data-provider/data-context'

const SidePics = ({img}:any) =>{
  const {setImgSrc} = useContext(DataContext);

const [index, setIndex] = useState<any>(1)

useEffect(()=>{
  setImgSrc(img[0].image)
},[])
 const handleChage = (id:any, imgSource:string) =>{
   console.log(id)
   setImgSrc(imgSource)
    setIndex({index : id})

  }
  // console.log(props)
      const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      beforeChange: function(currentSlide:any, nextSlide:any) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide:any) {
        console.log("after change", currentSlide);
      }
    };

    return(
        <div className ={classes.background}>
            <Slider {...settings}>
              <div className  ={classes.slidepics} >
                {img && img.map((item: any,) =>{
                  
                  return (
                    <img key = {item.id} style={{width:"90%"}} className = {classes.selectedProductImage} src= {item.image} alt='' onClick = {() => handleChage(item.id, item.image)}  />
                   
                  )
                })}
              </div>
             </Slider>

        </div>
    )
}

export default SidePics