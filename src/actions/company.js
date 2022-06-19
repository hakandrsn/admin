import { FETCH_COMPANİE, FETCH_COMPANİES, FETCH_COMPANİE_ERROR, CREATE_COMPANİE, DELETE_COMPANİE, UPDATE_COMPANİE } from "./types";
import ax from "../core/ax";
import {  toast } from 'react-toastify';
export const fetchCompany = id => async dispatch => {
    try {
        const res = await ax.get(`/api/company/${id}`);
        if(res.status != 200){
            return toast.error("Bağlantı Hatası")
        } else {
          return  dispatch({
                type: FETCH_COMPANİE,
                payload: res.data
            });
        }
    } catch (e) {
        toast.error("Şirket getirilemedi")

    }
}

export const fetchCompanies = () => async dispatch => {
    try {
        const res = await ax.get("/api/company");
        if(res.status != 200){
            return toast.error("Bağlantı Hatası")
        }else {
            return dispatch({
                type: FETCH_COMPANİES,
                payload: res.data
            });
        }
    } catch (e) {
        toast.error("Şirketler getirilemedi")
    }
}
export const createCompany = (formData) => async dispatch => {
    try {
        const res = await ax.post("/api/company/new", formData);
       if(res.status != 200){
              return toast.error("Şirket eklenemedi")
       }else {
        dispatch({
            type: CREATE_COMPANİE,
            payload: res.data
            });
            toast.success("Şirket ekleme işlemi başarılı");
       }
    } catch (e) {
        dispatch({
        type: FETCH_COMPANİE_ERROR,
        payload: e.response.data
        });
        toast("Şirket eklenemedi")
    }
}

export const deleteCompany = (id) => async dispatch => {
    try {
        const res = await ax.patch(`/api/company/delete/${id}`);
        dispatch({
        type: DELETE_COMPANİE,
        payload: res.data
        });
        toast.success("Şirket silindi")
    } catch (e) {
        dispatch({
        type: FETCH_COMPANİE_ERROR,
        payload: e.response.data
        });
        toast.error("Şirket silinemedi")
    }
}
export const updateCompany = (id, formData) => async dispatch => {
    try {
        const res = await ax.put(`/api/company/${id}`, formData);
        if(res.status != 200){
            return toast.error("Şirket güncellenemedi")
        }else {
            dispatch({
                type: UPDATE_COMPANİE,
                payload: res.data
                });
                toast("Şirket Güncellendi")
        }
    } catch (e) {
        dispatch({
        type: FETCH_COMPANİE_ERROR,
        payload: e.response.data
        });
        toast.error("Şirket Güncellenemedi")
    }
}