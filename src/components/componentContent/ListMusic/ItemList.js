import React, { useEffect, useState } from "react";
import { ImageApp, TextApp, ButtonApp } from "../../../Styles";
import { HeartOutlined, DashOutlined } from "@ant-design/icons";
import { List } from "antd";
function ItemList({ data, type }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          style={{
            padding: "8px",
          }}
        >
          <List.Item.Meta
            key={item.id}
            avatar={<ImageApp isHover squareSmall src={item?.thumbnail} />}
            title={<TextApp Song>{item?.name}</TextApp>}
            description={<TextApp Singer>{item?.author}</TextApp>}
          />
        </List.Item>
      )}
    />
  );
}

export default ItemList;
