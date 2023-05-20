import { useContext } from "react";
import { AboutChannelContext } from "../../contexts/aboutChannel";

export const AboutChannel = () => {
  const { datas } = useContext(AboutChannelContext);

  console.log(datas);

  return <h1>{datas[0]?.name?.common}</h1>;
};
