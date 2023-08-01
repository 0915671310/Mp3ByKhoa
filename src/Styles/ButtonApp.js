import { Button, ConfigProvider, Space } from "antd";

const handlerSize = (e) => {
  if (e.btnS) return "small";
  if (e.btnM) return "default";
  if (e.btnB) return "large";
};
const handlerHinh = (e) => {
  if (e.round) return "round";
  if (e.circle) return "circle";
};
function ButtonApp({
  to,
  href,
  btnS = false,
  btnM = false,
  btnB = false,
  rounded = false,
  disabled = false,
  round = false,
  circle = false,
  noBorder = false,
  children,
  className,
  onClick,
  ...passProps
}) {
  const props = {
    noBorder,
    disabled,
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }
  // if (to) {
  //   props.to = to;
  //   Comp = Link;
  // } else if (href) {
  //   props.href = href;
  //   Comp = "a";
  // }

  const classes = {
    btnS,
    btnM,
    btnB,
    round,
    circle,
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#ffffff",
          colorBgContainerDisabled: "#808080",
          colorTextDisabled: "#fff",
          colorBgContainer: `${noBorder ? "#66CCCC" : "transparent"}`,
          colorBgTextHover: "#ffffff",
          colorPrimaryActive: "#ffffff",
          colorBorder: `${noBorder ? "transparent" : "#ffffff"}`,
          // colorLink: handlerColorText(classes),
          // colorLinkHover: handlerHoverColorText(classes),
          // fontSize: handlerFontSize(classes),
        },
      }}
    >
      <Space>
        <Button
          size={handlerSize(classes)}
          shape={handlerHinh(classes)}
          style={{}}
          {...props}
        >
          {children}
        </Button>
      </Space>
    </ConfigProvider>
  );
}

export default ButtonApp;
