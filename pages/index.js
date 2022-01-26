import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import style from "/styles/Demo.module.css";

const Home = () => {
  // Use the useApp Hook to get access to global thingies
  // const { id, setId } = useApp();
  // const [storedValue, setValue] = useLocalStorage("Name", "Bob");

  const [getValueFromKey, setKeyValue] = useLocalStorage();

  const [key, setKey] = useState("RandomKey");
  const [value, setValue] = useState("RandomValue");

  const [keyToGet, setKeyToGet] = useState("");
  const [valueToGet, setValueToGet] = useState("");

  const saveToLocalStorage = () => {
    setKeyValue(key, value);
  };

  const getValue = () => {
    // console.log("storedKey: ", storedKey);

    setValueToGet(getValueFromKey(keyToGet));
  };

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.content}>
          <h3>Set/Update Value</h3>
          <label>Enter your Key</label>
          <input
            type="text"
            onChange={(e) => {
              setKey(e.target.value);
            }}
          />
          <label>Enter your Value</label>
          <input
            type="text"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />

          <button onClick={saveToLocalStorage}>Save to localStorage</button>
        </div>

        <div className={style.content}>
          <h3>Get Value</h3>
          <label>Enter your Key</label>
          <input
            type="text"
            onChange={(e) => {
              setKeyToGet(e.target.value);
            }}
          />
          <label>Value</label>
          <input type="text" value={valueToGet} disabled />

          <button onClick={getValue}>Get Value</button>
        </div>
      </div>
    </>
  );
};

export default Home;
