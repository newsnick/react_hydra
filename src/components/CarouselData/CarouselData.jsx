import { Carousel } from 'antd'
import styles from '../../styles/CarouselData/CarouselData.module.scss'
import styled from 'styled-components'
import VRNews from '../VRNews/VRNews'

const StyledCarousel = styled(Carousel)`
  > .slick-dots li button::before {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: white;
    inset: 2;
  }
  > .slick-dots li button::after {
    width: 30px;
    height: 14px;
    border-radius: 10%;
    background: white;
    inset: 0;
  }
`

const CarouselData = () => {
  return (
    <StyledCarousel effect="fade">
      <div>
        <h3 className={styles.contentStyle}>
          <div className={styles.card}>
            <VRNews />
          </div>{' '}
          <div className={styles.card}>
            <VRNews />
          </div>
          <div className={styles.card}>
            <VRNews />
          </div>
          <div className={styles.card}>
            <VRNews />
          </div>
        </h3>
      </div>
      <div>
        <h3 className={styles.contentStyle}>
          <div className={styles.card}>
            <VRNews />
          </div>
          <div className={styles.card}>
            <VRNews />
          </div>
          <div className={styles.card}>
            <VRNews />
          </div>
          <div className={styles.card}>
            <VRNews />
          </div>
        </h3>
      </div>
      <div>
        <h3 className={styles.contentStyle}>
          <div className={styles.card}>
            <VRNews />
          </div>
          <div className={styles.card}>
            <VRNews />
          </div>
          <div className={styles.card}>
            <VRNews />
          </div>
          <div className={styles.card}>
            <VRNews />
          </div>
        </h3>
      </div>
      <div>
        <h3 className={styles.contentStyle}>
          <div className={styles.card}>
            <VRNews />
          </div>
          <div className={styles.card}>
            <VRNews />
          </div>
          <div className={styles.card}>
            <VRNews />
          </div>
          <div className={styles.card}>
            <VRNews />
          </div>
        </h3>
      </div>
    </StyledCarousel>
  )
}

export default CarouselData
