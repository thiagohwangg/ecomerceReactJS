import React from 'react'
import styles from './styles.module.scss'
export default function HeaderSideBar({icon, title}) {
  const {container} = styles
    return (
        <div className={container}>
            {icon}
            <div>{title}</div>
        </div>
  )
}
