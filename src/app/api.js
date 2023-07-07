import axios from "axios";

const apiUrl = process.env.REACT_APP_REQRES_API;

function getUsers() {
  const response = axios.get(`${apiUrl}/users`);
  return response;
}

function getCreatedUser({ first_name, last_name, email }) {
  const response = axios.post(`${apiUrl}/users`, {
    email,
    first_name,
    last_name,
  });
  return response;
}

function getUpdatedUser(id, user) {
  const response = axios.put(`${apiUrl}/users/${id}`, {
    avatar: user.avatar,
    id: id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
  });
  return response;
}

function getDeletedUer(id) {
  const response = axios.delete(`${apiUrl}/users/${id}`);
  return response;
}

export { getUsers, getCreatedUser, getUpdatedUser, getDeletedUer };
