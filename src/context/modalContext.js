import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [addModalActive, setAddModalActive] = useState(false);

  const [editModalActive, setEditModalActive] = useState(false);
  const [editData, setEditData] = useState(null);

  const [rentModalActive, setRentModalActive] = useState(false);

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

  // RENT
  const openRentModal = () => {
    setRentModalActive(true);
  };
  const closeRentModal = () => {
    setRentModalActive(false);
  };

  return (
    <ModalContext.Provider
      value={{
        addModalActive,
        editModalActive,
        editData,
        rentModalActive,
        openAddModal,
        closeAddModal,
        openEditModal,
        closeEditModal,
        setEditData,
        openRentModal,
        closeRentModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
export default ModalProvider; // wrapper
