import React, { useContext, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from './styles.module.scss';
import SliderCommon from '@components/SliderCommon/SliderCommon';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import Button from '@components/Button/Button';
import { PiShoppingCartThin } from 'react-icons/pi';
import { TfiReload } from 'react-icons/tfi';
import { CiHeart } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import cls from 'classnames';
import { addProductToCart } from '@/apis/cartService';

export default function DetailProduct() {
    const {
        container,
        title,
        price,
        des,
        boxSize,
        size,
        label,
        boxAddToCart,
        boxOr,
        line,
        or,
        boxAddOther,
        boxFooter,
        isActive
    } = styles;
    const {
        detailProduct,
        userId,
        setType,
        handleGetListProductCart,
        setIsLoading,
        setIsOpen
    } = useContext(SideBarContext);
    const [chooseSize, setChooseSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const showOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];

    const handleGetSize = (value) => {
        setChooseSize(value);
    };

    const handleCLearSize = () => {
        setChooseSize('');
    };

    const handleGetQuantity = (value) => {
        setQuantity(value);
    };

    const handleAddToCart = () => {
        const data = {
            userId,
            productId: detailProduct._id,
            quantity,
            size: chooseSize,
            isMultiple: true
        };
        setIsOpen(false);
        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                setIsOpen(true);
                setType('cart');
                handleGetListProductCart(userId, 'cart');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className={container}>
            <SliderCommon data={detailProduct.images} />
            <div className={title}>{detailProduct.name}</div>
            <div className={price}>{detailProduct.price}</div>
            <div className={des}>{detailProduct.description}</div>

            <div className={label}>Size {chooseSize}</div>
            <div className={boxSize}>
                {detailProduct.size.map((item, index) => {
                    return (
                        <div
                            onClick={() => handleGetSize(item.name)}
                            key={index}
                            className={cls(size, {
                                [isActive]: chooseSize === item.name
                            })}
                        >
                            {item.name}
                        </div>
                    );
                })}
            </div>
            {chooseSize && (
                <div
                    onClick={handleCLearSize}
                    style={{
                        fontSize: '12px',
                        marginTop: '3px',
                        cursor: 'pointer'
                    }}
                >
                    Clear
                </div>
            )}

            <div className={boxAddToCart}>
                <SelectBox
                    getValue={handleGetQuantity}
                    defaultValue={quantity}
                    options={showOptions}
                />

                <div>
                    <Button
                        onClick={handleAddToCart}
                        content={
                            <div>
                                <PiShoppingCartThin /> ADD TO CART
                            </div>
                        }
                    />
                </div>
            </div>

            <div className={boxOr}>
                <div className={line} />
                <div className={or}>OR</div>
                <div className={line} />
            </div>

            <Button
                content={
                    <div>
                        <PiShoppingCartThin /> SELECT OPTIONS
                    </div>
                }
            />

            <div className={boxAddOther}>
                <TfiReload style={{ fontSize: '23px' }} />
                <div>Add to compare</div>
            </div>
            <div className={boxAddOther}>
                <CiHeart style={{ fontSize: '25px' }} />
                <div>Add to whishList</div>
            </div>

            <div className={boxFooter}>
                SKU: <span>12345</span>
            </div>
            <div className={boxFooter}>
                Category: <span>Pull</span>
            </div>
            <div className={boxFooter}>
                Estimated delivery: <span>3 - 5 days</span>
            </div>
            <div className={boxFooter}>
                Share:{' '}
                <span>
                    <FaXTwitter style={{ fontSize: '20px' }} />{' '}
                    <FaFacebookF style={{ fontSize: '20px' }} />
                </span>
            </div>
        </div>
    );
}
