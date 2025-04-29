import styles from './styles.module.scss'

export default function Button({content}) {
  const {btn} = styles;
  return (
    <div>
        <button className={btn}>{content}</button> 
    </div>
  )
}
