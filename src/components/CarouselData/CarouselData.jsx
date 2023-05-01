import VRNews from '../VRNews/VRNews'
import StyledCarousel from '../../index.js'
import styles from '../../styles/CarouselData/CarouselData.module.scss'
import { cardsData } from '../../utils'

const CarouselData = () => {
  return (
    <StyledCarousel effect="fade">
      {cardsData.map((cardData, index) => (
        <div key={index}>
          <h3 className={styles.contentStyle}>
            {cardData.map((data, index) => (
              <div className={styles.card} key={index}>
                <VRNews />
              </div>
            ))}
          </h3>
        </div>
      ))}
    </StyledCarousel>
  )
}

export default CarouselData
