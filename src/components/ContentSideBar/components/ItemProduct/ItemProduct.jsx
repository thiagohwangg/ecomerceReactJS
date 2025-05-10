import React, { useContext, useState } from 'react';
import styles from './styles.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { deleteItem } from '@/apis/cartService';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

export default function ItemProduct({
    src,
    nameProduct,
    priceProduct,
    skuProduct,
    sizeProduct,
    quantity,
    productId,
    userId
}) {
    const {
        container,
        boxContent,
        title,
        price,
        boxClose,
        size,
        overlayLoading
    } = styles;
    const [isDelete, setIsDelete] = useState(false);
    const { handleGetListProductCart } = useContext(SideBarContext);
    const handleRemoveItem = () => {
        setIsDelete(true);
        deleteItem({ productId, userId })
            .then((res) => {
                setIsDelete(false);
                handleGetListProductCart(userId, 'cart');
            })
            .catch((err) => {
                setIsDelete(false);
            });
    };
    return (
        <div className={container}>
            <img src={src} alt='' />
            <div className={boxClose}>
                <IoCloseOutline
                    onClick={() => handleRemoveItem(userId, productId)}
                    style={{ fontSize: '20px', color: '#c1c1c1' }}
                />
            </div>

            <div className={boxContent}>
                <div className={title}>{nameProduct}</div>
                <div className={size}>{sizeProduct}</div>
                <div className={price}>
                    {quantity} * ${priceProduct}
                </div>
                <div className={price}>SKU: {skuProduct}</div>
            </div>
            {isDelete && (
                <div className={overlayLoading}>
                    <LoadingTextCommon />
                </div>
            )}
        </div>
    );
}
