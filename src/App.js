
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';

function App() {
 const  [quots,setQuots]=useState('')
useEffect(()=>{
  async function callApi (){
    const getAdvice= await axios.get("https://api.adviceslip.com/advice")
    setQuots(getAdvice.data.slip.advice)
  }
callApi()
console.log("advice::",quots)
 

  },[])





  return (
    <div className="App">
      <header className="App-header">
       <h1 className='advice'>{quots}</h1>
       <button className='button' >
       <span>GIVE ME ADVICE!!</span> 

       </button>
      </header>
    </div>
  );
}

export default App;
