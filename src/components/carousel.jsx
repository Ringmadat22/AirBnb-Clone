import React from 'react'
import styled from 'styled-components'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from '/Users/ringo/Desktop/airbnbclone/src/images/fifh.jpeg.webp';
import image2 from '/Users/ringo/Desktop/airbnbclone/src/images/fifh2.jpeg.webp';
import image3 from '/Users/ringo/Desktop/airbnbclone/src/images/fifh3.jpeg.webp';
import image4 from '/Users/ringo/Desktop/airbnbclone/src/images/fifh4.jpeg.webp';
import image5 from '/Users/ringo/Desktop/airbnbclone/src/images/fifh5.jpeg.webp';
import image6 from '/Users/ringo/Desktop/airbnbclone/src/images/fifh6.jpeg.webp';
import image7 from '/Users/ringo/Desktop/airbnbclone/src/images/fifh7.jpeg.webp';

export const Carousel = ({ images }) => {
  const [activeImage, setActiveImage] = React.useState(0)

  const handlePreviousImageClick = () => {
    setActiveImage(prevIndex => (prevIndex - 1 + images.length) % images.length)
  }

  const handleNextImageClick = () => {
    setActiveImage(prevIndex => (prevIndex + 1) % images.length)
  }
  return (
    <Container>
      <SlideImage src={images[activeImage]} />

      <CarouselButtonsContainer>
        <LeftArrowContainer onClick={handlePreviousImageClick}>
          <FaArrowLeft />
        </LeftArrowContainer>

        <RightArrowContainer onClick={handleNextImageClick}>
          <FaArrowRight />
        </RightArrowContainer>
      </CarouselButtonsContainer>
    </Container>
  )
}

export default Carousel

const Container = styled.div`
  position: relative;
  width: 500px;
  height: 320px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
`

const SlideImage = styled.img`
  height: 100%;
  width: 280px;
`

const CarouselButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
`

const LeftArrowContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`

const RightArrowContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`