import { ADD_HANDLE_PERSONEL,ADD_ONE_PERSONEL,DELETE_PERSONEL ,CLEAR_LIST} from "./types"

export const addOneHandler = (data)=> {
    return{
        type: ADD_ONE_PERSONEL,payload:data
    }
}

export const addHandler = (data)=> {
    return {
        type: ADD_HANDLE_PERSONEL,payload:data
    }
}
export const deletePersonel = (data)=> {
    return{
        type: DELETE_PERSONEL,payload:data
    }
}
export const clearList = ()=> {
    return{
        type: CLEAR_LIST
    }
}