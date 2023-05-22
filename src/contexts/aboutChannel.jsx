import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AboutChannelContext = createContext();

export const AboutChannelProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube-search-and-download.p.rapidapi.com/trending?type=mu&hl=en&gl=US",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "156ad9146bmsh56f92ef22fb4138p1d8e89jsn8871f2595f23",
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setData(data.contents));
  }, []);

  return (
    <AboutChannelContext.Provider value={{ data }}>
      {children}
    </AboutChannelContext.Provider>
  );
};
