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
  const [aside, setAside] = useState(false);

  const OnNavigate = (id) => {
    setId(id);
    navigate("/video/" + id);
    setAside(true);
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

    try {
      fetch(
        "https://youtube-search-and-download.p.rapidapi.com/video/comments?id=YQHsXMglC9A&next=Eg0SC1lRSHNYTWdsQzlBGAYyJSIRIgtZUUhzWE1nbEM5QTAAeAJCEGNvbW1lbnRzLXNlY3Rpb24%253D",
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
        .then((data) => console.log(data.comments));
    } catch (error) {
      console.error(error);
    }

    try {
      fetch(
        "https://youtube-search-and-download.p.rapidapi.com/channel?id=UCiTGKA9W0G0TL8Hm7Uf_u9A&next=4qmFsgKFARIYVUNpVEdLQTlXMEcwVEw4SG03VWZfdTlBGjpFZ1oyYVdSbGIzTVlBeUFBTUFFNEFlb0RGa05uUVZORFoycHdNazVFTkRWT2VVcHNhMmR2VFdjJTNEmgIsYnJvd3NlLWZlZWRVQ2lUR0tBOVcwRzBUTDhIbTdVZl91OUF2aWRlb3MxMDI%253D&sort=n",
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
        .then((data) => console.log(data));
    } catch (error) {
      console.error(error);
    }

    try {
      fetch(
        "https://youtube-search-and-download.p.rapidapi.com/playlist?id=PL2UMfhpwklNNI9ALzCFI-cObgnO4nQ2fu&next=4qmFsgJhEiRWTFBMV3dBeXBBY0ZSZ0tBSUlGcUJyOW95LVpZWm5peGFfRmoaFENBRjZCbEJVT2tOSFZRJTNEJTNEmgIiUExXd0F5cEFjRlJnS0FJSUZxQnI5b3ktWllabml4YV9Gag%253D%253D",
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
        .then((data) => console.log(data));
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  return (
    <AboutChannelContext.Provider
      value={{ data, loading, OnNavigate, videoInfo, setId, aside }}
    >
      {children}
    </AboutChannelContext.Provider>
  );
};
