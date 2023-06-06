import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const Error = ({ error }) => {
  const [openError, setOpenError] = useState(error);

  const bodyComponent = <p>{error}</p>;

  useEffect(() => {
    if (error === null) setOpenError(false);
    else setOpenError(true);
  }, [error]);

  return (
    <Modal
      title={"Error!"}
      subtitle=""
      body={bodyComponent}
      buttonLabel="Ok"
      buttonType="button"
      buttonClick={() => setOpenError(false)}
      isOpen={openError}
      onClose={() => setOpenError(false)}
    />
  );
};

export default Error;
