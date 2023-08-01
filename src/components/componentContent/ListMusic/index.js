import classNames from "classnames/bind";
import styles from "./ListMusic.module.scss";

import { Switch, Space, ConfigProvider, Menu, Tabs } from "antd";

import {
  ClockCircleOutlined,
  SmallDashOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const cx = classNames.bind(styles);

function ListMusic() {
  const onChange = (key) => {
    console.log(key);
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
        <Tabs
          onChange={onChange}
          type="card"
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
              label: `Tab ${id}`,
              key: id,
              children: `Content of Tab Pane ${id}`,
            };
          })}
        />
      </ConfigProvider>
    </div>
  );
}

export default ListMusic;
