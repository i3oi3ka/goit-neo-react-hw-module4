import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={style.container}>
      {photos.map((photo) => (
        <li className={style.item} key={photo.id}>
          <ImageCard photo={photo} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
