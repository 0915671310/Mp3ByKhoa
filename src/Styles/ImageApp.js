import { Avatar, ConfigProvider } from "antd";

const handlerShape = (e) => {
  if (e.circleSmall || e.circleMedium || e.circleBig) {
    return "circle";
  }
  if (e.squareSmall || e.squareMedium || e.squareBig) {
    return "square";
  }
};
const handlerSize = (e) => {
  if (e.circleSmall || e.squareSmall) {
    return 60;
  }
  if (e.circleMedium || e.squareMedium) {
    return 150;
  }
  if (e.circleBig || e.squareBig) {
    return 200;
  }
};

const handlerBorder = (e) => {
  if (e.circleSmall || e.squareSmall) {
    return "solid 1px #ffffff";
  }
  if (e.circleMedium || e.squareMedium) {
    return "solid 2px #ffffff";
  }
  if (e.circleBig || e.squareBig) {
    return "solid 3px #ffffff";
  }
};

function ImageApp({
  to,
  disabled = false,
  circleSmall = false,
  circleMedium = false,
  circleBig = false,
  squareSmall = false,
  squareMedium = false,
  squareBig = false,
  onClick,
  ...passProps
}) {
  const props = {
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
    circleSmall,
    circleMedium,
    circleBig,
    squareSmall,
    squareMedium,
    squareBig,
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          lineType: "solid",
          lineWidth: 1,
        },
      }}
    >
      <Avatar
        {...props}
        shape={handlerShape(classes)}
        size={handlerSize(classes)}
        style={{
          border: handlerBorder(classes),
          cursor: "pointer",
        }}
      />
    </ConfigProvider>
  );
}

export default ImageApp;
