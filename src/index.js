import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import CarouselMain from './components/carousel-main';
import ImageGallery from './components/gallery'; // Import the ImageGallery component

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <CarouselMain />
    <ImageGallery /> {/* Render the ImageGallery component */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
