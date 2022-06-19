import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import FormCompany from './components/FormCompany'
import {fetchCompany,updateCompany} from '../../actions/company'

const UpdateCompany = (props) => {
    const {id} = props.match.params
    useEffect(()=>{
        props.fetchCompany(id)
    },[])
    const onSubmit = data => {
        props.updateCompany(data)
    }
  return (
    <div>
        <div className='d-flex justify-content-center'>
            <h2>Şirket Güncelle</h2>
        </div>
        <FormCompany initialValues={props.company} onSubmit={onSubmit} />
    </div>
  )
}
const mapStateToProps = (state,ownProps) => {
    return {
        company: state.companies[ownProps.match.params.id],
    }
}
export default withRouter(connect(mapStateToProps, {fetchCompany,updateCompany})(UpdateCompany))