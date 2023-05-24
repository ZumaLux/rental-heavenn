import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useModalContext } from "../context/modalContext";
import { AiFillEdit as EditIcon } from "react-icons/ai";
import { AiFillDelete as DeleteIcon } from "react-icons/ai";
import useFetchById from "../hooks/useFetchById";
import { collection_cars } from "../firebase/variables";

const SingleCar = () => {
  const { id } = useParams();
  const { openEditModal } = useModalContext();
  const { data, isLoading, error } = useFetchById(collection_cars, id);

  return (
    <div className="page-container">
      <Sidebar
        btnList={[
          {
            label: "Edit Car",
            onClick: () => openEditModal(data),
            icon: <EditIcon />,
            color: "orange",
            data: data,
          },
          {
            label: "Delete Car",
            onClick: () => {},
            icon: <DeleteIcon />,
            color: "red",
          },
        ]}
      />
    </div>
  );
};

export default SingleCar;
