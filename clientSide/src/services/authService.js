import api from "./api"

// register post request
async function register(user){
     const response = await api.post('/auth/register',user);
     console.log("response is:",response?.data);
     return response
}

// login post request

async function login(user) {
     const response = await api.post('/auth/login',user);
     console.log("response is:",response?.data);
     return response
}



const authService = {
     register,
     login
}

export default authService