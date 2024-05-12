import { KeyOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Password from "antd/es/input/Password";
import React from "react";
import { Component } from "react";

const LoginForm = ({ onFinish, isLoading, footer }) => {
  const [form] = Form.useForm();
  return (
    <Form
      style={{ width: 540 }}
      onFinish={onFinish}
      layout="vertical"
      form={form}
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: "email" }]}
      >
        <Input prefix={<MailOutlined />} />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Password prefix={<KeyOutlined />} />
      </Form.Item>
      {footer}
      <Button
        loading={isLoading}
        className="w-[100%] font-bold"
        type="primary"
        htmlType="submit"
      >
        SIGN IN
      </Button>
    </Form>
  );
};

export default LoginForm;
