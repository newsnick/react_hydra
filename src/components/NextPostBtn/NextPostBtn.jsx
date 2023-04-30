import React from 'react'
import styles from './NextPostBtn.module.scss'

function NextPostBtn({ onClick }) {
  return (
    <button className={styles.nextPostBtn} onClick={onClick}>
      Next Post
    </button>
  )
}

export default NextPostBtn
