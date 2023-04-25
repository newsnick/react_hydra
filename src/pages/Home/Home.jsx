import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import styles from '../../styles/Home/Home.module.scss'
import homerectangle from '../../assets/webbrowser/images/homerectangle.svg'
import { bgVectors, homeImage } from '../../utils'

const Home = () => {
  const { containermax, contentbox, text1, altcolor, text2, text3 } = styles

  return (
    <div className={styles.homecontainer}>
      {bgVectors.map((vector, index) => (
        <img
          className={styles[`vector${index + 1}`]}
          src={vector}
          alt={`bgvector${index + 1}`}
          key={`bgvector${index + 1}`}
        />
      ))}
      <NavBar />
      <div className={containermax}>
        <div className={contentbox}>
          <p className={text1}>
            <span className={altcolor}>Dive</span> Into The Depths
          </p>
          <p className={text2}>
            Of <span className={altcolor}>Virtual Reality</span>
          </p>
          <p className={text3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae.
          </p>
        </div>
        <div className={styles.imagebox}>
          <img className={styles.homeimage} src={homeImage} alt="homeimage" />
        </div>
      </div>
      <div className={styles.rectanglebox}>
        <img
          className={styles.rectangle}
          src={homerectangle}
          alt="homerectangle"
        />
      </div>
    </div>
  )
}

export default Home
/* import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import styles from '../../styles/Home/Home.module.scss'
import bgvector1 from '../../assets/webbrowser/images/homebg1.svg'
import bgvector2 from '../../assets/webbrowser/images/homebg2.svg'
import bgvector3 from '../../assets/webbrowser/images/homebg3.svg'
import bgvector4 from '../../assets/webbrowser/images/homebg4.svg'
import homeimage from '../../assets/webbrowser/images/homeimage.svg'

const Home = () => {
  return (
    <div className={styles.homecontainer}>
      <img className={styles.vector1} src={bgvector1} alt="bgvector1" />
      <img className={styles.vector2} src={bgvector2} alt="bgvector2" />
      <img className={styles.vector3} src={bgvector3} alt="bgvector3" />
      <img className={styles.vector4} src={bgvector4} alt="bgvector4" />
      <NavBar />
      <div className={styles.containermax}>
        <div className={styles.contentbox}>
          <p className={styles.text1}>
            <span className={styles.altcolor}>Dive</span> Into The Depths
          </p>
          <p className={styles.text2}>
            Of <span className={styles.altcolor}>Virtual Reality</span>
          </p>
          <p className={styles.text3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>
        </div>
        <div className={styles.imagecontainer}>
          <img className={styles.homeimage} src={homeimage} alt="homeimage" />
        </div>
      </div>
    </div>
  )
}

export default Home
 */
