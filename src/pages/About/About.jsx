import React, { useState, useMemo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import {
  VectorBox,
  AboutVectorImg,
  AboutVector2Img,
  AboutBox,
  AboutImg,
  ApiHeader1,
  ApiContent,
  Wrapper,
  Button,
  ContentBox,
} from '../../styled.js'
import styles from '../../styles/About/About.module.scss'
import aboutimg from '../../assets/webbrowser/images/introimage.svg'
import aboutVector from '../../assets/webbrowser/icons/aboutvector.svg'
import aboutVector2 from '../../assets/webbrowser/icons/aboutvector2.svg'
import { Skeleton } from 'antd'

const About = () => {
  const { articles, loading, error } = useSelector((state) => state.vrnews)
  const [articleIndex, setArticleIndex] = useState(1)

  const handleNextClick = useCallback(() => {
    setArticleIndex(Math.floor(Math.random() * articles.length))
  }, [articles])

  const currentArticle = useMemo(() => {
    if (!articles || articles.length === 0 || articleIndex >= articles.length) {
      return null
    }
    const article = articles[articleIndex]
    const title = article?.title.split(' ').slice(0, 6).join(' ')
    const description = article?.description.split(' ').slice(0, 100).join(' ')
    let altText = articles[articleIndex]?.title.split(' ').slice(0, 3).join(' ')
    return (
      <ContentBox key={article.id}>
        <AboutImg id="about" src={article.image} alt={altText} />
        <ApiHeader1>{title}</ApiHeader1>
        <ApiContent>{description}</ApiContent>
        <Button onClick={handleNextClick}>Next</Button>
      </ContentBox>
    )
  }, [articles, articleIndex, handleNextClick])

  return (
    <div className={styles.about}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '930px',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {loading ? (
          <Skeleton
            active
            avatar={{ size: 'large', shape: 'circle' }}
            title={{ width: '100%' }}
            paragraph={{
              rows: 6,
              width: ['100px', '100px', '100px', '100px', '100px', '100px'],
            }}
            className={styles.skeleton}
          />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <Wrapper>
            <VectorBox>
              <AboutVectorImg src={aboutVector} alt="vector" />
              <AboutVector2Img src={aboutVector2} alt="vector2" />
            </VectorBox>

            <AboutBox>{currentArticle}</AboutBox>
          </Wrapper>
        )}
      </div>
    </div>
  )
}

export default About
