import React, { useCallback, useEffect, useState } from "react";
import "./Modal.css";
import { AiOutlineCloseCircle as CloseButton } from "react-icons/ai";
import Button from "../components/Button";

const Modal = ({
  title = String,
  subtitle = String,
  body = React.Element,
  buttonLabel = String,
  isOpen = Boolean,
  onClose = Function,
  onSubmit = Function,
}) => {
  // additional state for the hide/show animation
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    //  if (disabled) return;
    setShowModal(false);
    //adding timeout because of the animation's length -  300ms
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(e);
      handleClose();
    },
    [onSubmit]
  );

  if (!isOpen) return null;
  return (
    <div className="modal-container">
      <form
        onSubmit={handleSubmit}
        className={`modal ${showModal ? "animation-show" : "animation-hide"}`}
      >
        <div className="header">
          <h2 className="title">
            {title}
            <div className="close-btn" onClick={handleClose}>
              <CloseButton />
            </div>
          </h2>

          <h5 className="subtitle">{subtitle}</h5>
        </div>
        <div className="body">{body}</div>
        <div className="submit-btn">
          <Button type="submit" label={buttonLabel} />
        </div>
      </form>
    </div>
  );
};

export default Modal;
