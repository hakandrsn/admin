import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import FormCompany from './components/FormCompany'
import { createCompany } from '../../actions/company'

const NewCompany = (props) => {
  const onSubmit = data => {
    props.createCompany(data)
  }
  return (
    <div>
      <div className='d-flex justify-content-center my-2'>
        <h2>Yeni Şirket Ekle</h2>
      </div>
      <FormCompany onSubmit={onSubmit} />
    </div>
  )
}

export default withRouter(connect(null, { createCompany })(NewCompany))