import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const AboutChannelContext = createContext();

export const AboutChannelProvider = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [videoInfo, setVideoInfo] = useState([]);
  const [id, setId] = useState("dQw4w9WgXcQ");
  const [loading, setLoading] = useState(true);
  const OnNavigate = (id) => {
    setId(id);
    navigate("/video/" + id);
  };

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
      .then((data) => {
        setData(data.contents);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    try {
      fetch(
        `https://youtube-search-and-download.p.rapidapi.com/video?id=${id}`,
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
        .then((data) => setVideoInfo(data.videoDetails));
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  return (
    <AboutChannelContext.Provider
      value={{ data, loading, OnNavigate, videoInfo, setId }}
    >
      {children}
    </AboutChannelContext.Provider>
  );
};
