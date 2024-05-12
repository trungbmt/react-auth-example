import LoginForm from "@modules/auth/components/LoginForm";
import useLogin from "@modules/auth/hooks/mutate/useLogin";
import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { mutate: login, isLoading } = useLogin();
  const handlelogin = (values) => {
    login(values);
  };
  return (
    <>
      <div className="flex h-[100vh] items-center justify-center">
        <Card title="Login Form" className="p-[50px]">
          <LoginForm
            footer={
              <p className="text-right">
                Do not have an account?{" "}
                <Link to={"/auth/sign-up"}>Sign Up</Link>
              </p>
            }
            isLoading={isLoading}
            onFinish={handlelogin}
          />
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
