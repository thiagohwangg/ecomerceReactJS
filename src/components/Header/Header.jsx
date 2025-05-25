import React, { useContext, useEffect, useState } from 'react';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Menu from './Menu/Menu';
import Logo from '@icons/images/Logo-retina.webp';
import { TfiReload } from 'react-icons/tfi';
import { BsHeart } from 'react-icons/bs';
import { PiShoppingCart } from 'react-icons/pi';
import useScrollHandling from '@/hooks/useScrollHandling';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProdiver';
export default function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        fixedHeader,
        topHeader,
        boxCart,
        quantity
    } = styles;
    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);

    const { isOpen, setIsOpen, setType, listProductCart, userId, handleGetListProductCart } = useContext(SideBarContext);
    const {userInfo} = useContext(StoreContext);
    const handleOpenSideBar = (type) => {
        setType(type);
        setIsOpen(true);
    };
    
    const handleOpenCartSideBar = () => {
        handleGetListProductCart(userId, 'cart');
        handleOpenSideBar('cart')
    }

    const totalItemCart = listProductCart.length ? listProductCart.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0) : 0;

    useEffect(() => {
        setFixedPosition(scrollPosition > 80);
    }, [scrollPosition]);

    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt=''
                        style={{
                            width: '153px',
                            height: '53px'
                        }}
                    />
                </div>
                <div className={containerBoxIcon}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return (
                                <Menu
                                    content={item.content}
                                    href={item.href}
                                    setIsOpen={setIsOpen}
                                />
                            );
                        })}
                    </div>

                    <div className={containerBoxIcon}>
                        <TfiReload
                            onClick={() => handleOpenSideBar('compare')}
                            style={{ fontSize: '20px' }}
                        />
                        <BsHeart
                            onClick={() => handleOpenSideBar('wishlist')}
                            style={{ fontSize: '20px' }}
                        />
                        <div className={boxCart}>
                            <PiShoppingCart
                                onClick={() => handleOpenCartSideBar()}
                                style={{ fontSize: '25px' }}
                            />

                            <div className={quantity}>{totalItemCart || userInfo?.amountCart || 0}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
