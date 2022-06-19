import { connect } from 'react-redux'
import React from 'react'
import { withRouter } from 'react-router-dom'
import FormUser from './components/FormUser'
import { createUser } from "../../actions/user"
const NewUser = (props) => {

  const onSubmit = data => {
    props.createUser(data)
  }
  return (
    <div>
       <div className='d-flex justify-content-center my-2'>
        <h2>Yeni Personel Ekle</h2>
      </div>
      <FormUser onSubmit={onSubmit} />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default withRouter(connect(mapStateToProps, { createUser })(NewUser))