import React from 'react'
import styles from '../../styles.module.scss'
import CartTable from '@/pages/Cart/components/contents/CartTable'
import CartSummary from '@/pages/Cart/components/contents/CartSummary'

export default function Contents() {
  const {containerContents} = styles
  return (
    <div className={containerContents}>
      <div>
        <CartTable />
      </div>
        <CartSummary />
    </div>
  )
}
