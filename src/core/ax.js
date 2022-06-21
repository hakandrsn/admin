import axios from "axios";
export default axios.create({
    baseURL: process.env.REACT_APP_PROD_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token") ? `Bearer `+localStorage.getItem("token"): ""}`,
        'Access-Control-Allow-Origin': '*'
    }
})