import classNames from "classnames/bind";
import styles from "./PersonalPage.module.scss";

import { TextApp } from "../../../Styles";
import { OneToOneOutlined } from "@ant-design/icons";
import { Space } from "antd";

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
    </div>
  );
}

export default PersonalPage;
