import classNames from "classnames/bind";
import styles from "./MenuContent.module.scss";

import { MailOutlined } from "@ant-design/icons";
import { Menu, ConfigProvider, Card, Image } from "antd";

const { Meta } = Card;

const cx = classNames.bind(styles);

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Cá Nhân", "Cá Nhân", <MailOutlined />),
  getItem("Khám Phá", "Khám Phá", <MailOutlined />),
  getItem("zingchart", "zingchart", <MailOutlined />),
  getItem("Radio", "Radio", <MailOutlined />),
  getItem("Theo Dỗi", "Theo Dỗi", <MailOutlined />),
  {
    type: "divider",
  },
  getItem("Nhạc Mới", "Nhạc Mới", <MailOutlined />),
  getItem("Thể Loại", "Thể Loại", <MailOutlined />),
  getItem("Top 100", "Top 100", <MailOutlined />),
  getItem("MV", "MV", <MailOutlined />),
  {
    type: "divider",
  },
  getItem(
    "Thư Viện",
    "Thư Viện",
    null,
    [
      getItem("Bài Hát", "Bài Hát", <MailOutlined />),
      getItem("Playlist", "Playlist", <MailOutlined />),
      getItem("Gần đây", "Gần đây", <MailOutlined />),
      getItem("Replay", "Replay"),
      getItem("Nhạc Xuân", "Nhạc Xuân"),
      getItem("Nhạc Trung Quốc", "Nhạc Trung Quốc"),
    ],
    "group"
  ),
];
function MenuContent() {
  return <ConfigProvider></ConfigProvider>;
}

export default MenuContent;
