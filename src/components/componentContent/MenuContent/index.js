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
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className={cx("w-200p")}>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: "transparent",
            colorBgTextHover: "#424242FF",
            colorText: "#ffffff",
            colorTextDescription: "#ffffff",
            fontSize: 18,
          },
          components: {
            Menu: {
              darkItemSelectedColor: "#f0f5ff",
              itemHoverColor: "#ffffff",
              itemSelectedColor: "#000000",
              itemSelectedBg: "#ffffff",
            },
          },
        }}
      >
        <Image
          width={199}
          height={100}
          preview={false}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <Menu
          onClick={onClick}
          style={{
            width: 200,
          }}
          colorText="#fff566"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
        <Card
          hoverable
          style={{
            width: 200,
            backgroundImage:
              "url(" +
              "https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-deo-kinh-1.jpg" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </ConfigProvider>
    </div>
  );
}

export default MenuContent;
