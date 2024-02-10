import React, { useRef, useState } from 'react';
import "./Main.css"
import QuestionList from './QuestionList';

function Main() {
  let [index ,setIndex] = useState(0);
  let [question , setQuestion] = useState(QuestionList[index]);
  let [lock,setLock] = useState(false);
  let [score ,setScore] = useState(0);
  let [result, setResult] = useState(false);
  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);
  
  let option_array = [Option1,Option2,Option3,Option4];
  const checkAns = (e, ans)=>{
  if(lock ===false){
    if(question.ans === ans){
      e.target.classList.add("correct")
      setLock(true)
      setScore(prev=>prev+1)
    }
    else{
      e.target.classList.add("wrong")
      setLock(true)
      option_array[question.ans-1].current.classList.add("correct")
    }
  }
    }


    const next = ()=>{
      if(lock ===true){
        if(index ===QuestionList.length-1){
          setResult(true)
          return 0;
        }
        setIndex(index+1)
        setQuestion(QuestionList[index])
        setLock(false)
        option_array.map((option)=>{
          option.current.classList.remove("wrong")
          option.current.classList.remove("correct")
          return null;
        })
      }
    }
const reset = ()=>{
  setIndex(0)
  setQuestion(QuestionList[index])
  setScore(0)
  setLock(false)
  setResult(false)
}
  return (

    <div className='container'>
      {
        result?<></>:<><h1>Programming Quiz</h1>
        <hr />
        <h2>{index+1}.{question.question}</h2>
        <img src={question.img} alt="" style={{width:"333px"}} />
        <ul>
          <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
          <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
          <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
          <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
        </ul>
        <button onClick={next} style={{backgroundColor :"#2B23E3"}}>Next</button>
        <div className='index'>{index+1} of {QuestionList.length+1} Quesion</div></>
      }{
        result?<>
             <h2>Score {score} out of {QuestionList.length}</h2>
      <button onClick={reset}>Reset</button>
        </>:<></>
      }
 
    </div>
  )
}

export default Main;