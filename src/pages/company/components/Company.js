import React from 'react'
import date from "date-and-time"
import { Link, withRouter } from 'react-router-dom'
import { RiDeleteBinLine } from "react-icons/ri"
import { BsFillPeopleFill, BsFillTelephoneFill, BsMailbox2,BsCalendar2DateFill } from "react-icons/bs"
import { deleteCompany } from '../../../actions/company'
import { connect } from 'react-redux'
const Company = (props) => {
    const { data } = props
    const newDate = new Date(data.createdAt)
    const delCompany = (id) => {
        if (window.confirm("Silmek istediğinize emin misiniz?") == true) {
            props.deleteCompany(id)
        }
    }
    return (
        <div className='flex-shrink-1 flex-grow-1 py-2 px-3 rounded flex-column d-flex fs-6' style={{ backgroundColor: "#ffeaa7", flexBasis: 300, color: "black" }}>
            <Link to={`company/${data._id}`} className=" text-decoration-none " style={{ color: "black", fontWeight: 500 }} > <label className='fs-3'> {data.companyname || "İsim yok"}</label></Link>
            <div>
                <BsMailbox2 size={22} style={{ marginRight: 3 }} />
                <label> {data.email || "Mail yok"} </label>
            </div>
            <div>
                <BsFillTelephoneFill size={22} style={{ marginRight: 3 }} />
                <label> {data.phone || "Telefon yok"} </label>
            </div>
            <div>
                <BsFillPeopleFill size={22} style={{ marginRight: 3 }} />
                <label> {data.hrname || "İnsan kaynakları yok"} </label>
            </div>
            <div>
                <BsFillTelephoneFill size={22} style={{ marginRight: 3 }} />
                <label> {data.hrphone || "İnsan kaynakları telefonu yok"} </label>
            </div>
            <div className='d-flex justify-content-between'>
                <div>
                    <BsCalendar2DateFill size={22} style={{ marginRight: 3 }} />
                    <label> {date.format(newDate, "DD/MM/YYYY") || "Tarih mevcut değil"} </label>
                </div>

                <button onClick={() => delCompany(data._id)} className='bg-transparent border-0'> <RiDeleteBinLine size={25} /> </button>
            </div>
        </div>
    )
}
export default withRouter(connect(null, { deleteCompany })(Company))