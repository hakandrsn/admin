import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pages } from './Pages';
import screen from "../../core/screen"
import jwt_decode from 'jwt-decode';
import { logout } from "../../actions/login"
import Bottom from './components/Bottom';
import Left from './components/Left';
const Sidebar = (props) => {
    const [width] = screen()
    const { location } = props;
    const path = location.pathname;
    const [user, setUser] = useState([]);
    const ad = localStorage.getItem("token") && localStorage.getItem("token");
    const decoded = jwt_decode(ad);
    useEffect(() => {
        if (ad) setUser(decoded);
    }, [])
    return (
       <div >
             {
                width < 600 ?
                    <Bottom pages={pages} width={width} path={path} /> :
                    <div className="container-sidebar d-flex flex-column flex-shrink-0 p-3" style={{ width: width < 1000 ? 100 : 280, color: "white", height: "100%", zIndex: 1 }}>
                        <Left pages={pages} width={width} path={path} user={user} logout={props.logout} />
                    </div>
            }
       </div>

    )
}
const mapStateToProps = (state) => {
    return {
        admin: state.admin
    }
}

export default withRouter(connect(mapStateToProps, { logout })(Sidebar))