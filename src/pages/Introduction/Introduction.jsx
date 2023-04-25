import React from 'react'
import styles from '../../styles/Introduction/introduction.module.scss'

const Introduction = () => {
  return (
    <div className={styles.introcontainer}>
      <div className={styles.apiintro}>
        <p className={styles.apiheader}>API Header</p>
        <p className={styles.apiheader2}>API Header2</p>
      </div>
      <div className={styles.apiintro2}>
        <p className={styles.apicontent}>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>
    </div>
  )
}

export default Introduction
