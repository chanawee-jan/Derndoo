import axios from "axios";


const API_URL = "https://us-central1-derndoo-5f491.cloudfunctions.net/appexpress";


class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "/v1/auth/signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password ,title, firstname, lastname, mobile, natid, address) {
    return axios.post(API_URL + "/v1/users/signup", {
      username,
      email,
      role:'ADMIN',
      password,
      title, 
      firstname, 
      lastname,
      mobile, 
      natid,
      address
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
