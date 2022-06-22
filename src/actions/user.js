import { FETCH_USER, FETCH_USERS, FETCH_USER_ERROR, CREATE_USER, DELETE_USER, UPDATE_USER, FETCH_DELETED_USERS } from "./types";
import ax from "../core/ax";
import { toast } from 'react-toastify';
import axios from "axios"
export const fetchUser = id => async dispatch => {
    try {
        const res = await ax.get(`/api/user/${id}`);
        if (res.status != 200) {
            return toast.error("Kullanıcı getirilemedi")
        } else {
            dispatch({
                type: FETCH_USER,
                payload: res.data
            });
        }
    } catch (e) {
        dispatch({
            type: FETCH_USER_ERROR,
            payload: e.response.data
        });
        toast.error("Kullanıcı getirilemedi")

    }
}
export const fetchUsers = (page) => async dispatch => {
    try {
        localStorage.setItem("loading", true)
        const res = await ax.get("/api/user", { params: { page: page } });
        if (res.status != 200) {
            return toast.error("Başarısız istek")
        } else {
            dispatch({
                type: FETCH_USERS,
                payload: res.data
            });

        }
    } catch (e) {
        dispatch({
            type: FETCH_USER_ERROR,
            payload: e.response.data
        });
        toast.error("Kullanıcılar getirilemedi")
    } finally {
        localStorage.setItem("loading", false)
    }
}
export const createUser = (formData) => async dispatch => {
    try {
        localStorage.setItem("loading", true)
        const res = await ax.post(`/api/user/new`, formData);
        if (res.status == 200) {
            dispatch({
                type: CREATE_USER,
                payload: res.data
            });
            return toast.success("Kullanıcı eklendi")
        } else {
            return toast.error("bilinmeyen hata")
        }
    } catch (e) {
        dispatch({
            type: FETCH_USER_ERROR,
            payload: e
        });
        console.log(e)
        return toast.error(e.response.data.message)
    } finally {
        localStorage.setItem("loading", false)
    }
}
export const deleteUser = (id) => async dispatch => {
    try {
        const res = await ax.patch(`/api/user/delete/${id}`);
        if (res.status !== 200) {
            return toast.error("Kullanıcı silinemedi")
        } else {
            dispatch({
                type: DELETE_USER,
                payload: res.data
            });
            toast.success("Kullanıcı silindi")
        }
    } catch (e) {
        dispatch({
            type: FETCH_USER_ERROR,
            payload: e.response.data
        });
        toast.error("Kullanıcı silinemedi")
    }
}
export const updateUser = (id, formData) => async dispatch => {
    try {
        localStorage.setItem("loading", true)
        const res = await ax.patch(`/api/user/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.status == "200") {
            dispatch({
                type: UPDATE_USER,
                payload: res.data
            });
            return toast.success("Kullanıcı Güncellendi")
        } else {
            return toast.error("bilinmeyen hata")
        }
    } catch (e) {
        dispatch({
            type: FETCH_USER_ERROR,
            payload: e.response.data
        });
        toast.error("Kullanıcı Güncellenemedi")
    } finally {
        localStorage.setItem("loading", false)
    }
}
export const deletedUsers = () => async dispatch => {
    try {
        const res = await ax.get("/api/user/deleted/users");
        if (res.status != 200) {
            return toast.error("Başarısız İstek")
        } else {
            dispatch({
                type: FETCH_DELETED_USERS,
                payload: res.data
            });
        }
    } catch (e) {
        dispatch({
            type: FETCH_USER_ERROR,
            payload: e.response.data
        });
        toast.error("Kullanıcılar getirilemedi")
    }
}