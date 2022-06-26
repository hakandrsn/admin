import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchScores, updateWork, deleteWork } from "../../actions/score"
import Card from './components/Card'

const Score = (props) => {
  const [search, setSearch] = useState("")
  useEffect(() => {
    props.fetchScores()
  }, [])
  const filteredScore = props.scores && props.scores.filter(sc => {
    if (search == "") return props.scores
    return sc.companyName.toLowerCase().includes(search.toLowerCase()) || sc.date.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className=''>
      <div className='d-flex justify-content-center mb-3'>
        <input
        placeholder='Search'
          onChange={(value) => setSearch(value.target.value)}
          className='border-0 w-50 py-1 px-2' style={{ backgroundColor: "ActiveBorder", color: "white" }} type="search" />
      </div>
      <div className='row row-cols-1 row-cols-md-2'>
        {props.scores && props.scores.length > 0 ?

          props.scores && filteredScore.map((score, i) => {
            return (
              <Card key={i} score={score} updateWork={props.updateWork} deleteWork={props.deleteWork} />
            )
          })
          : <div className='text-center fs-4'>Puantaj bulunamadı</div>}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    scores: Object.values(state.scores)
  }
}

export default withRouter(connect(mapStateToProps, { fetchScores, updateWork, deleteWork })(Score))