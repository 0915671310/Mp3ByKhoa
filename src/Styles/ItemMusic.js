// import { ImageApp, ButtonApp } from "./index";
// import { List, ConfigProvider, Space } from "antd";
// const handlerNone = (e) => {
//   console.log("e", e);
//   if (e === undefined) {
//     return "none";
//   } else {
//     return "block";
//   }
// };
// function ItemMusic({ data }) {
//   return (
//     <ConfigProvider>
//       <List.Item
//         style={{
//           backgroundColor: "#000000",
//           padding: "8px",
//           display: "flex",
//         }}
//         extra={<ButtonApp btnB>con bò</ButtonApp>}
//       >
//         <List.Item.Meta
//           avatar={<ImageApp squareSmall src={`${data.thumbnail}`} />}
//           title={
//             <ButtonApp btnM disabled>
//               {data.name}
//             </ButtonApp>
//           }
//           description={<ButtonApp btnS>{data.author}</ButtonApp>}
//         />
//       </List.Item>
//     </ConfigProvider>
//   );
// }

// export default ItemMusic;
