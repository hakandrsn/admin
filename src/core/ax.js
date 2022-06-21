import axios from "axios";
export default axios.create({
    baseURL: process.env.REACT_APP_PROD_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token") ? localStorage.getItem("token") : ""}`,
        'Access-Control-Allow-Origin': '*'
    }
})