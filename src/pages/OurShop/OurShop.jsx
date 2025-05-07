import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import React from 'react';
import styles from './styles.module.scss';

export default function OurShop() {
  const {container} = styles
    return (
        <>
            <MyHeader />
            <MainLayout>
                <div className={container}>
                    <div>Home : Shop</div>
                    <div>&lt;Return to previous page</div>
                </div>
            </MainLayout>
        </>
    );
}
