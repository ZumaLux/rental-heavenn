import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";

const useFetch = (colName) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const collectionRef = collection(db, colName);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const dataList = await getDocs(collectionRef);
        const newData = [];
        dataList.docs.map((item) => newData.push({ ...item.data(), id: item.id }));
        setData(newData);
        console.log(dataList.docs[0].data());
      } catch (error) {
        console.log("Error: ", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
