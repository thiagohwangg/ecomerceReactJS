import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar'
import React from 'react'
import { TfiReload } from "react-icons/tfi";
import styles from './styles.module.scss'
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
export default function Compare() {
    const {container} = styles
  return (
    <div className={container}>
        <HeaderSideBar icon={<TfiReload style={{fontSize: '30px'}} />} title={'COMPARE'} />
        <ItemProduct />
    </div>
  )
}
