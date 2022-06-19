import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import "yup-phone";

const schema = yup.object().shape({
    fullname: yup.string("adını ve soyadını kontrol ediniz").required(),
    phone: yup.string("telefon giriniz").phone().required(),
    tc: yup.string("tc giriniz").required()
})
const OtherUser = ({addOneHandler}) => {
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        resolver: yupResolver(schema)
    });
const onSubmit = data => {
    addOneHandler(data)
}
    return (
        <div className='mb-4'>
            <h4 className='text-center py-2 text-capitalize'>Sistemde olmayan personel gönder</h4>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-wrap gap-2 mb-2'>
                <div className='flex-shrink-1 flex-grow-1' style={{ flexBasis: 300 }}>
                    <label>Personel Adı Soyadı</label>
                    <input {...register("fullname")} type="text" className='form-control' />
                    {errors.fullname && <p style={{ color: "tomato" }}>Adını ve soyadını kontrol ediniz</p>}
                </div>
                <div className='flex-shrink-1 flex-grow-1' style={{ flexBasis: 300 }}>
                    <label>Telefon giriniz</label>
                    <input {...register("phone")} type="number" className='form-control' />
                    {errors.phone && <p style={{ color: "tomato" }}>Telefon hatalı</p>}

                </div>
                <div className='flex-shrink-1 flex-grow-1' style={{ flexBasis: 300 }}>
                    <label>Tc giriniz</label>
                    <input {...register("tc")} type="number" className='form-control' />
                    {errors.tc && <p style={{ color: "tomato" }}>Tc hatalı</p>}
                </div>
               <div>
               <label style={{opacity:0}}>hakan</label>
                <button type="submit" className='d-flex align-self-center btn btn-success'>Ekle</button>
           </div>
            </form>
        </div>
    )
}

export default OtherUser