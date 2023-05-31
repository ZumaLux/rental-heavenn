import React from "react";
import TableRow from "../components/TableRow";
import useFetch from "../hooks/useFetch";
import { collection_rentals } from "../firebase/variables";
import { useRentalContext } from "../context/rentalContext";
import "./Rentals.css";

const Rentals = () => {
  const { rentalList, setRentalList, IsLoading, setIsLoading, error, setError } =
    useRentalContext();
  useFetch(collection_rentals, rentalList, setRentalList, setIsLoading, setError);

  return (
    <div className="page-container">
      <div className="rentals-table">
        <div className="table-row header">
          <div className="element wider">VEHICLE</div>
          <div className="element wider">CUSTOMER</div>
          <div className="element wider">EMAIL</div>
          <div className="element">PHONE</div>
          <div className="element">FROM</div>
          <div className="element">TO</div>
          <div className="element center">STATUS</div>
          <div className="element shorter right">PRICE</div>
          <div className="element wider center">ACTIONS</div>
        </div>
        {rentalList.map((rental) => (
          <TableRow key={rental.id} data={rental} />
        ))}
      </div>
    </div>
  );
};

export default Rentals;
