import React from 'react';
import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reloadicon.svg';
import heartIcon from '@icons/svgs/hearticon.svg';
import cartIcon from '@icons/svgs/carticon.svg';

export default function ProductItem({ src, prevSrc, name, price }) {
    const { boxImg, showImgWhenHover, showFncWhenHover, boxIcon, title, priceClass } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img
                    src={src}
                    alt=''
                />
                <img
                    className={showImgWhenHover}
                    src={prevSrc}
                    alt=''
                />

                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt='' />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceClass}>{price}</div>
        </div>
    );
}
