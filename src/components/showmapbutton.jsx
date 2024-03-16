import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../App.css'

const ShowMapButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Add scroll event listener to track scroll position
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Determine scroll position
    const scrollPosition = window.pageYOffset;

    // Adjust button visibility based on scroll position
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
      {/* Render the footer component */}
     {/*<Footer /> */} 
    </ButtonContainer>
  );
};

export default ShowMapButton;

const ButtonContainer = styled.div`
    position: relative;
`;

const ButtonSection = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Import your footer component here
//import Footer from './Footer';
