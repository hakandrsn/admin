import React from 'react'
import { BsFillPeopleFill,BsFillTelephoneFill ,BsMailbox2} from "react-icons/bs"
import { FaTransgender } from "react-icons/fa"
import {GoKey} from "react-icons/go"
import {BiCurrentLocation} from "react-icons/bi"
import {ImSortNumbericDesc} from "react-icons/im"
import {RiDeleteBinLine} from "react-icons/ri"
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {deleteUser} from "../../../actions/user"
const User = (props) => {
    const { data } = props
    const delUser =()=> {
        if(window.confirm("Silmek istediğinize emin misiniz?")==true) {
            props.deleteUser(data._id)
            props.setReload(!props.reload)
        }
    }
    console.log(data)
    return (
        <div className='flex-shrink-1 flex-grow-1 rounded py-2 px-3 d-flex flex-column gap-1' style={{ flexBasis: 250, backgroundColor: "#ffeaa7" }}>
            <Link to={`user/${data._id}`} className='d-flex align-items-center text-decoration-none' style={{color:"black"}}>
                <BsFillPeopleFill size={22} style={{ marginRight: 4 }} />
                <label className='text-capitalize fs-4'>{data.firstname + " " + data.lastname}</label>
            </Link>
            <div className='d-flex align-items-center'>
                <FaTransgender size={22} style={{ marginRight: 4 }} />
                <label>{data.gender == "male" ? "Erkek" : "Kadın"}</label>
            </div>
            <div className='d-flex align-items-center'>
                <BsFillTelephoneFill size={22} style={{ marginRight: 4 }} />
                <label>{data.phone || "Yok"}</label>
            </div>
            <div className='d-flex align-items-center'>
                <GoKey size={22} style={{ marginRight: 4 }} />
                <label>{data.tc || "Tc Yok"}</label>
            </div>
            <div className='d-flex align-items-center'>
                <BiCurrentLocation size={22} style={{ marginRight: 4 }} />
                <label>{data.location || "Konum bilinmiyor"}</label>
            </div>
            <div className='d-flex align-items-center'>
                <BsMailbox2 size={22} style={{ marginRight: 4 }} />
                <label>{data.role || "Bilinmiyor"}</label>
            </div>
           
            <div className='d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
                <ImSortNumbericDesc size={22} style={{ marginRight: 4 }} />
                <label>{data.balance || "0"}</label>
            </div>
                <button onClick={()=>delUser(data._id)} className='bg-transparent border-0'> <RiDeleteBinLine size={25} /> </button>
            </div>
        </div>
    )
}

export default withRouter(connect(null, { deleteUser })(User))