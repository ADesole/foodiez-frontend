import { makeAutoObservable } from "mobx";
import instance from "../stores/instance";
import jwt_decode from "jwt-decode";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;

  // checkForToken = () => {
  //   const token = localStorage.getItem("myToken");
  //   if (token) {
  //     const currentTime = Date.now();
  //     const user = jwt_decode(token);
  //     if (user.exp >= currentTime) {
  //       this.user = token;
  //     } else {
  //       this.signout();
  //     }
  //   }
  // };

  signup = async (userData) => {
    try {
      const response = await instance.post("/signup", userData);
      // localStorage.setItem("myToken", response.data.token);
      this.user = jwt_decode(response.data.token);
      console.log("userrr " + Object.entries(this.user));
      instance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      console.log("Dataaa" + response.data.token);
      return true;
    } catch (error) {
      alert("This username is already taken. Please choose another name");
      console.error("ERORRRRRRR" + error);
      return false;
    }
  };
  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      // localStorage.setItem("myToken", res.data.token);
      this.user = jwt_decode(res.data.token);
      instance.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      console.log("signed in");
      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
      alert("Incorrect username or password");
    }
  };
  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem("token");
    this.user = null;
  };
  setUser = (userToken) => {
    localStorage.setItem("token", userToken);
    console.log(localStorage)
    instance.defaults.headers.common.Authorization = `Bearer ${userToken}`;
    this.user = jwt_decode(userToken);
  };
  
  checkForToken = () => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      const newUser = jwt_decode(userToken);
      if (newUser.exp > Date.now()) this.setUser(userToken);
      else this.signout();
    }
  };
}



const authstore = new AuthStore();
authstore.checkForToken();

export default authstore;
