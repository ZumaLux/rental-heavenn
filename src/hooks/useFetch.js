import { useEffect } from "react";
import { db } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";

const useFetch = (
  colName = "",
  listContext = [],
  setListContext = () => {},
  setIsLoading = () => {},
  setError = () => {}
) => {
  useEffect(() => {
    const fetchData = async () => {
      if (listContext.length > 0) return;
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
        setListContext(newData);
      } catch (error) {
        console.log("Error: ", error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
};

export default useFetch;
