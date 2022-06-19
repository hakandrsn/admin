import axios from "axios";
export const baseUrl = "https://backend-git-main-hakandrsn.vercel.app/";
export default axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token") ? localStorage.getItem("token") : ""}`
    }
})