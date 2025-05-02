import MainLayout from '@components/Layout/Layout';
import React from 'react';
import styles from './styles.module.scss';

export default function AdvanceHeadling() {
    const { container,headLine, containerMiddleBox,title,des } = styles;
    return (
        <MainLayout>
            <div className={container}>
              <div className={headLine}></div>
              <div className={containerMiddleBox}>
                <p className={des}>don't miss super offers</p>
                <p className={title}>Our best products</p>
              </div>
              <div className={headLine}></div>
            </div>
        </MainLayout>
    );
}
