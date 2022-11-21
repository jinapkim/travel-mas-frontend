import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

export function get_by_keyword(keyword) {
  return api.get("/experiences", {
    params: { keyword: keyword },
  });
}
