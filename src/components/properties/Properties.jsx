import React, { useState } from 'react'
import '../../App.css'

export const Properties = ({bill, setBill, setPercent, personQuantity, setPersonQuantity}) => {

  const [isBillValueLong, setIsBillValueLong] =useState(false)
  const [isPersonValueLong, setIsPersonValueLong] =useState(false)

  const handleClick = (percent) =>{
    setPercent(percent)
  }

  const handleBillInputChange = (e) =>{
    const newValue = e.target.value
    setBill(newValue)
    
    setIsBillValueLong(newValue.length > 26)
  }

  const handlePersonInputChange = (e) =>{
    const newValue = e.target.value
    setPersonQuantity(newValue)

    setIsPersonValueLong(newValue.length > 20)
  }

  return (
    <div>
     <div className='billContainer'>
      <p className='inputGuide'>Bill</p>
      <input
      className={isBillValueLong ? 'smaller-font' : ''}
      type="number" 
      placeholder='0' 
      value={bill}
      required 
      onChange={event => handleBillInputChange(event)} />
     </div>

      <p className='inputGuidePercent'>Select Tip %</p>

     <div className='percentContainer' >
      <div className='percent' onClick={()=>handleClick(5)}>5%</div>
      <div className='percent' onClick={()=>handleClick(10)}>10%</div>
      <div className='percent' onClick={()=>handleClick(15)} >15%</div>
      <div className='percent' onClick={()=>handleClick(25)}>25%</div>
      <div className='percent' onClick={()=>handleClick(50)}>50%</div>
      <input className='custom' placeholder='Custom' type="text" onChange={e =>setPercent(e.target.value)}/>
    </div>

    <div className='personContainer'>
      <p className='inputGuide'>Number Of People</p>
      <input 
      type="number" 
      className={isPersonValueLong ? 'smaller-font' : ''}
      placeholder='0' 
      value={personQuantity} 
      required
      onChange={event => handlePersonInputChange(event)} />
    </div>
    </div>
  )
}
