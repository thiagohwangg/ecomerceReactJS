import React from 'react'
import styles from '../styles.module.scss'

export default function Information() {
  const dataInfo = [
    {id: 1, title: 'Size', content: 'L'},
    {id: 2, title: 'Material', content: 'Fleece'},
    {id: 3, title: 'Color', content: 'Black'},
  ]

  const { itemInfo,containerInfo, title, content } = styles
  return (
    <div className={containerInfo}>
      {dataInfo.map((item, index) => (
        <div key={index} className={itemInfo}>
          <div className={title}>{item.title}</div>
          <div className={content}>{item.content}</div>
        </div>
      ))}
    </div>
  )
}
