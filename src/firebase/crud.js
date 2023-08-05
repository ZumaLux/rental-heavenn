import { db } from "./config";
import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

//ADD ITEM
export async function addItem(path, item) {
  try {
    const dataCollectionRef = collection(db, path);
    return await addDoc(dataCollectionRef, item).then((res) => {
      if (res) {
        return { status: res, error: null };
      } else {
        return { status: null, error: "Adding Item Failed!" };
      }
    });
  } catch (err) {
    return { status: null, error: err.message };
  }
}

//UPDATE ITEM
export async function updateItem(path, newItem, id) {
  const itemDocRef = doc(db, path, id);
  return await updateDoc(itemDocRef, newItem)
    .then(() => {
      return { item: { ...newItem, id }, error: null };
    })
    .catch((err) => {
      return { item: null, error: err.message };
    });
}

//DELETE ITEM
export async function deleteItem(path, item) {
  try {
    if (window.confirm(`Do you want to delete ${item.brand} ${item.model}?`)) {
      const itemDocRef = doc(db, path, item.id);
      await deleteDoc(itemDocRef);
      return { confirm: true, error: null };
    } else {
      return { confirm: false, error: null };
    }
  } catch (err) {
    return { confirm: false, error: err.message };
  }
}
