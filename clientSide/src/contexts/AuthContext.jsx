import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { setHeaderToken } from "../services/api";

const AuthContext = createContext();

//******/ about how to DEFINE the Auth context********
export function AuthProvider({ children }) {
  // to create a global context accessible from anywhere in the application, **APP.js will be the child**

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // check if the user exists
  useEffect(() => {
    const userData = getCurrentUser();
    setUser(userData);
  }, []);

  //1. register n login
  const loginSaveUser = async (data) => {
    const { token } = data;
    const payload = jwtDecode(token);
    localStorage.setItem("userToken", JSON.stringify(data));
    setUser(payload);
    setHeaderToken();
  };

  //2. retrieve user from local storage
  const getCurrentUser = () => {
    try {
      const token = localStorage.getItem("userToken");
      const savedUser = jwtDecode(token);

      return savedUser;
    } catch (err) {
      if (err.message === "Invalid token specified") {
        return null;
      } else {
        console.log(err.message);
      }
    }
  };

  //3.logout user

  const logout = () => {
    localStorage.removeItem("userToken");
    setUser(null);
    setHeaderToken();
    navigate("/login");
  };
  // 给全局一个state of user, 和3个相关的方法
  const value = { user, getCurrentUser, loginSaveUser, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
