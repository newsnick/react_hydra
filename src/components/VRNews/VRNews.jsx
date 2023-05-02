import { useState, useEffect, useMemo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchVRNews } from '../../redux/reducer/VRNewsSlice'
import { Skeleton } from 'antd'
import styles from '../../styles/VRNews/VRNews.module.scss'
import cardLine from '../../assets/webbrowser/icons/cardline.svg'

function shuffleArray(array) {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

function VRNews() {
  const dispatch = useDispatch()
  // const articles = useSelector((state) => state.vrnews?.articles)
  // const loading = useSelector((state) => state.vrnews?.loading)
  // const error = useSelector((state) => state.vrnews?.error)
  const { articles, loading, error } = useSelector((state) => state.vrnews)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    dispatch(fetchVRNews())
  }, [dispatch])

  const shuffledArticles = useMemo(() => {
    if (articles && articles.length > 0) {
      return shuffleArray(articles)
    }
    return []
  }, [articles])

  // const shuffledArticles = useMemo(() => {
  //   shuffleArray(articles)
  // }, [articles])

  const handleNextPost = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % shuffledArticles.length)
  }, [currentIndex, shuffledArticles])

  if (loading) {
    // return <div>Loading...</div>
    return (
      <div>
        <Skeleton active />
      </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className={styles.newsCard} id="vrnews">
      {shuffledArticles?.length > 0 && (
        <div className={styles.apiBox} key={shuffledArticles[currentIndex].id}>
          <img
            className={styles.thumbnailImage}
            src={shuffledArticles[currentIndex].image}
            alt={shuffledArticles[currentIndex].title
              .split(' ')
              .slice(0, 3)
              .join(' ')}
          />
          <h2 className={styles.title}>
            {shuffledArticles[currentIndex].title
              .split(' ')
              .slice(0, 3)
              .join(' ')}
          </h2>{' '}
          <img className={styles.line} src={cardLine} alt="line" />
          <p className={styles.content}>
            {shuffledArticles[currentIndex].description
              .split(' ')
              .slice(0, 15)
              .join(' ')}
          </p>
          <button className={styles.btn} onClick={handleNextPost}>
            Load Next Post
          </button>
        </div>
      )}
    </div>
  )
}

export default VRNews
