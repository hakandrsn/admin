import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { fetchUsers } from '../../actions/user'
import Pagination from './components/Pagination'
import User from './components/User'

const Users = (props) => {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [reload, setReload] = useState(true)
  useEffect(() => {
    props.fetchUsers(page)
  }, [page,reload])
  const filteredUsers = props.users && props.users.filter(user => {
    if (search == "") return props.users
    return user.firstname.toLowerCase().includes(search.toLowerCase()) || user.lastname.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center'>
        <h3>Personeller</h3>
      </div>
      <div className='d-flex flex-column flex-md-row flex-column-reverse justify-content-between align-items-center mb-3'>
        <div className='d-flex justify-content-center align-items-center mb-md-0 mt-4'>
          <label className='px-3 py-2 rounded' style={{ backgroundColor: "#ff7675" }}>Ara</label>
          <input className='' type="search" style={{ width: 200, height: 40 }} onChange={value => setSearch(value.target.value)} />
         <div className='ms-2 fs-4'>
           <label >Mevcut Personel</label>
         <label className=' ms-3'>{props.users&& props.users.length}</label>
         </div>
        </div>
        <div>
          <Link to={`user/new`} className='text-decoration-none fs-5 py-2 px-3 rounded ' style={{ color: "black", backgroundColor: "#ff7675" }} >Yeni personel ekle</Link>
        </div>
      </div>

      <div className='d-flex flex-wrap gap-2 mb-4'>
        {filteredUsers && filteredUsers.map((user) => {
          return <User key={user._id} data={user} setReload={setReload} reload={reload}/>
        })}
      </div>
      {filteredUsers && filteredUsers.length > 0 || <h4 className='text-center'>Personel Bulunmuyor</h4>}
      {filteredUsers.length > 0 && <Pagination page={page} setPage={setPage} user={filteredUsers.length} />}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    users: Object.values(state.users)
  }
}

export default withRouter(connect(mapStateToProps, {fetchUsers})(Users))