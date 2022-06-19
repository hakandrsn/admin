import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateUser, fetchUser } from '../../actions/user'
import FormUser from './components/FormUser'
const UpdateUser = (props) => {
  const { id } = props.match.params
  useEffect(() => {
    props.fetchUser(id)
  }, [])
  const onSubmit = data => {
    props.updateUser(id,data)
  }
  return (
    <div>
          <div className='d-flex justify-content-center my-2'>
        <h2>Personel Güncelle</h2>
      </div>
      <FormUser onSubmit={onSubmit} initialValues={props.user} />
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[ownProps.match.params.id],
    error: state.users.error,
  }
}

export default withRouter(connect(mapStateToProps, { updateUser, fetchUser })(UpdateUser))