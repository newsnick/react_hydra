import { useState, useEffect, useMemo, useCallback } from 'react'
import { useSelector } from 'react-redux'
//import { fetchVRNews } from '../../redux/reducer/VRNewsSlice'
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
  const [loading2, setLoading2] = useState(true)
  const { articles, loading, error } = useSelector((state) => state.vrnews)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setLoading2(false)
    }, 5000)
  }, [])

  const shuffledArticles = useMemo(() => {
    return shuffleArray(articles)
  }, [articles])

  const handleNextPost = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % shuffledArticles?.length)
  }, [currentIndex, shuffledArticles])

  if (loading) {
    return null
  }

  if (error) {
    return <div>Error: {error}</div>
  }
  const title = shuffledArticles[currentIndex]?.title
    .split(' ')
    .slice(0, 3)
    .join(' ')
  const description = shuffledArticles[currentIndex]?.description
    .split(' ')
    .slice(0, 15)
    .join(' ')
  let altText = shuffledArticles[currentIndex]?.title
    .split(' ')
    .slice(0, 3)
    .join(' ')
  return (
    <>
      {loading2 ? (
        <Skeleton
          active
          title={{ width: 100 }}
          avatar={true}
          paragraph={{
            rows: 1,
            width: [100],
          }}
          style={{
            marginLeft: '-40px',
            padding: '100px',
          }}
        />
      ) : (
        <div className={styles.newsCard} id="vrnews">
          {shuffledArticles?.length > 0 && (
            <div
              className={styles.apiBox}
              key={shuffledArticles[currentIndex].id}
            >
              <img
                className={styles.thumbnailImage}
                src={shuffledArticles[currentIndex].image}
                alt={altText}
              />
              <h2 className={styles.title}>{title}</h2>{' '}
              <img className={styles.line} src={cardLine} alt="line" />
              <p className={styles.content}>{description}</p>
              <button className={styles.btn} onClick={handleNextPost}>
                Load Next Post
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default VRNews
