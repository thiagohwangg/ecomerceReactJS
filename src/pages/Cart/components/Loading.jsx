import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon'
import React from 'react'
import styles from '../styles.module.scss'

export default function LoadingCart() {
    const { loadingCart } = styles
  return (
    <div className={loadingCart}>
        <LoadingTextCommon />
    </div>
  )
}
