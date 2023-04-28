import React from 'react'
import styles from '../../styles/Presentation/Presentation.module.scss'
import CarouselData from '../../components/CarouselData/CarouselData'
import ApiFetchBox from '../../components/ApiFetchBox/ApiFetchBox'
import presVector from '../../assets/webbrowser/icons/presentvector.svg'

const Presentation = () => {
  return (
    <div>
      <img className={styles.presVector} src={presVector} alt="vector" />
      <ApiFetchBox />
      <div className={styles.presentationBox}>
        <CarouselData />
      </div>
    </div>
  )
}

export default Presentation
