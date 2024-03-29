import React, { useMemo, useState } from "react";
import Modal from "./Modal";
import { addItem } from "../firebase/crud";
import { collection_rentals } from "../firebase/variables";
import CalendarComponent from "../components/CalendarComponent";
import useFetchRentalDates from "../hooks/useFetchRentalDates";
import { getNumberOfDays } from "../functions/getNumberOfDays";
import { useCarContext } from "../context/carContext";

const inputFields = [
  {
    name: "Name",
    element: "input",
    type: "text",
    required: true,
  },
  {
    name: "Surname",
    element: "input",
    type: "text",
    required: true,
  },
  {
    name: "Email",
    element: "input",
    type: "email",
    required: true,
  },
  {
    name: "Phone",
    element: "input",
    type: "tel",
    pattern: "[0-9]{10}",
    required: true,
  },
];

const RentCar = ({ isActive, setActive }) => {
  const { singleCar } = useCarContext();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { takenDates } = useFetchRentalDates(collection_rentals, singleCar);

  const getTotalPrice = useMemo(() => {
    const discPrice = parseFloat(singleCar?.discountPrice);
    return (getNumberOfDays(startDate, endDate) * discPrice).toFixed(2);
  }, [startDate, endDate, singleCar?.discountPrice]);

  const onSubmit = (e) => {
    // submit info
    const rental = {
      customerName: e.target.name.value,
      customerSurname: e.target.surname.value,
      customerEmail: e.target.email.value,
      customerPhone: e.target.phone.value,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      rentedCarId: singleCar.id,
      rentedCarBrand: singleCar.brand,
      rentedCarModel: singleCar.model,
      totalPrice: getTotalPrice,
    };

    addItem(collection_rentals, rental).then((res) => {
      if (res.error) {
        window.alert(res.error);
        return;
      }
      if (!isActive.status) return;
    });
  };

  const modalBody = (
    <div className="fields-container">
      {inputFields.map((field) => (
        <div className="fields" key={field.name}>
          {field.element === "input" && (
            <div className="field-block">
              <label htmlFor={field.name}>
                {field.name}
                {field.required && "*"}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name.toLocaleLowerCase()}
                placeholder={field.name}
                required={field.required}
                pattern={field.pattern}
              />
            </div>
          )}
          {field.element === "select" && (
            <div className="field-block">
              <label htmlFor={field.name}>
                {field.name}
                {field.required && "*"}
              </label>
              <select
                id={field.name}
                name={field.name.toLocaleLowerCase()}
                placeholder={field.name}
                required={field.required}
                defaultValue={field.name}
              >
                <option value={field.name} disabled>
                  {field.name}
                </option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      ))}
      <CalendarComponent
        takenDates={takenDates}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    </div>
  );

  return (
    <Modal
      title="Rent Car"
      subtitle="Please fill the required information"
      body={modalBody}
      buttonLabel={`Rent $${getTotalPrice}`}
      isOpen={isActive}
      onClose={() => setActive(false)}
      onSubmit={onSubmit}
    />
  );
};

export default RentCar;
