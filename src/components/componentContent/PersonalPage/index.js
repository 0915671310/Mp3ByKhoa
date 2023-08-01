import classNames from "classnames/bind";
import styles from "./PersonalPage.module.scss";
import { PoweroffOutlined } from "@ant-design/icons";

import { ButtonApp } from "../../../Styles";
import { OneToOneOutlined } from "@ant-design/icons";
const API = [
  {
    id: 1,
    name: "Anh đã lạc vào",
    author: "Green, Đại Mèo Remix",
    thumbnail: "https://sona7ns.github.io/zingmp3.vn/assets/img/songs/0.webp",
  },
  {
    id: 2,
    name: "Chạy Về Khóc Với Anh",
    author: "Erik, Duzme Remix",
    thumbnail: "https://sona7ns.github.io/zingmp3.vn/assets/img/songs/1.webp",
  },
  {
    id: 3,
    name: "Sẵn Sàng Yêu Em Đi Thôi",
    author: "Woni, Minh Tú, Đại Mèo Remix",
    thumbnail: "https://sona7ns.github.io/zingmp3.vn/assets/img/songs/2.webp",
  },
  {
    id: 4,
    name: "Gieo Quẻ",
    author: "Hoàng Thuỳ Linh, ĐEN, Orinn Remix",
    thumbnail: "https://sona7ns.github.io/zingmp3.vn/assets/img/songs/3.webp",
  },
  {
    id: 5,
    name: "Vui Lắm Nha",
    author: "Hương Ly, Jombie, RIN Music Remix",
    thumbnail: "https://sona7ns.github.io/zingmp3.vn/assets/img/songs/4.webp",
  },
  {
    id: 6,
    name: "Lưu Số Em Đi",
    author: "Huỳnh Văn, V.P. Tiên, Đại Mèo Remix",
    thumbnail: "https://sona7ns.github.io/zingmp3.vn/assets/img/songs/5.webp",
  },
  {
    id: 7,
    name: "Ôm Nhiều Mộng Mơ",
    author: "Phát Huy T4, Đại Mèo Remix",
    thumbnail: "https://sona7ns.github.io/zingmp3.vn/assets/img/songs/6.webp",
  },
  {
    id: 8,
    name: "Tình Yêu Ngủ Quên",
    author: "Hoàng Tôn, LyHan, Orinn Remix",
    thumbnail: "https://sona7ns.github.io/zingmp3.vn/assets/img/songs/7.webp",
  },
  {
    id: 9,
    name: "Không Bằng",
    author: "Na, RIN Music Remix",
    thumbnail: "https://sona7ns.github.io/zingmp3.vn/assets/img/songs/8.webp",
  },
  {
    id: 10,
    name: "Ai Chung Tình Được Mãi",
    author: "Đinh Tùng Huy, ACV Remix",
    thumbnail: "https://sona7ns.github.io/zingmp3.vn/assets/img/songs/9.webp",
  },
  {
    id: 11,
    name: "Ánh mắt ta chạm nhau",
    author: "Ngô Lan Hương, Đại Mèo remix",
    thumbnail: "https://sona7ns.github.io/zingmp3.vn/assets/img/songs/10.webp",
  },
  {
    id: 12,
    name: "2 Phút Hơn",
    author: "Phao, KAIZ Remix",
    thumbnail: "https://sona7ns.github.io/zingmp3.vn/assets/img/songs/11.webp",
  },
  {
    id: 13,
    name: "Là Ai Từ Bỏ Là Ai Vô Tình",
    author: "Hương Ly, Jombie (G5R)",
    thumbnail: "https://sona7ns.github.io/zingmp3.vn/assets/img/songs/12.webp",
  },
  {
    id: 14,
    name: "Yêu Đừng Sợ Đau",
    author: "Ngô Lan Hương, Cukak Remix",
    thumbnail: "https://sona7ns.github.io/zingmp3.vn/assets/img/songs/13.webp",
  },
];
const cx = classNames.bind(styles);

// const renderItems = (items) => {
//   return items.map((item) => {
//     console.log(item.id);
//     return <ItemMusic key={item.id} data={item} />;
//   });
// };

function PersonalPage() {
  return (
    <div className={cx("PersonalPage contentPage")}>
      {/* <List
        style={{
          width: "100%",
          background: "#232323",
        }}
        itemLayout="vertical"
        dataSource={API}
        renderItem={(item, index) => <ItemMusic key={index} data={item} />}
      /> */}
      <ButtonApp btnS circle noBorder>
        <PoweroffOutlined />
      </ButtonApp>
      <ButtonApp btnM>Mày phải cố lên</ButtonApp>
      <ButtonApp btnB>Không được nản</ButtonApp>
    </div>
  );
}

export default PersonalPage;
