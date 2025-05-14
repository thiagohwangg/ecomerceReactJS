import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import './styles.css'
export default function SliderCommon({data}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <MdArrowForwardIos />,
    prevArrow: <MdArrowBackIosNew />,
  };
  return (
     <Slider {...settings}>
      {data.map((item, index) => (
          <img src={item} alt='' key={index} />
      ))}
    </Slider>
  );
}
