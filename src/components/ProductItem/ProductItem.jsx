import React, { useContext, useState } from 'react';
import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reloadicon.svg';
import heartIcon from '@icons/svgs/hearticon.svg';
import cartIcon from '@icons/svgs/carticon.svg';
import classNames from 'classnames';
import Button from '@components/Button/Button';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import { addProductToCart } from '@/apis/cartService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

export default function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomePage = true
}) {
    const {isShowGrid} = useContext(OurShopContext);
    const [sizeChoose, setSizeChoose] = useState('');
    const userId = Cookies.get('userId');
    const {setIsOpen, setType, handleGetListProductCart} = useContext(SideBarContext);
    const {toast} = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);
    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceClass,
        boxSize,
        size,
        textCenter,
        boxBtn,
        content,
        containerItem,
        leftBtn,
        largeImg,
        isActiveSize,
        btnClear
    } = styles;

    const handleChooseSize = (size) => {
        setSizeChoose(size);
    }

    const handleClearSize = () => {
        setSizeChoose('');
    }

    const handleAddToCart = () => {
        if(!userId) {
            setIsOpen(true);
            setType('login');
            toast.warning('Please login to add product to cart');
            return;
        }

        if(!sizeChoose) {
            toast.warning('Please choose size');
            return;
        }

        const data = {
            userId,
            productId: details._id,
            quantity: 1,
            size: sizeChoose,
        }

        setIsLoading(true);

        addProductToCart(data).then((res) => {
            toast.success('Add product to cart successfully');
            setIsOpen(true);
            setType('cart');
            setIsLoading(false);
            handleGetListProductCart(userId, 'cart');
        }).catch((err) => {
            toast.error('Add product to cart failed');
            setIsLoading(false);
        });
    }

    return (
        <div className={isShowGrid ? '' : containerItem}>
            <div className={classNames(boxImg, {
                [largeImg]: !isShowGrid
            })}>
                <img src={src} alt='' />
                <img className={showImgWhenHover} src={prevSrc} alt='' />

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
            <div className={isShowGrid ? '' : content}>
            {!isHomePage && (
                <div className={boxSize}>
                    {details.size.map((item, index) => {
                        return (
                            <div onClick={() => handleChooseSize(item.name)} className={classNames(size, {
                                [isActiveSize]: sizeChoose === item.name
                            })} key={index}>
                                {item.name}
                            </div>
                        );
                    })}
                </div>
            )}

            {sizeChoose && (
                <div onClick={handleClearSize} className={btnClear}>Clear</div>
            )}
            <div
                className={classNames(title, {
                    [textCenter]: !isHomePage
                })}
            >
                {name}
            </div>
            {!isHomePage && <div className={textCenter} style={{
                    color: '#888'
                }}>Brand 01</div>}
            <div
                className={classNames(priceClass, {
                    [textCenter]: !isHomePage
                })}
                style={{color: isHomePage ? '#333' : '#888'}}
            >
                {price}
            </div>
            {!isHomePage && (
                <div className={classNames(boxBtn, {
                    [leftBtn]: !isShowGrid
                })}>
                    <Button onClick={handleAddToCart} content={isLoading ? <LoadingTextCommon /> :'ADD TO CART'} />
                </div>
            )}
            </div>
        </div>
    );
}
