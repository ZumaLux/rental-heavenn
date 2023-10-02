import React, { useMemo, useState } from "react";
import Modal from "./Modal";
import { useModalContext } from "../context/modalContext";
import { addItem } from "../firebase/crud";
import { collection_rentals } from "../firebase/variables";
import CalendarComponent from "../components/CalendarComponent";
import useFetchRentalDates from "../hooks/useFetchRentalDates";
import { getNumberOfDays } from "../functions/getNumberOfDays";

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

const RentCar = () => {
  const { rentModalActive, closeRentModal } = useModalContext();
  const { editData } = useModalContext();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { takenDates } = useFetchRentalDates(collection_rentals, editData);

  const getTotalPrice = useMemo(() => {
    const discPrice = parseFloat(editData?.discountPrice);
    return getNumberOfDays(startDate, endDate) * discPrice;
  }, [startDate, endDate, editData?.discountPrice]);

  const onSubmit = (e) => {
    // submit info
    const rental = {
      customerName: e.target.name.value,
      customerSurname: e.target.surname.value,
      customerEmail: e.target.email.value,
      customerPhone: e.target.phone.value,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      rentedCarId: editData.id,
      rentedCarBrand: editData.brand,
      rentedCarModel: editData.model,
      totalPrice: getTotalPrice.toFixed(2),
    };

    addItem(collection_rentals, rental).then((res) => {
      if (res.error) {
        window.alert(res.error);
        return;
      }
      if (!rentModalActive.status) return;
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
      isOpen={rentModalActive}
      onClose={closeRentModal}
      onSubmit={onSubmit}
    />
  );
};

export default RentCar;
