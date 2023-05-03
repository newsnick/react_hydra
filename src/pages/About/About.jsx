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
//import { fetchVRNews2 } from '../../redux/reducer/VRNewsSlice2'
import aboutimg from '../../assets/webbrowser/images/introimage.svg'
import aboutVector from '../../assets/webbrowser/icons/aboutvector.svg'
import aboutVector2 from '../../assets/webbrowser/icons/aboutvector2.svg'

const About = () => {
  //const dispatch = useDispatch()
  const { articles, loading, error } = useSelector((state) => state.vrnews)
  const [articleIndex, setArticleIndex] = useState(1)

  // useEffect(() => {
  //   dispatch(fetchVRNews2())
  // }, [])

  const handleNextClick = useCallback(() => {
    setArticleIndex(Math.floor(Math.random() * articles.length))
  }, [articles])

  const currentArticle = useMemo(() => {
    if (!articles || articles.length === 0 || articleIndex >= articles.length) {
      return null
    }
    const article = articles[articleIndex]
    return (
      <ContentBox key={article.id}>
        <AboutImg
          id="about"
          src={article.image}
          alt={article.title.split(' ').slice(0, 3).join(' ')}
        />
        <ApiHeader1>
          {article.title.split(' ').slice(0, 6).join(' ')}
        </ApiHeader1>
        <ApiContent>
          {article.description.split(' ').slice(0, 100).join(' ')}
        </ApiContent>
        <Button onClick={handleNextClick}>Next</Button>
      </ContentBox>
    )
  }, [articles, articleIndex, handleNextClick])

  return (
    <Wrapper>
      <VectorBox>
        <AboutVectorImg src={aboutVector} alt="vector" />
        <AboutVector2Img src={aboutVector2} alt="vector2" />
      </VectorBox>

      <AboutBox>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          currentArticle
        )}
      </AboutBox>
    </Wrapper>
  )
}

export default About
