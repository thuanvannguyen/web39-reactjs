import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "../untils/available";

export const usePostProduct = () => {
  const request = async(data) => {
    const res = await axios.post(URL, data);
    return res.data;
  }
  return useMutation({mutationFn: request})
}