import api from "../services/api";
 
// GET ALL USERS
function getAllUsers() {
  return api.get("/auth/users");
}



// pack up all Product services
const productService = {
  getAllUsers,
};

export default productService;
