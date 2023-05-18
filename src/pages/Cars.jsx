import React, { useState } from "react";
import "./Cars.css";
import useFetch from "../hooks/useFetch";
import CarCard from "../components/CarCard";
import SearchBar from "../components/SearchBar";
import SortBar from "../components/SortBar";
import { searchItems, sortItems } from "../functions/sortAndSearch";
import useSessionStorage from "../hooks/useSessionStorage";
import Pagination from "../components/Pagination";
import { sliceData } from "../functions/sliceData";

// use it while developing
const dbElements = [
  {
    id: 1,
    ac: true,
    brand: "Citroen",
    discount: 0,
    discountPrice: 26,
    doors: 4,
    extras: "",
    fuel: "diesel",
    gearbox: "manual",
    img: "https://www.topgear.com/sites/default/files/cars-car/image/2020/12/_mg_2297.jpg",
    model: "C4",
    price: 26,
    seats: 5,
    year: 2021,
  },
  {
    id: 2,
    ac: true,
    brand: "Audi",
    discount: 10,
    discountPrice: 18,
    doors: 4,
    extras: "",
    fuel: "diesel",
    gearbox: "manual",
    img: "https://www.topgear.com/sites/default/files/cars-car/image/2020/12/_mg_2297.jpg",
    model: "A4",
    price: 20,
    seats: 5,
    year: 2020,
  },
  {
    id: 3,
    ac: true,
    brand: "BMW",
    discount: 0,
    discountPrice: 25,
    doors: 4,
    extras: "",
    fuel: "diesel",
    gearbox: "manual",
    img: "https://www.topgear.com/sites/default/files/cars-car/image/2020/12/_mg_2297.jpg",
    model: "X5",
    price: 25,
    seats: 5,
    year: 2018,
  },
  {
    id: 4,
    ac: true,
    brand: "BMW",
    discount: 0,
    discountPrice: 25,
    doors: 4,
    extras: "",
    fuel: "diesel",
    gearbox: "manual",
    img: "https://www.topgear.com/sites/default/files/cars-car/image/2020/12/_mg_2297.jpg",
    model: "X3",
    price: 25,
    seats: 5,
    year: 2018,
  },
];

const Cars = () => {
  // const { data } = useFetch("cars");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortValue, setSortValue] = useSessionStorage("car-sort-by", "default");
  const [currentPage, setCurrentPage] = useSessionStorage("car-current-page", 1);

  const itemsPerPage = 5;
  const searchedItems = searchItems(searchQuery, dbElements);
  const sortedItems = sortItems(sortValue, searchedItems);
  const slicedData = sliceData(currentPage, itemsPerPage, sortedItems);

  return (
    <div className="page-container">
      <section className="cars-grid">
        <div className="cars-nav">
          <div className="cars-nav__search">
            <SearchBar setSearchQuery={(value) => setSearchQuery(value)} />
          </div>
          <div className="cars-nav__sort">
            <SortBar
              sortOptions={["Brand Model", "Price Brand", "Year Brand", "Discount Brand"]}
              sortValue={sortValue}
              setSortValue={(value) => setSortValue(value)}
            />
          </div>
        </div>
        <div className="cars-grid__content">
          {slicedData && slicedData.map((car) => <CarCard key={car.id} {...car} />)}
        </div>
        <div className="pagination-container">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={sortedItems.length}
            currentPage={currentPage}
            setCurrentPage={(value) => setCurrentPage(value)}
          />
        </div>
      </section>
    </div>
  );
};

export default Cars;
