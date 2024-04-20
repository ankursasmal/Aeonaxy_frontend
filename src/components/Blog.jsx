import React from 'react'
import style from './Style/Blog.module.css'

function Blog() {
  return (
    <div  >
      <div className='font-bold bg-black w-[100vw] h-[.9px]'></div>

      <div class="grid sm:justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
        {/* col 1 */}
        <div className='col-span-1 flex items-center justify-between '>

          <a className={` self-start p-4 text-[7.3vw]  `} style={{
            fontFamily: "Domine, serif !important", lineHeight: '6.5vw'
          }}>Learn more
            about us. Or
            join us.</a>

          <div className='  font-bold bg-black h-[100%] w-[.9px]'></div>

        </div>
        {/* col 2 */}

        <div className=' col-span-1 flex sm:flex-row  md:flex-col  lg:flex-col self-start '>
          <div className='flex flex-col   sm:justify-center pt-4'>
            <a className={`${style.textCenter} text-[3vw]  text-black`}> The Medium blog</a>
            <a className={`${style.textCenter1} text-black `} > Visit our company blog for the latest news, product updates, and tips and tricks.</a>
            <button className='text-green-400 border-green-400 border-[1px] sm:mt-[1vw]  mt-[4vw] rounded-full self-start mx-4 px-[2vw] py-[.5vw] mb-8'>Read our blog</button>
            <div className={`${style.hiderule}   font-bold bg-black w-[49vw] h-[.9px]`}></div>


          </div>
          <div className='flex flex-col  pt-4'>
            <a className={`${style.textCenter} text-[3vw]  text-black`}>Work at Medium</a>
            <a className={`${style.textCenter1} text-black  `} > Our team is home to engineers, journalists, artists,
              and creatives of all stripes.</a>
            <button className='text-green-500 border-green-500 mx-7 border-[1px] sm:mt-[1vw] mt-[4vw]   rounded-full  self-start px-[2vw] py-[.5vw] sm:text-[.4vw] md:text-[1vw] lg:text-[1.4vw] mb-8'>View open positions</button>


          </div>
        </div>


      </div>
      <div className='font-bold bg-black   w-[99vw] h-[.9px]'></div>


    </div>
  )
}

export default Blog
