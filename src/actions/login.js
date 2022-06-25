import { toast } from "react-toastify"
import ax from "../core/ax"
import { LOGIN_USER, LOGIN_ERROR } from "./types"
import history from "../core/history"

export const adminLogin = (data) => async dispatch => {
    try {
        localStorage.setItem("loading", true)
        const res = await ax.post("/api/admin/login", data)
        if (res.status == 200) {
            dispatch({
                type: LOGIN_USER,
                payload: res.data
            })
            history.push("/works")
            window.location.reload()
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("loading", false)
        } else {
            localStorage.setItem("loading", false)
            return toast.error("Giriş başarısız")
        }
    } catch (e) {
        localStorage.setItem("loading", false)
        dispatch({
            type: LOGIN_ERROR,
            payload: e.response.data.message
        })
    }
}

export const logout = () =>  {
    localStorage.setItem("loading", false)
    localStorage.removeItem("token")
    window.location.reload()
    setTimeout(() => {
        history.push("/login")
    }, 500);
}