import React from 'react';
import styles from '../styles.module.scss';
import TruckIcon from '@icons/svgs/truckIcon.svg';

export default function InfoCart({content, description, src}) {
    const { containerCart, containerContent, title, des } = styles;
    return (
        <div className={containerCart}>
            <img width={40} height={41} src={src} alt='TruckIcon' />
            <div className={containerContent}>
                <div className={title}>{content}</div>
                <div className={des}>{description}</div>
            </div>
        </div>
    );
}
