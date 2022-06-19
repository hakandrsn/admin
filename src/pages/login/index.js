import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { adminLogin, logout } from '../../actions/login';
import { RiUser3Line, RiLockPasswordLine } from 'react-icons/ri'
import topPP from "../../assets/icons/work.png"
import { useForm } from "react-hook-form"
import { withRouter } from 'react-router-dom';
const Login = (props) => {

    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        props.adminLogin(data)
        // try {
        //     const log = await ax.post("/api/admin/login", data)
        //     localStorage.setItem("token", log.data.token)
        //     if(log.data.token){
        //         window.location.reload()
        //     }
        // } catch (e) {
        //     toast.error("Giriş yapılamadı")
        // }

    }
    return (
        <div className='' style={{ color: "white" }}>
            <div className='position-absolute' style={{ top: 30, left: 30 }}>
                <h1>AS KADRO</h1>
            </div>
            <div className='position-absolute top-50 start-50 translate-middle' style={{ minWidth: 350, bottom: -300 }}>
                <div className='mb-1 d-flex justify-content-center'>
                    <img src={topPP} style={{ minWidth: 250, maxWidth: 300 }} />
                </div>
                <div className='border rounded p-4' style={{ backgroundColor: "" }}>
                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)} >
                        <div className='d-flex justify-content-evenly mb-3 pb-1 btn-group' role="group" aria-label="Basic radio toggle button group">

                            <label className='fs-5 text-capitalize btn-chack' loc="login" htmlFor="admin">
                                Yönetici Girişi
                            </label>

                            {/* <input {...register("loginpage")} value="company" loc="login" type="radio" className="btn-check" name="loginpage" id="company" autoComplete="off" />
                            <label loc="login" htmlFor="company">Kurumsal</label> */}

                        </div>
                        <div className='text-center mb-2 text-lowercase' style={{color:"tomato"}}>
                            <label className=''>{props.auth && props.auth.message && props.auth.message}</label>
                        </div>
                        <div className='position-relative'>
                            <input {...register("phone")} name="phone" type="text" placeholder='phone' loc="login" />
                            <RiUser3Line style={{ position: "absolute", left: 2, top: 8 }} color={"black"} size={20} />
                        </div>
                        <div className='position-relative'>
                            <input {...register("password")} name="password" type="password" placeholder='Şifre' loc="login" />
                            <RiLockPasswordLine style={{ position: "absolute", left: 2, top: 8 }} color={"black"} size={20} />
                        </div>
                        <div className='mb-4 d-flex align-items-center'>
                            <input {...register("rememberme")} type="checkbox" id='remember' className='' />
                            <label className='ms-1' htmlFor='remember'>Beni hatırla</label>
                        </div>
                        <div className='mx-auto' style={{width:140}}>
                            <input className='my-2 w-100 text-capitalize text-center' loc="event" type="submit" value='Giriş' />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default withRouter(connect(mapStateToProps, { adminLogin, logout })(Login))