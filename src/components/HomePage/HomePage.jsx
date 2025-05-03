import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import React, { useEffect, useState } from 'react';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { getProducts } from '@/apis/productService';
import PopularProduct from '@components/PopularProduct/PopularProduct';


export default function HomePage() {
    const [listProduct, setListProduct] = useState([]);
    console.log("listProduct: ", listProduct);
    useEffect(() => {
        getProducts().then((res) => {
            setListProduct(res.contents)
        })
    }, [])

    return (
        <>
            <>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeading />
                <HeadingListProduct data={listProduct.slice(0, 2)} />
                <PopularProduct data={listProduct.slice(2, 10)} />
            </>
        </>
    );
}
