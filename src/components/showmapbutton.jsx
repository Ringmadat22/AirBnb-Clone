/*import React, { useState, useEffect } from 'react';*/
import styled from 'styled-components';
import '../App.css';
/*
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
`;*/

const ButtonSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    padding:20px 0;
`;

const Button = styled.button`
  padding:15px 0;
  width:160px;
  background-color:black;
  border:none;
  color:white;
  cursor:pointer;
  border-radius:9px;
  outline:none;
`

function showmapbutton() {
  return (
    <ButtonSection>
      <Button>Show Map Button</Button>
    </ButtonSection>
  )
}

export default showmapbutton
