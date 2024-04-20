import React from 'react'
import mobile from './images/mobile.png'
function AppSection() {
  return (
    <div style={{ backgroundColor: '#bef7a3' }}>
      <div class="grid sm:justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
        <div className='col-span-1 flex  flex-col py-[2vw] px-[2vw]'>
          <a className='text-[8vw]   ' style={{
            fontFamily: "Domine, serif !important", lineHeight: '7vw'
          }}>

            Take Medium with you.</a>
          <a className='mt-10 text-[1.5vw] sm:pl-[12px]'>Download our app so you can read wherever you
            are.</a>
          <div className='flex  h-[3vw] mt-9  flex-wrap'>
            <div className='flex items-center justify-between  mx-4   bg-black px-[1vw] rounded-md'>
              <img src="https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png" className='w-[3vw] text-white' alt="" />
              <div className='flex flex-col items-center pr-[1vw]'>
                <a className='text-white text-[.7vw]'> Download on the</a>
                <a className='text-[1.2vw] text-white font-bold'> App Store</a>
              </div>

            </div>
            <div className='flex items-center justify-between h-[3vw] bg-black rounded-md px-[1vw]'>
              <img src=" https://media.wired.com/photos/592697678d4ebc5ab806acf7/master/pass/GooglePlay.jpg" className='w-[4vw] text-white' alt="" />
              <div className='flex flex-col   pr-2'>
                <a className='text-white text-[1vw]'>Get it on </a>
                <a className='text-[1.4vw]  text-white font-bold'> Google Play</a>
              </div>

            </div>
          </div>
        </div>
        <div className='col-span-1 flex pt-[3vw] justify-center items-center'>
          <img src={mobile} className='h-[20vw] self-end  ' alt="" />

        </div>

      </div>
      <div className='font-bold bg-black  w-[100vw] h-[.9px]'></div>

    </div>

  )
}

export default AppSection
