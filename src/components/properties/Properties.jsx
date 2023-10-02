import React from 'react'

export const Properties = ({setBill , setPercent, setPersonQuantity}) => {
  return (
    <div>
     <div className='billContainer'>
      <input type="number"  placeholder='0' onChange={event => setBill(event.target.value)} />
     </div>

     <div className='percentContainer' >
      <div className='percent' onClick={()=>setPercent(5)}>5%</div>
      <div className='percent' onClick={()=>setPercent(10)}>10%</div>
      <div className='percent' onClick={()=>setPercent(15)} >15%</div>
      <div className='percent' onClick={()=>setPercent(25)}>25%</div>
      <div className='percent' onClick={()=>setPercent(50)}>50%</div>
      <input className='custom' placeholder='Custom' type="text"/>
    </div>

    <div className='personContainer'>
      <input type="number" placeholder='0' onChange={event => setPersonQuantity(event.target.value)} />
    </div>
    </div>
  )
}
