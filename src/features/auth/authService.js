import axios from "axios";

const API_URL = 'https://fab-tareas.herokuapp.com/api/users/'

const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
    console.log(response.data)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//Login
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//Logout
const logout = () => {
    localStorage.removeItem('user')
}


const authService = {
    register,
    login,
    logout
}

export default authService
