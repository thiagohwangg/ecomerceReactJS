import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { CiHeart } from 'react-icons/ci';
import { TfiReload } from 'react-icons/tfi';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';
import AccordionMenu from '@components/AccordionMenu';
import Information from '@/pages/DetailProduct/components/Information';
import Review from '@/pages/DetailProduct/components/Review';
import MyFooter from '@components/Footer/Footer';
import SliderCommon from '@components/SliderCommon/SliderCommon';
import ReactImageMagnifier from 'simple-image-magnifier/react';
import cls from 'classnames'
const tempDateSize = [
    {name: 'L', amount: '1000'},
    {name: 'M', amount: '1000'},
    {name: 'S', amount: '1000'},
]

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
export default function DetailProduct() {
    const {
        container,
        navigateSection,
        contentSection,
        imageBox,
        infoBox,
        price,
        description,
        boxSize,
        size,
        titleSize,
        functionInfo,
        boxBtn,
        incrementAmount,
        orSection,
        addFunc,
        info,
        active,
        clear,
        activeDisabledBtn
    } = styles;
    const [menuSelected, setMenuSelected] = useState(1);
    const [sizeSelected, setSizeSelected] = useState('');
    const [quantity, setQuantity] = useState(1);

    const dataAccordionMenu = [
        {
            id: 1,
            titleMenu: 'ADDITIONAL INFORMATION',
            contentJxs: <Information />
        },
        {
            id: 2,
            titleMenu: 'REVIEW (0)',
            contentJxs: <Review />
        }
    ];

    const dateImageDetail = [
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg',
    ];

    const handleRenderZoomImage = (src) => {
        return (
            <ReactImageMagnifier
                srcPreview={
                    src
                }
                srcOriginal={
                    src
                }
                width={295}
                height={350}
            />
        );
    };

    const handleSetMenuSelected = (id) => {
        setMenuSelected(id);
    };

    const tempDateSlider = [
        {
            image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg',
            name: 'Test product 1',
            price: '100',
            size: [{ name: 'L' }, { name: 'M' }, { name: 'S' }]
        },
        {
            image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg',
            name: 'Test product 1',
            price: '100',
            size: [{ name: 'L' }, { name: 'M' }, { name: 'S' }]
        },
        {
            image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg',
            name: 'Test product 1',
            price: '100',
            size: [{ name: 'L' }, { name: 'M' }, { name: 'S' }]
        }
    ];

    const handleSelectedSize = (size) => {
        setSizeSelected(size);
    }

    const handleClearSizeSelected = () => {
        setSizeSelected('');
    }

    const handleSetQuantity = (type) => {
        if(quantity < 1) return;
        setQuantity(prev => type === INCREMENT ? (prev += 1) : (quantity === 1 ? 1 : prev -= 1));
    };

    return (
        <div>
            <MyHeader />
            <div className={container}>
                <MainLayout>
                    <div className={navigateSection}>
                        <div>Home {'>'} Men</div>
                        <div style={{ cursor: 'pointer' }}>
                            {'<'} Return to previous page
                        </div>
                    </div>
                    <div className={contentSection}>
                        <div className={imageBox}>
                            {dateImageDetail.map((item) => handleRenderZoomImage(item))}
                        </div>
                        <div className={infoBox}>
                            <h1>Title product</h1>
                            <p className={price}>$1.23</p>
                            <p className={description}>
                                Amet, elit tellus, nisi odio velit ut. Euismod
                                sit arcu, quisque arcu purus orci leo.
                            </p>
                            <p className={titleSize}>Size {sizeSelected}</p>
                            <div className={boxSize}>
                                {tempDateSize.map((item, index) => {
                                    return (
                                        <div
                                            className={cls(size, {
                                                [active]: item.name === sizeSelected
                                            })}
                                            key={index}
                                            onClick={() => handleSelectedSize(item.name)}
                                        >
                                            {item.name}
                                        </div>
                                    );
                                })}
                            </div>

                            {sizeSelected && (
                                <p onClick={handleClearSizeSelected} className={clear}>Clear</p>
                            )}

                            <div className={functionInfo}>
                                <div className={incrementAmount}>
                                    <div onClick={() => handleSetQuantity(DECREMENT)}>-</div>
                                    <div>{quantity}</div>
                                    <div onClick={() => handleSetQuantity(INCREMENT)}>+</div>
                                </div>
                                <div className={boxBtn}>
                                    <Button content={'Add to cart'} customClassname={!sizeSelected && activeDisabledBtn} />
                                </div>
                            </div>

                            <div className={orSection}>
                                <div></div>
                                <span>OR</span>
                                <div></div>
                            </div>

                            <div>
                                <Button content={'BUY NOW'} customClassname={!sizeSelected && activeDisabledBtn} />
                            </div>

                            <div className={addFunc}>
                                <div>
                                    <CiHeart />
                                </div>

                                <div>
                                    <TfiReload />
                                </div>
                            </div>

                            <div>
                                <PaymentMethods />
                            </div>

                            <div className={info}>
                                <div>
                                    Brand: <span>Brand 03</span>
                                </div>
                                <div>
                                    SKU: <span>1234</span>
                                </div>
                                <div>
                                    Category: <span>Men</span>
                                </div>
                            </div>

                            {dataAccordionMenu.map((item, index) => (
                                <AccordionMenu
                                    key={index}
                                    titleMenu={item.titleMenu}
                                    contentJxs={item.contentJxs}
                                    onClick={() =>
                                        handleSetMenuSelected(item.id)
                                    }
                                    isSelected={menuSelected === item.id}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2>Related products</h2>
                        <SliderCommon
                            data={tempDateSlider}
                            isProductItem
                            showItem={4}
                        />
                    </div>
                </MainLayout>
            </div>
            <MyFooter />
        </div>
    );
}
