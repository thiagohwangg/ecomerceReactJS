import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import React, { useContext, useEffect, useState } from 'react';
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
import cls from 'classnames';
import { getDetailProduct, getRelatedProduct } from '@/apis/productService';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { toast } from 'react-toastify';
import { handleAddProductToCartCommon } from '@/utils/helper';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import Cookies from 'js-cookie';
import { addProductToCart } from '@/apis/cartService';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
export default function DetailProduct() {
    const {
        container,
        navigateSection,
        contentSection,
        imageBox,
        infoBox,
        priceCl,
        descriptionCl,
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
        activeDisabledBtn,
        loading,
        emptyData
    } = styles;
    const [menuSelected, setMenuSelected] = useState(1);
    const [sizeSelected, setSizeSelected] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [relatedData, setRelatedData] = useState([]);

    const param = useParams();
    const navigate = useNavigate();
    const { setIsOpen, setType, handleGetListProductCart, setDetailProduct } =
        useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const userId = Cookies.get('userId');
    const [isLoadingBtn, setIsLoadingBtn] = useState(false);
    const [isLoadingBtnBuyNow, setIsLoadingBtnBuyNow] = useState(false);

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

    const handleRenderZoomImage = (src) => {
        return (
            <ReactImageMagnifier
                srcPreview={src}
                srcOriginal={src}
                width={295}
                height={350}
            />
        );
    };

    const handleSetMenuSelected = (id) => {
        setMenuSelected(id);
    };

    const handleSelectedSize = (size) => {
        setSizeSelected(size);
    };

    const handleClearSizeSelected = () => {
        setSizeSelected('');
    };

    const handleSetQuantity = (type) => {
        if (quantity < 1) return;
        setQuantity((prev) =>
            type === INCREMENT ? (prev += 1) : quantity === 1 ? 1 : (prev -= 1)
        );
    };

    const fetchDataDetail = async (id) => {
        setIsLoading(true);
        try {
            const data = await getDetailProduct(id);
            setData(data);
            setIsLoading(false);
        } catch (error) {
            toast.error('Get detail product failed');
            setIsLoading(false);
            setData();
        }
    };

    const fetchDataRelatedProduct = async (id) => {
        setIsLoading(true);
        try {
            const data = await getRelatedProduct(id);
            setRelatedData(data);
            setIsLoading(false);
        } catch (error) {
            toast.error('Get detail product failed');
            setIsLoading(false);
            setRelatedData([]);
        }
    };

    const handleAdd = () => {
        handleAddProductToCartCommon(
            userId,
            setIsOpen,
            setType,
            toast,
            sizeSelected,
            param.id,
            quantity,
            setIsLoadingBtn,
            handleGetListProductCart
        );
    };

    const handleBuyNow = () => {
        const data = {
                userId,
                productId: param.id,
                quantity,
                size: sizeSelected,
            }
        setIsLoadingBtnBuyNow(true);
        addProductToCart(data).then((res) => {
                toast.success('Add product to cart successfully');
                setIsLoadingBtnBuyNow(false);
                navigate('/cart');
            }).catch((err) => {
                toast.error('Add product to cart failed');
                setIsLoadingBtnBuyNow(false);
            });
    }

    useEffect(() => {
        if (param.id) {
            fetchDataDetail(param.id);
            fetchDataRelatedProduct(param.id);
        }
    }, [param]);

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
                    {isLoading ? (
                        <div className={loading}>
                            <LoadingTextCommon />
                        </div>
                    ) : (
                        <>
                            {!data ? (
                                <div className={emptyData}>
                                    <p>No result</p>
                                    <div>
                                        <Button
                                            onClick={() => navigate('/shop')}
                                            content={'Back to Our Shop'}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className={contentSection}>
                                    <div className={imageBox}>
                                        {data?.images.map((item) =>
                                            handleRenderZoomImage(item)
                                        )}
                                    </div>
                                    <div className={infoBox}>
                                        <h1>{data?.name}</h1>
                                        <p className={priceCl}>
                                            ${data?.price}
                                        </p>
                                        <p className={descriptionCl}>
                                            {data?.description}
                                        </p>
                                        <p className={titleSize}>
                                            Size {sizeSelected}
                                        </p>
                                        <div className={boxSize}>
                                            {data?.size.map((item, index) => {
                                                return (
                                                    <div
                                                        className={cls(size, {
                                                            [active]:
                                                                item.name ===
                                                                sizeSelected
                                                        })}
                                                        key={index}
                                                        onClick={() =>
                                                            handleSelectedSize(
                                                                item.name
                                                            )
                                                        }
                                                    >
                                                        {item.name}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {sizeSelected && (
                                            <p
                                                onClick={
                                                    handleClearSizeSelected
                                                }
                                                className={clear}
                                            >
                                                Clear
                                            </p>
                                        )}

                                        <div className={functionInfo}>
                                            <div className={incrementAmount}>
                                                <div
                                                    onClick={() =>
                                                        handleSetQuantity(
                                                            DECREMENT
                                                        )
                                                    }
                                                >
                                                    -
                                                </div>
                                                <div>{quantity}</div>
                                                <div
                                                    onClick={() =>
                                                        handleSetQuantity(
                                                            INCREMENT
                                                        )
                                                    }
                                                >
                                                    +
                                                </div>
                                            </div>
                                            <div className={boxBtn}>
                                                <Button
                                                    content={isLoadingBtn ? <LoadingTextCommon /> :'Add to cart'}
                                                    customClassname={
                                                        !sizeSelected &&
                                                        activeDisabledBtn
                                                    }
                                                    onClick={handleAdd}
                                                />
                                            </div>
                                        </div>

                                        <div className={orSection}>
                                            <div></div>
                                            <span>OR</span>
                                            <div></div>
                                        </div>

                                        <div>
                                            <Button
                                                content={isLoadingBtnBuyNow ? <LoadingTextCommon /> :'BUY NOW'}
                                                customClassname={
                                                    !sizeSelected &&
                                                    activeDisabledBtn
                                                }
                                                onClick={handleBuyNow}
                                            />
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

                                        {dataAccordionMenu.map(
                                            (item, index) => (
                                                <AccordionMenu
                                                    key={index}
                                                    titleMenu={item.titleMenu}
                                                    contentJxs={item.contentJxs}
                                                    onClick={() =>
                                                        handleSetMenuSelected(
                                                            item.id
                                                        )
                                                    }
                                                    isSelected={
                                                        menuSelected === item.id
                                                    }
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    <div>
                        <h2>Related products</h2>
                        {relatedData.length ? (
                            <SliderCommon
                                data={relatedData}
                                isProductItem
                                showItem={4}
                            />
                        ) : (
                            <></>
                        )}
                    </div>
                </MainLayout>
            </div>
            <MyFooter />
        </div>
    );
}
