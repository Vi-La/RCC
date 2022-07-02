import React, { useState, useEffect } from "react";
import { createContext } from "react";
import moment from "moment";

export const DataContext = createContext();

export const currentDay = moment();

let defaultData = {};

let current = 0;

function addRandomExpense(data, setData) {
  return function () {
    const newDate = currentDay.add(1, "days").valueOf();
    const newMoney =
      Math.floor(Math.random() * 3000 - 1000) -
      Math.floor(Math.random() * 100) / 100;
    current = newMoney;
    const newData = {
      id: Math.floor(Math.random() * 1000),
      date: newDate,
      diocese: "Butare",
      leader: "Jean doe",
      member: "150",
      committee: "9",
      activity:"UMWIHERERO W’IKORANIRO ",
    
    };
    const finalData = {
      ...data,
      [newDate]: newData,
    };
    setData(finalData);
  };
}

for (var i = 0; i < 5; i++) {
  addRandomExpense(defaultData, (newData) => {
    defaultData = newData;
  })();
}

export function DataProvider({ children }) {
  const [data, setData] = useState(defaultData);

  useEffect(() => {}, []);
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        addRandomExpense: addRandomExpense(data, setData),
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
