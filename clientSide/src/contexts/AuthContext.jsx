import { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

// 封装了useContext这个钩子，给全局使用。
const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // to create a global context accessible from anywhere in the application

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // check if the user exists
  useEffect(() => {
    const userData = getCurrentUser();
    setUser(userData);
  }, []);

  //1. register n login
  const loginSaveUser = async (data) => {
    const{token}=data;
    const payload = jwtDecode(token);
    localStorage.setItem("userToken", JSON.stringify(data));
    setUser(payload);
  };

  //2. retrieve user from local storage
  const getCurrentUser = () => {
    try {
      const token = localStorage.getItem("userToken");
     const savedUser = jwtDecode(token);
      return savedUser;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  };

  //3.logout user

  const logout = () => {
    localStorage.removeItem("userToken");
    setUser(null);
    navigate("/login");
  };

  const value = { user, getCurrentUser, loginSaveUser, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
