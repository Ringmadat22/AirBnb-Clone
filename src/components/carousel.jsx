import React from 'react';
import styled from 'styled-components';
import { PiCaretCircleLeftFill } from "react-icons/pi";
import { PiCaretCircleRightFill } from "react-icons/pi";



const Carousel = ({ images }) => {
  const [activeImage, setActiveImage] = React.useState(0);

  const handlePreviousImageClick = () => {
    setActiveImage(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImageClick = () => {
    setActiveImage(prevIndex => (prevIndex + 1) % images.length);
  };

  // Add check for empty images array or invalid activeImage index
  if (!images || images.length === 0 || activeImage < 0 || activeImage >= images.length) {
    return <div>No images to display</div>;
  }

  return (
    <Container>
      <SlideImage src={images[activeImage]} />

      <CarouselButtonsContainer>
        <LeftArrowContainer  onClick={handlePreviousImageClick}>
        <PiCaretCircleLeftFill style={{
          fontSize:"35px",
          marginLeft:"10px",
          color:"white"
        }} />
        </LeftArrowContainer>

        <RightArrowContainer onClick={handleNextImageClick}>
        <PiCaretCircleRightFill style={{
            fontSize:"35px",
            marginRight:"10px",
            color:"white"
        }} />
        </RightArrowContainer>
      </CarouselButtonsContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 280px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  border-radius:20px;
`;

const SlideImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius:20px;
`;

const CarouselButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
`;

const LeftArrowContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const RightArrowContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default Carousel; // Export Carousel component as default
