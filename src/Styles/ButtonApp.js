import { Button, ConfigProvider } from "antd";

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
  fullW = false,
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
    fullW,
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
          colorBgContainer: `${
            noBorder ? "rgba(192,192,192,0.5)" : `transparent`
          }`,
          colorBorder: `${noBorder ? "transparent" : "#ffffff"}`,
          colorTextLightSolid: "#232323",
        },
        components: {
          Button: {
            colorPrimaryTextHover: "#454554",
            colorPrimaryHover: "#ffffff",
            colorBgActive: "#232323",
            colorPrimaryActive: "#333333",
            colorBgTextHover: "#ffffff",
            opacityLoading: 0.6,
            mediumDurationMid: 5,
            mediumDurationSlow: 5,
            colorPrimaryBgHover: "#232323",
          },
        },
      }}
    >
      <Button
        size={handlerSize(classes)}
        shape={handlerHinh(classes)}
        block={fullW ? true : false}
        styles={{
          width: `${fullW ? "100%" : "auto"}`,
        }}
        {...props}
      >
        {children}
      </Button>
    </ConfigProvider>
  );
}

export default ButtonApp;
