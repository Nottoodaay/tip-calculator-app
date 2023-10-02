import React from 'react'

export const Results = ({bill, setBill , percent, setPercent, setPersonQuantity,personQuantity}) => {

    const countTipAmountPerson = (bill, percent, person) =>{
        const persentCount =  bill * (percent/100)
        const persentPerPerson = persentCount / person
        if(persentPerPerson){
          return persentPerPerson
        }else{
          return '$0.00'
        }
      }
    
      const countTotal = (bill, percent, person) =>{
        const tipAmount = ((bill / 100) * percent) / person
        const total = (bill / person) + tipAmount
        if(total){
          return total
        }else{
          return '$0.00'
        }
      }

      const resetState = () =>{
       setBill(0)
       setPercent(0)
       setPersonQuantity(0)
      }

  return (
    <div className='resultContainer'>
      <div className='result'>
        <div className='resultText'>
          <h3>Tip Amount</h3>
          <p>/ person</p>
        </div>

        <div className='resultAmountPerson'>
          { countTipAmountPerson(bill, percent, personQuantity)}
        
        </div>
      </div>

    <div className='result'>
      <div className='resultText'>
        <h3>Total</h3>
        <p>/ person</p>
      </div>
      <div className='resultAmountPerson' >
        {countTotal(bill, percent, personQuantity)}
      </div>
    </div>
      

      <div 
      className='restButton' 
      onClick={resetState}
      >
        RESET
      </div>
      
    </div>
  )
}
