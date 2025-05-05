import React from 'react'
import styles from './styles.module.scss'
import { dataMenu } from '@components/Footer/constants'


export default function MyFooter() {
  const {container, boxNav} = styles
  return (
    <div className={container}>
      <div>
        <img
        width={160}
        height={55}
         src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png" alt="" />
      </div>
      <div className={boxNav}>
        {dataMenu.map(item => {
          return <div>{item.content}</div>
        })}
      </div>
      <div>
        <p style={{textAlign: 'center'}}>Guaranteed sale checkout</p>
        <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png" alt="" />
      </div>
      <div style={{textAlign: 'center', marginTop: 20}}>Copyright © 2024 XStore theme. Created by </div>
    </div>
  )
}
