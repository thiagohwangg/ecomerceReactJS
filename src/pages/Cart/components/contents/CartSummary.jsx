import React, { useContext } from 'react';
import styles from '../../styles.module.scss';
import Button from '@components/Button/Button';
import cls from 'classnames'
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingCart from '@/pages/Cart/components/Loading';

export default function CartSummary() {
  const srcMethods = [
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg"
  ]
    const {
        containerSummary,
        title,
        boxTotal,
        price,
        subTotal,
        totals,
        space,
        containerMethods,
        titleMethods,
        containerRight,
        boxImgMethods,
        imgMethods,textSecure
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
                    <div>${total}</div>
                </div>

                <Button content={'PROCEED TO CHECKOUT'} />
                <div className={space}></div>
                <Button content={'CONTINUE SHOPPING'} isPrimary={false} />
            
              {isLoading && <LoadingCart />}
            </div>
            <div className={containerMethods}>
                <div className={titleMethods}>
                    Guaranteed <span>safe</span> checkout
                </div>

                <div className={boxImgMethods}>
                  {srcMethods.map((src, index) => {
                    return (
                      <img
                        key={index}
                        src={src}
                        alt=''
                        className={imgMethods}
                      />
                    )
                  })}
                </div>
            </div>
            <div className={textSecure}>Your payment is 100% Secure</div>
        </div>
    );
}
