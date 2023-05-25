import React, { useState } from "react";
import Modal from "./Modal";
import { useModalContext } from "../context/modalContext";
import { addItem } from "../firebase/crud";
import { collection_cars } from "../firebase/variables";
import { useCarContext } from "../context/carContext";
import getSingleItem from "../firebase/getSingleItem";

const inputFields = [
  {
    name: "Brand",
    element: "input",
    type: "text",
    options: [],
    required: true,
  },
  {
    name: "Model",
    element: "input",
    type: "text",
    options: [],
    required: true,
  },
  {
    name: "Doors",
    element: "input",
    type: "number",
    options: [],
    required: true,
  },
  {
    name: "Seats",
    element: "input",
    type: "number",
    options: [],
    required: true,
  },
  {
    name: "Fuel",
    element: "select",
    type: "",
    options: ["Diesel", "Petrol", "Hybrid", "Electric"],
    required: true,
  },
  {
    name: "Year",
    element: "select",
    type: "",
    options: getYears(),
    required: true,
  },
  {
    name: "Gearbox",
    element: "select",
    type: "",
    options: ["Manual", "Automatic"],
    required: true,
  },
  {
    name: "ACS",
    element: "select",
    type: "",
    options: ["Yes", "No"],
    required: true,
  },
  {
    name: "Image",
    element: "input",
    type: "text",
    options: [],
    required: true,
  },
  {
    name: "Price",
    element: "input",
    type: "number",
    options: [],
    required: true,
  },
  {
    name: "Extras",
    element: "input",
    type: "text",
    options: [],
    required: false,
  },
  {
    name: "Discount",
    element: "input",
    type: "number",
    options: [],
    required: false,
  },
];

function getYears() {
  const years = [];
  for (let i = 2000; i <= new Date().getFullYear(); i++) {
    years.push(i);
  }
  return years;
}

const AddCarModal = () => {
  const { addModalActive, closeAddModal } = useModalContext();
  const { setCarList } = useCarContext();
  const onSubmit = (e) => {
    // submit info
    let price = parseFloat(e.target.price.value);
    let discount = parseInt(e.target.discount.value === "" ? 0 : e.target.discount.value);
    let discountPrice = parseFloat((price - price * (discount / 100)).toFixed(2));

    const car = {
      brand: e.target.brand.value,
      model: e.target.model.value,
      year: parseInt(e.target.year.value),
      fuel: e.target.fuel.value,
      gearbox: e.target.gearbox.value,
      acs: e.target.acs.value,
      doors: parseInt(e.target.doors.value),
      seats: parseInt(e.target.seats.value),
      image: e.target.image.value,
      extras: e.target.extras.value,
      discount: discount,
      price: price,
      discountPrice: discountPrice,
    };

    addItem(collection_cars, car).then((res) => {
      if (!res) return;
      getSingleItem(collection_cars, res.id).then((res) => {
        setCarList((current) => [...current, res]);
      });
      console.log("car --> ", car);
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
    </div>
  );

  return (
    <Modal
      title="Add New Car"
      subtitle="Please fill the car data"
      body={modalBody}
      buttonLabel="Add"
      isOpen={addModalActive}
      onClose={closeAddModal}
      onSubmit={onSubmit}
    />
  );
};

export default AddCarModal;
