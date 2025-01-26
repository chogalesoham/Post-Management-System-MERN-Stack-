import { toast } from "react-toastify";

export const Toast = (message, type) => {
  toast[type](message);
};
