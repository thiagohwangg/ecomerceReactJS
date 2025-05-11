import React from 'react';
import styles from '../../styles.module.scss';
import Stepper from '@/pages/Cart/components/steps/Stepper';

export default function Steps() {
    const { containerSteps, steps, line,textNoti } = styles;

    const dataSteps = [
        { number: 1, content: 'Shopping Cart' },
        { number: 2, content: 'Checkout' },
        { number: 3, content: 'Order status' }
    ];
    return (
        <div className={containerSteps}>
            <div className={steps}>
                {dataSteps.map((step, index) => {
                    return (
                        <>
                            <Stepper
                                key={index}
                                number={step.number}
                                content={step.content}
                                isDisabled={index !== 0}
                            />
                            {
                                index !== dataSteps.length - 1 && (
                                    <div className={line} />
                                )
                            }
                        </>
                    );
                })}
            </div>
            <div className={textNoti}>🔥 Hurry up, these products are limited, checkout within </div>
        </div>
    );
}
