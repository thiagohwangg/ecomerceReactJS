import { dataInfo } from '@components/Info/constants'
import MainLayout from '@components/Layout/Layout'
import React from 'react';
import styles from './styles.module.scss'
import InfoCart from '@components/Info/InfoCart/InforCart';

export default function Info() {
    const {container} = styles
  return (
    <>
        <MainLayout>
            <div className={container}>
                {dataInfo.map(item => {
                    return <InfoCart content={item.title} description={item.description} src={item.src} />
                })}
            </div>
        </MainLayout>
    </>
  )
}
