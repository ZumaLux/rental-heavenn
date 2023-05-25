import { useCallback, useEffect, useState } from "react";
import { db } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";

const useFetch = (colName, setContext) => {
  // const { carList, setCarList } = useCarContext();
  // const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(false);

  const triggerFetch = () => {
    setTrigger((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const collectionRef = collection(db, colName);
        const dataList = await getDocs(collectionRef);
        const newData = [];
        dataList.docs.map((item) => newData.push({ ...item.data(), id: item.id }));
        if (dataList.docs.length === 0) {
          throw new Error("No data found");
        }
        console.log("fetch data: ", newData);
        setContext(newData);
      } catch (error) {
        console.log("Error: ", error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [trigger]);

  return { triggerFetch };
};

export default useFetch;
