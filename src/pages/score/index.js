import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {  withRouter } from 'react-router-dom'
import { fetchScores } from "../../actions/score"
import Card from './components/Card'

const Score = (props) => {
  useEffect(() => {
    props.fetchScores()
  }, [])
  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-2'>
        {
          props.scores && props.scores.map((score, i) => {
            return (
              <Card key={i} score={score} /> 
            ) 
          })
        }
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    scores: Object.values(state.scores)
  }
}

export default withRouter(connect(mapStateToProps, { fetchScores })(Score))