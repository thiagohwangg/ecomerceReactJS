import React, { useContext } from 'react';
import styles from './styles.module.scss';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { PiShoppingCartLight } from 'react-icons/pi';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

export default function Cart() {
    const {
        container,
        boxBtn,
        total,
        containerListProductCart,
        overlayLoading
    } = styles;

    const { listProductCart, isLoading } = useContext(SideBarContext);
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<PiShoppingCartLight style={{ fontSize: '30px' }} />}
                    title={'CART'}
                />
                {isLoading ? <LoadingTextCommon /> : listProductCart.map((item, index) => (
                    <ItemProduct
                        key={index}
                        src={item.images[0]}
                        nameProduct={item.name}
                        priceProduct={item.price}
                        skuProduct={item.sku}
                        sizeProduct={item.size}
                        quantity={item.quantity}
                        productId={item.productId}
                        userId={item.userId}
                    />
                ))}
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
