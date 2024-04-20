import React from 'react'
import style from './Style/LargeText.module.css'
function LargeText() {
  return (
    <div className=' w-[100vw] flex justify-center '>
      <div className='flex items-center sm:px-[3vw]'> 
              <a className={`${style.textsize1} text-[7.3vw]  pr-2  `}>Every idea needs a  </a>
<a className={`${style.textsize} text-[7.3vw]  font-semibold `}>Medium.</a>
      </div>
    </div>
  )
}

export default LargeText
