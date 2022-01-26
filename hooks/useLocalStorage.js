import React, { useState } from "react";

// Hook
const useLocalStorage = (key, initialValue) => {
  const [storedKey, setStoredKey] = useState(() => {
    // Returns storedKey
    if (typeof window !== "undefined") {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);

        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    }
  });

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    // Returns storedValue
    if (typeof window !== "undefined") {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);

        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setKeyValue = (key, value) => {
    // Set Key & Value
    if (typeof window !== "undefined") {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;

        // Allow value to be a function so we have same API as useState
        const keyToStore = key instanceof Function ? key(storedKey) : key;

        setStoredKey(keyToStore);
        setStoredValue(valueToStore);

        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    }
  };

  // Return a wrapped version of useState's getter function that ...
  const getValueFromKey = (key) => {
    // Set Key & Value
    if (typeof window !== "undefined") {
      try {
        // Allow value to be a function so we have same API as useState
        const keyToGet = key instanceof Function ? key(storedKey) : key;
        const item = window.localStorage.getItem(keyToGet);

        // Parse stored json or if none return initialValue
        console.log(item);
        return item ? JSON.parse(item) : "Key Not Found";
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    }
  };

  return [getValueFromKey, setKeyValue];
};

export default useLocalStorage;
