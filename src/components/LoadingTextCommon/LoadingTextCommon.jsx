import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import styles from './styles.module.scss'

export default function LoadingTextCommon() {
    const { rotate } = styles
  return (
    <AiOutlineLoading3Quarters className={rotate} />
  )
}
