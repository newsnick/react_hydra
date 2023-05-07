/* import React from 'react'
import styles from '../../styles/RoundButton/RoundButton.module.scss'
import arrowRight from '../../assets/webbrowser/icons/arrowright.svg'

const RoundButton = () => {
  return (
    <div className={styles.buttonBox}>
      <div className={styles.outerShadow}>
        <div className={styles.roundBtn}></div>
      </div>
      <div className={styles.apiDescription}>
        <img src={arrowRight} alt="arrow" /> <p>API title</p>
      </div>
    </div>
  )
}

export default RoundButton
 */

import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useMemo, useCallback } from 'react'
import styles from '../../styles/RoundButton/RoundButton.module.scss'
import arrowRight from '../../assets/webbrowser/icons/arrowright.svg'

function shuffleArray(array) {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export function getTitle(shuffledArticles, currentIndex) {
  return shuffledArticles[currentIndex]?.title.split(' ').slice(0, 4).join(' ')
}

const RoundButton = (props) => {
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

  const title = getTitle(shuffledArticles, currentIndex)

  return (
    <div className={styles.buttonBox}>
      <div className={styles.outerShadow}>
        <div className={styles.roundBtn}>
          {' '}
          <button className={styles.btn} onClick={handleNextPost}>
            <p className={styles.number}>{props.number}</p>
          </button>
        </div>
      </div>
      <div className={styles.apiDescription}>
        <img src={arrowRight} alt="arrow" />{' '}
        <h2 className={styles.apiHeader}>{title}</h2>{' '}
      </div>
    </div>
  )
}

export default RoundButton
