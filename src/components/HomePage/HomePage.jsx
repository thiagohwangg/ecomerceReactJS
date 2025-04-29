import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import React from 'react';
import styles from './styles.module.scss'

export default function HomePage() {
    const {container} = styles;
    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
            </div>
        </div>
    );
}
