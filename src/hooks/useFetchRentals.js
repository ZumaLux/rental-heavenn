import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getDatesInRange } from "../functions/getDatesInRange";

const useFetchRentalDates = (colName = "", data) => {
  const [takenDates, setTakenDates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!data || colName !== "") return;
        const collectionRef = collection(db, colName);
        const q = query(collectionRef, where("rentedCarId", "==", data?.id));
        const querySnapshot = await getDocs(q);
        let newDateList = [];
        console.log("get docs ", querySnapshot.docs[0]?.data());
        querySnapshot.docs.map((item) => {
          getDatesInRange(item.data().startDate.seconds, item.data().endDate.seconds).map(
            (dateList) => {
              newDateList = newDateList.concat(dateList);
            }
          );
        });
        setTakenDates(newDateList);
      } catch (error) {
        console.log("Error: ", error.message);
      } finally {
      }
    };
    fetchData();
  }, [data]);

  return { takenDates };
};

export default useFetchRentalDates;
