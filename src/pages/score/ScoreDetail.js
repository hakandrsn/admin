import axios from 'axios'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fetchScore } from "../../actions/score"
import ax from '../../core/ax'

const ScoreDetail = (props) => {
    const [reload, setReload] = React.useState(false)
    const [totalUserBalance, setTotalUserBalance] = React.useState(0)
    const [totalExtraBalance, setTotalExtraBalance] = React.useState(0)

    const { id } = props.match.params

    useEffect(() => {
        props.fetchScore(id)
        totalValues()
    }, [reload])
    const deleteOneUser = async (key) => {
        if (key.length === 11) {
            // props.deleteWorker(id, { key })
            await ax.patch(`/api/score/del/${id}`, { tc: key })
            setReload(!reload)
        } else if (key.length > 20) {
            await ax.patch(`/api/score/del/${id}`, { id: key })
            setReload(!reload)
        } else {
            toast.error("Hata")
        }

    }

    const totalValues = () => {
        if (props.score && props.score.users) {
            let total = 0
            props.score.users.forEach(user => {
                total += user.balance
            })
            setTotalUserBalance(total)
        }
        if (props.score && props.score.extraUsers) {
            let total = 0
            props.score.extraUsers.forEach(user => {
                total += user.balance
            })
            setTotalExtraBalance(total)
        }
    }
    return (
        <div>
            <div className='d-flex justify-content-center mb-2 position-relative  rounded align-items-center'>
                <Link to={`/works`} className='position-absolute start-0 border-0 rounded px-2 py-1 text-decoration-none' style={{ backgroundColor: "tomato", color: "black" }}>Geri</Link>
                <h3>{props.score && props.score.companyName}</h3>
                <Link to={`/works/add/${id}`} className='position-absolute end-0 border-0 rounded px-2 py-1 text-decoration-none' style={{ backgroundColor: "tomato", color: "black" }}>Personel Ekle</Link>
            </div>

            <div>
                <h5 className='text-center fs-5 mb-3 mx-auto w-50 rounded py-1' style={{ backgroundColor: "ButtonFace" }}>Bizden giden personel</h5>
                <div className='d-flex justify-content-between mx-4'>
                    <label>Sonuçlar</label>
                    <label>Toplam Ödeme : {totalUserBalance + totalExtraBalance}</label>
                </div>
                <div>

                    <table className='table mb-5'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Ad Soyad</th>
                                <th>Role</th>
                                <th>Ücreti</th>
                                <th>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.score && props.score.users && props.score.users.map((user, i) => {
                                    return (
                                        <tr key={i} className="mb-0">
                                            <th className="p-0 " scope="row">{i + 1}</th>
                                            <th className="p-0 ">{user.fullname}</th>
                                            <th className="p-0 ">{user.role}</th>
                                            <th className="p-0 ">{user.balance}</th>
                                            <th className="p-0 ">
                                                <div className="dropdown">
                                                    <button className="border-0 dropdown-toggle" style={{ backgroundColor: "transparent" }} type="button" id={`user${i}`} data-bs-toggle="dropdown" aria-expanded="false">
                                                        İşlemler
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby={`user${i}`}>
                                                        <li><button onClick={() => deleteOneUser(user.id)} className="dropdown-item" href="#">Sil</button></li>
                                                        <li><button className="dropdown-item" href="#">Düzenle</button></li>
                                                        <li><button className="dropdown-item" href="#">Para ekle</button></li>
                                                    </ul>
                                                </div>
                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <h5 className='text-center fs-5 mb-3 mx-auto w-50 rounded py-1' style={{ backgroundColor: "ButtonFace" }}>Dışardan gelen personel</h5>
                    <table className='table' >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Ad Soyad</th>
                                <th>Role</th>
                                <th>Telefon</th>
                                <th>Tc</th>
                                <th>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.score && props.score.extraUsers && props.score.extraUsers.map((user, i) => {
                                    return (
                                        <tr key={i}>
                                            <th className="p-0 " scope="row">{i + 1}</th>
                                            <th className="p-0 ">{user.fullname}</th>
                                            <th className="p-0 ">{user.role}</th>
                                            <th className="p-0 ">{user.phone}</th>
                                            <th className="p-0 ">{user.tc}</th>
                                            <th className="p-0 ">
                                                <div className="dropdown">
                                                    <button className="border-0  dropdown-toggle" style={{ backgroundColor: "transparent" }} type="button" id={`user${i}`} data-bs-toggle="dropdown" aria-expanded="false">
                                                        İşlemler
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby={`user${i}`}>
                                                        <li><button onClick={() => deleteOneUser(user.tc)} className="dropdown-item" href="#">Sil</button></li>
                                                        <li><button className="dropdown-item" href="#">Düzenle</button></li>
                                                        <li><button className="dropdown-item" href="#">Para ekle</button></li>
                                                    </ul>
                                                </div>
                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        score: state.scores[ownProps.match.params.id]
    }
}

export default withRouter(connect(mapStateToProps, { fetchScore })(ScoreDetail))