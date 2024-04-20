import React from 'react'
import cube from './images/cube.png'

function Cube() {
  return (
    <div  > 
 
      <div class="grid sm:justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
        {/* col 1 */}
      <div className='col-span-1 flex items-center justify-between '>
<a></a>
    <img src={cube} alt=""  className='w-[25vw] self-center my-4'  />
        <div className='font-bold bg-black h-[100%] w-[.9px]'></div>

        </div> 
        {/* col 2 */}
        <div className='col-span-1 flex items-center justify-between  pr-[1vw]'>

<div className='  pl-4 flex  flex-col '>
<a className='text-[8vw] mt-[2vw] mb-[9vw]' style={{ fontFamily: "Domine, serif !important",lineHeight:'6.5vw'
}}>
 
 Read, write,
and expand
your world.</a>

<button className='text-white text-[1.5vw] bg-green-500 border-[1px]    rounded-full  self-start px-[1.5vw] py-[.5vw] mb-8'>Get started</button>       
     </div>
     <div className='font-bold bg-black h-[100%] w-[.9px]'></div>
</div>
<div className='font-bold bg-black  w-[99vw] h-[.9px]'></div>

     </div> 
        
    
      </div> 
  )
}

export default Cube
