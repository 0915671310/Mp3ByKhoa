import classNames from "classnames/bind";
import styles from "./ContentAppMusic.module.scss";
import { HeartOutlined, DashOutlined } from "@ant-design/icons";
import { Avatar, Space, Typography } from "antd";

const { Text } = Typography;

const cx = classNames.bind(styles);

function ContentMusic() {
  return (
    <div className={cx("ContentMusic")}>
      <Space direction="horizontal" size={20}>
        <Avatar
          className={cx("Avatar")}
          size={60}
          src={
            "https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-de-thuong.jpg"
          }
        />
        <Space direction="vertical" size={1} className={cx("contentSong")}>
          <div className={cx("blockContentMusic")}>
            <Text className={cx("cl-default t-medium t-cap")} strong ellipsis>
              Đang Cập Nhật
            </Text>
            <Text ellipsis className={cx("cl-extra t-small  t-cap")}>
              Đang Cập Nhật
            </Text>
          </div>
        </Space>
        <Text strong className={cx("cl-default  t-large h-icon")}>
          <HeartOutlined />
        </Text>
        <Text strong className={cx("cl-default  t-large h-icon")}>
          <DashOutlined />
        </Text>
      </Space>
    </div>
  );
}

export default ContentMusic;
