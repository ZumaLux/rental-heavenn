import { db } from "./config";
import { doc, getDoc } from "firebase/firestore";

const getSingleItem = async (collection, id) => {
  try {
    const docRef = doc(db, collection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      return { ...docSnap.data(), id };
    } else {
      console.log("Item does not exist");
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export default getSingleItem;
