import React from 'react';
import './imagesgallery.css'

const images = [
  { src: 'https://shifrapua.org.il/wp-content/uploads/2019/01/gallery1s1-1.jpg', alt: 'gallery1s1-1' },
  { src: 'https://shifrapua.org.il/wp-content/uploads/2019/01/nijlsdbv.jpg', alt: 'nijlsdbv' },
  { src: 'https://shifrapua.org.il/wp-content/uploads/2019/01/gallery1s1-12.jpg', alt: 'gallery1s1-12' },
  { src: 'https://shifrapua.org.il/wp-content/uploads/2019/01/gallery1s1-9.jpg', alt: 'gallery1s1-9' },
  { src: 'https://shifrapua.org.il/wp-content/uploads/2019/01/IMG-20180110-WA0021.jpg', alt: 'IMG-20180110-WA0021' },
  { src: 'https://shifrapua.org.il/wp-content/uploads/2019/01/gallery1s1-3.jpg', alt: 'gallery1s1-3' },
  { src: 'https://shifrapua.org.il/wp-content/uploads/2019/01/gallery1s1-14.jpg', alt: 'gallery1s1-14' },
  { src: 'https://shifrapua.org.il/wp-content/uploads/2019/01/gallery1s1-10.jpg', alt: 'gallery1s1-10' },
  { src: 'https://shifrapua.org.il/wp-content/uploads/2019/01/gallery1s1-6.jpg', alt: 'gallery1s1-6' }
];

const ImagesGallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImagesGallery;
