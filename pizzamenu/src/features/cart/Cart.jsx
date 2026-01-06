import React from "react";
import { Button, Flex, Layout } from "antd";

import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "./cartSlice";
import CartItem from "./CartItem";

const { Header, Footer, Content } = Layout;

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "#fff",
  height: 54,
  paddingInline: 18,
  lineHeight: "64px",
  backgroundColor: "#ffb22c",
};

const contentStyle = {
  textAlign: "left",
  minHeight: 220,
  //lineHeight: "120px",
  //paddingInline: 0,
  color: "#fff",
  backgroundColor: "#0E2148",
};

const footerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "left",
  color: "#fff",
  backgroundColor: "#333446",
  fontSize: "1rem",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% )",
  maxWidth: "calc(100% )",
};

export default function Cart() {
  const cart = useSelector(getCart);
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();
  //console.log(cart);
  return (
    <>
      <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>
            <Button color="default" variant="Link">
              Menu
            </Button>
            <Button
              color="default"
              variant="text"
              onClick={() => dispatch(clearCart())}>
              Clear
            </Button>
          </Header>
          <Content style={contentStyle}>
            {cart.map((items) => (
              <CartItem items={items} key={items.pizzaId} />
            ))}
          </Content>
          <Footer style={footerStyle}>
            <p>TotalItems : {totalQuantity}</p>
            <p>TotalPrice : ${totalPrice}</p>
            <Button color="danger" variant="filled">
              Order
            </Button>
          </Footer>
        </Layout>
      </Flex>
    </>
  );
}
