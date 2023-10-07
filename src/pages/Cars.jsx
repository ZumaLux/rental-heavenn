import React, { useState } from "react";
import "./Cars.css";
import { CarCard, SearchBar, SortBar, Pagination, Sidebar, Loading } from "../components";
import { collection_cars } from "../firebase/variables";
import useFetch from "../hooks/useFetch";
import useSessionStorage from "../hooks/useSessionStorage";
import { searchItems, sortItems, sliceData } from "../functions/dataActions";
import { useCarContext } from "../context/carContext";
import { useAuthContext } from "../context/authContext";
import { HiPlus as PlusIcon } from "react-icons/hi";
import Error from "../modals/Error";
import AddCar from "../modals/AddCar";

const Cars = () => {
  const { carList, setCarList, isLoading, setIsLoading, error, setError } = useCarContext();
  const { currentUser } = useAuthContext();
  useFetch(collection_cars, carList, setCarList, setIsLoading, setError);
  const [sortValue, setSortValue] = useSessionStorage("car-sort-by", "default");
  const [currentPage, setCurrentPage] = useSessionStorage("car-current-page", 1);
  const [isAddModalActive, setIsAddModalActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 12;
  const searchedItems = searchItems(searchQuery, carList);
  const sortedItems = sortItems(sortValue, searchedItems);
  const slicedData = sliceData(currentPage, itemsPerPage, sortedItems);

  return (
    <div className="page-container">
      <AddCar isActive={isAddModalActive} setActive={(state) => setIsAddModalActive(state)} />
      <section className="cars-grid">
        <div className="cars-grid__nav">
          <div className="cars-grid__nav-search">
            <SearchBar setSearchQuery={(value) => setSearchQuery(value)} />
          </div>
          <div className="cars-grid__nav-sort">
            <SortBar
              sortOptions={["Brand Model", "Price Brand", "Year Brand"]}
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
            onClick: () => setIsAddModalActive(true),
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
