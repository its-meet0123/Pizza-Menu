import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Breadcrumb,
  Layout,
  Menu,
  Spin,
  theme,
  Typography,
} from "antd";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { getTotalCartQuantity } from "../cart/cartSlice";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;
function getItem(label, key, icon, children, navigate) {
  return {
    key,
    icon,
    children,
    label,
    navigate,
  };
}

//console.log(itemObj);

export default function AppLayout() {
  const userName = useSelector((store) => store.user.username);
  //console.log(userName);
  const cartQuantity = useSelector(getTotalCartQuantity);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  //const items = [getItem("Home", "/"), getItem("Menu", "/menu")];
  const itemObj = [
    {
      label: "Home",
      key: "/home",
    },
    {
      label: "Menu",
      key: "/menu",
    },
    {
      label: (
        <Badge count={cartQuantity} showZero>
          <Avatar shape="square" size="large">
            <ShoppingCartOutlined />
          </Avatar>
        </Badge>
      ),
      key: "/cart",
    },
  ];
  const items = !userName
    ? [getItem("LogIn", "/")]
    : itemObj.map((item) => getItem(item.label, item.key));
  //console.log(items);

  function handleClick(key) {
    navigate(key);
    setTitle(key);
    setIsOpen(true);
  }

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            items={items}
            style={{ flex: 1, minWidth: 0 }}
            onClick={({ key }) => {
              handleClick(key);
            }}
          />
          {userName ? (
            <Text type="warning">
              <UserOutlined /> {userName}
            </Text>
          ) : (
            ""
          )}
        </Header>
        <Content style={{ padding: "0 48px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[{ title: `${title}` }]}
          />
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}>
            {isLoading && <Spin size="large" />}
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}
