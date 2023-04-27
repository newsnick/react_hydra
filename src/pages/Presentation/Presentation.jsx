import React from 'react'
import styles from '../../styles/Presentation/Presentation.module.scss'
import CarouselData from '../../components/CarouselData/CarouselData'
import ApiFetchBox from '../../components/ApiFetchBox/ApiFetchBox'

const Presentation = () => {
  return (
    <div>
      <ApiFetchBox />
      <div className={styles.presentationBox}>
        <CarouselData />
      </div>
    </div>
  )
}

export default Presentation
