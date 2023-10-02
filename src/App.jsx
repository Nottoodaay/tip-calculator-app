import { useState } from 'react'
import './App.css'
import { Properties } from './components/properties/Properties'
import { Results } from './components/results/Results'

function App() {
  const [bill, setBill] = useState(0)
  const [percent, setPercent] = useState(0)
  const [personQuantity, setPersonQuantity ] = useState(0)


  return (
    <body>
      <div className='appContainer'>
        <Properties 
          setBill={setBill}
          setPercent={setPercent}
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
    </body>
  )
}

export default App
