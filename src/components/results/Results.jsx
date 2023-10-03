import React from 'react'
import '../../App.css'

export const Results = ({bill, setBill , percent, setPercent, setPersonQuantity,personQuantity}) => {

    const countTipAmountPerson = (bill, percent, person) =>{
        if(bill > 0 && percent > 0 && person > 0){
          const persentCount =  bill * (percent/100)
          const persentPerPerson = persentCount / person
          return Math.floor(persentPerPerson) 
        }else{
          return '0'
        }
      }
    
      const countTotal = (bill, percent, person) =>{
        if(bill > 0 && percent > 0 && person > 0){
          const tipAmount = ((bill / 100) * percent) / person
          const total = (bill / person) + tipAmount
          return Math.floor(total) 
        }else{
          return '0'
        }
      }

      const resetState = () =>{
       setBill('')
       setPercent('')
       setPersonQuantity('')
      }

      const resultAmountPerson = 
        bill.length > 26 || personQuantity.length > 26 ? 'resultAmountPerson smaller-font-result' : 'resultAmountPerson'

  return (
    <div className='resultContainer'>
      <div className='result'>
        <div className='resultText'>
          <h3>Tip Amount</h3>
          <p>/ person</p>
        </div>

        <div className={resultAmountPerson}>
          { `$${countTipAmountPerson(bill, percent, personQuantity)}.00`}
        
        </div>
      </div>

    <div className='result'>
      <div className='resultText'>
        <h3>Total</h3>
        <p>/ person</p>
      </div>
      <div className={resultAmountPerson} >
        {`$${countTotal(bill, percent, personQuantity)}.00`}
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
