import React, { useEffect, useRef } from "react";
import "./TableRow.css";
import { convertToDate } from "../functions/convertToDate";
import { CiEdit as EditIcon } from "react-icons/ci";
import { MdDeleteOutline as DeleteIcon } from "react-icons/md";
import { GrView as VieweIcon } from "react-icons/gr";
import { getRentalStatus } from "../functions/getRentalStatus";

const TableRow = ({ data }) => {
  const rentalStatus = getRentalStatus(data.startDate.seconds, data.endDate.seconds);
  const statusRef = useRef();

  useEffect(() => {
    const getColoredStatus = () => {
      if (rentalStatus.includes("Ongoing")) statusRef.current.style.color = "green";
      if (rentalStatus.includes("Pending")) statusRef.current.style.color = "orange";
      if (rentalStatus.includes("Finished")) statusRef.current.style.color = "red";
    };
    getColoredStatus();
  }, [rentalStatus]);

  return (
    <div className="table-row">
      <div className="element wider bold">
        {data.rentedCarBrand} {data.rentedCarModel}
      </div>
      <div className="element wider">
        {data.customerName} {data.customerSurname}
      </div>
      <div className="element wider">{data.customerEmail}</div>
      <div className="element">{data.customerPhone}</div>
      <div className="element">{convertToDate(data.startDate.seconds)}</div>
      <div className="element">{convertToDate(data.endDate.seconds)}</div>
      <div className="element center" ref={statusRef}>
        {rentalStatus}
      </div>
      <div className="element shorter right">$ {data.totalPrice}</div>
      <div className="element wider center icons">
        <VieweIcon />
        <EditIcon />
        <DeleteIcon />
      </div>
    </div>
  );
};

export default TableRow;
