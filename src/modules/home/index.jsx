import { useAppDispatch, useAppSelector } from "@app/hooks/reduxHook";
import { Button, Result } from "antd";
import { logoutAction } from "@app/slices/auth";
import { Link } from "react-router-dom";

const HomePage = () => {
  const user = useAppSelector((s) => s.auth.user);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };
  if (user)
    return (
      <Result
        status="success"
        title="Welcome!"
        subTitle={user?.email}
        extra={
          <Button type="primary" onClick={handleLogout}>
            Sign Out
          </Button>
        }
      />
    );
  return (
    <Result
      status="warning"
      title="You are not logged in, please log in now!"
      extra={
        <Button type="primary" key="console">
          <Link to={"/auth/sign-in"}>Go to Login Page</Link>
        </Button>
      }
    />
  );
};

export default HomePage;
