import React from 'react'
import { Link } from 'react-router-dom'
import Card from './components/Card'

const Request = () => {
  return (
    <div className='d-flex flex-column'>
      <div className='d-flex justify-content-between'>
        <div></div>
        <div className='fs-4'>Talep Listesi</div>
        <Link to="request/new" className='text-decoration-none btn btn-outline-danger ' >Talep Ekle</Link>
      </div>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  )
}

export default Request