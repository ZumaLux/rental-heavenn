import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [addModalActive, setAddModalActive] = useState(false);

  const [editModalActive, setEditModalActive] = useState(false);
  const [editData, setEditData] = useState(null);

  // ADD
  const openAddModal = () => {
    setAddModalActive(true);
  };
  const closeAddModal = () => {
    setAddModalActive(false);
  };

  // EDIT
  const openEditModal = (data) => {
    setEditModalActive(true);
    setEditData(data);
  };
  const closeEditModal = () => {
    setEditModalActive(false);
    setEditData(null);
  };

  return (
    <ModalContext.Provider
      value={{
        addModalActive,
        editModalActive,
        editData,
        openAddModal,
        closeAddModal,
        openEditModal,
        closeEditModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
export default ModalProvider; // wrapper
