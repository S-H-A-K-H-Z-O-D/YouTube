import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AboutChannelContext = createContext();

export const AboutChannelProvider = ({ children }) => {
  let [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <AboutChannelContext.Provider value={{ datas }}>
      {children}
    </AboutChannelContext.Provider>
  );
};
