
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
// import { wait } from '@testing-library/user-event/dist/utils';

// function App() {
//  const  [quots,setQuots]=useState('')

// useEffect(()=>{
//   async function callApi (){
//     const getAdvice= axios.get("https://api.adviceslip.com/advice")
//     console.log(getAdvice)
//     setQuots(getAdvice.data.slip.advice)
//   }
// callApi()
// console.log("advice::",quots)
 

//   },[])


const App=(props)=> {
  const [quots,setQuots]=useState('')
 useEffect(()=>{
    const callApi=async ()=>{
  axios.get("https://api.adviceslip.com/advice")
  .then((res)=>{
    setQuots(res.data)
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })
  }
 callApi()
 
 console.log("advice::",quots)
 },[onClick])

 return (
    <div className="App">
      <header className="App-header">
       <h1 className='advice'>{quots?.slip?.advice}</h1>


       <button className='button' onClick={((props.setQuots)=>
  }) }>

        <span>GIVE ME ADVICE!!</span>
        
        </button>

      </header>
    </div>
  );
}

export default App;
 