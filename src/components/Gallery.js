import React from 'react';

const images = [
  { src: '/foto-1.JPG', alt: 'foto1' },
  { src: '/foto-2.JPG', alt: 'foto2' },
  { src: '/foto-3.JPG', alt: 'foto3' },
  { src: '/foto-4.JPG', alt: 'foto4' },
];

function Gallery() {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <img key={index} src={img.src} alt={img.alt} />
      ))}
    </div>
  );
}

export default Gallery;