import { toast } from "react-toastify"
import ax from "../core/ax"
import { LOGIN_USER, LOGIN_ERROR } from "./types"
import history from "../core/history"

export const adminLogin = (data) => async dispatch => {
    try {
        const res = await ax.post("/api/admin/login", data)
        console.log(res)
        if (res.status == 200) {
            dispatch({
                type: LOGIN_USER,
                payload: res.data
            })
            window.location.reload()
            localStorage.setItem("token", res.data.token)
            return toast.done("Giriş başarılı")
        } else {
            return toast.error("Giriş başarısız")
        }
    } catch (e) {
        dispatch({
            type: LOGIN_ERROR,
            payload: e.response.data.message
        })
    }
}

export const logout = () => async dispatch => {
    localStorage.removeItem("token")
    history.push("/login")
    window.location.reload()
}