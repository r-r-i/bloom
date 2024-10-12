// Modules
// Models
import { imageData } from "../../data/imageData"
// Components
// CSS
import './view.css';
// Services

const ImageGallery: React.FC = () => {
  return (
    <div className="page-container">
      <div className="sidebar">
        <ul className="link-list">
          <li><a href="/particle-sim/blanket">blanket</a></li>
          <li><a href="/particle-sim/richter-sphere">richter sphere</a></li>
        </ul>
      </div>
      <div className="gallery">
        {imageData.map((image) => (
          <div key={image.id} className="image-container">
            <img src={image.url} alt={image.description || "Image"} className="image" />
            <p className="description">
              {image.description || "\u00A0" /* Non-breaking space for empty descriptions */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

