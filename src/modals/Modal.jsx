import React from "react";
import "./Modal.css";
import { AiOutlineCloseCircle as CloseButton } from "react-icons/ai";
import Button from "../components/Button";

const Modal = ({
  title = String,
  subtitle = String,
  body = React.Element,
  buttonTitle = String,
  isOpen = Boolean,
  onClose = Function,
  submitAction = Function,
}) => {
  if (!isOpen) return null;
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="header">
          <h2 className="title">
            {title}
            <div className="close-btn">
              <CloseButton />
            </div>
          </h2>

          <h5 className="subtitle">{subtitle}</h5>
        </div>
        <form className="body">{body}</form>
        <div className="submit-btn">
          <Button name={buttonTitle} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
