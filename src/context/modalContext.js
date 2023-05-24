import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [addModalActive, setAddModalActive] = useState(false);

  const [editModalActive, setEditModalActive] = useState(false);
  const [editData, setEditData] = useState();

  // ADD
  const openAddModal = () => {
    setAddModalActive(true);
  };
  const closeAddModal = () => {
    setAddModalActive(false);
  };

  // EDIT
  const openEditModal = () => {
    setEditModalActive(true);
  };
  const closeEditModal = () => {
    setEditModalActive(false);
  };

  return (
    <ModalContext.Provider
      value={{
        addModalActive,
        editModalActive,
        openAddModal,
        closeAddModal,
        openEditModal,
        closeEditModal,
        setEditData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
export default ModalProvider; // wrapper
