import React from 'react'
import logo from './images/logo.png';
function Nav() {
  return (
  <div> 
    <div className='flex items-center justify-between w-[100vw] my-[1vw]'>
  <img className='px-3 w-[21vw]' src={logo} alt="" />
<div className='flex items-center justify-between w-100 px-3'>
    <div className='flex items-center flex-col p-1'>
      <a href='' className='text-[1vw]'>Our story</a>
      <div className='font-bold bg-black w-[100%] h-[1px]'></div>

      </div>
    <a href="" className='px-3  text-[1vw]'>Membership</a>
    <a className='text-[1vw]'>Write
    </a>
<a className='px-4  text-[1vw]'>
  Sign in
</a>
<a className='px-[2vw] py-[.5vw] rounded-3xl bg-black text-white text-[1vw]'>Get started</a>
</div>
</div>
<div className='font-bold bg-black w-[100vw] h-[.7px]'></div>
    </div>
  )
}

export default Nav
