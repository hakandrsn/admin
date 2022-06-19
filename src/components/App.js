import React, { useEffect, useState } from 'react'
import { Router } from 'react-router-dom'
import history from "../core/history"

import { connect } from 'react-redux'
import AdminLayout from './layout/AdminLayout'
import LoginLayout from './layout/LoginLayout'
import { ToastContainer, toast } from 'react-toastify';
import jwt_decode from 'jwt-decode'
import Loading from '../Loading/Loading'
const App = () => {
  const kullanici = localStorage.getItem("token") ? jwt_decode(localStorage.getItem("token")) : ""
  useEffect(() => {
   setTimeout(() => {
    if (!kullanici) {
      history.push("/login")
    }
    if (kullanici) {
      if (kullanici.role) {
        history.push("/works")
      }
    }
   }, 1500);
  }, [kullanici])
  if(localStorage.getItem("loading") == "true") return <Loading />
   if(!kullanici){
    return (
      <Router history={history}>
        <LoginLayout />
        <ToastContainer />
      </Router>
    )
   } else if (kullanici) {
    return (
      <Router history={history}>
        <AdminLayout />
        <ToastContainer />
      </Router>
    )
   }
  

}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps, null)(App)