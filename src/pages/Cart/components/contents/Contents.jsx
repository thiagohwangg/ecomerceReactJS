import React, { useContext, useEffect } from 'react';
import styles from '../../styles.module.scss';
import CartTable from '@/pages/Cart/components/contents/CartTable';
import CartSummary from '@/pages/Cart/components/contents/CartSummary';
import Button from '@components/Button/Button';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { addProductToCart, deleteItem, deleteCart } from '@/apis/cartService';
import { PiShoppingCartThin } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { getCart } from '@/apis/cartService';

export default function Contents() {
    const navigate = useNavigate();
    const {
        containerContents,
        boxFooter,
        boxCoupon,
        boxBtnDelete,
        boxEmptyCart,
        titleEmpty,
        boxBtnEmpty
    } = styles;

    const {
        listProductCart,
        handleGetListProductCart,
        isLoading,
        setIsLoading,
        userId,
        setListProductCart
    } = useContext(SideBarContext);

    const handleReplaceQuantity = (data) => {
        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                handleGetListProductCart(data.userId, 'cart');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDeleteItemCart = (data) => {
        setIsLoading(true);
        deleteItem(data)
            .then((res) => {
                handleGetListProductCart(userId, 'cart');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDeleteCart = () => {
        setIsLoading(true);
        deleteCart({ userId })
            .then((res) => {
                handleGetListProductCart(userId, 'cart');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleNavigateToShop = () => {
        navigate('/shop');
    };

    useEffect(() => {
        if (userId) {
            getCart(userId)
                .then((res) => {
                    setListProductCart(res.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setListProductCart([]);
                    setIsLoading(false);
                });
        }
    }, []);
    return (
        <>
            {listProductCart.length > 0 && userId ? (
                <div className={containerContents}>
                    <div>
                        <CartTable
                            getDataDelete={handleDeleteItemCart}
                            isLoading={isLoading}
                            getData={handleReplaceQuantity}
                            listProductCart={listProductCart}
                        />
                        <div className={boxFooter}>
                            <div className={boxCoupon}>
                                <input type='text' placeholder='Coupon code' />
                                <Button content={'OK'} isPrimary={false} />
                            </div>
                            <div className={boxBtnDelete}>
                                <Button
                                    content={
                                        <div>&#128465; CLEAR SHOPPING CART</div>
                                    }
                                    isPrimary={false}
                                    onClick={handleDeleteCart}
                                />
                            </div>
                        </div>
                    </div>
                    <CartSummary />
                </div>
            ) : (
                <div className={boxEmptyCart}>
                    <PiShoppingCartThin style={{ fontSize: '50px' }} />
                    <div className={titleEmpty}>
                        YOUR SHOPPING CART IS EMPTY
                    </div>
                    <div>
                        We invite you to get acquainted with an assortment of
                        our shop. Surely you can find something for yourself!
                    </div>
                    <div className={boxBtnEmpty}>
                        <Button
                            onClick={handleNavigateToShop}
                            content={'RETURN TO SHOP'}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
