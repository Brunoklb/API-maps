import axios from "axios";
import { baseURL } from "./env";

export const api = new axios.Axios({
  baseURL,
});
