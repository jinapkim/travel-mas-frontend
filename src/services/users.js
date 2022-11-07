import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:50000/`,
});

//const config = {
//    headers: { Authorization: `Bearer ${token}` }
//}

// POST /register
export function post_register(first_name, last_name, user_name, password) {
  api
    .post("/register", {
      first_name: first_name,
      last_name: last_name,
      user_name: user_name,
      password: password,
    })
    .then((res) => {
      console.log(res.data);
      return res.data.access_token;
    })
    .catch((error) => {
      console.log(error);
    });
}

// POST /login
export function post_login(user_name, password) {
  return api.post("/login", {
    user_name: user_name,
    password: password,
  });
}
