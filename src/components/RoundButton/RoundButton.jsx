import React from 'react'
import styles from '../../styles/RoundButton/RoundButton.module.scss'
import arrowRight from '../../assets/webbrowser/icons/arrowright.svg'

const RoundButton = () => {
  return (
    <div className={styles.buttonBox}>
      <div className={styles.outerShadow}>
        <div className={styles.roundBtn}></div>
      </div>
      <div className={styles.apiDescription}>
        <img src={arrowRight} alt="arrow" /> <p>API title</p>
      </div>
    </div>
  )
}

export default RoundButton
