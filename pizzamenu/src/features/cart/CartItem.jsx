import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { increaseItem, decreaseItem, deleteItem } from "./cartSlice";

const listStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "1rem",
  justifyContent: "space-evenly",
};

export default function CartItem({ items }) {
  const dispatch = useDispatch();
  return (
    <>
      <ul>
        <li style={listStyle}>
          <span>{items.quantity}</span>
          <span> {items.name} </span> <span>${items.totalPrice}</span>
          <Flex vertical="vertical" gap={-1}>
            <Button
              type="small"
              color="danger"
              variant="text"
              onClick={() => dispatch(increaseItem(items.pizzaId))}>
              <UpOutlined />
            </Button>
            <Button
              type="small"
              color="danger"
              variant="text"
              onClick={() => dispatch(decreaseItem(items.pizzaId))}>
              <DownOutlined />
            </Button>
          </Flex>
          <Button
            variant="fullfiled"
            onClick={() => dispatch(deleteItem(items.pizzaId))}>
            Delete
          </Button>
        </li>
      </ul>
    </>
  );
}
