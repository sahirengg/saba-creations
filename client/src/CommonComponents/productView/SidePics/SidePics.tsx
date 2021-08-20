import React, {useState} from 'react'
import Slider from "react-slick";

import classes from './sidePics.module.css'

const SidePics = ({img}:any) =>{
const [index, setIndex] = useState<any>(1)

 const handleChage = (id:any) =>{
   console.log(id)
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
                    <img key = {item.id} style={{width:"90%"}} className = {classes.selectedProductImage} src= {item.image} alt='' onClick = {() => handleChage(item.id)}  />
                   
                  )
                })}
              </div>
             </Slider>

        </div>
    )
}

export default SidePics