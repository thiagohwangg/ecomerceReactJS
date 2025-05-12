import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import React from 'react';
import Contents from '@pages/Cart/components/contents/Contents';
import Steps from '@pages/Cart/components/steps/Steps';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';
export default function Cart() {
    const { container } = styles;
    return (
        <>
            <MyHeader />
            <div className={container}>
                <Steps />
                <MainLayout>
                    <Contents />
                </MainLayout>
            </div>
            <MyFooter />
        </>
    );
}
