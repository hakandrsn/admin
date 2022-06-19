import React from "react";
import ReactDOM from "react-dom"
import "./Loading.css"

const Loading = () => {
    return ReactDOM.createPortal(
        <div
            className="modal-main">
        
                <div className="preloader">
                    <div className="preloader__square"></div>
                    <div className="preloader__square"></div>
                    <div className="preloader__square"></div>
                    <div className="preloader__square"></div>
                </div>
                <div className="status">Loading<span className="status__dot">.</span><span className="status__dot">.</span><span className="status__dot">.</span></div>
        </div>,
        document.getElementById("loading")
    );

}
export default Loading