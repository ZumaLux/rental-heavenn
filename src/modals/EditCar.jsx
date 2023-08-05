import React from "react";
import Modal from "./Modal";
import { useModalContext } from "../context/modalContext";
import { updateItem } from "../firebase/crud";
import { collection_cars } from "../firebase/variables";
import { useCarContext } from "../context/carContext";

const getInputFields = (data) => {
  return [
    {
      name: "Brand",
      element: "input",
      type: "text",
      options: [],
      default: data.brand,
      required: true,
    },
    {
      name: "Model",
      element: "input",
      type: "text",
      options: [],
      default: data.model,
      required: true,
    },
    {
      name: "Doors",
      element: "input",
      type: "number",
      options: [],
      default: data.doors,
      required: true,
    },
    {
      name: "Seats",
      element: "input",
      type: "number",
      options: [],
      default: data.seats,
      required: true,
    },
    {
      name: "Fuel",
      element: "select",
      type: "",
      options: ["Diesel", "Petrol", "Hybrid", "Electric"],
      default: data.fuel,
      required: true,
    },
    {
      name: "Year",
      element: "select",
      type: "",
      options: getYears(),
      default: data.year,
      required: true,
    },
    {
      name: "Gearbox",
      element: "select",
      type: "",
      options: ["Manual", "Automatic"],
      default: data.gearbox,
      required: true,
    },
    {
      name: "AC",
      element: "select",
      type: "",
      options: ["Yes", "No"],
      default: data.ac,
      required: true,
    },
    {
      name: "Image",
      element: "input",
      type: "text",
      options: [],
      default: data.image,
      required: true,
    },
    {
      name: "Price",
      element: "input",
      type: "number",
      step: "0.01",
      options: [],
      default: data.price,
      required: true,
    },
    {
      name: "Extras",
      element: "input",
      type: "text",
      options: [],
      default: data.extras,
      required: false,
    },
    {
      name: "Discount",
      element: "input",
      type: "number",
      options: [],
      default: data.discount,
      required: false,
    },
  ];
};

function getYears() {
  const years = [];
  for (let i = 2000; i <= new Date().getFullYear(); i++) {
    years.push(i);
  }
  return years;
}

const EditCarModal = () => {
  const { editModalActive, closeEditModal, editData } = useModalContext();
  const { carList, setCarList } = useCarContext();

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
      ac: e.target.ac.value,
      doors: parseInt(e.target.doors.value),
      seats: parseInt(e.target.seats.value),
      image: e.target.image.value,
      extras: e.target.extras.value,
      discount: discount,
      price: price,
      discountPrice: discountPrice,
    };

    updateItem(collection_cars, car, editData.id).then((res) => {
      if (res.error) {
        window.alert(res.error);
        return;
      }
      const itemIndex = carList.indexOf(carList.find((item) => item.id === res.item.id));
      const updatedList = [...carList];
      updatedList[itemIndex] = res.item;
      setCarList(updatedList);
      console.log("car --> ", res);
    });
  };

  const modalBody = (
    <div className="fields-container">
      {editData &&
        getInputFields(editData).map((field) => (
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
                  defaultValue={field.default}
                  required={field.required}
                  step={field.step}
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
                  defaultValue={field.default}
                  required={field.required}
                >
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
      title="Edit Car"
      subtitle="Edit existing vehicle info"
      body={modalBody}
      buttonLabel="Edit"
      isOpen={editModalActive}
      onClose={closeEditModal}
      onSubmit={onSubmit}
    />
  );
};

export default EditCarModal;
