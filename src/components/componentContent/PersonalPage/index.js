import classNames from "classnames/bind";
import styles from "./PersonalPage.module.scss";

const cx = classNames.bind(styles);
function PersonalPage() {
  return <div className={cx("PersonalPage contentPage")}>Cá Nhân Page </div>;
}

export default PersonalPage;
