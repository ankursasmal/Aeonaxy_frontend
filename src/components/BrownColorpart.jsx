import React from 'react'
import style from './Style/BrownColorpart.module.css'
function BrownColorpart({t1,t2}) {
  return (
    <div className='flex flex-col items-center  mt-8'>
 <a className={`${style.textCenter} text-[5vw] pb-6` }>{t1}</a>
<a className={`${style.textCenter1}`} > {t2}</a>

 
        </div>
      
   )
}

export default BrownColorpart 

 