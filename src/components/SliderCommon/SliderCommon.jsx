import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { MdArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import './styles.css';
import ProductItem from '@components/ProductItem/ProductItem';
export default function SliderCommon({
    data,
    isProductItem = false,
    showItem = 1
}) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: showItem,
        slidesToScroll: 1,
        nextArrow: <MdArrowForwardIos />,
        prevArrow: <MdArrowBackIosNew />
    };
    return (
        <Slider {...settings}>
            {data.map((item, index) => {
                const src = !item.image ? item.images[0] : item.image;

                return (
                    <>
                        {isProductItem ? (
                            <ProductItem
                                src={src}
                                prevSrc={item.images[1]}
                                name={item.name}
                                price={item.price}
                                details={item}
                                isHomePage={false}
                                slideItem
                            />
                        ) : (
                            <img src={item} alt='' key={index} />
                        )}
                    </>
                );
            })}
        </Slider>
    );
}
