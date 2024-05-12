import { notification } from "antd";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
    mutations: {
      onError: (e) => {
        const message =
          e?.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại";
        notification.error({ message: message, placement: "top" });
      },
    },
  },
});
