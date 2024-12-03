// import React from "react";
import photo1 from './gallery_image/gallery1.jpg';
import photo2 from './gallery_image/gallery 2.jpg';
import photo3 from './gallery_image/gallery3.jpg';
// import photo4 from './gallery_image/gallery4.jpg';

const Gallery = () => {
  const photos = [
    { id: 1, src: photo1, alt: "Photo 1" },
    { id: 2, src: photo2, alt: "Photo 2" },
    { id: 3, src: photo3, alt: "Photo 3" }
    // { id: 4, src: photo4, alt: "Photo 4" },
  ];

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="gallery-item">
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
