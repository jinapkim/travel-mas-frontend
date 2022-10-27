import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:50000`
})

// POST /login
export function post_login(user_name, password) {
    api.post('/login', {
        user_name: user_name,
        password: password
    })
    .then(res => res.json())
    .catch(error => {
        alert('Incorrect username or password')
    })
}