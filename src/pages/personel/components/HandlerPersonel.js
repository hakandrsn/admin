import React from 'react'
import { useForm, Controller } from "react-hook-form"
import Select from "react-select"
import * as yup from "yup";
import "yup-phone";
import date from "date-and-time"
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    company: yup.object().required("şirket seçiniz"), 
    date: yup.date().required("tarih seçiniz"),
    users: yup.array().required("personel seçiniz").min(1),
  })
  const HandlerPersonel = ({addHandler,companies,users}) => {
    const { register, handleSubmit, formState: { errors }, control } = useForm({
      resolver: yupResolver(schema)
    });
    const onSubmit = data => {
        const newData = {
          companyid: data.company.value,
          companyname:data.company.label,
          balance: data.company.balance,
          date: date.format(new Date(data.date), "YYYY-MM-DD HH:mm:ss"),
          users: data.users
    
        }
       addHandler(newData)
      }

      const formetterComp = () => {
        let newComps = []
        companies && companies.forEach(comp => {
          newComps.push({
            label: comp.companyname,
            value: comp._id,
            balance: comp.giveprice
          })
        })
        return newComps
      }
      const formetterUser = () => {
        let newUsers = []
        users && users.forEach(user => {
          newUsers.push({
            label: user.firstname + " " + user.lastname,
            value: user._id,
            balance: user.balance,
            tc: user.tc
          })
        })
        return newUsers
      }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>Şirket seç</label>
      <Controller
        control={control}
        name="company"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Select
            inputRef={ref}
            closeMenuOnSelect={true}
            options={formetterComp()}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.company && <p style={{ color: "tomato" }}>şirket seçim hatası</p>}

    </div>
    <div>
      <label>Tarih ve saati seç</label>
      <input {...register("date")} type="datetime-local" className='form-control' />
      {errors.date && <p style={{ color: "tomato" }}>Tarih seçiniz</p>}

    </div>

    <div className='col mb-4 mx-auto'>
      <label>Sistemde olan personellerden seç</label>
      <Controller
        control={control}
        name="users"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Select
            inputRef={ref}
            closeMenuOnSelect={false}
            isMulti
            options={formetterUser()}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.users && <p style={{ color: "tomato" }}>Personel Seçim hatası</p>}
    </div>
    <button className='btn btn-outline-success' type='submit'>Onayla</button>
  </form>
  )
}

export default HandlerPersonel