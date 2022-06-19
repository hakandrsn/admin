import React from 'react'
import date from 'date-and-time'
import { IoMdReturnRight } from 'react-icons/io'
import { Link } from 'react-router-dom'
const Card = ({ score }) => {
    const newDate = date.format(new Date(score.date), 'YYYY-MM-DD')
    return (
        <div className='col mb-2' style={{ maxWidth: 400 }}>
            <Link to={`works/${score._id}`} className='card text-decoration-none' style={{ backgroundColor: score.isComplate ? "#4cd137" : "#fbc531", color: "black" }}>
                <div className='card-body'>
                    <div className='border-bottom mb-1 d-flex justify-content-between'>
                        <h3>{score.companyName}</h3>
                        <IoMdReturnRight size={25} />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='d-block'>
                            <label className='d-block'>Şirket ücreti</label>
                            <label className='fs-4 fw-bold'>{score.price}</label>
                        </div>
                        <div className='d-block'>
                            <div>İş tarihi</div>
                            <label className='fs-4'>{newDate}</label>
                        </div>
                        <div className='d-block'>
                            <div>Çalışan Sayısı</div>
                            <label className='fw-bold fs-4'>{score.count}</label>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card