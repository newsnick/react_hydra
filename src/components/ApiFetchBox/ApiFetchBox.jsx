import React, { useState, useEffect } from 'react'
import styles from '../../styles/ApiFetchBox/ApiFetchBox.module.scss'
import { Skeleton } from 'antd'

const ApiFetchBox = () => {
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading2(false)
    }, 5000)
  }, [])

  return (
    <>
      <div>
        <div className={styles.fetchBox}>
          {loading ? (
            <Skeleton
              avatar={false}
              title={false}
              paragraph={false}
              style={{ paddingLeft: '1000px' }}
            />
          ) : (
            <div className={styles.apiIntro}>
              <p className={styles.apiHeader}>API Header</p>
              <p className={styles.apiHeader2}>API Header2</p>
            </div>
          )}
          {loading ? (
            <Skeleton
              active
              title={{ width: 800 }}
              paragraph={{ rows: 4, width: [250, 250, 250, 250] }}
              style={{ marginRight: '1350px' }}
            />
          ) : (
            <article className={styles.apiIntro2}>
              <p className={styles.apiContent}>
                Vitae sapien pellentesque habitant morbi tristique senectus et
                netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
                lectus. Mi sit amet mauris commodo quis imperdiet massa
                tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                lectus sit amet est placerat in. Lectus magna fringilla urna
                porttitor rhoncus vitae.
              </p>
            </article>
          )}
        </div>
      </div>
    </>
  )
}

export default ApiFetchBox

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
          <h2 className={styles.title}>{article.title}</h2>
          <p className={styles.content}>{article.description}</p>
        </div>
      ))}
    </div>
  )
}

export default VRNews
 */
