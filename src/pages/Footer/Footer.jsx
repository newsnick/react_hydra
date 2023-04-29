import React from 'react'
import footerVector from '../../assets/webbrowser/icons/footervector.svg'
import footerVector2 from '../../assets/webbrowser/icons/footervector2.svg'
import styles from '../../styles/Footer/Footer.module.scss'

const Footer = () => {
  return (
    <div>
      {' '}
      <div className={styles.vectorBox}>
        <img class={styles.vector} src={footerVector} alt="vector" />
        <img class={styles.vector2} src={footerVector2} alt="vector2" />
      </div>
    </div>
  )
}

export default Footer
