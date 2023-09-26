import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bill, setBill] = useState(0)
  const [percent, setPercent] = useState(0)
  const [personQuantity, setPersonQuantity ] = useState(0)

  const countTipAmountPerson = (bill, percent, person) =>{
    const persentCount =  bill * (percent/100)
    const persentPerPerson = persentCount / person
    return persentPerPerson
  }

  const countTotal = (bill, percent, person) =>{
    const tipAmount = ((bill / 100) * percent) / person
    const total = (bill / person) + tipAmount
    return total
  }

  return (
    <>
    <div className='billContainer'>
      <input type="number"  onChange={event => setBill(event.target.value)} />
      <div>{bill}</div>
    </div>

    <div className='percent container' style={{marginTop:'40px'}} >
      <div>{percent}</div>
      <div onClick={()=>setPercent(10)}>10%</div>
      <div onClick={()=>setPercent(15)} >15%</div>
    </div>

    <div className='person' style={{marginTop: '40px'}}>
      <input type="number" onChange={event => setPersonQuantity(event.target.value)} />
      <div>{personQuantity}</div>
    </div>
    
    <div className='result' style={{marginTop: '20px'}}>
      <div>{ countTipAmountPerson(bill, percent, personQuantity)}</div>
    </div>

    <div className='totalPerPerson' style={{marginTop: '40px'}} >
      {countTotal(bill, percent, personQuantity)}
    </div>
    </>
  )
}

export default App
