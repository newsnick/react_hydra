/* import { useSelector } from 'react-redux'
import styles from '../../styles/ApiFetchBox/ApiFetchBox.module.scss'
import { Skeleton } from 'antd'

const ApiFetchBox = () => {
  const loading = useSelector((state) => state.vrnews.loading)

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
 */

import { useSelector } from 'react-redux'
import { useState, useMemo, useCallback } from 'react'
import styles from '../../styles/ApiFetchBox/ApiFetchBox.module.scss'
import arrowRightIcon from '../../assets/webbrowser/icons/rarrow.svg'
import { Skeleton } from 'antd'

function shuffleArray(array) {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

const ApiFetchBox = () => {
  const { articles, loading, error } = useSelector((state) => state.vrnews)
  const [currentIndex, setCurrentIndex] = useState(0)

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
    .slice(0, 2)
    .join(' ')
  const description = shuffledArticles[currentIndex]?.description
    .split(' ')
    .slice(0, 45)
    .join(' ')

  const title2 = shuffledArticles[currentIndex]?.title
    .split(' ')
    .slice(2, 4)
    .join(' ')

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
              <div className={styles.titleBox}>
                {' '}
                <h2 className={styles.apiHeader}>{title}</h2>{' '}
                <h2 className={styles.apiHeader2}>{title2}</h2>{' '}
              </div>

              <button className={styles.btn} onClick={handleNextPost}>
                <img
                  className={styles.arrow}
                  src={arrowRightIcon}
                  alt="Load Next Post"
                />
              </button>
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
              {shuffledArticles?.length > 0 && (
                <div
                  className={styles.apiBox}
                  key={shuffledArticles[currentIndex].id}
                >
                  <p className={styles.apiContent}>{description}</p>
                </div>
              )}
            </article>
          )}
        </div>
      </div>
    </>
  )
}

export default ApiFetchBox
