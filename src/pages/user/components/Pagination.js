import React from 'react'

const Pagination = ({page,setPage,user}) => {
  return (
    <nav aria-label="Page navigation example">
    <ul className="pagination justify-content-center">
      <li className="page-item">
        <button className="page-link"  onClick={() => setPage(page >1 ? page - 1:page)} >önceki</button>
      </li>
      <li className="page-item"><a className="page-link" href="#">{page}</a></li>
      <li className="page-item">
        <button className="page-link" onClick={() => setPage(user > 1 ? page+1:page)}>Sonraki</button>
      </li>
    </ul>
  </nav>
  )
}

export default Pagination