import React from "react";
import { getMenu } from "../services/apiResturent";
import { useLoaderData, useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import { Spin } from "antd";

export default function Menu() {
  const menu = useLoaderData();
  return (
    <>
      {menu.map((pizzas) => (
        <MenuItem pizzas={pizzas} key={pizzas.id} />
      ))}
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
