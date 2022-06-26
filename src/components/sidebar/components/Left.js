import React from 'react'
import { RiAdminLine } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom';




const Left = ({width,pages,user,path,logout}) => {
  return (
    <div className=''>
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
            <div className="dropdown position-absolute " style={{bottom:10}}>
                <a href="#" className="d-flex align-items-center link-light text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    {user.picture ? <img src={user.picture} alt="" width="32" height="32" className="rounded-circle me-2" /> :
                        <BiUserCircle size={22} style={{ marginRight: 5 }} />
                    }
                    {width < 1000 ? "" : <label>{user && user.firstname+" "+user && user.lastname}</label>}
                    
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" >
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><a className="dropdown-item" href="#">Düzenle</a></li>
                    <li><a className="dropdown-item" href="#">Loglar</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button  className="dropdown-item" onClick={()=>logout()} >Sign out</button></li>
                </ul>
            </div>
    </div>
  )
}

export default Left