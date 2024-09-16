import axios from "axios"
import { URL } from "../untils/available"

export const getProduct = async () => {
  try {
    const res = await axios.get(URL);
    // console.log(res);
    return res.data;
    
  } catch (error) {
    console.log(error)
  }

}