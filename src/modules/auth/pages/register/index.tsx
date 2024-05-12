import RegisterForm from "@modules/auth/components/RegisterForm";
import useRegistration from "@modules/auth/hooks/mutate/useRegistration";
import { Card, notification } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { mutate: register, isLoading } = useRegistration();
  const nav = useNavigate();
  const handleRegister = (values) => {
    register(values, {
      onSuccess: () => {
        notification.success({
          message: "Register successful, please login!",
          placement: "top",
        });
        nav("/auth/sign-in");
      },
    });
  };
  return (
    <>
      <div className="flex h-[100vh] items-center justify-center">
        <Card title="Register Form" className="p-[50px]">
          <RegisterForm
            footer={
              <p className="text-right">
                Already have an account?{" "}
                <Link to={"/auth/sign-in"}>Sign In</Link>
              </p>
            }
            isLoading={isLoading}
            onFinish={handleRegister}
          />
        </Card>
      </div>
    </>
  );
};

export default RegisterPage;
