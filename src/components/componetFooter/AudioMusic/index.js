import classNames from "classnames/bind";
import styles from "./AudioMusic.module.scss";

import {
  PictureOutlined,
  AudioOutlined,
  BorderOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import { Space, Typography, Slider } from "antd";

const { Link } = Typography;

const cx = classNames.bind(styles);

function AudioMusic() {
  return (
    <div className={cx("AudioMusic")}>
      <Space direction="horizontal" size={30}>
        <Link href="#" className={cx("h-icon t-large cl-default")}>
          <PictureOutlined />
        </Link>
        <Link href="#" className={cx("h-icon t-large cl-default")}>
          <AudioOutlined />
        </Link>
        <Link href="#" className={cx("h-icon t-large cl-default")}>
          <BorderOutlined />
        </Link>
        <Link href="#" className={cx("h-icon t-large cl-default")}>
          <SoundOutlined />
        </Link>
        <Slider defaultValue={30} className={cx("w-100 w100plx")} />
      </Space>
    </div>
  );
}

export default AudioMusic;
