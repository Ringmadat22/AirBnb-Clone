import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import CarouselMain from './components/carousel-main';
import ImageGallery from './components/gallery'; 
import ShowMapButton from './components/showmapbutton';
import Footer from './components/footer';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <CarouselMain />
    <ImageGallery /> 
    <ShowMapButton />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
