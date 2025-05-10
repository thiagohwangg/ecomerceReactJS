import React from 'react'
import styles from '../OurShop/styles.module.scss';

export default function SelectBox({options, getValue, type}) {
  const {selectBox} = styles
  return (
    <select className={selectBox} onChange={(e) => getValue(e.target.value, type)}>
        {
            options.map((option) => {
                return <option key={option.value} value={option.value}>{option.label}</option>
            })
        }
    </select>
  )
}
