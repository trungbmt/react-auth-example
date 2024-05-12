
import { register } from "@modules/services";
import { useMutation } from "react-query";

const useRegistration = () => {
  return useMutation(async (formData) => {
    console.log({ formData });
    const { data } = await register(formData);
    return data;
  });
};

export default useRegistration;
