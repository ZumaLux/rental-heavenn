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

//UPDATE ITEM
export async function updateItem(path, newItem, id) {
  const itemDocRef = doc(db, path, id);
  return await updateDoc(itemDocRef, newItem).then((res) => {
    console.log("Item Updated Successfully!");
  });
}

//DELETE ITEM
export async function deleteItem(path, item) {
  if (window.confirm(`Do you want to delete ${item.brand} ${item.model}?`)) {
    const itemDocRef = doc(db, path, item.id);
    deleteDoc(itemDocRef);
    console.log("Item Deleted!");
    return true;
  } else {
    return false;
  }
}
