import './styles/_global.scss'

import styled, { css } from 'styled-components'
import { Carousel } from 'antd'

const StyledCarousel = styled(Carousel)`
  > .slick-dots li button::before {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: white;
    inset: 2;
  }
  > .slick-dots li button::after {
    width: 30px;
    height: 14px;
    border-radius: 10%;
    background: white;
    inset: 0;
  }
`
export default StyledCarousel

const btnlarge = css`
  width: 214px;
  height: 48px;
  background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
  border-radius: 40px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #343045;
  z-index: 3;
  cursor: pointer;
`

const vectorbox = css`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin: 100px;
  position: absolute;
  width: 100%;
  padding-left: 400px;
`

const header1 = css`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #fff;
`

const mntext = css`
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  color: #fff;
`

const imgshadow = 'rgba(0, 0, 0, 0.25)'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const VectorBox = styled.div`
  ${vectorbox};
  margin-left: -250px;
  z-index: -1;
`

export const AboutVectorImg = styled.img`
  position: absolute;
  z-index: 3;
  background-color: transparent;
  top: 175px;
`

export const AboutVector2Img = styled.img`
  position: absolute;
  z-index: 3;
  background-color: transparent;
  top: -100px;
`

export const AboutBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin: 100px;
  place-items: center;
`

export const AboutImg = styled.img`
  box-shadow: 0px 4px 4px ${imgshadow};
  border-radius: 100px 240px;
  z-index: 3;
  position: absolute;
  width: 524px;
  height: 557px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  margin-left: -685px;
  margin-top: -270px;
`

export const ApiHeader1 = styled.h2`
  ${header1};
  position: absolute;
  margin-top: -175px;
  margin-left: -50px;
  max-width: 630px;
`

export const ApiHeader2 = styled.h2`
  ${(props) => props.theme.header2};
`

export const ApiContent = styled.p`
  max-width: 630px;
  margin: 20px 0 20px;
  ${mntext};
  position: absolute;
  margin-left: -50px;
  margin-top: -50px;
`

export const Button = styled.button`
  ${btnlarge};
  margin-left: 300px;
  margin-top: 60px;
  margin-top: 160px;
  position: absolute;
  margin-left: -50px;
`

export const ContentBox = styled.div`
  margin-left: 100px;
`
