import React from 'react';

const images = [
  { src: 'https://via.placeholder.com/200x200?text=Flor+1', alt: 'Flor 1', overlayText: '¡Felicidades por el 21 de marzo!' },
  { src: 'https://via.placeholder.com/200x200?text=Flor+2', alt: 'Flor 2', overlayText: 'Celebra este día especial!' },
  { src: 'https://via.placeholder.com/200x200?text=Flor+3', alt: 'Flor 3', overlayText: '¡Un día para recordar!' },
  { src: 'https://via.placeholder.com/200x200?text=Flor+4', alt: 'Flor 4', overlayText: '¡Feliz celebración!' },
  // Add more images
];

function Gallery() {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <div key={index} className="image-container">
          <img src={img.src} alt={img.alt} />
          <div className="overlay">{img.overlayText}</div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;