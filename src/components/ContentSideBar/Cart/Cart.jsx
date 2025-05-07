import React from 'react';
import styles from './styles.module.scss';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { PiShoppingCartLight } from 'react-icons/pi';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

export default function Cart() {
    const { container, boxBtn,total } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<PiShoppingCartLight style={{ fontSize: '30px' }} />}
                    title={'CART'}
                />
                <ItemProduct />
            </div>

            <div>
                <div className={total}>
                    <p>SUBTOTAL</p>
                    <p>$199.99</p>
                </div>
                <div className={boxBtn}>
                    <Button content={'VIEW CART'} />
                    <Button content={'CHECK OUT'} isPrimary={false} />
                </div>
            </div>
        </div>
    );
}
