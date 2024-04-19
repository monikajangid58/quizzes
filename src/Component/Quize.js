import React, { useState } from 'react'
import QuizeData from '../Data/QuizeData'
import QuizeResult from './QuizeResult';
function Quize() {
  const[currentQuestion,setCurrentQuestion]=useState(0);
  const[score,setScore]=useState(0)
  const[clickedOpestion,setClickedOpestion]=useState(0)
  const[showResult,setShowResult]=useState(false)
  const changeQuestion=()=>{
    updateScore()
if(currentQuestion<QuizeData.length-1){
setCurrentQuestion(currentQuestion+1)
setClickedOpestion(0)

  }else{
setShowResult(true)
  }
  
      }
    

const prevQuestion=()=>{
  //if(currentQuestion<QuizeData.length-1){
  
  setCurrentQuestion(currentQuestion-1)
   // }else{
  
    //}
  }
  const updateScore=()=>{
    if(clickedOpestion===QuizeData[currentQuestion].answer){
    setScore(score+1)
    
    }else{
      setShowResult(true)
    }
    

    }
  return (
      
    <div>
    
    <p className='heading-txt'>TODO APP</p>
    
    <div className='container'>
    {showResult ? (
<QuizeResult score={score} totalScore={QuizeData.length} />



    ):(
      <>

    <div className='question'>
    <span>{currentQuestion+1} </span>
    <span>{QuizeData[currentQuestion].question}</span>
    </div>
    <div className='option-container'>
    {QuizeData[currentQuestion].options.map((option,i)=>{
return(
<button className={`option-btn ${clickedOpestion == i+1?"checked":null}`} key={i} onClick={()=>setClickedOpestion(i+1)}>
{option}
</button>


)
    })}
    </div> 
    <input type="button" value="Next" id="next-buttom" onClick={changeQuestion} />
    <input type="button" value="Pre" id="pre-buttom" onClick={prevQuestion} />
    </>)}
    </div>

    </div>
  )
}

export default Quize