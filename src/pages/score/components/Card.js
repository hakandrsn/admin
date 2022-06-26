import React from 'react'
import date from 'date-and-time'
import { IoMdReturnRight } from 'react-icons/io'
import { Link } from 'react-router-dom'
const Card = ({ score,updateWork,deleteWork }) => {
    const monthNames = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");
    const dayNames = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");
    const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const formatDate = () => {
        const newDate = date.format(new Date(score.date), 'dddd YYYY MM DD').split(" ")
        newDate[0] = dayNames[daysInWeek.indexOf(newDate[0])]
        return newDate.join(" ")
    }
    const deleteWrk =(id)=>{
        if(window.confirm("are you sure")== true){
            deleteWork(id)
        }
    }
    return (
        <div className='col mb-2' style={{ maxWidth: 250 }}>
            <div className='card-body card' style={{ backgroundColor: score.isComplate ? "#4cd137" : "#fbc531", color: "black" }}>
                <Link to={`works/${score._id}`}  className=' text-decoration-none'
                 style={{ color: "black",pointerEvents:score.isComplate?"none":""}}>
                    <div className='mb-2'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='fs-4 text-capitalize'>{score.companyName}</div>
                            <IoMdReturnRight size={25} />
                        </div>
                        <div className='d-flex'>
                            <label className='' style={{ fontSize: 11, color: "tomato" }}>{formatDate()}</label>
                        </div>
                        <div className='d-flex'>
                            <label>Ücret : </label>
                            <label className='fs-6 ms-1'> {score.price}</label>
                        </div>

                        <div className='d-flex'>
                            <div>Kişi Sayısı : </div>
                            <label className=' fs-6 ms-1' > {score.count}</label>
                        </div>
                    </div>

                </Link>
                <div className='d-flex justify-content-evenly align-items-center'>
                    <button className='btn bg-light' disabled={score.isComplate == true} onClick={()=>deleteWrk(score._id)}>Sil</button>
                    <button className='btn bg-light' onClick={()=>updateWork(score._id,{isComplate:!score.isComplate})}>{score.isComplate == true ?"Düzen Modu":"Tamamlandı"}</button>
                </div>

            </div>
        </div>
    )
}

export default Card