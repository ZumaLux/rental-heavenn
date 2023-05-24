import { db } from "./config";
import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

//ADD ITEM
export async function addItem(path, item) {
  const dataCollectionRef = collection(db, path);
  return await addDoc(dataCollectionRef, item).then((res) => {
    if (res) {
      console.log("Item Added Successfully!");
      return true;
    } else {
      console.log("Adding Item Failed!");
      return false;
    }
  });
}
