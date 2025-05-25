import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import React from 'react';
import Contents from '@pages/Cart/components/contents/Contents';
import Steps from '@pages/Cart/components/steps/Steps';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';
import { StepperProvider } from '@/contexts/SteperProvider';
import ContentStep from '@/pages/Cart/components/ContentStep';
export default function Cart() {
    const { container } = styles;
    return (
        <StepperProvider>
            <MyHeader />
            <div className={container}>
                <Steps />
                <MainLayout>
                    <ContentStep />
                </MainLayout>
            </div>
            <MyFooter />
        </StepperProvider>
    );
}
