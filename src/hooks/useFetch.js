import { useEffect } from "react";
import { db } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";

// Extracts the given collection from the database and sends it to the global context
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
        setListContext(newData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [colName, listContext?.length, setIsLoading, setError, setListContext]);
};

export default useFetch;
