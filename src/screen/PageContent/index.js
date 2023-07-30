import classNames from "classnames/bind";
import styles from "./PageContent.module.scss";
import MenuContent from "../../components/componentContent/MenuContent";
import PersonalPage from "../../components/componentContent/PersonalPage";
import ListMusic from "../../components/componentContent/ListMusic";

const cx = classNames.bind(styles);

function PageContent() {
  return (
    <div className={cx("pageContent")}>
      <MenuContent />
      <PersonalPage />
      <ListMusic />
    </div>
  );
}

export default PageContent;
