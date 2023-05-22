import { Avatar, Card } from "antd";
import { useContext } from "react";
import { AboutChannelContext } from "../../../contexts/aboutChannel";
const { Meta } = Card;

export const Skaleton = () => {
  const { data } = useContext(AboutChannelContext);

  return {};
};
