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
    //adding timeout because of the animations' length -  300ms
    console.log("close");
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  const handleSubmit = useCallback(
    (e) => {
      onSubmit();
      handleClose();
    },
    [onSubmit]
  );

  if (!isOpen) return null;
  return (
    <div className="modal-container">
      <div className={`modal ${showModal ? "animation-show" : "animation-hide"}`}>
        <div className="header">
          <h2 className="title">
            {title}
            <div className="close-btn" onClick={handleClose}>
              <CloseButton />
            </div>
          </h2>

          <h5 className="subtitle">{subtitle}</h5>
        </div>
        <form className="body">{body}</form>
        <div className="submit-btn">
          <Button label={buttonLabel} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
