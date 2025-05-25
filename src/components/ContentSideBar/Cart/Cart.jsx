import React, { useContext } from 'react';
import styles from './styles.module.scss';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { PiShoppingCartLight } from 'react-icons/pi';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const { container, boxBtn, total, isEmpty, boxEmpty, boxBtnEmpty, containerListItem } = styles;
    const navigate = useNavigate();
    const { listProductCart, isLoading, setIsOpen } =
        useContext(SideBarContext);

    const handleNavigateToShop = () => {
        navigate('/shop');
        setIsOpen(false);
    };

    const subTotal = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    const handleNavigateToCart = () => {
        navigate('/cart');
        setIsOpen(false);
    }

    return (
        <div
            className={classNames(container, {
                [isEmpty]: !listProductCart.length
            })}
        >
            <HeaderSideBar
                icon={<PiShoppingCartLight style={{ fontSize: '30px' }} />}
                title={'CART'}
            />
            {listProductCart.length > 0 ? (
                <div className={containerListItem}>
                    <div style={{height: 'calc(100vh - 250px)', overflowY: 'auto'}}>
                        {isLoading ? (
                            <LoadingTextCommon />
                        ) : (
                            listProductCart.map((item, index) => (
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
                            ))
                        )}
                    </div>

                    <div>
                        <div className={total}>
                            <p>SUBTOTAL</p>
                            <p>${subTotal.toFixed(2)}</p>
                        </div>
                        <div className={boxBtn}>
                            <Button onClick={handleNavigateToCart} content={'VIEW CART'} />
                            <Button content={'CHECK OUT'} isPrimary={false} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={boxEmpty}>
                    <div>No products in the cart</div>
                    <div className={boxBtnEmpty}>
                        <Button
                            onClick={handleNavigateToShop}
                            isPrimary={false}
                            content={'RETURN TO SHOP'}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
