import React, { useEffect, useState } from 'react'
import { RiAdminLine } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pages } from './Pages';
import { Link } from 'react-router-dom';
import screen from "../../core/screen"
import jwt_decode from 'jwt-decode';
import {logout} from "../../actions/login"
const Sidebar = (props) => {
    const [width] = screen()
    const { location } = props;
    const path = location.pathname;
    const [user, setUser] = useState([]);
    const ad =localStorage.getItem("token") && localStorage.getItem("token");
    const decoded = jwt_decode(ad);
    useEffect(() => {
        if (ad) setUser(decoded);
    }, [])
    console.log(window.onload)
    return (
        <div className="container-sidebar d-flex flex-column flex-shrink-0 p-3" style={{ width: width < 1000 ? 100 : 280, color: "white", height: "100%", zIndex: 1 }}>
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
                <span className={`${width < 1000 ? "mx-auto" : ""}`}> <RiAdminLine size={width < 1000 ? 25 : 18} style={{ marginRight: 5 }} /></span>
                {width < 1000 ? "" : <span className="fs-4">Yönetim</span>}
            </Link>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                {
                    pages && pages.map((page, index) => {
                        return (
                            <li className='nav-item px-3 py-2 fs-6 ' key={index}>
                                <Link to={`${page.path}`} className={`nav-item ${path == page.path ? "active" : "link-light"} text-decoration-none`}>
                                    {<page.icon size={width < 1000 ? 30 : 21} style={{ marginRight: 5 }} />}
                                    {width < 1000 ? "" : page.name}
                                </Link>
                            </li>
                        )
                    })
                }

            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-light text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    {user.picture ? <img src={user.picture} alt="" width="32" height="32" className="rounded-circle me-2" /> :
                        <BiUserCircle size={22} style={{ marginRight: 5 }} />
                    }

                    <label>{user && user.firstname+" "+user && user.lastname}</label>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" >
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><a className="dropdown-item" href="#">Düzenle</a></li>
                    <li><a className="dropdown-item" href="#">Loglar</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button  className="dropdown-item" onClick={()=>props.logout()} >Sign out</button></li>
                </ul>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        admin: state.admin
    }
}

export default withRouter(connect(mapStateToProps, {logout})(Sidebar))