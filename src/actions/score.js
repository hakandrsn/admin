import { toast } from "react-toastify"
import ax from "../core/ax"
import {
    ADD_WORKER,
    FETCH_SCORE,
    FETCH_SCORES,
    GET_COMPANYID,
    CREATE_SCORE,
    DELETE_WORKER, DELETE_WORK, UPDATE_WORKER, UPDATE_WORK,
    GET_ADMINID
} from "./types"

export const fetchScores = () => async dispatch => {
    try {
        const res = await ax.get("/api/score")
        if (res.status != 200) {
            return toast.error("Bağlantı Hatası")
        } else {
            return dispatch({
                type: FETCH_SCORES,
                payload: res.data
            }); 
        }
    } catch (e) {
        toast.error("Puantajlar getirilemedi")
    }
}
export const fetchScore = (id) => async dispatch => {
    try {
        const res = await ax.get(`/api/score/${id}`)
        if (res.status != 200) {
            return toast.error("Kötü istek")
        } else {
            return dispatch({
                type: FETCH_SCORE,
                payload: res.data
            });
        }
    } catch (e) {
        toast.error("Puantaj istek hatası")
    }
}
export const createScore = (data) => async dispatch => {
    try {
        const res = await ax.post("/api/score/new", data)
        if (res.status == 200) {
            dispatch({
                type: CREATE_SCORE,
                payload: res.data
            });
            return toast.success("Puantaj oluşturuldu")
        } else if (res.status == 301) {
            return toast.error("Bu şirkette aynı saat veya aynı günde puantaj zaten var")
        } else {
            return toast.error("Puantaj oluşturulamadı")
        }
    } catch (e) {
        toast.error(e.response.data.message)
    }
}
//data = users olacak eklenecek data 
export const addWorker = (id, data) => async dispatch => {
    try {
        const res = await ax.post(`/api/score/add/${id}`, data)
        if (res.status != 200) {
            return toast.error("Çalışan eklenemedi")
        } else {
            return dispatch({
                type: ADD_WORKER,
                payload: res.data
            });
        }
    } catch (e) {
        toast.error("Çalışan eklenemedi")
    }
}

export const deleteWork = (id) => async dispatch => {
    try {
        const res = await ax.patch(`/api/score/hide/${id}`)
        if (res.status == 200) {
            dispatch({
                type:DELETE_WORK,
                payload:res.data
            })
        } else {
            return toast.error("İş silinemedi")
        }
    } catch (e) {
        toast.error("İş silinemedi")
    }
}
export const updateWork = (id, data) => async dispatch => {
    try {
        const res = await ax.patch(`/api/score/${id}`, data)
        if (res.status == 200) {
            dispatch({
                type:UPDATE_WORK,
                payload:res.data
            })
        } else {
            return toast.error("Hatalı İşlem")
        }
    } catch (e) {
        toast.error("İş güncellenemedi")
    }
}

export const fetchCompanyWithId = (id) => async dispatch => {
    try {
        const res = await ax.get(`/api/score/comp/${id}`)
        if (res.status != 200) {
            return toast.error("Çalışan güncellenemedi")
        } else {
            return dispatch({
                type: GET_COMPANYID,
                payload: res.data
            });
        }
    } catch (e) {
        toast.error("Çalışan güncellenemedi")
    }
}

export const fetchAdminWithId = (id) => async dispatch => {
    try {
        const res = await ax.get(`/api/score/auth/${id}`)
        if (res.status != 200) {
            return toast.error("Çalışan güncellenemedi")
        } else {
            return dispatch({
                type: GET_ADMINID,
                payload: res.data
            });
        }
    } catch (e) {
        toast.error("Çalışan güncellenemedi")
    }
}

export const fetchWithTime = (date, hour) => async dispatch => {
    try {
        const newDate = new Date(date)
        const res = await ax.get("/api/score/date/time", { params: { newDate, hour } })
    } catch (e) {
        return toast.error("Filtreleme hatası")
    }
}