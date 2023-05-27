import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useModalContext } from "../context/modalContext";
import { AiFillEdit as EditIcon } from "react-icons/ai";
import { AiFillDelete as DeleteIcon } from "react-icons/ai";
import useFetchById from "../hooks/useFetchById";
import { collection_cars } from "../firebase/variables";
import Button from "../components/Button";
import "./SingleCar.css";
import { deleteItem } from "../firebase/crud";
import { useCarContext } from "../context/carContext";
import { AiTwotoneCalendar as CalenadrIcon } from "react-icons/ai";
import { BsFillFuelPumpFill as FuelIcon } from "react-icons/bs";
import { BsPersonFill as SeatIcon } from "react-icons/bs";
import { TbManualGearbox as GearboxIcon } from "react-icons/tb";
import { GiCarDoor as DoorIcon } from "react-icons/gi";
import { TbAirConditioning as AcIcon } from "react-icons/tb";

const SingleCar = () => {
  const { id } = useParams();
  const { openEditModal } = useModalContext();
  const { carList, setCarList } = useCarContext();
  const { data, isLoading, error } = useFetchById(collection_cars, id);
  const headerRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const shrinkHeaderOnScroll = () => {
      if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        headerRef.current.className = "single-car__header header-shrink";
      } else {
        headerRef.current.className = "single-car__header";
      }
    };

    // window.onscroll = () => shrinkHeaderOnScroll();
    window.addEventListener("scroll", shrinkHeaderOnScroll);
    return () => {
      window.removeEventListener("scroll", shrinkHeaderOnScroll);
    };
  }, []);

  const deleteCar = async () => {
    await deleteItem(collection_cars, data).then((confirm) => {
      if (!confirm) return;
      const newList = carList.filter((item) => item.id !== data.id);
      setCarList(newList);
      navigate("/cars");
    });
  };

  return (
    <div className="page-container">
      <div ref={headerRef} className="single-car__header">
        <h1 className="single-car__header-title">
          {data.brand} {data.model}
        </h1>
        <div className="single-car__rent-btn-container">
          <div className="rent-price">$ {data.price}</div>
          <div className="rent-btn">
            <Button label="Rent now" />
          </div>
        </div>
      </div>

      <div className="single-car__basic-info-container">
        <h1 className="single-car__basic-info-title">
          {data.brand} {data.model}
        </h1>
        <div className="single-car__basic-info">
          <div className="img-container">
            <img src={data.image} alt="image" />
          </div>
          <div className="info-container">
            <div className="info">
              <p>
                <CalenadrIcon />
                &nbsp; {data.year}
              </p>
              <p>
                <FuelIcon />
                &nbsp; {data.fuel}
              </p>
              <p>
                <SeatIcon />
                &nbsp; {data.seats}
              </p>
              <p>
                <GearboxIcon />
                &nbsp; {data.gearbox}
              </p>
              <p>
                <DoorIcon />
                &nbsp; {data.doors}
              </p>
              <p>
                <AcIcon />
                &nbsp; {data.ac}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="single-car__details-container">
        <div className="single-car__details">
          <h1 className="single-car__details-heading">Details</h1>
          {Object.keys(data).map((key, index) => {
            if (
              key === "id" ||
              key === "image" ||
              key === "discount" ||
              key === "price" ||
              key === "discountPrice"
            )
              return "";

            return (
              <div className="row-container" key={index}>
                <div className="row-title">
                  <b>{key.toUpperCase()}</b>
                </div>
                <div className="row-info">{data[key]}</div>
              </div>
            );
          })}
        </div>
        <div className="single-car__description">
          <h1 className="single-car__details-heading">Description</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam libero possimus totam,
            aliquam neque unde iste, necessitatibus tenetur alias pariatur tempore numquam omnis
            quam veniam sapiente quis iusto, nesciunt quo?
          </p>
        </div>
      </div>

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
            onClick: () => deleteCar(),
            icon: <DeleteIcon />,
            color: "red",
          },
        ]}
      />
    </div>
  );
};

export default SingleCar;

// {
//   Object.keys(car).map((key, index) => {
//     if (
//       key === "id" ||
//       key === "img" ||
//       key === "discount" ||
//       key === "price" ||
//       key === "discPrice"
//     )
//       return "";

//     return (
//       <div className="row" key={index}>
//         <div className="row-title">
//           <b>{key.toUpperCase()}</b>
//         </div>
//         <div className="row-info">{car[key]}</div>
//       </div>
//     );
//   });
// }
