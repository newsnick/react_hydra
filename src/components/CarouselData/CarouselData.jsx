import { Carousel } from 'antd'
import styles from '../../styles/CarouselData/CarouselData.module.scss'
import styled from 'styled-components'

const StyledCarousel = styled(Carousel)`
  > .slick-dots li button {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    color: white !important;
  }
  > .slick-dots li.slick-active button {
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background: red !important;
  }
`

const CarouselData = () => (
  <StyledCarousel effect="fade">
    <div>
      <h3 className={styles.contentStyle}>
        <div className={styles.card}></div> <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </h3>
    </div>
    <div>
      <h3 className={styles.contentStyle}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </h3>
    </div>
    <div>
      <h3 className={styles.contentStyle}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </h3>
    </div>
    <div>
      <h3 className={styles.contentStyle}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </h3>
    </div>
  </StyledCarousel>
)
export default CarouselData
