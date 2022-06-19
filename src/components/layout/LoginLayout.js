import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Router ,withRouter} from 'react-router-dom'
import history from '../../core/history'
import Login from '../../pages/login';

const LoginLayout = () => {
  return (
    <div className='login-layout'>
         <Router history={history}>
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    </div>
  )
}

export default withRouter(connect(null,null)(LoginLayout))