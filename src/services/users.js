import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/`,
});

// POST /register
export function post_register(first_name, last_name, user_name, password) {
  
  return api
    .post("/register", {
      first_name: first_name,
      last_name: last_name,
      user_name: user_name,
      password: password,
    })
}

// POST /login
export function post_login(user_name, password) {
  return api.post("/login", {
    user_name: user_name,
    password: password,
  });
}
