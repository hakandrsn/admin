import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchCompanies } from "../../actions/company"
import { fetchScores ,createScore} from "../../actions/score"
import { fetchUsers } from '../../actions/user'
import { addHandler,deletePersonel,addOneHandler,clearList} from '../../actions/gopersonel'
import OtherUser from './components/OtherUser'
import HandlerPersonel from './components/HandlerPersonel'
import PersonelList from './components/PersonelList'

const GoPersonel = (props) => {
  useEffect(() => {
    props.fetchCompanies()
    props.fetchUsers()
  }, [])

  return (
    <div>
      <HandlerPersonel addHandler={props.addHandler} users={props.users} companies={props.companies} />
      <OtherUser addOneHandler={props.addOneHandler} />
      <PersonelList personel={props.personel} extraPersonel={props.extraPersonel} createScore={props.createScore} clearList={props.clearList} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    companies: Object.values(state.companies),
    users: Object.values(state.users),
    personel:state.goPersonel.users,
    extraPersonel:Object.values(state.goPersonel.extraUsers)
  }
}


export default withRouter(connect(mapStateToProps, {clearList,createScore, fetchCompanies, fetchScores, fetchUsers,addOneHandler, addHandler,deletePersonel })(GoPersonel))