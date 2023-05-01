/* import React from 'react'
import styles from '../../styles/About/About.module.scss'
import aboutimg from '../../assets/webbrowser/images/introimage.svg'
import aboutVector from '../../assets/webbrowser/icons/aboutvector.svg'
import aboutVector2 from '../../assets/webbrowser/icons/aboutvector2.svg'

const About = () => {
  return (
    <div>
      <div className={styles.vectorBox}>
        {' '}
        <img className={styles.aboutVector} src={aboutVector} alt="vector" />
        <img className={styles.aboutVector2} src={aboutVector2} alt="vector2" />
      </div>

      <div className={styles.aboutBox1}>
        <div className={styles.aboutImage}>
          <img className={styles.aboutImg} src={aboutimg} alt="about" />
        </div>
        <div>
          <p className={styles.apiHeader1}>Placeholder</p>
          <p className={styles.apiHeader2}>API Data</p>
          <p className={styles.apiContent}>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
 */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../../styles/About/About.module.scss'
import aboutimg from '../../assets/webbrowser/images/introimage.svg'
import aboutVector from '../../assets/webbrowser/icons/aboutvector.svg'
import aboutVector2 from '../../assets/webbrowser/icons/aboutvector2.svg'
import { fetchVRNews } from '../../redux/reducer/VRNewsSlice'

const About = () => {
  const dispatch = useDispatch()
  const { articles, loading, error } = useSelector((state) => state.vrnews)
  const [articleIndex, setArticleIndex] = useState(1)
  useEffect(() => {
    dispatch(fetchVRNews())
  }, [dispatch])

  const handleNextClick = () => {
    setArticleIndex(Math.floor(Math.random() * articles.length))
  }
  return (
    <div>
      <div className={styles.vectorBox}>
        {' '}
        <img className={styles.aboutVector} src={aboutVector} alt="vector" />
        <img className={styles.aboutVector2} src={aboutVector2} alt="vector2" />
      </div>

      <div className={styles.aboutBox1}>
        {' '}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : articles.length > 0 && articleIndex < articles.length ? (
          <div className={styles.contentBox} key={articles[articleIndex].id}>
            {articles.length > 0 && articleIndex < articles.length && (
              <img
                className={styles.aboutImg}
                src={articles[articleIndex].image}
                alt={articles[articleIndex].title
                  .split(' ')
                  .slice(0, 3)
                  .join(' ')}
              />
            )}
            <h2 className={styles.apiHeader1}>
              {articles[articleIndex].title.split(' ').slice(0, 6).join(' ')}
            </h2>

            <p className={styles.apiContent}>
              {articles[articleIndex].description
                .split(' ')
                .slice(0, 100)
                .join(' ')}
            </p>
            <button className={styles.btn} onClick={handleNextClick}>
              Next
            </button>
          </div>
        ) : null}{' '}
        {/* <div className={styles.aboutBox1}>
        {' '}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : articles.length > 0 && articleIndex < articles.length ? (
          <div className={styles.contentBox} key={articles[articleIndex].id}>
            <h2 className={styles.apiHeader1}>
              {articles[articleIndex].title.split(' ').slice(0, 6).join(' ')}
            </h2>

            <p className={styles.apiContent}>
              {articles[articleIndex].description
                .split(' ')
                .slice(0, 100)
                .join(' ')}
            </p>
            <button className={styles.btn} onClick={handleNextClick}>
              Next
            </button>
          </div>
        ) : null}{' '}
        {articles.length > 0 && articleIndex < articles.length && (
          <img
            className={styles.aboutImg}
            src={articles[articleIndex].image}
            alt={articles[articleIndex].title.split(' ').slice(0, 3).join(' ')}
          />
        )} */}
        {/* <div className={styles.aboutImage}>
          <img className={styles.aboutImg} src={aboutimg} alt="about" />
        </div>
        <div>
          <p className={styles.apiHeader1}>Placeholder</p>
          <p className={styles.apiHeader2}>API Data</p>
          <p className={styles.apiContent}>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default About
