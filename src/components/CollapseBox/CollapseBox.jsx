/* import React, { useState } from 'react'
import { Collapse, Divider } from 'antd'
import styles from '../../styles/CollapseBox/CollapseBox.module.scss'
import image from '../../assets/webbrowser/images/showcaseimage.svg'
import downArrow from '../../assets/webbrowser/icons/downarrow.svg'

const { Panel } = Collapse
const text = (
  <div className={styles.textContainer}>
    ` Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo
    <br />
    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus.
    Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae. <br />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo
    <br /> quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet
    tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae. <br />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo <br />
    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus.
    Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae.
    <hr />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo
  </div>
)
const CollapseBox = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className={styles.centeredBox}>
      <div className={styles.box}>
        <Divider className={styles.divider} orientation="center">
          <Collapse
            className={styles.collapse}
            bordered={false}
            size="large"
            activeKey={isCollapsed ? '1' : undefined}
          >
            <img className={styles.bgimage} src={image} alt="showcase" />
            <Panel
              className={styles.content}
              showArrow={false}
              header={
                <div
                  style={{
                    color: 'inherit',
                  }}
                  onClick={toggleCollapse}
                >
                  <img
                    className={styles.downArrow}
                    src={downArrow}
                    alt="downarrow"
                  />
                </div>
              }
              key="1"
            >
              <p
                className={`${styles.text} ${
                  isCollapsed ? styles.collapsedText : ''
                }`}
              >
                {text}
              </p>
            </Panel>
          </Collapse>
        </Divider>
      </div>
    </div>
  )
}
export default CollapseBox
 */

import { useSelector } from 'react-redux'
import { useState, useMemo, useCallback } from 'react'
import { Collapse, Divider } from 'antd'
import styles from '../../styles/CollapseBox/CollapseBox.module.scss'
import image from '../../assets/webbrowser/images/showcaseimage.svg'
import downArrow from '../../assets/webbrowser/icons/downarrow.svg'
import arrowRightIcon from '../../assets/webbrowser/icons/rarrow.svg'

const CollapseBox = () => {
  const { articles, loading, error } = useSelector((state) => state.vrnews)

  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const shuffledArticles = useMemo(() => {
    if (articles) {
      return shuffleArray(articles)
    }
    return []
  }, [articles])

  const handleNextPost = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % shuffledArticles.length)
  }, [currentIndex, shuffledArticles])

  function shuffleArray(array) {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  const title = shuffledArticles[currentIndex]?.title
    .split(' ')
    .slice(0, 6)
    .join(' ')

  const description = shuffledArticles[currentIndex]?.description
    .split(' ')
    .slice(0, 100)
    .join(' ')

  const title2 = shuffledArticles[currentIndex]?.title
    .split(' ')
    .slice(6, 10)
    .join(' ')

  const text = (
    <>
      <div className={styles.titleBox}>
        <button className={styles.btn} onClick={handleNextPost}>
          <img
            className={styles.arrow}
            src={arrowRightIcon}
            alt="Load Next Post"
          />
        </button>{' '}
        <div className={styles.headers}>
          <h2 className={styles.apiHeader}>{title}</h2>
          <h2 className={styles.apiHeader2}>{title2}</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <article className={styles.apiIntro2}>
          {shuffledArticles.length > 0 && (
            <div
              className={styles.apiBox}
              key={shuffledArticles[currentIndex].id}
            >
              <p className={styles.apiContent}>{description}</p>
            </div>
          )}
        </article>
      </div>
    </>
  )

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className={styles.centeredBox}>
      <div className={styles.box}>
        <Divider className={styles.divider} orientation="center">
          <Collapse
            className={styles.collapse}
            bordered={false}
            size="large"
            activeKey={isCollapsed ? '1' : undefined}
          >
            <img className={styles.bgimage} src={image} alt="showcase" />
            <Collapse.Panel
              className={styles.content}
              showArrow={false}
              header={
                <div style={{ color: 'inherit' }} onClick={toggleCollapse}>
                  <img
                    className={styles.downArrow}
                    src={downArrow}
                    alt="downarrow"
                  />
                </div>
              }
              key="1"
            >
              <p
                className={`${styles.text} ${
                  isCollapsed ? styles.collapsedText : ''
                }`}
              >
                {text}
              </p>
            </Collapse.Panel>
          </Collapse>
        </Divider>
      </div>
    </div>
  )
}

export default CollapseBox
