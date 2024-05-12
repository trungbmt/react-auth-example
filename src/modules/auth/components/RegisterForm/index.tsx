import { KeyOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Password from "antd/es/input/Password";
import React from "react";

const RegisterForm = ({ onFinish, isLoading, footer }) => {
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
      <Form.Item
        name="cPassword"
        label="Confirm Password"
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The confirm password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Password prefix={<KeyOutlined />} />
      </Form.Item>
      {footer}
      <Button
        loading={isLoading}
        className="w-[100%] font-bold"
        type="primary"
        htmlType="submit"
      >
        SIGN UP
      </Button>
    </Form>
  );
};

export default RegisterForm;
