import React, { useState } from 'react';
import './imagesgallery.css'

const images = [
  { id: 1, src: 'https://shifrapua.org.il/wp-content/uploads/2019/01/gallery1s1-1.jpg', alt: 'gallery1s1-1' },
  { id: 2, src: 'https://shifrapua.org.il/wp-content/uploads/2019/01/nijlsdbv.jpg', alt: 'nijlsdbv' },
  { id: 3, src: 'https://shifrapua.org.il/wp-content/uploads/2019/01/gallery1s1-12.jpg', alt: 'gallery1s1-12' },
  { id: 4, src: 'https://shifrapua.org.il/wp-content/uploads/2019/01/gallery1s1-9.jpg', alt: 'gallery1s1-9' },
  { id: 5, src: 'https://shifrapua.org.il/wp-content/uploads/2019/01/IMG-20180110-WA0021.jpg', alt: 'IMG-20180110-WA0021' },
  { id: 6, src: 'https://shifrapua.org.il/wp-content/uploads/2019/01/gallery1s1-3.jpg', alt: 'gallery1s1-3' },
  { id: 7, src: 'https://shifrapua.org.il/wp-content/uploads/2019/01/gallery1s1-14.jpg', alt: 'gallery1s1-14' },
  ];

const ImagesGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (id) => {
    setSelectedImage(id);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="item" onClick={() => openPopup(image.id)}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
      {selectedImage && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-inner">
            <img src={images.find(img => img.id === selectedImage).src} alt={images.find(img => img.id === selectedImage).alt} />
          </div>
        </div>
      )}
    </div>
  );
};



export default ImagesGallery;
