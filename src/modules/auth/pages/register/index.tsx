import RegisterForm from "@modules/auth/components/RegisterForm";
import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const handleRegister = (values) => {};
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
            onFinish={undefined}
            isLoading={undefined} // isLoading={isLoading}
            // onFinish={handlelogin}
          />
        </Card>
      </div>
    </>
  );
};

export default RegisterPage;
