import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const useFetch = (colName) => {
  const [data, setData] = useState([]);
  const collectionRef = collection(db, colName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataList = await getDocs(collectionRef);
        const newData = [];
        dataList.docs.map((item) => newData.push({ ...item.data(), id: item.id }));
        setData(newData);
        console.log(dataList.docs[0].data());
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchData();
  }, []);

  return { data };
};

export default useFetch;
