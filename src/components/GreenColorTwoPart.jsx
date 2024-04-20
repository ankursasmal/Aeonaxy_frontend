import React from 'react'
import greenpart1 from './images/greenpart1.png'
import greenpart from './images/greenpart.png'
import style from './Style/GreenColorTwoPart.module.css'
function GreenColorTwoPart() {
  return (
    <div className='bg-green-600'>
      <div className='font-bold bg-black w-[100vw] h-[.9px]'></div>

      <div class="grid sm:justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
        {/* col 1 */}
        <div className={`${style.center_property} col-span-1 flex items-center justify-between `}>

          <div className=' flex  flex-col py-[1vh] px-[.5vw]  sm:self-center '>
            <a className='text-[4vw]  ' style={{
              fontFamily: "Domine, serif !important"
            }}>

              Read as much as you want.
            </a>

            <img src={greenpart1} alt="" className='w-[13vw] mt-4' />
            <a className='my-7  '>Enjoy unlimited access to every story across all of your devices.</a>
          </div>
          <div className='font-bold bg-black h-[100%] w-[.9px]'></div>

        </div>
        {/* col 2 */}

        <div className={`${style.center_property} col-span-1 flex  flex-col py-[1vh] px-[.5vw]  `}>
          <a className='text-[4vw]   ' style={{
            fontFamily: "Domine, serif !important"
          }}>

            Reward quality content.</a>

          <img src={greenpart} alt="" className='w-[13vw] mt-4' />
          <a className='my-7'>Your membership helps us pay writers, and keeps your experience ad-free.</a>
        </div>
        <div className='font-bold bg-black  w-[100vw] h-[.9px]'></div>

      </div>


    </div>
  )
}

export default GreenColorTwoPart
