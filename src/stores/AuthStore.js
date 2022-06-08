import { makeAutoObservable } from "mobx";
import instance from "../stores/instance";
import jwt_decode from "jwt-decode";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;
  signup = async (userData) => {
    try {
      const response = await instance.post("/signup", userData);
      this.user = jwt_decode(response.data.token);
      console.log("userrr " + Object.entries(this.user));
      instance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      console.log("Dataaa" + response.data.token);
    } catch (error) {
      console.error("ERORRRRRRR" + error);
    }
  };
  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.user = jwt_decode(res.data.token);
      instance.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      console.log("signed in");
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };
  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    this.user = null;
  };
}

const authstore = new AuthStore();

export default authstore;
