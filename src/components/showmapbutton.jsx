import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../App.css';

const ShowMapButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ButtonContainer>
      <ButtonSection className={`show-map-button ${showButton ? 'visible' : 'hidden'}`} onClick={scrollToTop}>
          Show Map
      </ButtonSection>
    
    </ButtonContainer>
  );
};

export default ShowMapButton;

const ButtonContainer = styled.div`
    position: relative;
`;

const ButtonSection = styled.div`
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


