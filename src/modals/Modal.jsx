import React, { useCallback, useEffect, useState } from "react";
import "./Modal.css";
import { AiOutlineCloseCircle as CloseButton } from "react-icons/ai";
import Button from "../components/Button";
import useBlockScroll from "../hooks/useBlockScroll";

const Modal = ({
  title = String,
  subtitle = String,
  body = React.Element,
  buttonLabel = String,
  buttonType = "submit",
  buttonClick,
  isOpen = Boolean,
  onClose = Function,
  onSubmit = Function,
}) => {
  // additional state for the hide/show animation
  const [showModal, setShowModal] = useState(isOpen);
  const { blockScroll, allowScroll } = useBlockScroll();

  useEffect(() => {
    setShowModal(isOpen);
    if (isOpen) blockScroll();
    if (!isOpen) allowScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    // adding timeout because of the animation's length -  300ms
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onSubmit]
  );

  if (!isOpen) return null;
  return (
    <div className="modal-container">
      <form
        onSubmit={handleSubmit}
        className={`modal ${showModal ? "animation-show" : "animation-hide"}`}
      >
        <div className="modal__header">
          <h2 className="modal__title">
            {title}
            <div className="modal__close-btn" onClick={handleClose}>
              <CloseButton />
            </div>
          </h2>

          <h5 className="modal__subtitle">{subtitle && subtitle}</h5>
        </div>
        <div className="modal__body">{body}</div>
        <div className="modal__submit-btn">
          <Button type={buttonType} label={buttonLabel} onClick={buttonClick} />
        </div>
      </form>
    </div>
  );
};

export default Modal;
