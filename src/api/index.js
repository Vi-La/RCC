import axios from "axios";

const BASE_URL = "https://rcc-rwanda1.herokuapp.com/api/v1/";
// const BASE_URL = "http://localhost:5000/api/v1/";

const TOKEN = JSON.parse(localStorage.getItem('user')).accessToken;
// localStorage.setItem("user",JSON.stringify(response?.data));
console.log("Token1:",TOKEN)

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type":"application/json", 
    "Accept": "application/json",
    token: `Bearer ${TOKEN}`
  },
});