import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar'
import React from 'react'
import { TfiReload } from "react-icons/tfi";
import styles from './styles.module.scss'
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
export default function Compare() {
    const {container,boxContent} = styles
  return (
    <div className={container}>
        <div className={boxContent}>
        <HeaderSideBar icon={<TfiReload style={{fontSize: '30px'}} />} title={'COMPARE'} />
        <ItemProduct />
        </div>
        <div>
          <Button content={'VIEW COMPARE'} />
        </div>
    </div>
  )
}
