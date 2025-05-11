import MyFooter from '@components/Footer/Footer'
import MyHeader from '@components/Header/Header'
import React from 'react'
import Contents from '@pages/Cart/components/contents/Contents'
import Steps from '@pages/Cart/components/steps/Steps'
import styles from './styles.module.scss'
export default function Cart() {
    const {container} = styles
  return (
    <>
        <MyHeader />
        <div className={container}>
            <Steps />
        <Contents />
        </div>
        <MyFooter />
    </>
  )
}
