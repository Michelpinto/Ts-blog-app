import axios from 'axios';
const API_URL = 'http://localhost:8000/api/users/';

//const register user
const Register = async (userData: any) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  Register,
};

export default authService;
