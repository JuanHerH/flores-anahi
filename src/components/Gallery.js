import React from 'react';

const images = [
  { src: '/foto-1.JPG', alt: 'Foto 1', overlayText: '¡Felicidades por el 21 de marzo!' },
  { src: '/foto-2.JPG', alt: 'Foto 2', overlayText: 'Celebra este día especial!' },
  { src: '/foto-3.JPG', alt: 'Foto 3', overlayText: '¡Un día para recordar!' },
  { src: '/foto-4.JPG', alt: 'Foto 4', overlayText: '¡Feliz celebración!' },
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