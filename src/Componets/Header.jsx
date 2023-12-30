import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import logo1 from "./../assets/Images/logo.png"
import Headeritem from './Headeritem';
function Header() {
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
    return (
   <div className='flex items-center   justify-between p-5'>
    <div className='flex gap-8 items-center' >
    <img src={logo1} className='w-[80px] 
    md:w-[110px] object-cover' alt="disney+" />
    <div className='flex md:hidden gap-8'>
    {
        menu.map((item,index)=>index<3&&(
            <Headeritem name={item.name} Icon={item.icon}/>
        ))
    }
     <div className='md:hidden'>       
            <Headeritem name={''} Icon={HiDotsVertical} />
    </div>
    </div>
    <div className='hidden md:flex gap-8'>
    {
        menu.map((item)=>(
            <Headeritem name={item.name} Icon={item.icon}/>
        ))

    }
   
    </div>
    </div>
    <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className='w-[40px] rounded-full'/>
   </div> 
    );
  
}

export default Header