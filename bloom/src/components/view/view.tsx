// Modules
// Models
import { imageData } from "../../data/imageData"
// Components
// CSS
import './view.css';
// Services

const ImageGallery: React.FC = () => {
    return (
      <div className="gallery">
        {imageData.map((image) => (
          <div key={image.id} className="image-container">
            <img src={image.url} alt={image.description} className="image" />
            <p className="description">{image.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ImageGallery;