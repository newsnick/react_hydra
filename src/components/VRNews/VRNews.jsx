/* import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchVRNews } from '../../redux/reducer/VRNewsSlice'
import styles from '../../styles/VRNews/VRNews.module.scss'

function shuffleArray(array) {
  const newArray = [...array] // create a new array from the original
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

function VRNews() {
  const dispatch = useDispatch()
  const articles = useSelector((state) => state.vrnews?.articles)
  const loading = useSelector((state) => state.vrnews?.loading)
  const error = useSelector((state) => state.vrnews?.error)

  useEffect(() => {
    dispatch(fetchVRNews())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const shuffledArticles = shuffleArray(articles)

  return (
    <div>
      {shuffledArticles.map((article) => (
        <div key={article.id}>
          <img
            className={styles.thumbnailImage}
            src={article.image}
            alt={article.title}
          />
          <h2 className={styles.title}>{article.title}</h2>
          <p className={styles.content}>{article.description}</p>
        </div>
      ))}
    </div>
  )
}

export default VRNews
 */

/* import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchVRNews } from '../../redux/reducer/VRNewsSlice'
import styles from '../../styles/VRNews/VRNews.module.scss'

function shuffleArray(array) {
  const newArray = [...array] // create a new array from the original
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

function VRNews() {
  const dispatch = useDispatch()
  const articles = useSelector((state) => state.vrnews?.articles)
  const loading = useSelector((state) => state.vrnews?.loading)
  const error = useSelector((state) => state.vrnews?.error)

  useEffect(() => {
    dispatch(fetchVRNews())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const shuffledArticles = shuffleArray(articles)

  return (
    <div className={styles.newsCard}>
      {shuffledArticles.slice(0, 1).map((article) => (
        <div className={styles.apiBox} key={article.id}>
          <img
            className={styles.thumbnailImage}
            src={article.image}
            alt={article.title}
          />
          // <h2 className={styles.title}>{article.title}</h2> 
          <h2 className={styles.title}>
            {article.title.split(' ').slice(0, 3).join(' ')}
          </h2>
          // <p className={styles.content}>{article.description}</p> 
          <p className={styles.content}>
            {article.description.split(' ').slice(0, 15).join(' ')}
          </p>
        </div>
      ))}
    </div>
  )
}

export default VRNews
 */
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchVRNews } from '../../redux/reducer/VRNewsSlice'
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
  const articles = useSelector((state) => state.vrnews?.articles)
  const loading = useSelector((state) => state.vrnews?.loading)
  const error = useSelector((state) => state.vrnews?.error)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    dispatch(fetchVRNews())
  }, [dispatch])

  const handleNextPost = () => {
    setCurrentIndex((currentIndex + 1) % shuffledArticles.length)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  let shuffledArticles = []
  if (articles && articles.length > 0) {
    shuffledArticles = shuffleArray(articles)
  }

  return (
    <div className={styles.newsCard}>
      {shuffledArticles.length > 0 && (
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
