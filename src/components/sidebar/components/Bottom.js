import React from 'react'
import { Link } from 'react-router-dom'
const Bottom = ({ pages, width, path }) => {
    return (
        <div className='position-absolute translate-middle top-100 start-50 bg-dark w-100 ' style={{zIndex:10,height:50}}>
            <div className="nav nav-pills mb-auto list-unstyled list-group-horizontal flex-nowrap">
                {
                    pages && pages.map((page, index) => {
                        return (
                            <label className='nav-item px-3 py-2 d-flex ' key={index} style={{fontSize:7,width:width}}>
                                <Link to={`${page.path}`} className={`nav-item ${path == page.path ? "active" : "link-light"} text-decoration-none d-flex  flex-column`}>
                                   <div className='mx-auto mb-1 flex-nowrap'> {<page.icon size={width > 1000 && 30 || width < 600  && 14 || 21} style={{ marginRight: 5 }} />}</div>
                                    <label className='text-nowrap' >{page.name}</label>
                                </Link>
                            </label>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Bottom