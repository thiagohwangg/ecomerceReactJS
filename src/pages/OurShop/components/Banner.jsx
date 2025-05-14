import React, { useContext } from 'react';
import styles from '../styles.module.scss';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import Button from '@components/Button/Button';

export default function Banner() {
    const { containerBanner,contentBox,title,boxBtn,countDownBox } = styles;

    const targetDate = '2025-12-30';
    return (
        <>
            <div className={containerBanner}>
                <div className={contentBox}>
                  <div className={countDownBox}>
                    <CountdownTimer targetDate={targetDate} />

                  </div>
                  <div className={title}>The classics make a comeback</div>
                  <div className={boxBtn}>
                  <Button content={'Buy now'} />

                  </div>
                </div>
            </div>
        </>
    );
}
