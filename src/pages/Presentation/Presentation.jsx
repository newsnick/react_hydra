import React from 'react'
import styles from '../../styles/Presentation/Presentation.module.scss'

const Presentation = () => {
  return (
    <div>
      <div className={styles.presentationBox1}>
        <div className={styles.apiIntro}>
          <p className={styles.apiHeader}>API Header</p>
          <p className={styles.apiHeader2}>API Header2</p>
        </div>
        <article className={styles.apiIntro2}>
          <p className={styles.apiContent}>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </article>
      </div>
    </div>
  )
}

export default Presentation
