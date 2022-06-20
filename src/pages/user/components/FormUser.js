import React, { useMemo } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import "yup-phone";
// import history from "../../../core/history"
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import Select from "react-select"
import { roles } from '../../../datas/roles';

const schema = yup.object({
  firstname: yup.string().matches(/^[aA-zZğüşöçİĞÜŞÖÇ\s]+$/, "Geçersiz karakter bulunuyor").max(40, "40 karakteri geçemezsiniz").required("Zorunlu alan"),
  lastname: yup.string().matches(/^[aA-zZğüşöçİĞÜŞÖÇ\s]+$/, "Geçersiz karakter bulunuyor").min(2).max(50, "50 karakteri aşamazsınız").required(),
  gender: yup.string("Seçmelisin !").nullable().required("Seçmelisin"),
  phone: yup.string().phone("tr", false, "534 312 ** ** şeklinde girmelisiniz").required("Gerekli"),
  tc: yup.string().length(11, "Emin misiniz ?").required("Mecburi alan"),
  location: yup.string().min(5, "Doğru bir adres giriniz. {mah,sokak,semt/şehir}").required(),
  role: yup.object(),
  sgk:yup.mixed(),
  birthday: yup.date().required("Zorunlu alan")
}).required()


const FormUser = (props) => {
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
    defaultValues: useMemo(() => {
      return props.initialValues
    }, [props.initialValues]),
    resolver: yupResolver(schema)
  })
  const onSubmit = data => {
    try {
      const formData = new FormData();
      data && Object.values(data).forEach((value, key) => {
        if(value == data.sgk) {
          { formData.append('sgk',data.sgk[0])}
        } else if(value == data.role) {
          { formData.append('role',data.role.value)}
        }else {
          formData.append(Object.keys(data)[key], value)
        }
      })
      console.log(formData)
      props.onSubmit(formData)
      reset()
    } catch (e) {
      toast("Bir hata oluştu")
    }
  }
  return (
    <form className='container-fluid' onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <div className='row row-cols-3'>
        <div className='col d-flex flex-column' style={{ flexBasis: 300 }}>
          <label htmlFor="firstname" className='mb-1'>Adı</label>
          <input id='firstname' type="text" className=' rounded py-1 px-2 mb-2 form-control' style={{ backgroundColor: "#fff", width: 250 }} {...register("firstname")} />
          <p style={{ color: "tomato" }}>{errors.firstname?.message}</p>
        </div>
    {/* <img src={`${process.env.}/uploads/sgk/sgk_31629331629.png`} width={100}/> */}
        <div className='col d-flex flex-column' style={{ flexBasis: 300 }}>
          <label htmlFor="lastname" className='mb-1'>Soyadı</label>
          <input id='lastname' type="text" className='rounded py-1 px-2 mb-2 form-control' style={{ backgroundColor: "#fff", width: 250 }} {...register("lastname")} />
          <p style={{ color: "tomato" }}>{errors.lastname?.message}</p>
        </div>

        <div className='col d-flex flex-column' style={{ flexBasis: 300 }}>
          <label className='mb-1'>Cinsiyeti</label>
          <div className='d-flex justify-content-evenly'>
            <input type="radio" className="btn-check" name="options-outlined" id="forMan" value="male" autoComplete="off"  {...register("gender")} />
            <label className="btn btn-outline-info  px-4 py-1" htmlFor="forMan">Erkek</label>
            <input type="radio" className="btn-check" name="options-outlined" id="forWomen" value="female" autoComplete="off" {...register("gender")} />
            <label className="btn btn-outline-warning  px-4 py-1" htmlFor="forWomen">Kadın</label>
          </div>
          <p style={{ color: "tomato" }}>{errors.gender?.message}</p>
        </div>

        <div className='col d-flex flex-column' style={{ flexBasis: 300 }}>
          <label htmlFor="location" className='mb-1'>Adresi</label>
          <input type="text" id='location' className='rounded py-1 px-2 mb-2 form-control' style={{ backgroundColor: "#fff", width: 250 }} {...register("location")} />
          <p style={{ color: "tomato" }}>{errors.location?.message}</p>
        </div>

        <div className='col d-flex flex-column' style={{ flexBasis: 300 }}>
          <label htmlFor="phone" className='mb-1'>Telefonu</label>
          <input type="number" id='phone' className='rounded py-1 px-2 mb-2 form-control' style={{ backgroundColor: "#fff", width: 250 }} {...register("phone")} />
          <p style={{ color: "tomato" }}>{errors.phone?.message}</p>
        </div>
        <div className='col d-flex flex-column' style={{ flexBasis: 300 }}>
          <label htmlFor="tc" className='mb-1'>TC'si</label>
          <input type="number" id='tc' min="0" className='rounded py-1 px-2 mb-2 form-control' style={{ backgroundColor: "#fff", width: 250 }} {...register("tc")} />
          <p style={{ color: "tomato" }}>{errors.tc?.message}</p>
        </div>
        <div className='col d-flex flex-column' style={{ flexBasis: 300 }}>
          <label htmlFor="birthday" className='mb-1'>Doğum tarihi</label>
          <input type="date" id='birthday' className='rounded py-1 px-2 mb-2 form-control' style={{ backgroundColor: "#fff", width: 250 }} {...register("birthday")} />
          <p style={{ color: "tomato" }}>{errors.birthday?.message}</p>
        </div>
        <div className='col d-flex flex-column' style={{ width: 250 }}>
          <label htmlFor="role" className='mb-1'>Çalışma rolü</label>
          <Controller
            control={control}
            name="role"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                inputRef={ref}
                closeMenuOnSelect={true}
                options={roles}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          {errors.role && <p style={{ color: "tomato" }}>{errors.role?.message}</p>}
        </div>
        <div className='col d-flex flex-column' style={{ flexBasis: 300 }}>
          <label htmlFor="sgk" className='mb-1'>SGK dosyası</label>
          <input type="file" id='sgk' className='rounded py-1 px-2 mb-2 form-control' style={{ backgroundColor: "#fff", width: 250 }} {...register("sgk")} />
          <p style={{ color: "tomato" }}>{errors.sgk?.message}</p>
        </div>
      </div>
      <input className='py-2 px-3 rounded' style={{ backgroundColor: "#fab1a0" }} type="submit" />
    </form>
  )
}

export default withRouter(connect(null, null)(FormUser))
