import classNames from "classnames/bind";
import styles from "./PlayMusic.module.scss";

import {
  SwapOutlined,
  StepBackwardOutlined,
  PlayCircleOutlined,
  StepForwardOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { Space, Typography, Slider } from "antd";

const { Link, Text } = Typography;

const cx = classNames.bind(styles);

function PlayMusic() {
  return (
    <div className={cx("PlayMusic")}>
      <Space
        direction="vertical"
        className={cx("PlayMusicSpace w-100")}
        size={2}
      >
        <div className={cx("PlayMusicTop")}>
          <Space direction="horizontal" size={14}>
            <Link href="#" className={cx("h-icon t-large cl-default")}>
              <SwapOutlined />
            </Link>
            <Link href="#" className={cx("h-icon t-large cl-default")}>
              <StepBackwardOutlined />
            </Link>
            <Link href="#" className={cx("h-icon t-large cl-default")}>
              <PlayCircleOutlined />
            </Link>
            <Link href="#" className={cx("h-icon t-large cl-default")}>
              <StepForwardOutlined />
            </Link>
            <Link href="#" className={cx("h-icon t-large cl-default")}>
              <RetweetOutlined />
            </Link>
          </Space>
        </div>
        <div className={cx("PlayMusicBottom w-100")}>
          <Space
            direction="horizontal"
            className={cx(" w-100 s-between spaceBottom")}
            size={10}
          >
            <Text className={cx("t-medium cl-default ")}>00:00</Text>
            <Slider defaultValue={30} className={cx("w-100")} />

            <Text className={cx("t-medium cl-default ")}>03:39</Text>
          </Space>
        </div>
      </Space>
    </div>
  );
}

export default PlayMusic;
