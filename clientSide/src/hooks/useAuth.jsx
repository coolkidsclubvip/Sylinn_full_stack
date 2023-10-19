import { useContext} from "react";
import AuthContext from "../contexts/AuthContext";

// about how to ACCESs the Auth context
// 封装了useContext这个钩子，给全局使用。

const useAuth = () => {

     
  return useContext(AuthContext);
};

export default useAuth;
