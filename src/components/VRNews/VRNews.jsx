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

import { useEffect } from 'react'
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
      {shuffledArticles.slice(0, 1).map((article) => (
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
