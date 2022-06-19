import React ,{useMemo, useState}from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import history from "../../../core/history"
import { toast } from 'react-toastify'
const schema = yup.object({
  companyname: yup.string().required("Şirket ismini giriniz"),
  email: yup.string().email("Lütfen email formatında giriniz").required().lowercase(),
  phone: yup.string().length(10).required(),
  password: yup.string().min(6,"6 karakterden az olamaz").required("giriniz!"),
  location: yup.string().min(10,"Uzun adres formatında giriniz").required("zorunlu alan"),
  hrname: yup.string().min(6).required("İnsan kaynakları adını ve soyadını giriniz"),
  hrphone: yup.string().min(10).max(11).required("İnsan kaynakları telefonunu giriniz"),
  giveprice: yup.string().required("Verdiği ücreti giriniz")
}).required()


const FormCompany = (props) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: useMemo(() => {
      return props.initialValues
    }, [props.initialValues]),
    resolver: yupResolver(schema)
  })
  const onSubmit = data => {
    try {
      if (props.error) {
        toast.error(props.error)
      }else {
        props.onSubmit(data)
      }
    } catch (e) {
      toast("Bir hata oluştu")
    } finally {
      reset()
      history.goBack()
    }
  }

  return (
    <form className='container-fluid ' onSubmit={handleSubmit(onSubmit)} >
      <div className='row row-cols-3'>
        <div className='col d-flex flex-column' style={{ flexBasis: 300 }}>
          <label className='mb-1'>Şirket Adı</label>
          <input type="text" className=' rounded py-1 px-2 mb-2  form-control' style={{ backgroundColor: "#fff", width: 250 }} {...register("companyname")} />
          <p style={{ color: "tomato" }}>{errors.companyname?.message}</p>
        </div>

        <div className='col d-flex flex-column' style={{ flexBasis: 300 }}>
          <label className='mb-1'>Email</label>
          <input type="email" className='rounded py-1 px-2 mb-2  form-control' style={{ backgroundColor: "#fff", width: 250 }} {...register("email")} />
          <p style={{ color: "tomato" }}>{errors.email?.message}</p>
        </div>

        <div className='col d-flex flex-column' style={{ flexBasis: 300 }}>
          <label className='mb-1'>Telefon</label>
          <input type="tel" className='rounded py-1 px-2 mb-2  form-control' style={{ backgroundColor: "#fff", width: 250 }} {...register("phone")} />
          <p style={{ color: "tomato" }}>{errors.phone?.message}</p>
        </div>

        <div className='col d-flex flex-column' style={{ flexBasis: 300 }}>
          <label className='mb-1'>Şifre</label>
          <input type="password" className='rounded py-1 px-2 mb-2  form-control' style={{ backgroundColor: "#fff", width: 250 }} {...register("password")} />
          <p style={{ color: "tomato" }}>{errors.password?.message}</p>
        </div>

        <div className='col d-flex flex-column' style={{ flexBasis: 300 }}>
          <label className='mb-1'>Konum</label>
          <input type="text" className='rounded py-1 px-2 mb-2  form-control' style={{ backgroundColor: "#fff", width: 250 }} {...register("location")} />
          <p style={{ color: "tomato" }}>{errors.location?.message}</p>
        </div>

        <div className='col d-flex flex-column' style={{ flexBasis: 300 }}>
          <label className='mb-1'>İnsan kaynakları adı</label>
          <input type="text" className='rounded py-1 px-2 mb-2  form-control' style={{ backgroundColor: "#fff", width: 250 }} {...register("hrname")} />
          <p style={{ color: "tomato" }}>{errors.hrname?.message}</p>
        </div>

        <div className='col d-flex flex-column' style={{ flexBasis: 300 }}>
          <label className='mb-1'>İnsan kaynakları telefonu</label>
          <input type="tel" className='rounded py-1 px-2 mb-2  form-control' style={{ backgroundColor: "#fff", width: 250 }} {...register("hrphone")} />
          <p style={{ color: "tomato" }}>{errors.hrphone?.message}</p>
        </div>

        <div className='col d-flex flex-column' style={{ flexBasis: 300 }}>
          <label className='mb-1'>Verdiği ücret</label>
          <input type="number" className='rounded py-1 px-2 mb-2  form-control' style={{ backgroundColor: "#fff", width: 250 }} {...register("giveprice")} />
          <p style={{ color: "tomato" }}>{errors.giveprice?.message}</p>
        </div>
      </div>

      <input className='py-2 px-3 rounded' style={{ backgroundColor: "#fab1a0" }} type="submit" />
    </form>
  )
}

export default FormCompany