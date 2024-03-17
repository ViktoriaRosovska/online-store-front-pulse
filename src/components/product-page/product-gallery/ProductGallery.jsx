import "./ProductGallery.css";

function ProductGallery({ topPhotos, bottomPhotos }) {
  return (
    <div className="product-gallery">
      <div className="top-photos">
        {topPhotos.map((photo, index) => (
          <img key={index} src={photo} alt={`Top Photo ${index + 1}`} />
        ))}
      </div>
      <div className="bottom-photos">
        {bottomPhotos.map((photo, index) => (
          <img key={index} src={photo} alt={`Bottom Photo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
