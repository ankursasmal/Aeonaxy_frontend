import React from 'react'
import style from './Style/Over100_Milion.module.css'
function Over100_Milion({t1,t2}) {
  return (
    <div className='flex flex-col bg-black '> 

    <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2   ">
   <div className='col-span-1 flex items-center justify-between '>
<a className='text-[8vw] p-4 my-7 ml-6  ' style={{ lineHeight:'8vw',color:'white',fontFamily: "Domine, serif !important"
}}>Over 100 million readers and growing.
</a>
<div className='font-bold bg-white h-[100%] w-[5px]'></div>

        </div> 
        <div className=' col-span-1 py-10  pl-5 pr-[10vw] flex flex-col sm:pl-[5vw]'>
            <div className='flex items-center'> 
                           <img src="https://img.freepik.com/premium-photo/casually-handsome-confident-young-handsome-man-jeans-shirt-keeping-arms-crossed-smiling-while-standing-against-white-background_425904-14571.jpg" alt=""  className='w-[13vw] h-[13vw] mr-3  rounded-full  '/>
                           <div  className={`${style.elips} h-[13vw] w-[7.5vw] bg-blue-600  h-30 rounded-full `}></div> 
                            <div  className={`${style.smallelips} h-[13vw] w-[3vw] bg-pink-300 h-30 rounded-full `}></div> 
                           </div>
<a className='py-9  text-white text-[1.8vw]'> "Medium is a great place to read and learn from a wide range of authors. It's not muddied up by ads.
It feels like one of the few pure places to go online."
</a>
<a className='text-white text-2xl'>Jackie Colburn</a>
        </div>
        <div className='font-bold bg-white w-[100vw] h-[.9px]'></div>
    
      </div>  

      <div className='flex flex-col items-center  mt-8'>
 <a className={`${style.textCenter} text-[8vw] pb-6 text-white` }>Create the space for your thinking to take off.</a>
<a className={`${style.textCenter1} text-white`} >A blank page is also a door. At Medium you can walk through it. It's easy and free to share your thinking on any topic, connect with an audience, express yourself with a range of publishing tools, and even earn money for
your work</a>

 
        </div>
      
<button className='text-green-500 border-green-400 border-[1px] text-[1.5vw] rounded-full self-center px-6 py-2 my-[3vw]'>Write on Medium</button>       
    </div>
  )
}

export default Over100_Milion
