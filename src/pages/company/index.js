import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { fetchCompanies } from '../../actions/company'
import Company from './components/Company'
import history from '../../core/history'
const Companys = (props) => {
    const [search, setSearch] = useState("")
    useEffect(() => {
        props.fetchCompanies()
    }, [props.companies.length, history.location.pathname])
    const searchingCompany = props.companies && props.companies.filter(comp => {
        if (search === "") {
            return comp
        }
        return comp.companyname.includes(search)
    })
    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-center'>
                <h3>Şirketler</h3>
            </div>
            <div className='d-flex flex-column flex-md-row flex-column-reverse justify-content-between align-items-center mb-3'>
                <div className='d-flex justify-content-center align-items-center mb-md-0 mt-4'>
                    <label className='px-3 py-2 rounded' style={{ backgroundColor: "#ff7675" }}>Ara</label>
                    <input className='' type="search" style={{ width: 200, height: 40 }} onChange={value => setSearch(value.target.value)} />
                </div>
                <div>
                    <Link to={`company/new`} className='text-decoration-none fs-5 py-2 px-3 rounded ' style={{ color: "black", backgroundColor: "#ff7675" }} >Yeni Şirket Ekle</Link>
                </div>
            </div>

            <div className='d-flex flex-wrap gap-2'>
                {searchingCompany && searchingCompany.map((item, index) => {
                    return (<Company key={index} data={item} />)
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        companies: Object.values(state.companies)
    }
}

export default withRouter(connect(mapStateToProps, { fetchCompanies })(Companys))