import { useAppDispatch } from "@app/hooks/reduxHook";
import { loginAction } from "@app/slices/auth";
import { login } from "@modules/services";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";


const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return useMutation(
    async (formData) => {
      console.log({ formData });
      const { data } = await login(formData);
      return data;
    },
    {
      onSuccess: (data) => {
        dispatch(loginAction(data));
        navigate("/");
      },
    }
  );
};

export default useLogin;
