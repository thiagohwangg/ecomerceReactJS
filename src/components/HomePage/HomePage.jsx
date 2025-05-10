import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import React, { useEffect, useState } from 'react';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { getProducts } from '@/apis/productService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import MyFooter from '@components/Footer/Footer';


export default function HomePage() {
    const [listProduct, setListProduct] = useState([]);
    console.log("listProduct: ", listProduct);
    useEffect(() => {
        const query = {
            sortType: 0,
            page: 1,
            limit: 10
        }
        getProducts(query).then((res) => {
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
                <SaleHomePage />
                <MyFooter />
            </>
        </>
    );
}
