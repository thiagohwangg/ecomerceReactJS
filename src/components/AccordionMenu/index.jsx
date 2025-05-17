import React, { useState } from 'react';
import styles from './styles.module.scss';
import cls from 'classnames';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { RiArrowDownWideLine } from 'react-icons/ri';
export default function AccordionMenu({titleMenu, contentJxs, onClick, isSelected}) {
    const {
        container,
        title,
        activeTitle,
        contentMenu,
        isVisibility,
        borderBottom
    } = styles;

    const handleToggle = () => {
        onClick();
    };
    return (
        <div className={container}>
            <div
                onClick={handleToggle}
                className={cls(title, {
                    [activeTitle]: isSelected
                })}
            >
                {' '}
                {isSelected ? (
                    <TfiLayoutLineSolid style={{ fontSize: '20px' }} />
                ) : (
                    <RiArrowDownWideLine style={{ fontSize: '20px' }} />
                )}{' '}
                {titleMenu}
            </div>
            <div
                className={cls(contentMenu, borderBottom, {
                    [isVisibility]: isSelected
                })}
            >
                {contentJxs}
            </div>
        </div>
    );
}
