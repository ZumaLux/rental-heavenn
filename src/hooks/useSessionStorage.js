import { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
  //   const savedValue = JSON.parse(sessionStorage.getItem(key));
  const savedValue = sessionStorage.getItem(key);

  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

// Accepts and sets the given key value pair to the session storage
export default function useSessionStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    sessionStorage.setItem(key, value);
  }, [key, value]);
  // [key, JSON.stringify(value)])

  return [value, setValue];
}
