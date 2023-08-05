import React, { useEffect, useState } from "react";
import "./Cars.css";
import useFetch from "../hooks/useFetch";
import CarCard from "../components/CarCard";
import SearchBar from "../components/SearchBar";
import SortBar from "../components/SortBar";
import { searchItems, sortItems } from "../functions/sortAndSearch";
import useSessionStorage from "../hooks/useSessionStorage";
import Pagination from "../components/Pagination";
import { sliceData } from "../functions/sliceData";
import { collection_cars } from "../firebase/variables";
import Sidebar from "../components/Sidebar";
import { useModalContext } from "../context/modalContext";
import { HiPlus as PlusIcon } from "react-icons/hi";
import { useCarContext } from "../context/carContext";
import { useAuthContext } from "../context/authContext";
import Loading from "../components/Loading";
import Error from "../modals/Error";

const Cars = () => {
  const { carList, setCarList, isLoading, setIsLoading, error, setError } = useCarContext();
  useFetch(collection_cars, carList, setCarList, setIsLoading, setError);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortValue, setSortValue] = useSessionStorage("car-sort-by", "default");
  const [currentPage, setCurrentPage] = useSessionStorage("car-current-page", 1);
  const { currentUser } = useAuthContext();

  const { openAddModal } = useModalContext();

  const itemsPerPage = 12;
  const searchedItems = searchItems(searchQuery, carList);
  const sortedItems = sortItems(sortValue, searchedItems);
  const slicedData = sliceData(currentPage, itemsPerPage, sortedItems);

  useEffect(() => {
    console.log("data=", carList);
  }, [carList]);

  return (
    <div className="page-container">
      <section className="cars-grid">
        <div className="cars-grid__nav">
          <div className="cars-grid__nav-search">
            <SearchBar setSearchQuery={(value) => setSearchQuery(value)} />
          </div>
          <div className="cars-grid__nav-sort">
            <SortBar
              sortOptions={["Brand Model", "Price Brand", "Year Brand", "Discount Brand"]}
              sortValue={sortValue}
              setSortValue={(value) => setSortValue(value)}
            />
          </div>
        </div>
        <div className="cars-grid__container">
          <Loading isLoading={isLoading} />
          <Error error={error} />

          {slicedData && (
            <div className="cars-grid__content">
              {slicedData.map((car) => (
                <CarCard key={car.id} {...car} />
              ))}
            </div>
          )}

          {carList.length > 0 && (
            <div className="cars-grid__pagination">
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={sortedItems.length}
                currentPage={currentPage}
                setCurrentPage={(value) => setCurrentPage(value)}
              />
            </div>
          )}
        </div>
      </section>

      <Sidebar
        btnList={[
          {
            label: "Add Car",
            onClick: () => openAddModal(),
            show: currentUser?.role === "admin",
            icon: <PlusIcon />,
            color: "orange",
          },
        ]}
      />
    </div>
  );
};

export default Cars;
