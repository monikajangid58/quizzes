import React from 'react'

function QuizeResult(props) {
  return (
    <div>
   your score: {props.score}
   
  total score:  {props.totalScore}
    </div>
  )
}

export default QuizeResult