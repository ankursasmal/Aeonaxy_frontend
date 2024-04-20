import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col  '>
      <a className='self-center font-bold md:text-[2vw] sm:text-[4vw] my-6 ' style={{ fontFamily: "Domine, serif !important" }}>Medium</a>
      <div className='flex items-center self-center mb-5  '>
        <a href="">Items</a>
        <a href="" className='px-4'>Privacy</a>
        <a href="">Help</a>
      </div>
    </div>
  )
}

export default Footer
