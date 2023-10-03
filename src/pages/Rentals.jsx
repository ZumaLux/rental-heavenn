import React, { useState } from "react";
import { TableRow, SearchBar, Loading } from "../components";
import useFetch from "../hooks/useFetch";
import { collection_rentals } from "../firebase/variables";
import { useRentalContext } from "../context/rentalContext";
import "./Rentals.css";
import { CgArrowsV as ArrowsIcon } from "react-icons/cg";
import { searchItems, sortItems } from "../functions/sortAndSearch";
import Error from "../modals/Error";

const Rentals = () => {
  const { rentalList, setRentalList, isLoading, setIsLoading, error, setError } =
    useRentalContext();
  useFetch(collection_rentals, rentalList, setRentalList, setIsLoading, setError);

  const [searchQuery, setSearchQuery] = useState("");
  const [orderBy, setOrderBy] = useState("default");

  const searchedItems = searchItems(searchQuery, rentalList);
  const sortedData = sortItems(orderBy, searchedItems);

  const filterClick = (e) => {
    if (orderBy === "default" || orderBy.includes("ascending")) {
      setOrderBy(e.currentTarget.id + " descending");
    } else {
      setOrderBy(e.currentTarget.id + " ascending");
    }
  };

  return (
    <div className="page-container">
      <Error error={error} />
      <div className="rentals-table_nav">
        <div className="search-bar">
          <SearchBar setSearchQuery={(value) => setSearchQuery(value)} />
        </div>
      </div>

      <div className="rentals-table">
        <div className="table-row header">
          <div
            className="element wider"
            id="rentedCarBrand rentedCarModel"
            onClick={(e) => filterClick(e)}
          >
            VEHICLE
            <ArrowsIcon />
          </div>
          <div
            className="element wider"
            id="customerName customerSurname"
            onClick={(e) => filterClick(e)}
          >
            CUSTOMER
            <ArrowsIcon />
          </div>
          <div
            className="element wider"
            id="customerEmail customerName"
            onClick={(e) => filterClick(e)}
          >
            EMAIL
            <ArrowsIcon />
          </div>
          <div className="element">PHONE</div>
          <div className="element" id="startDate customerName" onClick={(e) => filterClick(e)}>
            FROM
            <ArrowsIcon />
          </div>
          <div className="element" id="endDate customerName" onClick={(e) => filterClick(e)}>
            TO
            <ArrowsIcon />
          </div>
          <div className="element center">STATUS</div>
          <div
            className="element shorter right"
            id="totalPrice customerName"
            onClick={(e) => filterClick(e)}
          >
            PRICE
            <ArrowsIcon />
          </div>
          <div className="element wider center">ACTIONS</div>
        </div>

        <div>
          <Loading isLoading={isLoading} />
          {sortedData?.map((rental) => (
            <TableRow key={rental.id} data={rental} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rentals;
