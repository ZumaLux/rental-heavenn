import React, { useEffect } from "react";
import "./TableRow.css";
import { convertToDate } from "../functions/convertToDate";
import { CiEdit as EditIcon } from "react-icons/ci";
import { MdDeleteOutline as DeleteIcon } from "react-icons/md";
import { GrView as VieweIcon } from "react-icons/gr";

const TableRow = ({ data }) => {
  // useEffect(() => {
  //   console.log(data.startDate);
  // }, [data]);

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
      <div className="element center">Status</div>
      <div className="element shorter right">{data.totalPrice}$</div>
      <div className="element wider center icons">
        <VieweIcon />
        <EditIcon />
        <DeleteIcon />
      </div>
    </div>
  );
};

export default TableRow;
