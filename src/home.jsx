import { useState } from 'react'
import recapLogo from '/src/assets/recapLogo.png'
import './App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        { /* First div for web app name and dev team */ }
        <div className='flex w-full justify-center'>
          <img src={recapLogo} className='w-12 h-13 mt-4 mr-2' alt='recapAI logo' />
          <p className='company'>
            RECAP
            <span>
              FOUR-EYES
            </span>
            AI
          </p>
        </div>
        { /* Second div for web app moto */ }
        <div>
          <h1 className='home'>
            MAKING
            <br/>
            MEETINGS
            <br/>
            WORK FOR YOU
          </h1>
        </div>
        { /* Third div for button to access app */ }
        <div>
          <button className='button'>
            Get Started &gt;&gt;
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
