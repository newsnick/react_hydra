import React, { useEffect, useState, useMemo, useCallback } from 'react'
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

  const handleNextClick = useCallback(() => {
    setArticleIndex(Math.floor(Math.random() * articles.length))
  }, [articles])

  const currentArticle = useMemo(() => {
    if (!articles || articles.length === 0 || articleIndex >= articles.length) {
      return null
    }
    const article = articles[articleIndex]
    return (
      <div className={styles.contentBox} key={article.id}>
        <img
          className={styles.aboutImg}
          src={article.image}
          alt={article.title.split(' ').slice(0, 3).join(' ')}
        />
        <h2 className={styles.apiHeader1}>
          {article.title.split(' ').slice(0, 6).join(' ')}
        </h2>
        <p className={styles.apiContent}>
          {article.description.split(' ').slice(0, 100).join(' ')}
        </p>
        <button className={styles.btn} onClick={handleNextClick}>
          Next
        </button>
      </div>
    )
  }, [articles, articleIndex, handleNextClick])

  return (
    <div>
      <div className={styles.vectorBox}>
        <img className={styles.aboutVector} src={aboutVector} alt="vector" />
        <img className={styles.aboutVector2} src={aboutVector2} alt="vector2" />
      </div>

      <div className={styles.aboutBox1}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          currentArticle
        )}
      </div>
    </div>
  )
}

export default About
