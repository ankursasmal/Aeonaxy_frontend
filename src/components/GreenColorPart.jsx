import React from 'react'
import style from './Style/GreenColorPart.module.css'
function GreenColorPart() {
  return (
    <div className='flex flex-col items-center bg-green-600 pt-8 '>
      <a className={`${style.textCenter} text-[7vw] pb-7 text-black `}> Get more with membership.</a>
      <a className={`${style.textCenter1} text-black `} > Become a Medium member to enjoy unlimited access and directly support
        the writers you read most.</a>
      <button className='text-white text-[1.2vw] border-white border-[1px] my-9 rounded-full self-center px-[2vw] py-[.7vw] '>See membership options</button>


    </div>

  )
}

export default GreenColorPart
