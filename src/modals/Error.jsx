import React, { useEffect, useState } from "react";
import "./Error.css";
import Modal from "./Modal";

const Error = ({ error }) => {
  const [openError, setOpenError] = useState(error);

  useEffect(() => {
    if (error === null) setOpenError(false);
    else setOpenError(true);
  }, [error]);

  return (
    <Modal
      title={"Error!"}
      subtitle={error}
      buttonLabel="Ok"
      buttonType="button"
      buttonClick={() => setOpenError(false)}
      isOpen={openError}
      onClose={() => setOpenError(false)}
    />
  );
};

export default Error;
