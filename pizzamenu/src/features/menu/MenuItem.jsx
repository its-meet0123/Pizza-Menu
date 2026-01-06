import { Badge, Button, Flex, Image, Typography } from "antd";
import Card from "antd/es/card/Card";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCart, getCurrentQuantityById } from "../cart/cartSlice";
const { Text } = Typography;

export default function MenuItem({ pizzas }) {
  const currentQuantity = useSelector(getCurrentQuantityById(pizzas.id));
  const dispatch = useDispatch();
  const show = currentQuantity > 0;
  function handleAddCartItem() {
    const newItem = {
      pizzaId: pizzas.id,
      name: pizzas.name,
      quantity: 1,
      unitPrice: pizzas.unitPrice,
      totalPrice: pizzas.unitPrice * 1,
    };
    dispatch(addItem(newItem));
    console.log(newItem);
  }
  return (
    <>
      <Card style={{ margin: "2px" }}>
        <Flex gap={7} horizontal="horizontal">
          <Image width={90} height={90} src={pizzas.imageUrl} />
          <Flex vertical="vertical" gap={10}>
            <Flex gap={90} horizontal="horizontal">
              <b>{pizzas.name}</b>
              <b>${pizzas.unitPrice}</b>
              <Button
                type="primary"
                onClick={() => handleAddCartItem()}
                disabled={show}>
                Add Cart
              </Button>

              <Badge
                count={show ? currentQuantity : ""}
                showZero
                color="#faad14"
              />
            </Flex>
            <Flex horizontal="horizontal" gap={4}>
              {pizzas.ingredients.map((int) => (
                <Text italic key={int}>
                  {int},
                </Text>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}
