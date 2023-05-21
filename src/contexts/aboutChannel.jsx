import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AboutChannelContext = createContext();

export const AboutChannelProvider = ({ children }) => {
  let [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube-search-and-download.p.rapidapi.com/trending?type=mu&hl=en&gl=US",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <AboutChannelContext.Provider value={{ datas }}>
      {children}
    </AboutChannelContext.Provider>
  );
};
