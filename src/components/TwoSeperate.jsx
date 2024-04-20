import React from 'react'
import circleimg from './images/circleimg.png'
function TwoSeperate() {
  return (
    <div className=''>


      <div className='font-bold bg-black w-[100vw] h-[.9px]'></div>
      <div class="grid sm:justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
        {/* col 1 */}
        <div className='col-span-1 flex  justify-between '>
          <div className='flex flex-col items-center py-[4vw] px-[6vw]'>
            <a>
              The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations.
              We're an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of anv topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.
            </a>
            <a className='mt-7'>We're creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It's an environment that's open to everyone but promotes substance and authenticity. And it's where deeper connections forged
              between readers and writers can lead to discoverv and growth.
              Together with millions of collaborators, were building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.</a>
          </div>
          <div className='font-bold bg-black w-[.7px] h-[100%]'></div>
        </div>

        {/* col 2 */}
        <div className=' col-span-1 flex justify-center m-auto '>


          <img src={circleimg} alt="" className='w-[20vw] my-4 sm:w-[30vw]' />

        </div>
        <div className='font-bold bg-black w-[100vw] h-[.7px]'></div>

      </div>


    </div>
  )
}

export default TwoSeperate
