import api from "./api";

// register post request
async function register(user) {
  const response = await api.post("/auth/register", user);

  return response;
}

// login post request

async function login(user) {
  const response = await api.post("/auth/login", user);

  return response;
}

const authService = {
  register,
  login,
};

export default authService;
