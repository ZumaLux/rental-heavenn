import React from "react";
import Modal from "./Modal";

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
  {
    name: "Discount",
    element: "input",
    type: "number",
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
  {
    name: "Discount",
    element: "input",
    type: "number",
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

const AddCar = () => {
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
              >
                {field.options.map((opt) => (
                  <option key={opt} value={field.name}>
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
      buttonTitle="Add"
      isOpen={true}
      onClose={""}
      submitAction={""}
    />
  );
};

export default AddCar;
