import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Loading from "../../Loading/Loading.js"
import { adminLogin, logout } from '../../actions/login'

const DashBoard = (props) => {
  const logout =()=> {
    props.logout()
  }
  return (
    <div>
   <button onClick={()=>logout()}>
     çıkış
   </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
}

export default withRouter(connect(mapStateToProps, {logout})(DashBoard))