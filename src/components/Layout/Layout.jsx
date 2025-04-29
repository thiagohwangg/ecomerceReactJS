import React from 'react'
import styles from './styles.module.scss'

export default function MainLayout({children}) {
  const {wrapLayout, container} = styles;
  return (
    <main className={wrapLayout}>
        <div className={container}>{children}</div>
    </main>
  )
}
