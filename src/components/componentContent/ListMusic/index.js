import classNames from "classnames/bind";
import styles from "./ListMusic.module.scss";

import { Switch, Space, ConfigProvider, Menu } from "antd";

import {
  ClockCircleOutlined,
  SmallDashOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

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
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  {
    type: "divider",
  },
  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem(
    "Group",
    "grp",
    null,
    [getItem("Option 13", "13"), getItem("Option 14", "14")],
    "group"
  ),
];

function ListMusic() {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className={cx("w-240p")}>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: "transparent",
            colorText: "#fff",
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
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Space
            direction="horizontal"
            size="middle"
            style={{
              display: "flex",
              flex: 1,
            }}
          >
            <Switch
              checkedChildren="Danh Sách Phát"
              unCheckedChildren="Nghe Gần Đây"
              defaultChecked
            />
            <ClockCircleOutlined className={cx("h-icon cl-default")} />
            <SmallDashOutlined className={cx("h-icon cl-default")} />
          </Space>
          <Menu
            onClick={onClick}
            style={{
              width: 240,
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </Space>
      </ConfigProvider>
    </div>
  );
}

export default ListMusic;
