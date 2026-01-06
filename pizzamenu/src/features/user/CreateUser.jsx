import { Button, Flex, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  function handleSubmit() {
    setUserName("");
    console.log(userName);
    dispatch(updateName(userName));
    navigate("/home");
  }
  return (
    <>
      <Form
        layout="inline"
        form={form}
        //initialValues={{ layout: formLayout }}
        //onValuesChange={() => handleSubmit()}
        onFinish={handleSubmit}
        style={{ maxWidth: "inline" ? "none" : 600 }}>
        <Form.Item
          label="Username"
          rules={[
            {
              required: true,
              message: "Please enter your exact  name",
            },
          ]}>
          <Input
            placeholder="enter youre name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            //onClick={() => handleSubmit()}
          >
            Start
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
