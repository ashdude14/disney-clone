import React from 'react'

function Headeritem({name,Icon}) {
  return (
    <div className='text-white flex text-center gap-3 text-[15px] font-semibold hover:underline underline-offset-8 mb-3'>
      <Icon/>
      <h2>{name}</h2>
      <h2 className='hidden md:block'>{""} </h2>
    </div>
  )
}

export default Headeritem
