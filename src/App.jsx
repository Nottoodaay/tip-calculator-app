import { useState } from 'react'
import './App.css'
import { Properties } from './components/properties/Properties'
import { Results } from './components/results/Results'

function App() {
  const [bill, setBill] = useState('')
  const [percent, setPercent] = useState('')
  const [personQuantity, setPersonQuantity ] = useState('')


  return (
    <div className='body'>
      <div className='logo'>S P L I <br/> T T E R</div>

      <div className='appContainer'>
        <Properties 
          setBill={setBill}
          bill={bill}
          setPercent={setPercent}
          personQuantity={personQuantity}
          setPersonQuantity={setPersonQuantity}
          />

        <Results 
        bill={bill} 
        setBill={setBill}
        percent={percent}
        setPercent={setPercent} 
        personQuantity={personQuantity}
        setPersonQuantity={setPersonQuantity}
        />
      </div>
    </div>
  )
}

export default App
