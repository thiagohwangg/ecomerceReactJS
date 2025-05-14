import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import React from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { OurShopProvider } from '@/contexts/OurShopProvider';
import MyFooter from '@components/Footer/Footer';
import Banner from '@/pages/OurShop/components/Banner';
import ListProduct from '@/pages/OurShop/components/ListProduct';
import Filter from '@/pages/OurShop/components/Filter';

export default function OurShop() {
    const { container,functionBox,specialText,btnBack } = styles;
    const navigate = useNavigate();

    const handleBackPrevious = () => {
        navigate(-1);
    }
    return (
        <OurShopProvider>
            <MyHeader />
            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div>Home : <span className={specialText}>Shop</span></div>
                        <div onClick={() => handleBackPrevious()} className={btnBack}>&lt;Return to previous page</div>
                    </div>
                </div>

                <Banner />

                <div>
                    <Filter />
                    <ListProduct />
                </div>
            </MainLayout>
                <MyFooter />
        </OurShopProvider>
    );
}
