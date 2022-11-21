import axios from "axios";
import { baseURL } from "./baseUrl";

export const api = new axios.Axios({
  baseURL,
});
