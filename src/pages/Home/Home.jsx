import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../components/NavBar/NavBar'
import styles from '../../styles/Home/Home.module.scss'
import homeRectangle from '../../assets/webbrowser/images/homerectangle.svg'
import { bgVectors, homeImage } from '../../utils'
import { fetchVRNews } from '../../redux/reducer/VRNewsSlice'
import { Skeleton } from 'antd'

const Home = () => {
  const dispatch = useDispatch()
  const [loading2, setLoading2] = useState(true)
  const [loading3, setLoading3] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading2(false)
    }, 5000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading3(false)
    }, 500000)
  }, [])

  const { articles, loading, error } = useSelector((state) => state.vrnews)
  const [articleIndex, setArticleIndex] = useState(1)

  useEffect(() => {
    dispatch(fetchVRNews())
  }, [dispatch])

  const handleNextClick = useCallback(() => {
    setArticleIndex(Math.floor(Math.random() * articles.length))
  }, [articles])

  const getStyledTitle = useMemo(
    () => (title) => {
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
    },
    []
  )

  const article = useMemo(
    () => articles[articleIndex],
    [articles, articleIndex]
  )

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
        {loading2 ? (
          <Skeleton
            active
            avatar={true}
            title={{ width: '250px' }}
            paragraph={{
              rows: 1,
              width: [350],
              flexWrap: 'nowrap',
            }}
            style={{
              marginLeft: '1440px',
              padding: '100px',
            }}
          />
        ) : error ? (
          <p>Error: {error}</p>
        ) : articles.length > 0 && articleIndex < articles.length ? (
          <div className={styles.contentBox} key={article.id}>
            <h2 className={styles.text1}>
              {getStyledTitle(article.title.split(' ').slice(0, 6).join(' '))}
            </h2>

            <p className={styles.text3}>
              {article.description.split(' ').slice(0, 26).join(' ')}
            </p>
            <button className={styles.btn} onClick={handleNextClick}>
              Next
            </button>
          </div>
        ) : null}
        {articles.length > 0 &&
          articleIndex < articles.length &&
          (loading3 ? (
            <Skeleton
              active
              title={{ width: '350px' }}
              paragraph={{ rows: 1, width: '350px' }}
              style={{
                marginLeft: '2200px',
                marginTop: '-300px',
              }}
            />
          ) : (
            <img
              className={styles.homeImage}
              src={articles[articleIndex].image}
              alt={articles[articleIndex].title
                .split(' ')
                .slice(0, 3)
                .join(' ')}
            />
          ))}
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
