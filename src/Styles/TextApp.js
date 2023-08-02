import { Typography, ConfigProvider, Space } from "antd";

const { Text } = Typography;

function handlerFontSize(e) {
  if (e.Song) return 16;
  if (e.Singer) return 14;
}
function handlerWeight(e) {
  if (e.Song) return 800;
  if (e.Singer) return 600;
}
function handerWidth(e) {
  if (e.Song) return "180px";
  if (e.Singer) return "150px";
}

function TextApp({
  to,
  href,
  Song = false,
  Singer = false,
  disabled = false,

  children,
  onClick,
  ...passProps
}) {
  const props = {
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

  const classes = {
    Singer,
    Song,
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: `${Singer ? "rgba(192,192,192,0.5)" : "#ffffff"}`,
        },
      }}
    >
      <Text
        style={{
          margin: 0,
          fontSize: handlerFontSize(classes),
          fontWeight: handlerWeight(classes),
          maxWidth: handerWidth(classes),
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          display: "inline-block",
        }}
        {...props}
      >
        {children}
      </Text>
    </ConfigProvider>
  );
}

export default TextApp;
