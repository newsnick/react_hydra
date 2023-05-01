import React from 'react'
import styles from '../../styles/Presentation/Presentation.module.scss'
import CarouselData from '../../components/CarouselData/CarouselData'
import ApiFetchBox from '../../components/ApiFetchBox/ApiFetchBox'
import presVector from '../../assets/webbrowser/icons/presentvector.svg'

const Presentation = () => {
  return (
    <div>
      <div className={styles.vectorBox}>
        {' '}
        <img className={styles.presVector} src={presVector} alt="vector" />
      </div>

      <ApiFetchBox />
      <div className={styles.presentationBox} id="presentation">
        <CarouselData />
      </div>
    </div>
  )
}

export default Presentation
