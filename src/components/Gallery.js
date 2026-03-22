import React from 'react';

const images = [
  { src: process.env.PUBLIC_URL + '/foto1.jpg', alt: 'foto1' },
  { src: process.env.PUBLIC_URL + '/foto2.jpg', alt: 'foto2' },
  { src: process.env.PUBLIC_URL + '/foto3.jpg', alt: 'foto3' },
  { src: process.env.PUBLIC_URL + '/foto4.jpg', alt: 'foto4' },
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