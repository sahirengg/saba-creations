import React from 'react';
import Slider from 'react-slick';
import './slider.scss';
import img1 from '../Assets/SliderImages/s1.png';
import img2 from '../Assets/SliderImages/slickImg2.jpeg';
import img3 from '../Assets/SliderImages/slickImg3.jpeg';
import img4 from '../Assets/SliderImages/slickImg4.jpeg';
import { Link } from 'react-router-dom';


const  FullBanner = ()=> {

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay:true,
      autoplaySpeed: 2000,
      arrows:true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const heroSlider = [{onClickUrl: "", imageSrc: img1, alt:""},{onClickUrl: "", imageSrc: img1, alt:""},{onClickUrl: "", imageSrc:img1, alt:""},{onClickUrl: "", imageSrc:img1, alt:""},{onClickUrl: "", imageSrc:img1, alt:""}]
    console.log(heroSlider.map((x:any)=> x.imageSrc))
    return (
      <div className="fsBanner">
        <Slider {...settings}>
          {!!heroSlider &&
            heroSlider.map((sliderData, index) => (
              <Link to={`${sliderData.onClickUrl}`}> <img style={{maxWidth:"100%",height: 'auto'}} src={sliderData.imageSrc} alt={sliderData.alt} /></Link>
              // <a href={sliderData.onClickUrl} key={index}>
               
              // </a>
            ))}
        </Slider>
      </div>
    );
  
}

export default FullBanner;
