import React from 'react'
import { Switch, Route, Router, withRouter } from 'react-router-dom'


//base
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

//Pages
import Dashboard from '../../pages/dashboard'
import Profile from "../../pages/profile" 
import Request from '../../pages/request/Request'
import User from '../../pages/user'
import Company from "../../pages/company"

//components
import NewUser from '../../pages/user/NewUser'
import UpdateUser from '../../pages/user/UpdateUser'
import NewCompany from '../../pages/company/NewCompany'
import UpdateCompany from '../../pages/company/UpdateCompany'
import GoPersonel from "../../pages/personel/GoPersonel"
//scores
import Score from '../../pages/score'
import ScoreDetail from '../../pages/score/ScoreDetail'
import AddPersonel from '../../pages/score/AddPersonel'

const AdminLayout = () => {
  return (
    <div className='admin-layout'>
    <Header/>
    <Sidebar />
    <main>
      <Switch>
         <Route exact path="/" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={User} />
        <Route exact path="/user/new" component={NewUser} />
        <Route exact path="/user/:id" component={UpdateUser} />

        <Route exact path="/companys" component={Company}  />
        <Route exact path="/works" component={Score}  />
        <Route exact path="/works/:id" component={ScoreDetail}  />
        <Route exact path="/works/add/:id" component={AddPersonel}  />


        <Route exact path="/company/new" component={NewCompany} />
        <Route exact path="/company/:id" component={UpdateCompany} />

        <Route exact path="/gopersonel" component={GoPersonel} />

{/* 
        <Route exact path="/request/new" component={Newreq} />
        <Route exact path="/waitworks/gopc/:id" component={ListDetailForWork} />  */}



      </Switch>
    </main>
    <Footer />
  </div>
  )
}

export default AdminLayout