import MainLayout from '@components/Layout/Layout';
import React, { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../OurShop/styles.module.scss';
import Button from '@components/Button/Button';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

export default function ListProduct() {
    const { products, isShowGrid, isLoading, handleLoadMore, total, isLoadMore } =
        useContext(OurShopContext);
    const { containerProduct, sectionListProduct } = styles;

    return (
        <div className={sectionListProduct}>
            <MainLayout>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <div className={isShowGrid ? containerProduct : ''}>
                            {products.map((product) => {
                                return (
                                    <ProductItem
                                        key={product.id}
                                        src={product.images[0]}
                                        prevSrc={product.images[1]}
                                        name={product.name}
                                        price={`$${product.price}`}
                                        details={product}
                                        isHomePage={false}
                                    />
                                );
                            })}
                        </div>
                        {products.length < total && (
                            <div
                                style={{ width: '100px', margin: '50px auto' }}
                            >
                                <Button
                                    onClick={handleLoadMore}
                                    content={isLoadMore ? <LoadingTextCommon /> : 'LOAD MORE PRODUCT'}
                                />
                            </div>
                        )}
                    </>
                )}
            </MainLayout>
        </div>
    );
}
