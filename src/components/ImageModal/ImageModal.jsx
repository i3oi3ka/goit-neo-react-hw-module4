import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import style from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, closeModal, selectedPhoto }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={style.modal}
      overlayClassName={style.overlay}
      contentLabel="Imgae Modal"
    >
      <button onClick={closeModal} className={style.closeBtn}>
        x
      </button>
      {selectedPhoto && (
        <div>
          <img
            src={selectedPhoto.urls.regular}
            alt={selectedPhoto.alt_description}
            className={style.image}
          />
          <div className={style.info}>
            <p>
              <strong>Опис:</strong> {selectedPhoto.alt_description}
            </p>
            <p>
              <strong>Автор:</strong>
              <a
                href={selectedPhoto.user.links.self}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedPhoto.user.username}
              </a>
            </p>
            <p>
              <strong>Лайків:</strong> ❤️ {selectedPhoto.likes}
            </p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
