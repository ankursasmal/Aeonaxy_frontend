import React from 'react'
import ProfileSmallPart from './ProfileSmallPart'
import style from './Style/Profile.module.css'
function Profile() {
  return (
  
    <div className='my-11'> 

<div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
      
      <div className='flex flex-col col-span-1sm:pl-0s md:pl-6 lg:pl-6'>
 <ProfileSmallPart/>
 <ProfileSmallPart/>
 <ProfileSmallPart/>
 <ProfileSmallPart/>
 <div className='font-bold bg-black w-[94%] h-[.7px] mt-3'></div>
 
      </div>
      <div className={` ${style.padding_property}flex flex-col col-span-1 `}>
      <ProfileSmallPart/>
 <ProfileSmallPart/>
 <ProfileSmallPart/>
 <ProfileSmallPart/>
 <div className={` ${style.padding_property}font-bold bg-black w-[94%] h-[.7px] mt-3`}></div>

      </div>
      <div className='flex flex-col col-span-1 sm:pl-[2vw]'>
      <ProfileSmallPart/>
 <ProfileSmallPart/>
 <ProfileSmallPart/>
 <ProfileSmallPart/>
 <div className='font-bold bg-black w-[94%] h-[.7px] mt-3 '></div>

</div>
      </div>
     </div>
  )
}

export default Profile
