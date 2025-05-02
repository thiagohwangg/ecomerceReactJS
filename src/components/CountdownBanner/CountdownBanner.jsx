import React from 'react';
import styles from './styles.module.scss';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import Button from '@components/Button/Button';

export default function CountdownBanner() {
    const { container, containerTimer, title,boxBtn } = styles;
    const targetDate = '2025-12-30';
    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The classics make a comeback</p>
            <div className={boxBtn}>
                <Button content={'Buy now'} />
            </div>
        </div>
    );
}
