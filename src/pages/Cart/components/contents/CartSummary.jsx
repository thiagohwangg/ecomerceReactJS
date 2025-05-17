import React, { useContext } from 'react';
import styles from '../../styles.module.scss';
import Button from '@components/Button/Button';
import cls from 'classnames'
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingCart from '@/pages/Cart/components/Loading';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';

export default function CartSummary() {
    const {
        containerSummary,
        title,
        boxTotal,
        price,
        subTotal,
        totals,
        space,
        containerRight,
    } = styles;

    const {listProductCart, isLoading} = useContext(SideBarContext);

    const total = listProductCart.reduce((acc, item) => {
      return acc + item.total;
    }, 0);
    return (
        <div className={containerRight}>
            <div className={containerSummary}>
                <div className={title}>CART TOTALS</div>
                <div className={cls(boxTotal, subTotal)}>
                    <div>SubTotal</div>
                    <div className={price}>${total}</div>
                </div>
                <div className={cls(boxTotal, totals)}>
                    <div>TOTAL</div>
                    <div>${total.toFixed(2)}</div>
                </div>

                <Button content={'PROCEED TO CHECKOUT'} />
                <div className={space}></div>
                <Button content={'CONTINUE SHOPPING'} isPrimary={false} />
            
              {isLoading && <LoadingCart />}
            </div>
            <PaymentMethods />
        </div>
    );
}
