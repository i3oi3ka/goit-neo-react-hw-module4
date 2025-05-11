import style from "./ImageCard.module.css";

const ImageCard = ({ photo, openModal }) => (
  <div>
    <img
      className={style.image}
      src={photo.urls.small}
      alt={photo.alt_description}
      onClick={() => openModal(photo)}
    />
  </div>
);

export default ImageCard;
