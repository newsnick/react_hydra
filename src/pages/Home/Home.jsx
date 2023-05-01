import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../components/NavBar/NavBar'
import styles from '../../styles/Home/Home.module.scss'
import homeRectangle from '../../assets/webbrowser/images/homerectangle.svg'
import { bgVectors, homeImage } from '../../utils'
import { fetchVRNews } from '../../redux/reducer/VRNewsSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { articles, loading, error } = useSelector((state) => state.vrnews)
  const [articleIndex, setArticleIndex] = useState(1)

  useEffect(() => {
    dispatch(fetchVRNews())
  }, [dispatch])

  const handleNextClick = () => {
    setArticleIndex(Math.floor(Math.random() * articles.length))
  }

  const getStyledTitle = (title) => {
    const words = title.split(' ')
    const firstWord = words[0]
    const lastTwoWords = words.slice(-2).join(' ')
    const remainingWords = words.slice(1, -2).join(' ')
    const titleStyle = {
      background: 'linear-gradient(91.57deg, #C0B7E8 -1.02%, #8176AF 36.25%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      '-moz-background-clip': 'text',
      '-moz-text-fill-color': 'transparent',
      'background-clip': 'text',
      'text-fill-color': 'transparent',
    }
    return (
      <>
        <span style={titleStyle}>{firstWord}</span>{' '}
        <span style={{ color: 'white' }}>{remainingWords}</span>{' '}
        <span style={titleStyle}>{lastTwoWords}</span>
      </>
    )
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.vectorBox}>
        {bgVectors.map((vector, index) => (
          <img
            className={styles[`vector${index + 1}`]}
            src={vector}
            alt={`bgvector${index + 1}`}
            key={`bgvector${index + 1}`}
          />
        ))}
      </div>
      <NavBar />
      <div className={styles.containerMax}>
        {/* {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : articleIndex >= 0 ? (
          <div className={styles.contentBox} key={articles[articleIndex].id}>
            <h2 className={styles.text1}>
              {getStyledTitle(
                articles[articleIndex].title.split(' ').slice(0, 6).join(' ')
              )}
            </h2>

            <p className={styles.text3}>
              {articles[articleIndex].description
                .split(' ')
                .slice(0, 26)
                .join(' ')}
            </p>
            <button className={styles.btn} onClick={handleNextClick}>
              Next
            </button>
          </div>
        ) : null} */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : articles.length > 0 && articleIndex < articles.length ? (
          <div className={styles.contentBox} key={articles[articleIndex].id}>
            <h2 className={styles.text1}>
              {getStyledTitle(
                articles[articleIndex].title.split(' ').slice(0, 6).join(' ')
              )}
            </h2>

            <p className={styles.text3}>
              {articles[articleIndex].description
                .split(' ')
                .slice(0, 26)
                .join(' ')}
            </p>
            <button className={styles.btn} onClick={handleNextClick}>
              Next
            </button>
          </div>
        ) : null}

        {/* <img
          className={styles.homeImage}
          src={articles[articleIndex].image}
          alt={articles[articleIndex].title}
        /> */}
        {articles.length > 0 && articleIndex < articles.length && (
          <img
            className={styles.homeImage}
            src={articles[articleIndex].image}
            alt={articles[articleIndex].title.split(' ').slice(0, 3).join(' ')}
          />
        )}

        {/* <div className={styles.contentBox}>
            <p className={styles.text1}>
              <span className={styles.altColor}>Dive</span> Into The Depths
            </p>
            <p className={styles.text2}>
              Of <span className={styles.altColor}>Virtual Reality</span>
            </p>
            <p className={styles.text3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae.
            </p>
          </div>
          <div className={styles.imageBox}>
            <img className={styles.homeImage} src={homeImage} alt="homeimage" />
          </div> */}
      </div>
      <div className={styles.rectangleBox}>
        <img
          className={styles.rectangle}
          src={homeRectangle}
          alt="homerectangle"
        />
      </div>
    </div>
  )
}

export default Home

/* import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../components/NavBar/NavBar'
import styles from '../../styles/Home/Home.module.scss'
import homeRectangle from '../../assets/webbrowser/images/homerectangle.svg'
import { bgVectors, homeImage } from '../../utils'
import { fetchVRNews } from '../../redux/reducer/VRNewsSlice'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVRNews())
  }, [dispatch])

  const { articles, loading, error } = useSelector((state) => state.vrnews)
  const article = articles[Math.floor(Math.random() * articles.length)]

  const handleNextClick = () => {
    dispatch(fetchVRNews())
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.vectorBox}>
        {bgVectors.map((vector, index) => (
          <img
            className={styles[`vector${index + 1}`]}
            src={vector}
            alt={`bgvector${index + 1}`}
            key={`bgvector${index + 1}`}
          />
        ))}
      </div>
      <NavBar />
      <div className={styles.containerMax}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <img src={article.image} alt={article.title} />
            <p>{article.description}</p>
          </div>
        )}
        <button onClick={handleNextClick}>Next</button>
        <div className={styles.contentBox}>
          <p className={styles.text1}>
            <span className={styles.altColor}>Dive</span> Into The Depths
          </p>
          <p className={styles.text2}>
            Of <span className={styles.altColor}>Virtual Reality</span>
          </p>
          <p className={styles.text3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae.
          </p>
        </div>
        <div className={styles.imageBox}>
          <img className={styles.homeImage} src={homeImage} alt="homeimage" />
        </div>
      </div>
      <div className={styles.rectangleBox}>
        <img
          className={styles.rectangle}
          src={homeRectangle}
          alt="homerectangle"
        />
      </div>
    </div>
  )
}

export default Home */

/* import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../components/NavBar/NavBar'
import styles from '../../styles/Home/Home.module.scss'
import homeRectangle from '../../assets/webbrowser/images/homerectangle.svg'
import { bgVectors, homeImage } from '../../utils'
import { fetchVRNews } from '../../redux/reducer/VRNewsSlice'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVRNews())
  }, [dispatch])

  const { articles, loading, error } = useSelector((state) => state.vrnews)

  return (
    <div className={styles.homeContainer}>
      <div className={styles.vectorBox}>
        {bgVectors.map((vector, index) => (
          <img
            className={styles[`vector${index + 1}`]}
            src={vector}
            alt={`bgvector${index + 1}`}
            key={`bgvector${index + 1}`}
          />
        ))}
      </div>
      <NavBar />
      <div className={styles.containerMax}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            {articles.map((article) => (
              <div key={article.id}>
                <h2>{article.title}</h2>
                <img
                  className={styles.homeImage}
                  src={article.image}
                  alt={article.title}
                />
                <p>{article.description}</p>
              </div>
            ))}
          </>
        )}
        <div className={styles.contentBox}>
          <p className={styles.text1}>
            <span className={styles.altColor}>Dive</span> Into The Depths
          </p>
          <p className={styles.text2}>
            Of <span className={styles.altColor}>Virtual Reality</span>
          </p>
          <p className={styles.text3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae.
          </p>
        </div>
        <div className={styles.imageBox}>
          <img className={styles.homeImage} src={homeImage} alt="homeimage" />
        </div>
      </div>
      <div className={styles.rectangleBox}>
        <img
          className={styles.rectangle}
          src={homeRectangle}
          alt="homerectangle"
        />
      </div>
    </div>
  )
}

export default Home */

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
