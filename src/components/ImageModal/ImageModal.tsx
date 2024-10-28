import ReactModal from "react-modal";
import s from "./ImageModal.module.css";
import { useMyContext } from "../hooks/useMyContext/useMyContext";

ReactModal.setAppElement("#root");
const ImageModal = () => {
  const { isOpen, closeModal, url } = useMyContext();

  return (
    <>
      <div>
        <ReactModal
          isOpen={isOpen}
          closeTimeoutMS={250}
          preventScroll={true}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          className={s.modalContent}
          overlayClassName={s.modalOverlay}
        >
          <img
            src={url}
            alt="image"
            className="max-w-[1000px] max-h-[700px] object-cover"
          />
        </ReactModal>
      </div>
    </>
  );
};

export default ImageModal;
