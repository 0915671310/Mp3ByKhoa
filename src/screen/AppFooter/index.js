import classNames from "classnames/bind";
import styles from "./AppFooter.module.scss";
import ContentMusic from "../../components/componetFooter/ContentMusic";
import PlayMusic from "../../components/componetFooter/PlayMusic";
import AudioMusic from "../../components/componetFooter/AudioMusic";

const cx = classNames.bind(styles);

function AppFooter() {
  return (
    <div className={cx("appFooter")}>
      <ContentMusic />
      <PlayMusic />
      <AudioMusic />
    </div>
  );
}

export default AppFooter;
