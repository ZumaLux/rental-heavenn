import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

const useFetchById = (colName = "", docId = "") => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      const docRef = doc(db, colName, docId);
      const unsubscribe = onSnapshot(docRef, (snapshot) => {
        setData({ ...snapshot.data(), id: snapshot.id });
      });
      return unsubscribe;
    } catch (error) {
      console.log("Error: ", error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [colName, docId]);

  return { data, isLoading, error };
};

export default useFetchById;
