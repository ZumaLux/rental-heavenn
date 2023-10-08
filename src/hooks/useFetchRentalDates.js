import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getDatesInRange } from "../functions/getDatesInRange";

// gets all dates that the given car is already rented
const useFetchRentalDates = (colName, data) => {
  const [takenDates, setTakenDates] = useState([]);

  useEffect(() => {
    if (!data || !colName) return;
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, colName);
        // returns all rentings on the same car
        const q = query(collectionRef, where("rentedCarId", "==", data?.id));
        const querySnapshot = await getDocs(q);
        let newDateList = [];
        // generates new list with all taken dates for the car
        querySnapshot.docs.map((item) =>
          getDatesInRange(item.data().startDate.seconds, item.data().endDate.seconds).map(
            (dateList) => (newDateList = newDateList.concat(dateList))
          )
        );
        setTakenDates(newDateList);
      } catch (error) {
        console.log("Error: ", error.message);
      } finally {
      }
    };
    fetchData();
  }, [data, colName]);

  return { takenDates };
};

export default useFetchRentalDates;
