import axios from "axios";
export default axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token") ? localStorage.getItem("token") : ""}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE,post,get,patch,put,delete',
    }
})