// import axios from "axios";
// import { mainUrl } from "../../utils/Data";

import { customFetch } from "../../utils";


// const API_URL = "/api/users/";
// const API_URL = mainUrl + "users/";
const url = 'users'
// Login user
const login = async (userData) => {
  const response = await customFetch.post(url + "/login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  logout,
  login,
};

export default authService;