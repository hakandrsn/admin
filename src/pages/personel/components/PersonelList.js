import React from 'react'
import { useForm } from 'react-hook-form'
import { roles } from "../../../datas/roles"
import jwt_decode from "jwt-decode"
import { toast } from 'react-toastify'

const PersonelList = ({ personel, extraPersonel,createScore,clearList }) => {
    const { register, handleSubmit, control,reset } = useForm({})
    const currentUser = jwt_decode(localStorage.getItem("token"))
    const newPersonelDate =personel.date && personel.date.split(" ")
    const onSubmit = data => {
       try {
        const newData = []
        const newExtraData = []
        data && Object.keys(data).forEach(person => {
            if (person.length == 11) {
                const b = extraPersonel.find(user => user.tc == person)
                newExtraData.push({ 
                    fullname:b.fullname,
                    tc: b.tc,
                    phone: b.phone,
                    ["role"]: data[person] })
            } else {
                const a = personel.users.find(user => user.value == person)
                newData.push({
                    fullname: a.label,
                    id: a.value,
                    balance: a.balance,
                    ["role"]: data[person]
                })
            }

        })
        const lastData = {
            companyId: personel.companyid,
            companyName: personel.companyname,
            balance: personel.balance,
            date: newPersonelDate[0],
            users: newData,
            extraUsers: newExtraData,
            adminId: currentUser._id,
            hour: newPersonelDate[1].slice(0,5),
            count: Number(newData.length + newExtraData.length),
            price: personel.balance,
        }
        createScore(lastData)
        clearList()
        reset()
       } catch (e) {
           toast.error("Lütfen personel ekleyin !")
       } 
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)} className='row row-cols-1 ' >
                <div className='col mb-2'>
                    <div className='card py-2'>
                        <h5 className='text-center fs-4 mb-4'>Bizim personellerimiz</h5>
                        {
                            personel.users && personel.users.length > 0 ? personel.users.map((user, i) => {
                                return (
                                    <div className='d-flex justify-content-between px-4' key={i}>
                                        <div className='mb-1 mx-2 px-2 rounded' style={{ backgroundColor: "#dfe6e9", width: 300 }}>{user.label}</div>
                                        <div className='' style={{ width: 150 }}>
                                            <select {...register(`${user.value}`)} defaultValue={roles[0]}>
                                                {roles && roles.map((role, i) => {
                                                    return (
                                                        <option key={i} value={role.value}>{role.label}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                )
                            }) : <label className='text-center'>Lütfen personel ekleyiniz...</label>
                        }
                    </div>
                </div>
                <div className='col mb-4'>
                    <div className='card py-2'>
                        <h5 className='text-center fs-4 mb-4'>Diğer personellerimiz</h5>
                        {
                            extraPersonel && extraPersonel.length > 0 ? extraPersonel.map((user, i) => {
                                return (
                                    <div className='d-flex justify-content-between px-4' key={i}>
                                        <div className='mb-1 mx-2 px-2 rounded' style={{ backgroundColor: "#dfe6e9", width: 300 }}>{user.fullname}</div>
                                        <div className='' style={{ width: 150 }}>
                                            <select {...register(`${user.tc}`)} defaultValue={roles[0]}>
                                                {roles && roles.map((role, i) => {
                                                    return (
                                                        <option key={i} value={role.value}>{role.label}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                )
                            }) : <label className='text-center'>Lütfen personel ekleyiniz...</label>
                        }
                    </div>
                </div>
                <button className='btn btn-outline-warning w-75 mx-auto' type='submit'>tık</button>
            </form>
        </div>
    )
}

export default PersonelList