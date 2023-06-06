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
      console.log("test: ", docRef);
      // throw new Error("Stefias is cringe!");
      const unsubscribe = onSnapshot(docRef, (snapshot) => {
        setData({ ...snapshot.data(), id: snapshot.id });
        console.log("FETCHED_DETAILS", { ...snapshot.data(), id: snapshot.id });
      });
      return unsubscribe;
    } catch (error) {
      console.log("Error===: ", error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, error };
};

export default useFetchById;
