import React, { useState, useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../components/NavBar/NavBar'
import styles from '../../styles/Home/Home.module.scss'
import { bgVectors, homeImage } from '../../utils'
import { Skeleton } from 'antd'
import LinkDirect from '../../components/LinkDirect/LinkDirect'

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

const Home = () => {
  const dispatch = useDispatch()

  const articles = useSelector((state) => state.vrnews.articles)
  const error = useSelector((state) => state.vrnews.error)
  const loading = useSelector((state) => state.vrnews.loading)
  const [articleIndex, setArticleIndex] = useState(1)

  const handleNextClick = useCallback(() => {
    setArticleIndex(Math.floor(Math.random() * articles.length))
  }, [articles])

  const article = useMemo(
    () => articles[articleIndex],
    [articles, articleIndex]
  )
  const title = article?.title.split(' ').slice(0, 6).join(' ')
  const description = article?.description.split(' ').slice(0, 26).join(' ')
  let altText = articles[articleIndex]?.title.split(' ').slice(0, 3).join(' ')

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
          <Skeleton
            active
            avatar={{ size: 'large', shape: 'circle' }}
            title={{ width: '100%' }}
            paragraph={{ rows: 3, width: '100%' }}
            className={styles.skeleton}
          />
        ) : error ? (
          <p>Error: {error}</p>
        ) : articles.length > 0 && articleIndex < articles.length ? (
          <div className={styles.contentBox} key={article.id}>
            <h2 className={styles.text1}>{getStyledTitle(title)}</h2>

            <p className={styles.text3}>{description}</p>
            <button className={styles.btn} onClick={handleNextClick}>
              Next
            </button>
          </div>
        ) : null}
        {loading ? (
          <Skeleton
            active
            title={{ width: '100%' }}
            paragraph={{ rows: 10, width: '100%' }}
            className={styles.skeleton}
          />
        ) : (
          articles.length > 0 &&
          articleIndex < articles.length && (
            <img
              className={styles.homeImage}
              src={articles[articleIndex].image}
              alt={altText}
            />
          )
        )}
      </div>

      <div className={styles.rectangleBox}>
        {' '}
        <LinkDirect />
      </div>
    </div>
  )
}
export default Home
